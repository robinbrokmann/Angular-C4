<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = new mysqli("localhost", "DC", "admin", "angular-c4");
$result = $conn->query("SELECT * FROM personen");
$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"' . $rs["id"] . '",';
    $outp .= '"voornaam":"' . $rs["voornaam"] . '",';
    $outp .= '"achternaam":"' . $rs["achternaam"] . '",';
    $outp .= '"straat":"'. $rs["straat"] . '",';
    $outp .= '"huisnummer":"'. $rs["huisnummer"] . '",';
    $outp .= '"postcode":"'. $rs["postcode"] . '",';
    $outp .= '"woonplaats":"'. $rs["woonplaats"] . '",';
    $outp .= '"telefoonnummer":"'. $rs["telefoonnummer"] . '",';
    $outp .= '"tijdtoegevoegd":"'. $rs["tijdtoegevoegd"] . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();
echo($outp);
?>