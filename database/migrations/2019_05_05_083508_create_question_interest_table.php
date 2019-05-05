<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateQuestionInterestTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('question_interest', function(Blueprint $table)
		{
			$table->bigInteger('question_interest_id')->primary();
			$table->bigInteger('interest_interest_id')->nullable()->index('FK58yms5514gbda1jbu9envww0y');
			$table->bigInteger('question_question_id')->nullable()->index('FK1wlu9estjh5i68u9ox793ybov');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('question_interest');
	}

}
