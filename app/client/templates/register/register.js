/*****************************************************************************/
/* Register: Event Handlers */
/*****************************************************************************/
Template.Register.events({
	'submit form': function(event){
		event.preventDefault();
        var profile_data ={
                'prefix': $('#prefix').val(),
                'name': $('#name').val(),
                'surname': $('#surname').val(),
                'student_id': $('#student_id').val(),
                'phone_number': $('#phone_number').val(),
                'email': $('#email').val(),
        };
        StudentInformation.insert(profile_data);
        student_information_id = StudentInformation.findOne(profile_data)._id;

        user_data = {
                username: $('#student_id').val(),
                email: $('#email').val(),
                password: $('#password').val(),
                profile: {
                    "studentInformationID":student_information_id,
                },
        };

        Accounts.createUser(user_data);
        Router.go('/');
	},
});

/*****************************************************************************/
/* Register: Helpers */
/*****************************************************************************/
Template.Register.helpers({
});

/*****************************************************************************/
/* Register: Lifecycle Hooks */
/*****************************************************************************/
Template.Register.onCreated(function () {
});

Template.Register.onRendered(function () {
});

Template.Register.onDestroyed(function () {
});
