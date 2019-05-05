<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAnswerPointTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('answer_point', function(Blueprint $table)
		{
			$table->bigInteger('answer_point_id')->primary();
			$table->bigInteger('answer_answer_id')->nullable()->index('FKjdrt0yok8lu7m2413l8jajt8b');
			$table->bigInteger('student_uuid')->nullable()->index('FKe1txiyipt53xamduugoep2vfi');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('answer_point');
	}

}
