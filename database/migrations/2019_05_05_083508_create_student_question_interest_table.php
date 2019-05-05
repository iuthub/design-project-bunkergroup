<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateStudentQuestionInterestTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('student_question_interest', function(Blueprint $table)
		{
			$table->bigInteger('student_question_interest_id')->primary();
			$table->bigInteger('question_question_id')->nullable()->index('FKr02et08l7l20pic01nlqi6qrs');
			$table->bigInteger('student_message_student_message_id')->nullable()->index('FKraum2u5yulqsr41h1ttj6h4ab');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('student_question_interest');
	}

}
