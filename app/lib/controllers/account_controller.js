AccountController = RouteController.extend({
  
  layoutTemplate: "MasterLayout",
  
  subscriptions: function() {
    this.subscribe("current_account");
    this.subscribe("account_users");
  },
  
  waitOn: function () {
  },
  
  
  data: function () {
  },
  
  // You can provide any of the hook options
  
  onRun: function () {
    this.next();
  },
  onRerun: function () {
    this.next();
  },
  onBeforeAction: function () {
    this.next();
  },
  
  
  action: function () {
    this.render();
  },
  onAfterAction: function () {
  },
  onStop: function () {
  }
});
