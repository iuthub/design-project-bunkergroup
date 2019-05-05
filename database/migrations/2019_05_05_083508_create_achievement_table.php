<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAchievementTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('achievement', function(Blueprint $table)
		{
			$table->bigInteger('achievement_id')->primary();
			$table->string('comment')->nullable();
			$table->bigInteger('interest_interest_id')->nullable()->index('FKfuxt5094gs9fwo39dkpv5ei5k');
			$table->bigInteger('student_uuid')->nullable()->index('FK7nbaarimbi4j8ers3k8n1sq1p');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('achievement');
	}

}
