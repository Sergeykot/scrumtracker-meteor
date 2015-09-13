Template.EditCard.events({
  'click .card-details .close-card-details' : function(e, tmpl){
    Router.go("/");
  },

  'click .card-details .edit-description' : function(e, tmpl){
    e.preventDefault();
    Session.set("card-description-edit", true);
  },

  'click .card-details .card-description-form .close' : function(e, tmpl){
    e.preventDefault();
    Session.set("card-description-edit", false);
  },

  'click .add-users-to-card ul > li > a' : function(e, tmpl){
    e.preventDefault();
    e.stopPropagation();

    userId = $(e.target).data('user-id');

    card = tmpl.data.card;
    updateCondition = (card.memberIds.indexOf(userId) >= 0) ? {$pull: { memberIds: userId }} : {$push: { memberIds: userId }};
    Cards.update({ _id: card._id }, updateCondition);
  }
});

Template.EditCard.helpers({
  'is_description_edit_shown' : function(){
    return Session.get("card-description-edit");
  },

  'users' : function(){
    return Meteor.users.find().fetch();
  },

  'cardMembers' : function(){
    memberIds = Cards.findOne({_id: this._id}).memberIds || [];
    return Users.find({ _id: { $in: memberIds } });
  },

  'alreadyAssigned' : function(){
    return card.memberIds.indexOf(this._id) >= 0;
  }
});

