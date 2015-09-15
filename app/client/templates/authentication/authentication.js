Template.Authentication.events({
  'submit #login-form' : function(e, t){
    e.preventDefault();
    
    Meteor.loginWithGithub({ requestPermissions: ['email', 'user:email', 'user', 'public_repo'] }, function (err) {
      if (err){
        console.log(err);
        Session.set('errorMessage', err.reason || 'Unknown error');
      }
    });
  }
});

Template.Authentication.helpers({
});

Template.Authentication.onCreated(function () {
});

Template.Authentication.onRendered(function () {
  particlesJS.load('particles-js', '/scripts/particles.json', function(){});
});

Template.Authentication.onDestroyed(function () {
});
