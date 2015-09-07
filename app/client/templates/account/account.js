Template.Account.events({
});

Template.Account.helpers({
  'users' : function(){
    return Meteor.users.find().fetch();
  },

  'isCurrentUser' : function(id){
    return Meteor.userId() === id;
  }
});

/*****************************************************************************/
/* Account: Lifecycle Hooks */
/*****************************************************************************/
Template.Account.onCreated(function () {
});

Template.Account.onRendered(function () {
});

Template.Account.onDestroyed(function () {
});
