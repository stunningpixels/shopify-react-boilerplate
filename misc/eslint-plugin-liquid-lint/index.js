/* eslint-disable */

module.exports = {
  rules: {
    'force-template-literals-for-liquid': {
      create: function(context) {
        return {
          Literal(node) {
            if (/{{.*}}/.test(node.raw)) {
              context.report(node, 'Use Template Literals for Liquid variables');
            }
          }
        }
      }
    }
  }
}
