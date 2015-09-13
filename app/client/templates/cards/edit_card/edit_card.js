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
    memberIds = card.memberIds || [];
    memberIds.push(userId);
    
    Cards.update(card._id, {
      $set: { memberIds: card.memberIds }
    });
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
    card = Cards.findOne({_id: this._id});
    return Users.find({ _id: { $in: card.memberIds } });
  }
});

