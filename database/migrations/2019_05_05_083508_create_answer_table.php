<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAnswerTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('answer', function(Blueprint $table)
		{
			$table->bigInteger('answer_id')->primary();
			$table->string('body');
			$table->bigInteger('question_question_id')->nullable()->index('FK18uq50e5jbrutl3yum1ef2e4o');
			$table->bigInteger('student_uuid')->nullable()->index('FK45ltshprtfts1p74fo5xeso2x');
			$table->integer('points');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('answer');
	}

}
