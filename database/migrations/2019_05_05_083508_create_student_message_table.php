<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateStudentMessageTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('student_message', function(Blueprint $table)
		{
			$table->bigInteger('student_message_id')->primary();
			$table->boolean('is_new', 1);
			$table->bigInteger('message_message_id')->nullable()->index('FKc0wjdno1mwhrtj8cffxpsk0wo');
			$table->bigInteger('receiver_uuid')->index('FKgmw023h5bepihraae10q9tv1q');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('student_message');
	}

}
