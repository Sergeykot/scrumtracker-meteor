Router.route('/login', function() {
  this.render("Authentication");
});

Router.route('/c/:_id', {
  name: 'edit_card',
  controller: 'CardsController',
  where: 'client',
  action: 'edit'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});


Router.onBeforeAction(function(){
  if (!Meteor.userId()) {
    Router.go("/login");
    this.next();
  } else {
    this.next();
  }
});
