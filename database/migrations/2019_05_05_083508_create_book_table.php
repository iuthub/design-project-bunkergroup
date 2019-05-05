<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateBookTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('book', function(Blueprint $table)
		{
			$table->bigInteger('book_id')->primary();
			$table->string('author')->nullable();
			$table->string('book_name')->nullable()->unique('UK_jy2eu6s9e28na3fwo7fxv0a0x');
			$table->text('book_pic_url')->nullable();
			$table->string('book_size')->nullable();
			$table->text('book_url')->nullable();
			$table->bigInteger('subject_subject_id')->nullable()->index('FKrg3u8sa4s2any4q4df9s2tpa5');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('book');
	}

}
