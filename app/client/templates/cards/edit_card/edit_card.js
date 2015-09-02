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
  }
});

Template.EditCard.helpers({
  'is_description_edit_shown' : function(){
    return Session.get("card-description-edit");
  }
});

