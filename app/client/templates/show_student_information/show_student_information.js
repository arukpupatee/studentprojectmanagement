/*****************************************************************************/
/* ShowStudentInformation: Event Handlers */
/*****************************************************************************/
Template.ShowStudentInformation.events({
	'click #delete_button': function(event)
	{
		event.preventDefault();
		var _id = event.target.value;
		var student = StudentInformation.findOne({_id});
        var users_information_id = student.userID;
		console.log("Remove "+student.name+" "+student.surname+" "+student.student_id+" "+student.phone_number+" "+student.email);
		console.log("delete "+_id);
		StudentInformation.remove(_id);
        UsersInformation.remove(users_information_id);

	},
	'click #edit_button': function(event) 
    {
        event.preventDefault();
        var _id = event.target.value;
        Router.go('/edit_student_information/'+ _id );
    },
    'keyup #search_name_box':function(event)
    {
    	event.preventDefault();
    	var search_name = event.target.value;
    	Session.set('SearchName', search_name);
    },
    'keyup #search_surname_box':function(event)
    {
        event.preventDefault();
        var search_surname = event.target.value;
        Session.set('SearchSurname', search_surname);
    },
    'keyup #search_student_id_box':function(event)
    {
        event.preventDefault();
        var search_student_id = event.target.value;
        Session.set('SearchStudentID', search_student_id);
    },
});

/*****************************************************************************/
/* ShowStudentInformation: Helpers */
/*****************************************************************************/
Template.ShowStudentInformation.helpers({
	getStudentInformation : function () {
		var search_name = Session.get('SearchName');
        var search_surname = Session.get('SearchSurname');
        var search_student_id = Session.get('SearchStudentID');
    	return StudentInformation.find({'name':{$regex:".*"+search_name+".*"},
                                        'surname':{$regex:".*"+search_surname+".*"},
                                        'student_id':{$regex:".*"+search_student_id+".*"}
                                        });
    },
});

/*****************************************************************************/
/* ShowStudentInformation: Lifecycle Hooks */
/*****************************************************************************/
Template.ShowStudentInformation.onCreated(function () {
	Session.setDefault('SearchName', "" );
    Session.setDefault('SearchSurname', "" );
    Session.setDefault('SearchStudentID', "" );
});

Template.ShowStudentInformation.onRendered(function () {
});

Template.ShowStudentInformation.onDestroyed(function () {
});
