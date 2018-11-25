/* eslint func-names: 0 */
/* eslint array-callback-return: 0 */

const shopifyObjectRefs = require('./shopifyObjectRefs');

module.exports = function (source) {
  const replacements = [];
  Object.keys(shopifyObjectRefs).map((object) => {
    shopifyObjectRefs[object].map((name) => {
      replacements.push({
        search: `{{ ${object}.${name} }}`,
        replace: `\${window.shopifyRefStore.${object}.${name}}`,
      });
    });
  });

  let newSource = source;

  replacements.map((replacement) => {
    newSource = newSource.replace(new RegExp(replacement.search, 'g'), replacement.replace);
  });

  return newSource;
};
