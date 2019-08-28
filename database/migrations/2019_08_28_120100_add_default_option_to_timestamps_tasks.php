<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDefaultOptionToTimestampsTasks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tasks', function (Blueprint $table) {
            DB::statement('ALTER TABLE tasks MODIFY COLUMN created_at timestamp DEFAULT current_timestamp;');
            DB::statement('ALTER TABLE tasks MODIFY COLUMN updated_at timestamp DEFAULT current_timestamp;');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tasks', function (Blueprint $table) {
            DB::statement('ALTER TABLE tasks ALTER  created_at  DROP DEFAULT');
            DB::statement('ALTER TABLE tasks ALTER updated_at DROP DEFAULT');
        });
    }
}
