/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'sendInviteEmail' : function(userData) {
    check(userData, { email: String, name: String });
    SSR.compileTemplate('InviteEmail', Assets.getText('emails/invite_email.html'));

    var emailTemplate = SSR.render('InviteEmail', {
      email: userData.email,
      name: userData.name !== "" ? userData.name : null,
      url: "http://localhost:3000"
    });
    return Email.send({
      to: userData.email,
      from: "ScrumTracker <noreply@scrumtracker.com>",
      subject: "You have been invited to ScrumTracker. Welcome aboard!",
      html: emailTemplate
    });
  }
});
