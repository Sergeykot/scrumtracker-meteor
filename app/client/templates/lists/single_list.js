
Template.SingleList.events({
  'click .list-wrapper .list .add-card' : function(e, tmpl){
    e.preventDefault();
    Session.set("new-card-for-list", tmpl.data._id);
  },

  'click .list-wrapper .list .close-add-card-form' : function(e, tmpl){
    e.preventDefault();
    Session.set("new-card-for-list", undefined);
  },

  'submit .add-card-form' : function(e, tmpl){
    e.preventDefault();
    input = $(e.target).find('textarea');
    
    Cards.insert({
      title: input.val(),
      createdAt: new Date(),
      listId: tmpl.data._id,
      memberIds: []
    });
    input.val("");
    $(e.target).find('.close-add-card-form').trigger('click');
  },

  'submit .list-wrapper .list form[name="title-form"]' : function(e, tmpl){
    e.preventDefault();
    input = $(e.target).find('input[type=text]');
    
    Lists.update(tmpl.data._id, {
      $set: {
        title: input.val()
      }
    });
    Session.set("show-title-form-for", undefined);
  },

  'click .list-title > strong' : function(e, tmpl){
    Session.set("show-title-form-for", tmpl.data._id);
  },

  'click .list-title .delete-list' : function(e, tmpl){
    e.preventDefault();
    if(confirm("Are you sure want to delete this list?")){
      Lists.remove(tmpl.data._id);
    }
  }
});

Template.SingleList.helpers({
  'is_new_card_form_shown' : function(id){
    return Session.get("new-card-for-list") == id;
  },

  'is_card_edit_title_form_is_shown' : function(id){
    return Session.get("show-title-form-for") == id;
  }
});

