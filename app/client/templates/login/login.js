/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({
	'click #login_button': function(event)
	{
		event.preventDefault();
		var login_input = {
			'username' : $("#username").val(),
			'password' : $("#password").val(),
		}
		
		user = UsersInformation.findOne(login_input);
		//if user not found
		if(user == null){
			//clear login field
			document.getElementById('username').value = "";
			document.getElementById('password').value = "";
			alert("Invalid Username or Password");
		}
		//if user found
		else{
			Session.set('login_userID',user._id);
			Session.set('isLogin',true);
		}
	},
	'click #logout_button': function(event)
	{
		Session.set('login_userID',null);
		Session.set('isLogin',false);
	},
});

/*****************************************************************************/
/* Login: Helpers */
/*****************************************************************************/
Template.Login.helpers({
	isNotLogin : function () {
    	return !Session.get('isLogin');
    },
    getUserInfo : function () {
    	student = StudentInformation.findOne({"userID":Session.get("login_userID")});
    	return student;
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
