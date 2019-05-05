<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateStaffTypeTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('staff_type', function(Blueprint $table)
		{
			$table->bigInteger('staff_type_id')->primary();
			$table->string('staff_type_value')->nullable()->unique('UK_othuw99dqislrrke5631t7qo');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('staff_type');
	}

}
