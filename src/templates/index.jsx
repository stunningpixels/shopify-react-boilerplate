import React from 'react';

import imgShopify from '~/assets/images/shopify.jpg';
import Button from '~/components/Button';

const Index = () => (
  <div>
    <img src={imgShopify} alt="Shopify logo" />
    <Button text="Test Button" />
  </div>
);

export default Index;
