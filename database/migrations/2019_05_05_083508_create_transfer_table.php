<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateTransferTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('transfer', function(Blueprint $table)
		{
			$table->bigInteger('transfer_id')->primary();
			$table->bigInteger('student_request_uuid')->index('FKjudlpa4qkxxnsokf63luw5d2n');
			$table->bigInteger('student_response_uuid')->nullable()->index('FKhww7pb1qtaw8ml1k1bxi9x4yx');
			$table->bigInteger('transfer_to_group')->index('FKgj7twohf7sd065g22llqjynmu');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('transfer');
	}

}
