/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({
	'click #login_button': function(event)
	{
		event.preventDefault();
		var username = $("#username").val();
		var password = $("#password").val();
		Meteor.loginWithPassword(username,password);
	},
	'click #logout_button': function(event)
	{
		event.preventDefault();
		Meteor.logout();
	},
	'click #register_button': function(event)
	{
		event.preventDefault();
		Router.go('/register');
	},
});

/*****************************************************************************/
/* Login: Helpers */
/*****************************************************************************/
Template.Login.helpers({
	getUserInfo : function() {
		stundetInfoID = Meteor.user().profile.studentInformationID;
		return StudentInformation.findOne(stundetInfoID);
	},
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.onCreated(function () {
	Session.setDefault('isLogin', false );
	Session.setDefault('login_userID', null );
});

Template.Login.onRendered(function () {
});

Template.Login.onDestroyed(function () {
});
