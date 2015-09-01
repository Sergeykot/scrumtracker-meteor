Template.CardsListing.events({
});

Template.CardsListing.helpers({
  'cards' : function(list_id){
    return Cards.find({listId: list_id})
  }
}); 
