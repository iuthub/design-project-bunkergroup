<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateStudentTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('student', function(Blueprint $table)
		{
			$table->bigInteger('uuid')->primary();
			$table->string('first_name')->nullable();
			$table->integer('fs');
			$table->string('last_name')->nullable();
			$table->string('user_id')->unique('UK_bkix9btnoi1n917ll7bplkvg5');
			$table->bigInteger('group_group_id')->nullable()->index('FKhcfpgdvywcii1af7e5reao7fp');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('student');
	}

}
