<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = new mysqli("localhost", "DC", "admin", "angular-c4");

$result = $conn->query("SELECT * FROM bedrijf");
$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Bedrijfsnaam":"' . $rs["bedrijfsnaam"] . '",';
    $outp .= '"Adres":"' . $rs["adres"] . '",';
    $outp .= '"Woonplaats":"'. $rs["woonplaats"] . '",';
    $outp .= '"Telefoonnummer":"'. $rs["telnr"] . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();
echo($outp);
?>