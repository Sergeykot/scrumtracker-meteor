Account = new Mongo.Collection('account');

Account.current_id = function(){
  return Meteor.user().profile.accountId;
}

Account.current = function(){
  return Account.find({_id: Meteor.user().profile.account_id }).fetch();
}

if (Meteor.isServer) {
  Account.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Account.deny({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
