import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import path from 'path';

import theme from '~/layout/theme';
import * as Templates from '~/templates';

const buildDir = path.resolve(__dirname, '../build');

const renderedTemplates = Object.keys(Templates).map((template) => {
  let source = ReactDOMServer.renderToString(Templates[template]());

  source = `<div id="root">${source}</div>`;

  return {
    name: template,
    source,
  };
});

const renderedTheme = ReactDOMServer.renderToString(theme());

if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir);
  fs.mkdirSync(path.resolve(buildDir, 'templates'));
  fs.mkdirSync(path.resolve(buildDir, 'layout'));
}

renderedTemplates.map(template => fs.writeFileSync(path.resolve(buildDir, 'templates', `${template.name.toLowerCase()}.liquid`), template.source));
fs.writeFileSync(path.resolve(buildDir, 'layout', 'theme.liquid'), renderedTheme);
