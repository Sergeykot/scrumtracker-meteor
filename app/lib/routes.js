Router.route('/login', function() {
  if (!!Meteor.userId()) {
    Router.go("/");
    this.next();
  }
  this.render("Authentication");
});

Router.route('/c/:_id', {
  name: 'edit_card',
  controller: 'CardsController',
  where: 'client',
  action: 'edit'
});

Router.route('/account', {
  name: 'account',
  controller: 'AccountController',
  where: 'client'
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
