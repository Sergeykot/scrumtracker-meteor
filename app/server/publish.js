Meteor.publish('lists', function(){
  return Lists.find({}, {order: {createdAt: -1}});
});

Meteor.publish('list', function(id){
  return Lists.find({_id: id}, {});
});

Meteor.publish('cards', function(){
  return Cards.find({}, {order: {createdAt: -1}});
});

Meteor.publish('card', function(id){
  return Cards.find({_id: id}, {});
});

Meteor.publish('current_account', function(id){
  //return Account.find({_id: Meteor.user().profile.account_id });
  account_id = Meteor.users.findOne(this.userId).profile.account_id;
  return Account.find({_id: account_id })
});

