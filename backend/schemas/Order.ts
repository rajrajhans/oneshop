import { list } from '@keystone-next/keystone/schema';
import { integer, relationship, text, virtual } from '@keystone-next/fields';

export const Order = list({
  // access:
  fields: {
    label: virtual({
      graphQLReturnType: 'String',
      resolver: (item) => {
        return `${item.total}`;
      },
    }),
    total: integer(),
    items: relationship({ ref: 'OrderItem.order', many: true }),
    user: relationship({ ref: 'User.orders' }),
    charge: text(),
  },
});
