Template.Navbar.helpers({
  'currentUserName' : function(tmpl){
    return  Meteor.user().profile.name;
  }
});

Template.Navbar.events({
  'click [data-logout]' : function(e, tmpl){
    Meteor.logout(function(){
      console.log("logged out")
    })
  }
});
