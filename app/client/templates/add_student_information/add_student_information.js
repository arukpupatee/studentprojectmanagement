/*****************************************************************************/
/* AddStudentInformation: Event Handlers */
/*****************************************************************************/
Template.AddStudentInformation.events({
	'click #add_information_button': function(event)
	{
		event.preventDefault();
		console.log($('#name').val(),
                    $('#surname').val(),
                    /*gender.val(),*/
                    $('#student_id').val(),
                    $('#phone_number').val(),
                    $('#email').val(),
                    );
		var data ={
                'name': $('#name').val(),
                'surname': $('#surname').val(),
                /*'gender': gender.val(),*/
                'student_id': $('#student_id').val(),
                'phone_number': $('#phone_number').val(),
                'email': $('#email').val(),
        };
        StudentInformation.insert(data);
        Router.go('/show_student_information/');
	},
});

/*****************************************************************************/
/* AddStudentInformation: Helpers */
/*****************************************************************************/
Template.AddStudentInformation.helpers({
});

/*****************************************************************************/
/* AddStudentInformation: Lifecycle Hooks */
/*****************************************************************************/
Template.AddStudentInformation.onCreated(function () {
});

Template.AddStudentInformation.onRendered(function () {
});

Template.AddStudentInformation.onDestroyed(function () {
});
