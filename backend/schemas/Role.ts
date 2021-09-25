import { list } from '@keystone-next/keystone/schema';
import { relationship, text } from '@keystone-next/fields';

export const Role = list({
  fields: {
    name: text({ isRequired: true }),
    assignedTo: relationship({
      ref: 'User.role',
      many: true,
      ui: {
        itemView: { fieldMode: 'read' },
      },
    }),
  },
});

export default Role;
