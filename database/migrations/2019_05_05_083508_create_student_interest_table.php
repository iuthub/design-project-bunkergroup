<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateStudentInterestTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('student_interest', function(Blueprint $table)
		{
			$table->bigInteger('student_interest_id')->primary();
			$table->string('comment')->nullable();
			$table->bigInteger('interest_interest_id')->nullable()->index('FKr60ptyaa4khco8j3c0ydq1bek');
			$table->bigInteger('student_uuid')->nullable()->index('FKmhuwncimepy0drfdw4d3g22yx');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('student_interest');
	}

}
