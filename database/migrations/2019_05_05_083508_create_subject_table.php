<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSubjectTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('subject', function(Blueprint $table)
		{
			$table->bigInteger('subject_id')->primary();
			$table->integer('fs');
			$table->string('subject_name')->nullable()->unique('UK_9x44p8j4xvkb6vhaccexngaao');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('subject');
	}

}
