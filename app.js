var app = new Vue({
  el: '#app',
  data: {
    todos: [
    	'my first todo item',
    	'my second todo item',
    	'my third todo item',

    ],
    item: 'item'
  },

  methods: {
  	addTodo() {
  		this.todos.push(this.item)
  		this.item = '';
  	}
  }

})
 