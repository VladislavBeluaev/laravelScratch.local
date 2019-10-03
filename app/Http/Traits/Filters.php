<?php


namespace App\Http\Traits;


use App\Project;
use Illuminate\Contracts\Database\ModelIdentifier;
use Illuminate\Support\Collection;

trait Filters
{
    /*function filterCollection(array $filters = [])
    {
        $filters_count = count($filters);
        switch ($filters_count) {
            case 0:
                return $this->all();
                break;
            case 1:
                return $this->all()->where(key($filters), $filters[key($filters)])->values();
                break;
            default:
                $filters_data = $this->all();
                while (count($filters)) {
                    $filter = array_shift($filters);
                    $filters_data = $filters_data->where(key($filter), $filter[key($filter)]);
                }
                return $filters_data->values();
        }
    }*/

    function iterateArrays(array $arr)
    {
        foreach ($arr as $value) {
            if (!is_array($value)) echo $value;
            else
                $this->iterateArrays($value);
        }
    }

    function filterArrayByValue($arr, $filter)
    {
        foreach ($arr as $value) {
            if (!is_array($value) && $value == $filter) {
                self::$filtersData[] = $arr;
            } elseif (!is_array($value) && $value != $filter) continue;
            else {
                $this->filterArrayByValue($value, $filter);
            }
        }
        return self::$filtersData;
    }

    function filterCollection(Collection $collection, array $filters)
    {
        $filteredData = [];

        foreach ($collection->toArray() as $item) {
            if (count(array_intersect_assoc($item, $filters)) === count($filters)) {
                $modelName = stristr(class_basename($this),'Controller',true);
                $namespace_prefix = 'App\\';
                $shortClassName = ($modelName===false?$namespace_prefix.class_basename($this):$namespace_prefix.$modelName);
                $filteredData[] = new $shortClassName($item);
            }
        }
        return $filteredData;
    }
}
