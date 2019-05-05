<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateTeamTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('team', function(Blueprint $table)
		{
			$table->bigInteger('team_id')->primary();
			$table->string('comment')->nullable();
			$table->integer('max_no_of_students');
			$table->string('title');
			$table->bigInteger('staff_staff_id')->nullable()->index('FKbjp2d5bbffyxwdcxm0f7d97lq');
			$table->bigInteger('student_request')->index('FKdjcxenn8o6ein0kony5gqpx90');
			$table->bigInteger('subject_subject_id')->nullable()->index('FKf1q4r0o9mneijdutvvt7mhpuo');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('team');
	}

}
