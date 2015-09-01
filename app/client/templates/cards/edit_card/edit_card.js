Template.EditCard.events({
  'click .card-details > .modal-backdrop' : function(e, tmpl){
    Router.go("/");
  }
});

Template.EditCard.helpers({
  'card' : function(){
    return Cards.find({_id: this.params._id}).fetch();
  }
});

