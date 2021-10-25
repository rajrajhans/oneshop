import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { relationship, text } from '@keystone-next/fields';
import 'dotenv/config';
import { isSignedIn, rules } from '../access';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'oneshop',
};

export const ProductImage = list({
  access: {
    create: isSignedIn,
    read: () => true,
    update: rules.canManageProduct,
    delete: rules.canManageProduct,
  },
  fields: {
    image: cloudinaryImage({ cloudinary, label: 'Source' }),
    altText: text(),
    product: relationship({ ref: 'Product.photo' }),
  },
  ui: {
    listView: { initialColumns: ['image', 'altText', 'product'] },
  },
});
