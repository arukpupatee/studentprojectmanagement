/*****************************************************************************/
/* ManageUniversityInfo: Event Handlers */
/*****************************************************************************/
Template.ManageUniversityInfo.events({
	'click #add_faculty_button': function(event)
	{
		event.preventDefault();
		var data ={
                'name': $('#faculty_input').val(),
                'english_name': $('#faculty_english_input').val(),
        };
        Faculties.insert(data);
	},
	'click #add_department_button': function(event)
	{
		event.preventDefault();
		var faculty_select = document.getElementById("faculty_select");
		if(faculty_select.selectedIndex == 0){
			alert('โปรดเลือกคณะที่ต้องการเพิ่มภาควิชา');
		}
		else{
			var faculty = Faculties.findOne(faculty_select.value);
			var data ={
                	'faculty_id': faculty._id,
                	'name': $('#department_input').val(),
                	'english_name': $('#department_english_input').val(),
                	'acronym': $('#department_acronym_input').val(),
        	};
        	Departments.insert(data);
        }
	},
	'click #add_field_of_study_button': function(event)
	{
		event.preventDefault();
		var department_select = document.getElementById("department_select");
		if(department_select.selectedIndex == 0){
			alert('โปรดเลือกภาควิชาที่ต้องการเพิ่มสาขาวิชา');
		}
		else{
			var department = Departments.findOne(department_select.value);
			
			var data ={
                	'department_id': department._id,
                	'name': $('#field_of_study_input').val(),
                	'english_name': $('#field_of_study_english_input').val(),
                	'program': document.getElementById("program_select").value,
                	'acronym': $('#field_of_study_acronym_input').val(),
                	'branch' : $('#branch_input').val(),
                	'branch_acronym' : $('#branch_acronym_input').val(),
        	};
        	FieldOfStudies.insert(data);
        }
	},
	'click #add_study_course_button': function(event)
	{
		event.preventDefault();
		var field_of_study_select = document.getElementById("field_of_study_select");
		if(field_of_study_select.selectedIndex == 0){
			alert('โปรดเลือกสาขาวิชาที่ต้องการเพิ่มหลักสูตร');
		}
		else{
			var field_of_study = FieldOfStudies.findOne(field_of_study_select.value);
			
			var data ={
                	'field_of_study_id': field_of_study._id,
                	'year': $('#course_year_input').val(),
                	'degree': document.getElementById("course_degree_select").value,
        	};
        	StudyCourses.insert(data);
        }
	},
	'change #faculty_select': function(event)
	{
		event.preventDefault();
		var faculty_select = document.getElementById("faculty_select");
		if(faculty_select.selectedIndex == 0){
			Session.set('faculty_id',null);
		}
		else{
			Session.set('faculty_id',faculty_select.value);
		}
		Session.set('department_id',null);
		Session.set('field_of_study_id',null);
		Session.set('study_course_id',null);
		document.getElementById("department_select").selectedIndex = 0;
		document.getElementById("field_of_study_select").selectedIndex = 0;
		document.getElementById("study_course_select").selectedIndex = 0;
	},
	'change #department_select': function(event)
	{
		event.preventDefault();
		var department_select = document.getElementById("department_select");
		if(department_select.selectedIndex == 0){
			Session.set('department_id',null);
		}
		else{
			Session.set('department_id',department_select.value);
		}
		Session.set('field_of_study_id',null);
		Session.set('study_course_id',null);
		document.getElementById("field_of_study_select").selectedIndex = 0;
		document.getElementById("study_course_select").selectedIndex = 0;
	},
	'change #field_of_study_select': function(event)
	{
		event.preventDefault();
		var field_of_study_select = document.getElementById("field_of_study_select");
		if(field_of_study_select.selectedIndex == 0){
			Session.set('field_of_study_id',null);
		}
		else{
			Session.set('field_of_study_id',field_of_study_select.value);
		}
		Session.set('study_course_id',null);
		document.getElementById("study_course_select").selectedIndex = 0;
	},
	'change #study_course_select': function(event)
	{
		event.preventDefault();
		var study_course_select = document.getElementById("study_course_select");
		if(study_course_select.selectedIndex == 0){
			Session.set('study_course_id',null);
		}
		else{
			Session.set('study_course_id',study_course_select.value);
		}
	},
	

});

/*****************************************************************************/
/* ManageUniversityInfo: Helpers */
/*****************************************************************************/
Template.ManageUniversityInfo.helpers({
	getFaculties : function () {
    	return Faculties.find({});
    },
    getDepartments : function () {
    	var faculty_id = Session.get('faculty_id');
    	return Departments.find({'faculty_id':faculty_id});
    },
    getFieldOfStudies : function () {
    	var department_id = Session.get('department_id');
    	return FieldOfStudies.find({'department_id':department_id});
    },
    isEP : function (program){
    	if(program == "แผนการเรียนสองภาษา (EP)"){
    		return true;
    	}
    	else{
    		return false;
    	}
    },
    getStudyCourses : function () {
    	var field_of_study_id = Session.get('field_of_study_id');
    	return StudyCourses.find({'field_of_study_id':field_of_study_id});
    },
    getSelectingStudyCourse : function () {
    	return StudyCourses.find(Session.get('study_course_id'));
    },
    getSelectingFieldOfStudy : function () {
    	return FieldOfStudies.find(Session.get('field_of_study_id'));
    }
});

/*****************************************************************************/
/* ManageUniversityInfo: Lifecycle Hooks */
/*****************************************************************************/
Template.ManageUniversityInfo.onCreated(function () {
	Session.setDefault('faculty_id', null );
	Session.setDefault('department_id', null );
	Session.setDefault('field_of_study_id', null );
	Session.setDefault('study_course_id', null );
});

Template.ManageUniversityInfo.onRendered(function () {
});

Template.ManageUniversityInfo.onDestroyed(function () {
});
