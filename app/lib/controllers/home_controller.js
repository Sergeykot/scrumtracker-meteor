HomeController = RouteController.extend({
  layoutTemplate: "MasterLayout",
  
  subscriptions: function() {
    this.subscribe("lists");
    this.subscribe("cards");
    this.subscribe("account_users");
  },
  
  action: function () {
    this.render();
  }
});
