Template.Card.events({
  'click .card' : function(e, tmpl){
    Router.go("/c/" + tmpl.data._id);
  }
});

Template.Card.helpers({
  'cardMembers' : function(){
    memberIds = Cards.findOne({_id: this._id}).memberIds || [];
    return Users.find({ _id: { $in: memberIds } });
  }
}); 
