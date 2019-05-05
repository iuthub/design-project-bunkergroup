<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateTaskStudentTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('task_student', function(Blueprint $table)
		{
			$table->bigInteger('task_student_id')->primary();
			$table->boolean('submitted', 1);
			$table->bigInteger('student_uuid')->nullable()->index('FKh7dkfjb69s035p47tfm7euorl');
			$table->bigInteger('task_task_id')->nullable()->index('FKh2d04aify3n2qlfpba9syg40s');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('task_student');
	}

}
