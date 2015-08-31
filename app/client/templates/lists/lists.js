Template.Lists.events({
  'click .create-list' : function(e, tmpl){
    e.preventDefault();
    newListTitle = "New List";

    Lists.insert({
      title: newListTitle,
      createdAt: new Date() 
    });
  }
});

Template.Lists.helpers({
  'lists' : function(){
    return Lists.find({}, {});
  }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Lists.onCreated(function () {
});

Template.Lists.onRendered(function () {
});

Template.Lists.onDestroyed(function () {
});
