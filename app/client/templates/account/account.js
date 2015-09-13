Template.Account.events({
  'submit form[name="invite-users-form"]' : function(e, tmpl){
    e.preventDefault();
    userData = {
      name  : $(e.target).find('input[name=name]').val(),
      email : $(e.target).find('input[name=email]').val()
    }
    Session.set('sending-invite-email-in-progress', true);
    alreadyExists = !!Users.findOne({ 'profile.email' : userData.email });

    if(alreadyExists){
      sAlert.error('User with this email is already registered.', {timeout: '5000'});
      return false;
    }


    Meteor.call('sendInviteEmail', userData, function(error){
      Session.set('sending-invite-email-in-progress', undefined);
      if(error){
      }
      else
        Users.insert({
          createdAt: new Date(),
          invitation: {
            token: Random.id,
            activatedAt: null,
          },
          profile: {
            accountId: Account.current_id(), 
            email: userData.email,
            name: userData.name,
            role: 'account_member'
          }
        });
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

  'isNotActivated' : function(id){
    user = Users.findOne({_id: id});
    return user.invitation && user.invitation.activatedAt == null;
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
