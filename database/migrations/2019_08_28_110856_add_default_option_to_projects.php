<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use \Illuminate\Support\Facades\DB;

class AddDefaultOptionToProjects extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('projects', function (Blueprint $table) {
            DB::statement('ALTER TABLE projects MODIFY COLUMN created_at timestamp DEFAULT current_timestamp;');
            DB::statement('ALTER TABLE projects MODIFY COLUMN updated_at timestamp DEFAULT current_timestamp;');
           /* $table->created_at->useCurrent();
            $table->updated_at->useCurrent();*/
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('projects', function (Blueprint $table) {
            DB::statement('ALTER TABLE projects ALTER  created_at  DROP DEFAULT');
            DB::statement('ALTER TABLE projects ALTER updated_at DROP DEFAULT');
        });
    }
}
