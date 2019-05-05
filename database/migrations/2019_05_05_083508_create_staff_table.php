<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateStaffTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('staff', function(Blueprint $table)
		{
			$table->bigInteger('staff_id')->primary();
			$table->string('first_name')->nullable();
			$table->string('last_name')->nullable();
			$table->string('user_id')->unique('UK_7qatq4kob2sr6rlp44khhj53g');
			$table->bigInteger('staff_type_staff_type_id')->nullable()->index('FKs815trd9hp0kpm31dimqfqwo8');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('staff');
	}

}
