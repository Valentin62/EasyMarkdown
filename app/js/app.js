var marked = require('marked');

new Vue({
     el: '#editor',
     data: {
          input: '# hello'
     },
     computed: {
          compiledMarkdown: function () {
               return marked(this.input)
          }
     }
})
