<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateGroupsPerSectionTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('groups_per_section', function(Blueprint $table)
		{
			$table->bigInteger('groups_per_section_id')->primary();
			$table->bigInteger('group_group_id')->nullable()->index('FKfo5bnan6m2t57ti9g7e66p6cf');
			$table->bigInteger('group_section_group_section_id')->nullable()->index('FK9m8us5g7pu3al1yjj2r6fppd6');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('groups_per_section');
	}

}
