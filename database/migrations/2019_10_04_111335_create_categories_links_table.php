<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoriesLinksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories_links', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('fk_category')->nullable();
            $table->unsignedBigInteger('fk_link')->nullable();
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
        });
        Schema::table('categories_links',function (Blueprint $table){
            $table->foreign('fk_category')->references('id')->on('news_categories');
            $table->foreign('fk_link')->references('id')->on('news_links');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories_links');
    }
}
