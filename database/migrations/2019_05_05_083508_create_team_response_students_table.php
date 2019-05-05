<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateTeamResponseStudentsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('team_response_students', function(Blueprint $table)
		{
			$table->bigInteger('team_res_student_id')->primary();
			$table->bigInteger('response_student_uuid')->nullable()->index('FKd81s0mf4n13ho04wjaahqaw6c');
			$table->bigInteger('team_team_id')->nullable()->index('FKsvgtra7e4sr4i2d8u72v6qd41');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('team_response_students');
	}

}
