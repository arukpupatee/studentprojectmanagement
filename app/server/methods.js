/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'server/method_name': function () {
    // server method logic
  },
  'server/users/delete_user': function (userID) {
  	Meteor.users.remove(userID);
  },
});
