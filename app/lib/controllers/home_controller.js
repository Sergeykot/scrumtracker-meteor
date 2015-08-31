HomeController = RouteController.extend({
  layoutTemplate: "MasterLayout",
  
  subscriptions: function() {
    this.subscribe("lists");
    this.subscribe("cards");
  },
  
  action: function () {
    this.render();
  }
});
