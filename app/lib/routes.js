
Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/c/:_id', {
  name: 'edit_card',
  controller: 'CardsController',
  where: 'client',
  action: 'edit'
});
