<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateFaqconnectionTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('faqconnection', function(Blueprint $table)
		{
			$table->bigInteger('faq_connection_id')->primary();
			$table->bigInteger('answer_answer_id')->nullable()->index('FK39kidjjpywjwx9wpgt1fbjtt4');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('faqconnection');
	}

}
