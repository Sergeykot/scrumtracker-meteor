Template.Card.events({
  'click .card' : function(e, tmpl){
    Router.go("/c/" + tmpl.data._id);
  }
});

Template.Card.helpers({
}); 
