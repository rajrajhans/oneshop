import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schemas/User';
import { createAuth } from '@keystone-next/auth';
import {
  statelessSessions,
  withItemData,
} from '@keystone-next/keystone/session';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import { insertDemoData } from './demo-data';
import { extendGraphQlSchema } from './mutations';
import { CartItem } from './schemas/CartItem';
import { OrderItem } from './schemas/OrderItem';
import { Order } from './schemas/Order';
import Role from './schemas/Role';
import { permissionsList } from './schemas/fields';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-oneshop';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 30,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    //TODO: add initial roles here
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: true,
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      async onConnect(keystone) {
        console.log('Connected to the database');
        if (process.argv.includes('--demo-data')) {
          await insertDemoData(keystone);
        }
      },
    },
    lists: createSchema({
      // schema items
      User,
      Product,
      ProductImage,
      CartItem,
      OrderItem,
      Order,
      Role,
    }),
    extendGraphqlSchema: extendGraphQlSchema,
    ui: {
      isAccessAllowed: ({ session }) => true,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: `
      id 
      name 
      email 
      role {
        ${permissionsList.join(' ')}  
      }
      `,
    }),
  }),
);
