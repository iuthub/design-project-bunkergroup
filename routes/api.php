<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('articles', 'ArticleController@index');
Route::get('articles/test', 'ArticleController@test');
Route::get('articles/{article}', 'ArticleController@show');
Route::post('articles', 'ArticleController@store');
Route::put('articles/{article}', 'ArticleController@update');
Route::delete('articles/{article}', 'ArticleController@delete');

Route::get('achievement', 'AchievementController@index');
Route::get('achievement/test', 'AchievementController@test');
Route::get('achievement/{id}', 'AchievementController@show');
Route::post('achievement', 'AchievementController@store');
Route::put('achievement/{id}', 'AchievementController@update');
Route::delete('achievement/{id}', 'AchievementController@delete');

Route::get('answer_point', 'Answer_pointController@index');
Route::get('answer_point/test', 'Answer_pointController@test');
Route::get('answer_point/{answer}', 'Answer_pointController@show');
Route::post('answer_point', 'Answer_pointController@store');
Route::put('answer_point/{answer}', 'Answer_pointController@update');
Route::delete('answer_point/{answer}', 'Answer_pointController@delete');

Route::get('answer', 'AnswerController@index');
Route::get('answer/test', 'AnswerController@test');
Route::get('answer/{id}', 'AnswerController@show');
Route::post('answer', 'AnswerController@store');
Route::put('answer/{id}', 'AnswerController@update');
Route::delete('answer/{id}', 'AnswerController@delete');

Route::get('book', 'BookController@index');
Route::get('book/test', 'BookController@test');
Route::get('book/{fs}', 'BookController@show');
Route::post('book', 'BookController@store');
Route::put('book/{fs}', 'BookController@update');
Route::delete('book/{fs}', 'BookController@delete');

Route::get('faqconnection', 'FaqconnectionController@index');
Route::get('faqconnection/test', 'FaqconnectionController@test');
Route::get('faqconnection/{id}', 'FaqconnectionController@show');
Route::post('faqconnection', 'FaqconnectionController@store');
Route::put('faqconnection/{id}', 'FaqconnectionController@update');
Route::delete('faqconnection/{id}', 'FaqconnectionController@delete');

Route::get('group_section', 'Group_sectionController@index');
Route::get('group_section/test', 'Group_sectionController@test');
Route::get('group_section/{id}', 'Group_sectionController@show');
Route::post('group_section', 'Group_sectionController@store');
Route::put('group_section/{id}', 'Group_sectionController@update');
Route::delete('group_section/{id}', 'Group_sectionController@delete');

Route::get('group', 'GroupController@index');
Route::get('group/test', 'GroupController@test');
Route::get('group/{id}', 'GroupController@show');
Route::post('group', 'GroupController@store');
Route::put('group/{id}', 'GroupController@update');
Route::delete('group/{id}', 'GroupController@delete');

Route::get('groups_per_section', 'Groups_per_sectionController@index');
Route::get('groups_per_section/test', 'Groups_per_sectionController@test');
Route::get('groups_per_section/{id}', 'Groups_per_sectionController@show');
Route::post('groups_per_section', 'Groups_per_sectionController@store');
Route::put('groups_per_section/{id}', 'Groups_per_sectionController@update');
Route::delete('groups_per_section/{id}', 'Groups_per_sectionController@delete');

Route::get('hibernate_sequence', 'Hibernate_sequenceController@index');
Route::get('hibernate_sequence/test', 'Hibernate_sequenceController@test');
Route::get('hibernate_sequence/{id}', 'Hibernate_sequenceController@show');
Route::post('hibernate_sequence', 'Hibernate_sequenceController@store');
Route::put('hibernate_sequence/{id}', 'Hibernate_sequenceController@update');
Route::delete('hibernate_sequence/{id}', 'Hibernate_sequenceController@delete');


Route::get('interest_category', 'Interest_categoryController@index');
Route::get('interest_category/test', 'Interest_categoryController@test');
Route::get('interest_category/{id}', 'Interest_categoryController@show');
Route::post('interest_category', 'Interest_categoryController@store');
Route::put('interest_category/{id}', 'Interest_categoryController@update');
Route::delete('interest_category/{id}', 'Interest_categoryController@delete');

Route::get('Interest', 'InterestController@index');
Route::get('Interest/test', 'InterestController@test');
Route::get('Interest/{id}', 'InterestController@show');
Route::post('Interest', 'InterestController@store');
Route::put('Interest/{id}', 'InterestController@update');
Route::delete('Interest/{id}', 'InterestController@delete');

Route::get('message', 'MessageController@index');
Route::get('message/test', 'MessageController@test');
Route::get('message/{id}', 'MessageController@show');
Route::post('message', 'MessageController@store');
Route::put('message/{id}', 'MessageController@update');
Route::delete('message/{id}', 'MessageController@delete');

Route::get('question_interest', 'question_interestController@index');
Route::get('question_interest/test', 'question_interestController@test');
Route::get('question_interest/{id}', 'question_interestController@show');
Route::post('question_interest', 'question_interestController@store');
Route::put('question_interest/{id}', 'question_interestController@update');
Route::delete('question_interest/{id}', 'question_interestController@delete');

Route::get('question_view', 'question_viewController@index');
Route::get('question_view/test', 'question_viewController@test');
Route::get('question_view/{id}', 'question_viewController@show');
Route::post('question_view', 'question_viewController@store');
Route::put('question_view/{id}', 'question_viewController@update');
Route::delete('question_view/{id}', 'question_viewController@delete');

Route::get('question', 'questionController@index');
Route::get('question/test', 'questionController@test');
Route::get('question/{id}', 'questionController@show');
Route::post('question', 'questionController@store');
Route::put('question/{id}', 'questionController@update');
Route::delete('question/{id}', 'questionController@delete');

Route::get('staff_type', 'staff_typeController@index');
Route::get('staff_type/test', 'staff_typeController@test');
Route::get('staff_type/{id}', 'staff_typeController@show');
Route::post('staff_type', 'staff_typeController@store');
Route::put('staff_type/{id}', 'staff_typeController@update');
Route::delete('staff_type/{id}', 'staff_typeController@delete');

Route::get('staff', 'StaffController@index');
Route::get('staff/test', 'StaffController@test');
Route::get('staff/{id}', 'StaffController@show');
Route::post('staff', 'StaffController@store');
Route::put('staff/{id}', 'StaffController@update');
Route::delete('staff/{id}', 'StaffController@delete');

Route::get('student_interest', 'Student_interestController@index');
Route::get('student_interest/test', 'Student_interestController@test');
Route::get('student_interest/{id}', 'Student_interestController@show');
Route::post('student_interest', 'Student_interestController@store');
Route::put('student_interest/{id}', 'Student_interestController@update');
Route::delete('student_interest/{id}', 'Student_interestController@delete');

Route::get('student_message', 'Student_messageController@index');
Route::get('student_message/test', 'Student_messageController@test');
Route::get('student_message/{id}', 'Student_message@show');
Route::post('student_message', 'Student_messageController@store');
Route::put('student_message/{id}', 'Student_messageController@update');
Route::delete('student_message/{id}', 'Student_messageController@delete');

Route::get('student_question_interest', 'student_question_interestController@index');
Route::get('student_question_interest/test', 'student_question_interestController@test');
Route::get('student_question_interest/{id}', 'student_question_interestController@show');
Route::post('student_question_interest', 'student_question_interestController@store');
Route::put('student_question_interest/{id}', 'student_question_interestController@update');
Route::delete('student_question_interest/{id}', 'student_question_interestController@delete');

Route::get('subject_professor', 'subject_professorController@index');
Route::get('subject_professor/test', 'subject_professorController@test');
Route::get('subject_professor/{id}', 'subject_professorController@show');
Route::post('subject_professor', 'subject_professorController@store');
Route::put('subject_professor/{id}', 'subject_professorController@update');
Route::delete('subject_professor/{id}', 'subject_professorController@delete');


Route::get('subject', 'subjectController@index');
Route::get('subject/test', 'subjectController@test');
Route::get('subject/{id}', 'subjectController@show');
Route::post('subject', 'subjectController@store');
Route::put('subject/{id}', 'subjectController@update');
Route::delete('subject/{id}', 'subjectController@delete');

Route::get('task_student', 'task_studentController@index');
Route::get('task_student/test', 'task_studentController@test');
Route::get('task_student/{id}', 'task_studentController@show');
Route::post('task_student', 'task_studentController@store');
Route::put('task_student/{id}', 'task_studentController@update');
Route::delete('task_student/{id}', 'task_studentController@delete');

Route::get('Task_type', 'task_typeController@index');
Route::get('Task_type/test', 'task_typeController@test');
Route::get('Task_type/{id}', 'task_typeController@show');
Route::post('Task_type', 'task_typeController@store');
Route::put('Task_type/{id}', 'task_typeController@update');
Route::delete('Task_type/{id}', 'task_typeController@delete');

Route::get('task', 'taskController@index');
Route::get('task/test', 'taskController@test');
Route::get('task/{id}', 'taskController@show');
Route::post('task', 'taskController@store');
Route::put('task/{id}', 'taskController@update');
Route::delete('task/{id}', 'taskController@delete');

Route::get('team_response_students', 'team_response_studentsController@index');
Route::get('team_response_students/test', 'team_response_studentsController@test');
Route::get('team_response_students/{id}', 'team_response_studentsController@show');
Route::post('team_response_students', 'team_response_studentsController@store');
Route::put('team_response_students/{id}', 'team_response_studentsController@update');
Route::delete('team_response_students/{id}', 'team_response_studentsController@delete');

Route::get('team', 'teamController@index');
Route::get('team/test', 'teamController@test');
Route::get('team/{id}', 'teamController@show');
Route::post('team', 'teamController@store');
Route::put('team/{id}', 'teamController@update');
Route::delete('team/{id}', 'teamController@delete');

Route::get('timetable', 'TimetableController@index');
Route::get('timetable/test', 'TimetableController@test');
Route::get('timetable/{id}', 'TimetableController@show');
Route::post('timetable', 'TimetableController@store');
Route::put('timetable/{id}', 'TimetableController@update');
Route::delete('timetable/{id}', 'TimetableController@delete');


Route::get('transfer', 'TransferController@index');
Route::get('transfer/test', 'TransferController@test');
Route::get('transfer/{id}', 'TransferController@show');
Route::post('transfer', 'TransferController@store');
Route::put('transfer/{id}', 'TransferController@update');
Route::delete('transfer/{id}', 'TransferController@delete');

Route::get('tutorial_video', 'tutorial_videoController@index');
Route::get('tutorial_video/test', 'tutorial_videoController@test');
Route::get('tutorial_video/{id}', 'tutorial_videoController@show');
Route::post('tutorial_video', 'tutorial_videoController@store');
Route::put('tutorial_video/{id}', 'tutorial_videoController@update');
Route::delete('tutorial_video/{id}', 'tutorial_videoController@delete');


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Student API

Route::get('student', 'StudentController@index');
Route::get('student/all', 'StudentController@showAll');
Route::post('student/login', 'StudentController@login');
Route::post('student', 'StudentController@store');
Route::put('student/{studentId}', 'StudentController@update');
Route::delete('student/{studentId}', 'StudentController@delete');

//group api

Route::post('group/byId', 'GroupController@getGroup');

//book api

Route::post('book/byFS','BookController@findByFS');

