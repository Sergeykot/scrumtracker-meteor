Template.Account.events({
  'submit form[name="invite-users-form"]' : function(e, tmpl){
    e.preventDefault();
    userData = {
      name  : $(e.target).find('input[name=name]').val(),
      email : $(e.target).find('input[name=email]').val()
    }
    Session.set('sending-invite-email-in-progress', true);
    Meteor.call('sendInviteEmail', userData, function(error){
      Session.set('sending-invite-email-in-progress', undefined);
      if(error)
        console.log(error)
      else
        $('.modal').modal('hide');
    });
  }
});

Template.Account.helpers({
  'users' : function(){
    return Meteor.users.find().fetch();
  },

  'isCurrentUser' : function(id){
    return Meteor.userId() === id;
  },

  'isSendingInviteEmail' : function(){
    return !!Session.get('sending-invite-email-in-progress')
  }
});

Template.Account.onCreated(function () {
});

Template.Account.onRendered(function () {
});

Template.Account.onDestroyed(function () {
});
