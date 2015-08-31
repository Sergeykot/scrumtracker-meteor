Meteor.publish('lists', function(){
  return Lists.find({}, {order: {createdAt: -1}});
});


Meteor.publish('list', function(id){
  return Lists.find({_id: id}, {order: {createdAt: -1}});
});

Meteor.publish('cards', function(){
  return Cards.find({}, {order: {createdAt: -1}});
});
