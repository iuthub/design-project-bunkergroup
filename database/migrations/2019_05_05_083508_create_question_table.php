<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateQuestionTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('question', function(Blueprint $table)
		{
			$table->bigInteger('question_id')->primary();
			$table->string('body');
			$table->string('title');
			$table->bigInteger('student_uuid')->nullable()->index('FKgk2qk0sp2llbgn9a1ocat8m50');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('question');
	}

}
