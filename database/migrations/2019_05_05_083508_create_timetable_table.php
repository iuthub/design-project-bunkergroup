<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateTimetableTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('timetable', function(Blueprint $table)
		{
			$table->bigInteger('timetable_id')->primary();
			$table->string('timetable');
			$table->bigInteger('group_group_id')->nullable()->index('FKfo342l3fqnnb2sdfp3vuwkbrp');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('timetable');
	}

}
