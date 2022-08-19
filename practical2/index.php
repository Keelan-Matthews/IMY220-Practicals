<!DOCTYPE html>
<html>

<head>
	<title>IMY 220 - Prac 2</title>
	<meta charset="utf-8" />
	<!-- Keelan Matthews -->
</head>

<body>

	<form action="" method="GET">
		<label for="nRows">Number of rows: </label>
		<input type="number" id="nRows" name="numRows" />
		<input type="submit" name="" value="Change" />
	</form>

	<?php
	echo "</br>
		<table border='1'>";
	$numRows = isset($_GET['numRows']) ? $_GET['numRows'] : 1;

	// Get names from text file
	$names = array();
	$nameCount = 0;
	$file = fopen("names.txt", "r") or die("Unable to open file!");
	while (!feof($file)) {
		$names[$nameCount++] = fgets($file);
	}
	fclose($file);

	$currPos = 0;
	for ($i = 0; $i < $numRows; $i++) {
		echo "<tr>";
		for ($j = 0; $j < $nameCount / $numRows; $j++) {
			echo "<td>";
			if ($currPos < $nameCount) {
				echo $names[$currPos++];
			}
			echo "</td>";
		}
		echo "</tr>";
	}
	echo "</table>";
	?>

	<form action="" method="GET">
		<input type="hidden" name="numRows" value="<?php echo $numRows; ?>" />
		<input type="submit" name="split" value="Split and create groups" />
	</form>

	<?php
	// Split and create groups
	$names1 = array_slice($names, 0, $nameCount / 2);
	$names2 = array_slice($names, $nameCount / 2);

	if (isset($_GET['split'])) {
		echo "</br>
			<table border='1'>";
		for ($i = 0; $i < $nameCount / 2; $i++) {
			echo "<tr><td>";
			if (isset($names1[$i])) {
				echo $names2[$i] . " and " . $names1[$i];
			} else {
				echo $names2[$i];
			}
			echo "</td></tr>";
		}
		echo "</table>";
	}
	?>
</body>

</html>