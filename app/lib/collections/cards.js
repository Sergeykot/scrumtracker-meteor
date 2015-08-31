Cards = new Mongo.Collection('cards');


if (Meteor.isServer) {
  Cards.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Cards.deny({
    remove: function (userId, doc) {
      return true;
    }
  });
}
