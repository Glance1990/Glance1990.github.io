<?php

//task 1
/*
Пример входящих данных:
4, -2, -1, 3, -5, 5, -1
Исходящие данные:
-2, -1, -5, -1, 4, 3, 5
*/

$array1 = array (4, -2, -1, 3, -5, 5, -1);

function filterArray($array, $print_result_on_screen){
	$arrMinus = array();
	$arrPlus = array();

	foreach ($array as $number) {
		if ($number >= 0) {
			$arrPlus[] = $number;
		} else {
			$arrMinus[] = $number;
		}
	}

	$new_array = array_merge($arrMinus, $arrPlus);

	if ( $print_result_on_screen == true ) {
		echo "task I<br/><br/>";
		echo "Old array<br/>";
		foreach ($array as $single_number) {
				echo "$single_number  ";
		}
		echo "<br/>New array after sort<br/>";
		foreach ($new_array as $single_number) {
				echo "$single_number  ";
		}
		echo "<br/><br/><br/>";
	}	
	return $new_array;
}

filterArray($array1, true);


//task 2

$multiarray = array ( array (1, 4, -1, 4),
					  array (2, -5, -7, 3),
					  array (-7, -7, 2, -1),
					  array (2, 0, -1, -2)
					);


function filter_multi_array($multi_array){

	$first_action_array = array ();
	$k = 0;
	foreach ($multi_array as $array) {
		$j = 0;
		$k++;
		foreach ($array as $number) {
			$first_action_array[$j][$k] = $number;
			$j++;			
		};
	};

	$second_action_array = array ();
	$p=0;
	foreach ($first_action_array as $array) {
		$second_action_array[$p] = (filterArray($array, false));
		$p++;
	};

	$last_action_array = array ();
	$a = 0;
	foreach ($second_action_array as $array) {
		$b = 0;
		$a++;
		foreach ($array as $number) {
			$last_action_array[$b][$a] = $number;
			$b++;
		}
	}

	echo "task II<br/><br/>";
	echo "Old array<br/>";
	foreach ($multi_array as $single_array) {
		foreach($single_array as $single_number)
			echo "$single_number ";
			echo "<br>";
	}

	echo "<br/>New array after sort<br/>";
	foreach ($last_action_array as $single_array) {
		foreach($single_array as $single_number)
			echo "$single_number ";
			echo "<br>";
	}

};

filter_multi_array($multiarray);

?>