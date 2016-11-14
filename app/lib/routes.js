Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  where: 'client'
});

Router.route('/add_student_information', {
  name: 'addStudentInformation',
  where: 'client'
});

Router.route('/show_student_information', {
  name: 'showStudentInformation',
  where: 'client'
});

Router.route('/edit_student_information/:_id', {
  name: 'editStudentInformation',
  where: 'client'
});

Router.route('register', {
  name: 'register',
  controller: 'RegisterController',
  where: 'client'
});

Router.route('login', {
  name: 'login',
  controller: 'LoginController',
  where: 'client'
});

Router.route('admin/manage_university_info', {
  name: 'manageUniversityInfo',
  where: 'client'
});