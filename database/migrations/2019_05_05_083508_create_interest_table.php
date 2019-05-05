<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateInterestTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('interest', function(Blueprint $table)
		{
			$table->bigInteger('interest_id')->primary();
			$table->string('interest_value')->nullable();
			$table->boolean('is_confirmed', 1);
			$table->bigInteger('interest_category_interest_category_id')->nullable()->index('FKdcc0pjv6ywrbauerrdiegt7p4');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('interest');
	}

}
