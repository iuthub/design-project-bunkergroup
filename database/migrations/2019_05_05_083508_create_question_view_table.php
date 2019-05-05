<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateQuestionViewTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('question_view', function(Blueprint $table)
		{
			$table->bigInteger('question_view_id')->primary();
			$table->integer('no_of_views');
			$table->bigInteger('question_question_id')->nullable()->index('FKoxq9rv2smkc9s4h2l53t78ix6');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('question_view');
	}

}
