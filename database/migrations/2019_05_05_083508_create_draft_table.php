<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDraftTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('draft', function(Blueprint $table)
		{
			$table->bigInteger('draft_id')->primary();
			$table->bigInteger('message_message_id')->nullable()->index('FKgasye4w0w97xx7o5uamsbipf6');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('draft');
	}

}
