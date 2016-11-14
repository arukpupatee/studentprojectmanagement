/*****************************************************************************/
/* EditStudentInformation: Event Handlers */
/*****************************************************************************/
Template.EditStudentInformation.events({
	'click #save_button': function(event)
	{
		event.preventDefault();
		var _id = event.target.value;
		var data ={
                'prefix': $('#prefix').val(),
                'name': $('#name').val(),
                'surname': $('#surname').val(),
                'student_id': $('#student_id').val(),
                'phone_number': $('#phone_number').val(),
                'email': $('#email').val(),
        };
        StudentInformation.update(_id,{$set:data});
        Router.go('/show_student_information/');
	},
    'click #cancel_button': function(event)
    {
        event.preventDefault();
        Router.go('/show_student_information/');
    },
});

/*****************************************************************************/
/* EditStudentInformation: Helpers */
/*****************************************************************************/
Template.EditStudentInformation.helpers({
	getStudentInformation: function() 
	{
    	var selectedId = Session.get('EditId');
    	return StudentInformation.find(selectedId);
	}
});

/*****************************************************************************/
/* EditStudentInformation: Lifecycle Hooks */
/*****************************************************************************/
Template.EditStudentInformation.onCreated(function () {
	Session.setDefault('EditId', null );
});

Template.EditStudentInformation.onRendered(function () {
	var id = Router.current().params._id;
	Session.set('EditId', id);
	var getid = Session.get('EditId');
});

Template.EditStudentInformation.onDestroyed(function () {
});
