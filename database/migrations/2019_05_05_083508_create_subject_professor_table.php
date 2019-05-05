<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSubjectProfessorTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('subject_professor', function(Blueprint $table)
		{
			$table->bigInteger('subject_professor_id')->primary();
			$table->bigInteger('staff_staff_id')->nullable()->index('FKr2fhdaa3fwdpvgirwobpk83w8');
			$table->bigInteger('subject_subject_id')->nullable()->index('FKg6l628s5ahkjw0x3191atvxqv');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('subject_professor');
	}

}
