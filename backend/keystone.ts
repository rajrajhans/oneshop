import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schamas/User';
import { createAuth } from '@keystone-next/auth';
import {
  statelessSessions,
  withItemData,
} from '@keystone-next/keystone/session';

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
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      // TODO: add data seeding
    },
    lists: createSchema({
      // schema items
      User,
    }),
    ui: {
      isAccessAllowed: ({ session }) => session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), { User: `id` }),
  }),
);
