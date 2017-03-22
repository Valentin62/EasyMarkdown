var marked = require('marked');

new Vue({
    el: '#editor',
    data: {
       input: "# Thank you for using our editor.",
       message: "Je suis un message !"
    },

    computed: {
        compiled: function (){
            return marked(this.input)
        }
    },
});