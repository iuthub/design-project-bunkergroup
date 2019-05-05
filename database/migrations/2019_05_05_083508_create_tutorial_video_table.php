<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateTutorialVideoTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('tutorial_video', function(Blueprint $table)
		{
			$table->bigInteger('tutorial_video_id')->primary();
			$table->string('url')->nullable();
			$table->bigInteger('interest_interest_id')->nullable()->index('FK49egwhw73dqslt6kujoirqlpg');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('tutorial_video');
	}

}
