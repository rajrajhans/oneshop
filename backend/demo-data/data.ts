function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const products = [
  {
    name: 'HP 22fw Ultra-Thin Full HD 21.5-inch IPS Monitor ',
    description:
      'Comes with VGA and HDMI Ports, AMD FreeSync(3KS61AA)  Be prepared for brilliant visuals and crisp images with the unforgettable quality of this stunning FHD display.  When the color on your display are indistinguishable from real life, the result is a beautifully vivid picture. With Technicolor Color Certification, color accuracy is assured every time.  Slim design and single connection gives you more room for an enhanced computing experience. ',
    status: 'AVAILABLE',
    price: 11000,
    photo: {
      id: '5e2a14cc689b2835ae71d1b9',
      filename: '71yYGgCG+hL._SX679_.jpg',
      originalFilename: '71yYGgCG+hL._SX679_.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'oneshop/611d31ecaabc4733646270cf',
        version: 1579816141,
        signature: '4f294ecb236c2092b0568f48bd23085c8e532e4a',
        width: 679,
        height: 510,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 50754,
        type: 'upload',
        etag: '44cf57f8218f135b82cfa5df0da92a49',
        placeholder: false,
        url: 'http://res.cloudinary.com/oneshopimages/image/upload/v1629303277/oneshop/611d31ecaabc4733646270cf.jpg',
        secure_url:
          'https://res.cloudinary.com/oneshopimages/image/upload/v1629303277/oneshop/611d31ecaabc4733646270cf.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:49:01.569Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:49:01.569Z',
    // createdAt_offset: '+00:00',
  },
];
