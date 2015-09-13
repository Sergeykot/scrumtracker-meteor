Meteor.publish('lists', function(){
  return Lists.find({}, {order: {createdAt: -1}});
});

Meteor.publish('list', function(id){
  return Lists.find({_id: id}, {});
});

Meteor.publish('cards', function(){
  account_id = Users.findOne(this.userId).profile.accountId;
  return Cards.find({accountId: account_id}, {order: {createdAt: -1}});
});

Meteor.publish('card', function(id){
  return Cards.find({_id: id}, {});
});

Meteor.publish('current_account', function(){
  account_id = Meteor.users.findOne(this.userId).profile.accountId;
  return Account.find({_id: account_id });
});

Meteor.publish('account_users', function(){
  account_id = Users.findOne(this.userId).profile.accountId;
  return Meteor.users.find({'profile.accountId' :  account_id })
});
