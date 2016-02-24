var AigisTemplateHelper = (function() {
  function AigisTemplateHelper() {
    this.options = options;
  }
  
  AigisTemplateHelper.prototype = {
    constructor: AigisTemplateHelper,
    
    renderCategoryTree: function(category, root) {
      root = root || './';
      var parseTree = require('./src/parse_tree');
      var renderTree = require('./src/render_tree');
      var tree = parseTree(category, root);
      var html = renderTree(tree, 0, root);
      return html;
    }
  };
  
  return AigisTemplateHelper;
})();

module.exports = function(options) {
  return new AigisTemplateHelper(options);
};
