
Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/surveys/:_id', {
  name: 'edit_survey',
  controller: 'SurveysController',
  where: 'client',
  action: 'edit'
});
