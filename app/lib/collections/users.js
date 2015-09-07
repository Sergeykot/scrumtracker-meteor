Meteor.users.after.insert(function(userId, user){

  if(user.profile.role === "account_admin"){
    Account.update(user.profile.account_id, { 
      $set: { account_admin_id: user._id }
    });
  }
})
