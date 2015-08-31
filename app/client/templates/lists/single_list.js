
Template.SingleList.events({
  'click .list-wrapper .list .add-card' : function(e, tmpl){
    e.preventDefault();
    Session.set("new-card-for-list-" + tmpl.data._id, true);
  },

  'click .list-wrapper .list .close-add-card-form' : function(e, tmpl){
    e.preventDefault();
    Session.set("new-card-for-list-" + tmpl.data._id, false);
  },

  'submit .add-card-form' : function(e, tmpl){
    e.preventDefault();
    input = $(e.target).find('textarea');
    
    Cards.insert({
      title: input.val(),
      createdAt: new Date(),
      listId: tmpl.data._id
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
    input.trigger('blur')
  }
});

Template.SingleList.helpers({
  'is_new_card_form_shown' : function(id){
    return Session.get("new-card-for-list-" + id);
  }
});

