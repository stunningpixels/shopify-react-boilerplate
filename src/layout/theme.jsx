import React from 'react';

const Theme = () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      {`{{ content_for_header }}`}
      {`{{ "style.css" | asset_url | stylesheet_tag }}`}
    </head>
    <body>
      {`{{ content_for_layout }}`}
      {`{{ "template.js" | asset_url | script_tag }}`}
    </body>
  </html>
);

export default Theme;
