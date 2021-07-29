import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schamas/User';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-oneshop';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 30,
  secret: process.env.COOKIE_SECRET,
};

export default config({
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
    // TODO: add roles
    isAccessAllowed: () => true,
  },
  // TODO: add session values
});
