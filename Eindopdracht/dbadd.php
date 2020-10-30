<?php
header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json; charset=UTF-8");
$conn = new mysqli("localhost", "DC", "admin", "angular-c4");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$voornaam = mysqli_real_escape_string($conn, $request->persoon->voornaam);
$achternaam = mysqli_real_escape_string($conn, $request->persoon->achternaam);
$straat = mysqli_real_escape_string($conn, $request->persoon->straat);
$huisnummer = mysqli_real_escape_string($conn, $request->persoon->huisnummer);
$postcode = mysqli_real_escape_string($conn, $request->persoon->postcode);
$woonplaats = mysqli_real_escape_string($conn, $request->persoon->woonplaats);
$telefoonnummer = mysqli_real_escape_string($conn, $request->persoon->telefoonnummer);


$sql = "INSERT INTO personen (voornaam, achternaam, straat, huisnummer, postcode, woonplaats, telefoonnummer)
 VALUES ('$voornaam', '$achternaam', '$straat', '$huisnummer', '$postcode', '$woonplaats', '$telefoonnummer')";

file_put_contents("error.log", $sql);

$error = true;

if ($conn->query($sql) === TRUE) {
    $error = false;
} else {
    file_put_contents("error.log", $conn->error, FILE_APPEND);
}

echo json_encode(array(
    'error' => $error,
));

$conn->close();
?>