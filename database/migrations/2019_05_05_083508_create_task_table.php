<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateTaskTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('task', function(Blueprint $table)
		{
			$table->bigInteger('task_id')->primary();
			$table->dateTime('deadline')->nullable();
			$table->string('doc_url')->nullable();
			$table->dateTime('given_date');
			$table->string('instruction')->nullable();
			$table->string('title')->nullable();
			$table->bigInteger('staff_task')->nullable()->index('FKkuldvwo0v57mnm5hjri9ptvn4');
			$table->bigInteger('subject_task')->nullable()->index('FK1hbyqslj21irmr11n8svsw2i3');
			$table->bigInteger('task_type_task_type_id')->nullable()->index('FK8v0ccc0668lt3ie7hybvy8dul');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('task');
	}

}
