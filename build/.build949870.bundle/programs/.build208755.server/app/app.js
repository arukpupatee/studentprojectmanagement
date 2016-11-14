var require = meteorInstall({"lib":{"collections":{"university_info":{"department.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/collections/university_info/department.js                                    //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
Department = new Mongo.Collection('department');                                    // 1
                                                                                    //
if (Meteor.isServer) {                                                              // 4
  Department.allow({                                                                // 5
    insert: function insert(userId, doc) {                                          // 6
      return true;                                                                  // 7
    },                                                                              // 8
                                                                                    //
    update: function update(userId, doc, fieldNames, modifier) {                    // 10
      return true;                                                                  // 11
    },                                                                              // 12
                                                                                    //
    remove: function remove(userId, doc) {                                          // 14
      return true;                                                                  // 15
    }                                                                               // 16
  });                                                                               // 5
                                                                                    //
  Department.deny({                                                                 // 19
    insert: function insert(userId, doc) {                                          // 20
      return false;                                                                 // 21
    },                                                                              // 22
                                                                                    //
    update: function update(userId, doc, fieldNames, modifier) {                    // 24
      return false;                                                                 // 25
    },                                                                              // 26
                                                                                    //
    remove: function remove(userId, doc) {                                          // 28
      return false;                                                                 // 29
    }                                                                               // 30
  });                                                                               // 19
}                                                                                   // 32
//////////////////////////////////////////////////////////////////////////////////////

},"faculty.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/collections/university_info/faculty.js                                       //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
Faculty = new Mongo.Collection('faculty');                                          // 1
                                                                                    //
if (Meteor.isServer) {                                                              // 4
  Faculty.allow({                                                                   // 5
    insert: function insert(userId, doc) {                                          // 6
      return true;                                                                  // 7
    },                                                                              // 8
                                                                                    //
    update: function update(userId, doc, fieldNames, modifier) {                    // 10
      return true;                                                                  // 11
    },                                                                              // 12
                                                                                    //
    remove: function remove(userId, doc) {                                          // 14
      return true;                                                                  // 15
    }                                                                               // 16
  });                                                                               // 5
                                                                                    //
  Faculty.deny({                                                                    // 19
    insert: function insert(userId, doc) {                                          // 20
      return false;                                                                 // 21
    },                                                                              // 22
                                                                                    //
    update: function update(userId, doc, fieldNames, modifier) {                    // 24
      return false;                                                                 // 25
    },                                                                              // 26
                                                                                    //
    remove: function remove(userId, doc) {                                          // 28
      return false;                                                                 // 29
    }                                                                               // 30
  });                                                                               // 19
}                                                                                   // 32
//////////////////////////////////////////////////////////////////////////////////////

},"field_of_study.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/collections/university_info/field_of_study.js                                //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
FieldOfStudy = new Mongo.Collection('field_of_study');                              // 1
                                                                                    //
if (Meteor.isServer) {                                                              // 4
  FieldOfStudy.allow({                                                              // 5
    insert: function insert(userId, doc) {                                          // 6
      return false;                                                                 // 7
    },                                                                              // 8
                                                                                    //
    update: function update(userId, doc, fieldNames, modifier) {                    // 10
      return false;                                                                 // 11
    },                                                                              // 12
                                                                                    //
    remove: function remove(userId, doc) {                                          // 14
      return false;                                                                 // 15
    }                                                                               // 16
  });                                                                               // 5
                                                                                    //
  FieldOfStudy.deny({                                                               // 19
    insert: function insert(userId, doc) {                                          // 20
      return true;                                                                  // 21
    },                                                                              // 22
                                                                                    //
    update: function update(userId, doc, fieldNames, modifier) {                    // 24
      return true;                                                                  // 25
    },                                                                              // 26
                                                                                    //
    remove: function remove(userId, doc) {                                          // 28
      return true;                                                                  // 29
    }                                                                               // 30
  });                                                                               // 19
}                                                                                   // 32
//////////////////////////////////////////////////////////////////////////////////////

},"study_course.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/collections/university_info/study_course.js                                  //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
StudyCourse = new Mongo.Collection('study_course');                                 // 1
                                                                                    //
if (Meteor.isServer) {                                                              // 4
  StudyCourse.allow({                                                               // 5
    insert: function insert(userId, doc) {                                          // 6
      return false;                                                                 // 7
    },                                                                              // 8
                                                                                    //
    update: function update(userId, doc, fieldNames, modifier) {                    // 10
      return false;                                                                 // 11
    },                                                                              // 12
                                                                                    //
    remove: function remove(userId, doc) {                                          // 14
      return false;                                                                 // 15
    }                                                                               // 16
  });                                                                               // 5
                                                                                    //
  StudyCourse.deny({                                                                // 19
    insert: function insert(userId, doc) {                                          // 20
      return true;                                                                  // 21
    },                                                                              // 22
                                                                                    //
    update: function update(userId, doc, fieldNames, modifier) {                    // 24
      return true;                                                                  // 25
    },                                                                              // 26
                                                                                    //
    remove: function remove(userId, doc) {                                          // 28
      return true;                                                                  // 29
    }                                                                               // 30
  });                                                                               // 19
}                                                                                   // 32
//////////////////////////////////////////////////////////////////////////////////////

},"study_section.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/collections/university_info/study_section.js                                 //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
StudySection = new Mongo.Collection('study_section');                               // 1
                                                                                    //
if (Meteor.isServer) {                                                              // 4
  StudySection.allow({                                                              // 5
    insert: function insert(userId, doc) {                                          // 6
      return false;                                                                 // 7
    },                                                                              // 8
                                                                                    //
    update: function update(userId, doc, fieldNames, modifier) {                    // 10
      return false;                                                                 // 11
    },                                                                              // 12
                                                                                    //
    remove: function remove(userId, doc) {                                          // 14
      return false;                                                                 // 15
    }                                                                               // 16
  });                                                                               // 5
                                                                                    //
  StudySection.deny({                                                               // 19
    insert: function insert(userId, doc) {                                          // 20
      return true;                                                                  // 21
    },                                                                              // 22
                                                                                    //
    update: function update(userId, doc, fieldNames, modifier) {                    // 24
      return true;                                                                  // 25
    },                                                                              // 26
                                                                                    //
    remove: function remove(userId, doc) {                                          // 28
      return true;                                                                  // 29
    }                                                                               // 30
  });                                                                               // 19
}                                                                                   // 32
//////////////////////////////////////////////////////////////////////////////////////

},"study_subject.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/collections/university_info/study_subject.js                                 //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
StudySubject = new Mongo.Collection('study_subject');                               // 1
                                                                                    //
if (Meteor.isServer) {                                                              // 4
  StudySubject.allow({                                                              // 5
    insert: function insert(userId, doc) {                                          // 6
      return false;                                                                 // 7
    },                                                                              // 8
                                                                                    //
    update: function update(userId, doc, fieldNames, modifier) {                    // 10
      return false;                                                                 // 11
    },                                                                              // 12
                                                                                    //
    remove: function remove(userId, doc) {                                          // 14
      return false;                                                                 // 15
    }                                                                               // 16
  });                                                                               // 5
                                                                                    //
  StudySubject.deny({                                                               // 19
    insert: function insert(userId, doc) {                                          // 20
      return true;                                                                  // 21
    },                                                                              // 22
                                                                                    //
    update: function update(userId, doc, fieldNames, modifier) {                    // 24
      return true;                                                                  // 25
    },                                                                              // 26
                                                                                    //
    remove: function remove(userId, doc) {                                          // 28
      return true;                                                                  // 29
    }                                                                               // 30
  });                                                                               // 19
}                                                                                   // 32
//////////////////////////////////////////////////////////////////////////////////////

}},"faculties.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/collections/faculties.js                                                     //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
Faculties = new Mongo.Collection('faculties');                                      // 1
                                                                                    //
if (Meteor.isServer) {                                                              // 4
  Faculties.allow({                                                                 // 5
    insert: function insert(userId, doc) {                                          // 6
      return true;                                                                  // 7
    },                                                                              // 8
                                                                                    //
    update: function update(userId, doc, fieldNames, modifier) {                    // 10
      return true;                                                                  // 11
    },                                                                              // 12
                                                                                    //
    remove: function remove(userId, doc) {                                          // 14
      return true;                                                                  // 15
    }                                                                               // 16
  });                                                                               // 5
                                                                                    //
  Faculties.deny({                                                                  // 19
    insert: function insert(userId, doc) {                                          // 20
      return false;                                                                 // 21
    },                                                                              // 22
                                                                                    //
    update: function update(userId, doc, fieldNames, modifier) {                    // 24
      return false;                                                                 // 25
    },                                                                              // 26
                                                                                    //
    remove: function remove(userId, doc) {                                          // 28
      return false;                                                                 // 29
    }                                                                               // 30
  });                                                                               // 19
}                                                                                   // 32
//////////////////////////////////////////////////////////////////////////////////////

},"student_information.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/collections/student_information.js                                           //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
StudentInformation = new Mongo.Collection('student_information');                   // 1
                                                                                    //
if (Meteor.isServer) {                                                              // 4
  StudentInformation.allow({                                                        // 5
    insert: function insert(userId, doc) {                                          // 6
      return true;                                                                  // 7
    },                                                                              // 8
                                                                                    //
    update: function update(userId, doc, fieldNames, modifier) {                    // 10
      return true;                                                                  // 11
    },                                                                              // 12
                                                                                    //
    remove: function remove(userId, doc) {                                          // 14
      return true;                                                                  // 15
    }                                                                               // 16
  });                                                                               // 5
                                                                                    //
  StudentInformation.deny({                                                         // 19
    insert: function insert(userId, doc) {                                          // 20
      return false;                                                                 // 21
    },                                                                              // 22
                                                                                    //
    update: function update(userId, doc, fieldNames, modifier) {                    // 24
      return false;                                                                 // 25
    },                                                                              // 26
                                                                                    //
    remove: function remove(userId, doc) {                                          // 28
      return false;                                                                 // 29
    }                                                                               // 30
  });                                                                               // 19
}                                                                                   // 32
//////////////////////////////////////////////////////////////////////////////////////

},"users_information.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/collections/users_information.js                                             //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
UsersInformation = new Mongo.Collection('users_information');                       // 1
                                                                                    //
if (Meteor.isServer) {                                                              // 4
  UsersInformation.allow({                                                          // 5
    insert: function insert(userId, doc) {                                          // 6
      return true;                                                                  // 7
    },                                                                              // 8
                                                                                    //
    update: function update(userId, doc, fieldNames, modifier) {                    // 10
      return true;                                                                  // 11
    },                                                                              // 12
                                                                                    //
    remove: function remove(userId, doc) {                                          // 14
      return true;                                                                  // 15
    }                                                                               // 16
  });                                                                               // 5
                                                                                    //
  UsersInformation.deny({                                                           // 19
    insert: function insert(userId, doc) {                                          // 20
      return false;                                                                 // 21
    },                                                                              // 22
                                                                                    //
    update: function update(userId, doc, fieldNames, modifier) {                    // 24
      return false;                                                                 // 25
    },                                                                              // 26
                                                                                    //
    remove: function remove(userId, doc) {                                          // 28
      return false;                                                                 // 29
    }                                                                               // 30
  });                                                                               // 19
}                                                                                   // 32
//////////////////////////////////////////////////////////////////////////////////////

}},"controllers":{"add_student_information_controller.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/controllers/add_student_information_controller.js                            //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
AddStudentInformationController = RouteController.extend({                          // 1
                                                                                    //
  // A place to put your subscriptions                                              //
  // this.subscribe('items');                                                       //
  // // add the subscription to the waitlist                                        //
  // this.subscribe('item', this.params._id).wait();                                //
                                                                                    //
  subscriptions: function subscriptions() {},                                       // 8
                                                                                    //
  // Subscriptions or other things we want to "wait" on. This also                  //
  // automatically uses the loading hook. That's the only difference between        //
  // this option and the subscriptions option above.                                //
  // return Meteor.subscribe('post', this.params._id);                              //
                                                                                    //
  waitOn: function waitOn() {},                                                     // 16
                                                                                    //
  // A data function that can be used to automatically set the data context for     //
  // our layout. This function can also be used by hooks and plugins. For           //
  // example, the "dataNotFound" plugin calls this function to see if it            //
  // returns a null value, and if so, renders the not found template.               //
  // return Posts.findOne({_id: this.params._id});                                  //
                                                                                    //
  data: function data() {},                                                         // 25
                                                                                    //
  // You can provide any of the hook options                                        //
                                                                                    //
  onRun: function onRun() {                                                         // 30
    this.next();                                                                    // 31
  },                                                                                // 32
  onRerun: function onRerun() {                                                     // 33
    this.next();                                                                    // 34
  },                                                                                // 35
  onBeforeAction: function onBeforeAction() {                                       // 36
    this.next();                                                                    // 37
  },                                                                                // 38
                                                                                    //
  // The same thing as providing a function as the second parameter. You can        //
  // also provide a string action name here which will be looked up on a Controller
  // when the route runs. More on Controllers later. Note, the action function      //
  // is optional. By default a route will render its template, layout and           //
  // regions automatically.                                                         //
  // Example:                                                                       //
  //  action: 'myActionFunction'                                                    //
                                                                                    //
  action: function action() {                                                       // 48
    this.render();                                                                  // 49
  },                                                                                // 50
  onAfterAction: function onAfterAction() {},                                       // 51
  onStop: function onStop() {}                                                      // 53
});                                                                                 // 1
//////////////////////////////////////////////////////////////////////////////////////

},"home_controller.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/controllers/home_controller.js                                               //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
HomeController = RouteController.extend({                                           // 1
                                                                                    //
  // A place to put your subscriptions                                              //
  // this.subscribe('items');                                                       //
  // // add the subscription to the waitlist                                        //
  // this.subscribe('item', this.params._id).wait();                                //
                                                                                    //
  subscriptions: function subscriptions() {},                                       // 8
                                                                                    //
  // Subscriptions or other things we want to "wait" on. This also                  //
  // automatically uses the loading hook. That's the only difference between        //
  // this option and the subscriptions option above.                                //
  // return Meteor.subscribe('post', this.params._id);                              //
                                                                                    //
  waitOn: function waitOn() {},                                                     // 16
                                                                                    //
  // A data function that can be used to automatically set the data context for     //
  // our layout. This function can also be used by hooks and plugins. For           //
  // example, the "dataNotFound" plugin calls this function to see if it            //
  // returns a null value, and if so, renders the not found template.               //
  // return Posts.findOne({_id: this.params._id});                                  //
                                                                                    //
  data: function data() {},                                                         // 25
                                                                                    //
  // You can provide any of the hook options                                        //
                                                                                    //
  onRun: function onRun() {                                                         // 30
    this.next();                                                                    // 31
  },                                                                                // 32
  onRerun: function onRerun() {                                                     // 33
    this.next();                                                                    // 34
  },                                                                                // 35
  onBeforeAction: function onBeforeAction() {                                       // 36
    this.next();                                                                    // 37
  },                                                                                // 38
                                                                                    //
  // The same thing as providing a function as the second parameter. You can        //
  // also provide a string action name here which will be looked up on a Controller
  // when the route runs. More on Controllers later. Note, the action function      //
  // is optional. By default a route will render its template, layout and           //
  // regions automatically.                                                         //
  // Example:                                                                       //
  //  action: 'myActionFunction'                                                    //
                                                                                    //
  action: function action() {                                                       // 48
    this.render();                                                                  // 49
  },                                                                                // 50
  onAfterAction: function onAfterAction() {},                                       // 51
  onStop: function onStop() {}                                                      // 53
});                                                                                 // 1
//////////////////////////////////////////////////////////////////////////////////////

},"login_controller.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/controllers/login_controller.js                                              //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
LoginController = RouteController.extend({                                          // 1
                                                                                    //
  // A place to put your subscriptions                                              //
  // this.subscribe('items');                                                       //
  // // add the subscription to the waitlist                                        //
  // this.subscribe('item', this.params._id).wait();                                //
                                                                                    //
  subscriptions: function subscriptions() {},                                       // 8
                                                                                    //
  // Subscriptions or other things we want to "wait" on. This also                  //
  // automatically uses the loading hook. That's the only difference between        //
  // this option and the subscriptions option above.                                //
  // return Meteor.subscribe('post', this.params._id);                              //
                                                                                    //
  waitOn: function waitOn() {},                                                     // 16
                                                                                    //
  // A data function that can be used to automatically set the data context for     //
  // our layout. This function can also be used by hooks and plugins. For           //
  // example, the "dataNotFound" plugin calls this function to see if it            //
  // returns a null value, and if so, renders the not found template.               //
  // return Posts.findOne({_id: this.params._id});                                  //
                                                                                    //
  data: function data() {},                                                         // 25
                                                                                    //
  // You can provide any of the hook options                                        //
                                                                                    //
  onRun: function onRun() {                                                         // 30
    this.next();                                                                    // 31
  },                                                                                // 32
  onRerun: function onRerun() {                                                     // 33
    this.next();                                                                    // 34
  },                                                                                // 35
  onBeforeAction: function onBeforeAction() {                                       // 36
    this.next();                                                                    // 37
  },                                                                                // 38
                                                                                    //
  // The same thing as providing a function as the second parameter. You can        //
  // also provide a string action name here which will be looked up on a Controller
  // when the route runs. More on Controllers later. Note, the action function      //
  // is optional. By default a route will render its template, layout and           //
  // regions automatically.                                                         //
  // Example:                                                                       //
  //  action: 'myActionFunction'                                                    //
                                                                                    //
  action: function action() {                                                       // 48
    this.render();                                                                  // 49
  },                                                                                // 50
  onAfterAction: function onAfterAction() {},                                       // 51
  onStop: function onStop() {}                                                      // 53
});                                                                                 // 1
//////////////////////////////////////////////////////////////////////////////////////

},"manage_university_info_controller.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/controllers/manage_university_info_controller.js                             //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
ManageUniversityInfoController = RouteController.extend({                           // 1
                                                                                    //
  // A place to put your subscriptions                                              //
  // this.subscribe('items');                                                       //
  // // add the subscription to the waitlist                                        //
  // this.subscribe('item', this.params._id).wait();                                //
                                                                                    //
  subscriptions: function subscriptions() {},                                       // 8
                                                                                    //
  // Subscriptions or other things we want to "wait" on. This also                  //
  // automatically uses the loading hook. That's the only difference between        //
  // this option and the subscriptions option above.                                //
  // return Meteor.subscribe('post', this.params._id);                              //
                                                                                    //
  waitOn: function waitOn() {},                                                     // 16
                                                                                    //
  // A data function that can be used to automatically set the data context for     //
  // our layout. This function can also be used by hooks and plugins. For           //
  // example, the "dataNotFound" plugin calls this function to see if it            //
  // returns a null value, and if so, renders the not found template.               //
  // return Posts.findOne({_id: this.params._id});                                  //
                                                                                    //
  data: function data() {},                                                         // 25
                                                                                    //
  // You can provide any of the hook options                                        //
                                                                                    //
  onRun: function onRun() {                                                         // 30
    this.next();                                                                    // 31
  },                                                                                // 32
  onRerun: function onRerun() {                                                     // 33
    this.next();                                                                    // 34
  },                                                                                // 35
  onBeforeAction: function onBeforeAction() {                                       // 36
    this.next();                                                                    // 37
  },                                                                                // 38
                                                                                    //
  // The same thing as providing a function as the second parameter. You can        //
  // also provide a string action name here which will be looked up on a Controller
  // when the route runs. More on Controllers later. Note, the action function      //
  // is optional. By default a route will render its template, layout and           //
  // regions automatically.                                                         //
  // Example:                                                                       //
  //  action: 'myActionFunction'                                                    //
                                                                                    //
  action: function action() {                                                       // 48
    this.render();                                                                  // 49
  },                                                                                // 50
  onAfterAction: function onAfterAction() {},                                       // 51
  onStop: function onStop() {}                                                      // 53
});                                                                                 // 1
//////////////////////////////////////////////////////////////////////////////////////

},"register_controller.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/controllers/register_controller.js                                           //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
RegisterController = RouteController.extend({                                       // 1
                                                                                    //
  // A place to put your subscriptions                                              //
  // this.subscribe('items');                                                       //
  // // add the subscription to the waitlist                                        //
  // this.subscribe('item', this.params._id).wait();                                //
                                                                                    //
  subscriptions: function subscriptions() {},                                       // 8
                                                                                    //
  // Subscriptions or other things we want to "wait" on. This also                  //
  // automatically uses the loading hook. That's the only difference between        //
  // this option and the subscriptions option above.                                //
  // return Meteor.subscribe('post', this.params._id);                              //
                                                                                    //
  waitOn: function waitOn() {},                                                     // 16
                                                                                    //
  // A data function that can be used to automatically set the data context for     //
  // our layout. This function can also be used by hooks and plugins. For           //
  // example, the "dataNotFound" plugin calls this function to see if it            //
  // returns a null value, and if so, renders the not found template.               //
  // return Posts.findOne({_id: this.params._id});                                  //
                                                                                    //
  data: function data() {},                                                         // 25
                                                                                    //
  // You can provide any of the hook options                                        //
                                                                                    //
  onRun: function onRun() {                                                         // 30
    this.next();                                                                    // 31
  },                                                                                // 32
  onRerun: function onRerun() {                                                     // 33
    this.next();                                                                    // 34
  },                                                                                // 35
  onBeforeAction: function onBeforeAction() {                                       // 36
    this.next();                                                                    // 37
  },                                                                                // 38
                                                                                    //
  // The same thing as providing a function as the second parameter. You can        //
  // also provide a string action name here which will be looked up on a Controller
  // when the route runs. More on Controllers later. Note, the action function      //
  // is optional. By default a route will render its template, layout and           //
  // regions automatically.                                                         //
  // Example:                                                                       //
  //  action: 'myActionFunction'                                                    //
                                                                                    //
  action: function action() {                                                       // 48
    this.render();                                                                  // 49
  },                                                                                // 50
  onAfterAction: function onAfterAction() {},                                       // 51
  onStop: function onStop() {}                                                      // 53
});                                                                                 // 1
//////////////////////////////////////////////////////////////////////////////////////

},"show_student_information_controller.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/controllers/show_student_information_controller.js                           //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
ShowStudentInformationController = RouteController.extend({                         // 1
                                                                                    //
  // A place to put your subscriptions                                              //
  // this.subscribe('items');                                                       //
  // // add the subscription to the waitlist                                        //
  // this.subscribe('item', this.params._id).wait();                                //
                                                                                    //
  subscriptions: function subscriptions() {},                                       // 8
                                                                                    //
  // Subscriptions or other things we want to "wait" on. This also                  //
  // automatically uses the loading hook. That's the only difference between        //
  // this option and the subscriptions option above.                                //
  // return Meteor.subscribe('post', this.params._id);                              //
                                                                                    //
  waitOn: function waitOn() {},                                                     // 16
                                                                                    //
  // A data function that can be used to automatically set the data context for     //
  // our layout. This function can also be used by hooks and plugins. For           //
  // example, the "dataNotFound" plugin calls this function to see if it            //
  // returns a null value, and if so, renders the not found template.               //
  // return Posts.findOne({_id: this.params._id});                                  //
                                                                                    //
  data: function data() {},                                                         // 25
                                                                                    //
  // You can provide any of the hook options                                        //
                                                                                    //
  onRun: function onRun() {                                                         // 30
    this.next();                                                                    // 31
  },                                                                                // 32
  onRerun: function onRerun() {                                                     // 33
    this.next();                                                                    // 34
  },                                                                                // 35
  onBeforeAction: function onBeforeAction() {                                       // 36
    this.next();                                                                    // 37
  },                                                                                // 38
                                                                                    //
  // The same thing as providing a function as the second parameter. You can        //
  // also provide a string action name here which will be looked up on a Controller
  // when the route runs. More on Controllers later. Note, the action function      //
  // is optional. By default a route will render its template, layout and           //
  // regions automatically.                                                         //
  // Example:                                                                       //
  //  action: 'myActionFunction'                                                    //
                                                                                    //
  action: function action() {                                                       // 48
    this.render();                                                                  // 49
  },                                                                                // 50
  onAfterAction: function onAfterAction() {},                                       // 51
  onStop: function onStop() {}                                                      // 53
});                                                                                 // 1
//////////////////////////////////////////////////////////////////////////////////////

}},"methods.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/methods.js                                                                   //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
/*****************************************************************************/     //
/*  Client and Server Methods */                                                    //
/*****************************************************************************/     //
                                                                                    //
Meteor.methods({                                                                    // 5
  'lib/method_name': function libMethod_name() {                                    // 6
                                                                                    //
    if (this.isSimulation) {}                                                       // 8
    //   // do some client stuff while waiting for                                  //
    //   // result from server.                                                     //
    //   return;                                                                    //
                                                                                    //
    // server method logic                                                          //
  }                                                                                 // 14
});                                                                                 // 5
//////////////////////////////////////////////////////////////////////////////////////

},"routes.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/routes.js                                                                    //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
Router.configure({                                                                  // 1
  layoutTemplate: 'MasterLayout',                                                   // 2
  loadingTemplate: 'Loading',                                                       // 3
  notFoundTemplate: 'NotFound'                                                      // 4
});                                                                                 // 1
                                                                                    //
Router.route('/', {                                                                 // 8
  name: 'home',                                                                     // 9
  where: 'client'                                                                   // 10
});                                                                                 // 8
                                                                                    //
Router.route('/add_student_information', {                                          // 13
  name: 'addStudentInformation',                                                    // 14
  where: 'client'                                                                   // 15
});                                                                                 // 13
                                                                                    //
Router.route('/show_student_information', {                                         // 18
  name: 'showStudentInformation',                                                   // 19
  where: 'client'                                                                   // 20
});                                                                                 // 18
                                                                                    //
Router.route('/edit_student_information/:_id', {                                    // 23
  name: 'editStudentInformation',                                                   // 24
  where: 'client'                                                                   // 25
});                                                                                 // 23
                                                                                    //
Router.route('register', {                                                          // 28
  name: 'register',                                                                 // 29
  controller: 'RegisterController',                                                 // 30
  where: 'client'                                                                   // 31
});                                                                                 // 28
                                                                                    //
Router.route('login', {                                                             // 34
  name: 'login',                                                                    // 35
  controller: 'LoginController',                                                    // 36
  where: 'client'                                                                   // 37
});                                                                                 // 34
                                                                                    //
Router.route('admin/manage_university_info', {                                      // 40
  name: 'manageUniversityInfo',                                                     // 41
  where: 'client'                                                                   // 42
});                                                                                 // 40
//////////////////////////////////////////////////////////////////////////////////////

}},"server":{"bootstrap.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// server/bootstrap.js                                                              //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
Meteor.startup(function () {});                                                     // 1
//////////////////////////////////////////////////////////////////////////////////////

},"methods.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// server/methods.js                                                                //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
/*****************************************************************************/     //
/*  Server Methods */                                                               //
/*****************************************************************************/     //
                                                                                    //
Meteor.methods({                                                                    // 5
  'server/method_name': function serverMethod_name() {                              // 6
    // server method logic                                                          //
  },                                                                                // 8
  'server/users/delete_user': function serverUsersDelete_user(userID) {             // 9
    Meteor.users.remove(userID);                                                    // 10
  }                                                                                 // 11
});                                                                                 // 5
//////////////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// server/publish.js                                                                //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
                                                                                    //
//////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/meteor",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// server/main.js                                                                   //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});         // 1
                                                                                    //
Meteor.startup(function () {                                                        // 3
  // code to run on server at startup                                               //
});                                                                                 // 5
//////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./lib/collections/university_info/department.js");
require("./lib/collections/university_info/faculty.js");
require("./lib/collections/university_info/field_of_study.js");
require("./lib/collections/university_info/study_course.js");
require("./lib/collections/university_info/study_section.js");
require("./lib/collections/university_info/study_subject.js");
require("./lib/collections/faculties.js");
require("./lib/collections/student_information.js");
require("./lib/collections/users_information.js");
require("./lib/controllers/add_student_information_controller.js");
require("./lib/controllers/home_controller.js");
require("./lib/controllers/login_controller.js");
require("./lib/controllers/manage_university_info_controller.js");
require("./lib/controllers/register_controller.js");
require("./lib/controllers/show_student_information_controller.js");
require("./lib/methods.js");
require("./lib/routes.js");
require("./server/bootstrap.js");
require("./server/methods.js");
require("./server/publish.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
