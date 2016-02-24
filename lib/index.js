var AigisTemplateHelper = (function() {
  function AigisTemplateHelper(options) {
    this.options = options;
    this.root = './';
    this.category = [];
  }
  
  AigisTemplateHelper.prototype = {
    constructor: AigisTemplateHelper,
    
    setProperty: function(params) {
      _.each(params, function(vaule, key) {
        this[key] = value;
      }.bind(this));
    },
    
    renderCategoryTree: function() {
      var parseTree = require('./src/parse_tree');
      var renderTree = require('./src/render_tree');
      var tree = parseTree(this.category, this.root);
      var html = renderTree(this.tree, 0, this.root);
      return html;
    }
  };
  
  return AigisTemplateHelper;
})();

module.exports = function(options) {
  return new AigisTemplateHelper(options);
};
