import React from 'react';

import imgShopify from '~/assets/images/shopify.jpg';
import Button from '~/components/Button';

const Index = () => (
  <div>
    <img src={imgShopify} alt="Shopify logo" />
    <Button text={`{{ shop.email }}`} />
  </div>
);

Index.shopifyObjects = [
  'shop',
];

export default Index;
