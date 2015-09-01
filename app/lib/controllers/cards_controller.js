CardsController = RouteController.extend({
  layoutTemplate: "MasterLayout",
  
  subscriptions: function() {
    this.subscribe("lists");
    this.subscribe("cards");
    this.subscribe("card");
  },
  
  edit: function () {
    card = Cards.find({_id: this.params._id}).fetch();

    this.render('EditCard', {
      data: function(){ return card; }
    });
  },

  onRun: function(){
    console.log("ffdf");
    $('.modal').modal('show');
    this.next();
  }
});
