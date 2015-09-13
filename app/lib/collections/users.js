Users = Meteor.users;

Users.after.insert(function(userId, user){

  if(user.profile.role === "account_admin"){
    Account.update(user.profile.accountId, { 
      $set: { accountAdminId: user._id }
    });
  }
});


if (Meteor.isServer) {
  userIsAccountAdmin = function(userId){
    return Users.findOne({_id: userId}).profile.role === "account_admin"
  };

  Users.allow({
    insert: function (userId, doc) {
      return userIsAccountAdmin(userId);
    },

    update: function (userId, doc, fieldNames, modifier) {
      return userIsAccountAdmin(userId);
    },

    remove: function (userId, doc) {
      return userIsAccountAdmin(userId);
    }
  });
}
