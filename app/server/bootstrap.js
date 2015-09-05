Meteor.startup(function () { 
  ServiceConfiguration.configurations.upsert(
    { service: 'meteor-developer' },
    {
      $set: {
        clientId: process.env["ACCOUNTS_GITHUB_ID"],
        secret: process.env["ACCOUNTS_GITHUB_SECRET"],
        loginStyle: 'popup'
      }
    }
  );
});
