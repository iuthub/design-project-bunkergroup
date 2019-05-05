<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateMessageTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('message', function(Blueprint $table)
		{
			$table->bigInteger('message_id')->primary();
			$table->dateTime('date');
			$table->text('message_content');
			$table->string('message_type')->nullable();
			$table->bigInteger('sender_staff_id')->nullable()->index('FKndac26iobtvrjrl1epihc5fa0');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('message');
	}

}
