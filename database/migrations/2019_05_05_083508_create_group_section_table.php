<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateGroupSectionTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('group_section', function(Blueprint $table)
		{
			$table->bigInteger('group_section_id')->primary();
			$table->string('course_name')->nullable();
			$table->integer('section_number');
			$table->bigInteger('responsible_staff_staff_id')->nullable()->index('FKpm5qm86ir0854tcpveb3oypgx');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('group_section');
	}

}
