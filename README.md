<p align="center">
  <a href="https://examsecure.rajrajhans.com">
    <img alt="OneShop" src="docs/logo.png" width="55"/>
  </a>
</p>

<h1 align="center">
  oneshop
</h1>

<h4 align="center">
  Simple ecommerce webapp built using NextJS, Keystone, Apollo, GraphQL 
</h4>

### Tools & Technologies Used 
- **NextJS**
  - Used as a fullstack React framework for server side rendering and static generation, among other things.
  - Used Vercel to deploy the Next app.
- **KeystoneJS**
  - Used as a Headless CMS that exposes a GraphQL API and provides a UI for creating, updating, and deleting content (in our case, products).
  - Used MongoDB as the supporting database for Keystone. 
- **Cloudinary**
  - Used for Image Hosting. Users can upload images of products which get hosted on Cloudinary through Keystone. 
  - I've earlier [used AWS S3 with Lambda and Cloudfront for image pipeline](https://rajrajhans.com/2021/05/auto-resize-s3-using-lambda-triggers/s). Setting up Cloudinary was quite breeze compared to that.
- **Styled Components**
  - All the styles are done using Styled Components and plain old CSS.
- **Apollo GraphQL**