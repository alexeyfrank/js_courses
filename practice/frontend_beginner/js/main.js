function tpl(string) {
  return function(data) {
    return Mustache.render(string, data);
  }
}

var App = {
  Model: {},
  View: {},

  run: function(todoListElement) {
    Backbone.history.start();

    var collection = new App.Model.TodoCollection();
    var todoListView = new App.View.TodoList({ el: todoListElement, model: collection });
  }
};

App.Model.TodoItem = Backbone.Model.extend({
});

App.Model.TodoCollection = Backbone.Collection.extend({
});

App.View.TodoList = Backbone.View.extend({

});

App.View.TodoItem = Backbone.View.extend({

});

var todoListElement = $('#todo-app');
App.run(todoListElement);
