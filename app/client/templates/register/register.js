/*****************************************************************************/
/* Register: Event Handlers */
/*****************************************************************************/
Template.Register.events({
	'submit form': function(event){
		event.preventDefault();
		console.log($('#name').val(),
                    $('#surname').val(),
                    /*gender.val(),*/
                    $('#student_id').val(),
                    $('#phone_number').val(),
                    $('#email').val(),
                    $('#password').val(),
                    );
        var user_data ={
                'username': $('#student_id').val(),
                'password': $('#password').val(),
        };

        

        UsersInformation.insert(user_data);
        user_id = UsersInformation.findOne(user_data)._id;

		var profile_data ={
                'name': $('#name').val(),
                'surname': $('#surname').val(),
                /*'gender': gender.val(),*/
                'student_id': $('#student_id').val(),
                'phone_number': $('#phone_number').val(),
                'email': $('#email').val(),
                'userID': user_id,
        };
        StudentInformation.insert(profile_data);
        student_information_id = StudentInformation.findOne(profile_data)._id;

        UsersInformation.update(user_id,{$set:{'studentInformationID':student_information_id}});

        console.log("Finish Regis");
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
