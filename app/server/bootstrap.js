Meteor.startup(function () {
  smtp = {
    username: 'pashka4281@gmail.com',
    password: 'rXDOh5ov9GfYC9pDnkUIuA',
    server:   'smtp.mandrillapp.com',
    port: 587
  };
    
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

});

ServiceConfiguration.configurations.upsert(
  { service: 'github' },
  {
    $set: {
      clientId: Meteor.settings.accounts_github_id,
      secret: Meteor.settings.accounts_github_secret,
      loginStyle: 'popup'
    }
  }
);
