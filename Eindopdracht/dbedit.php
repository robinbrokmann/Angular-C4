<?php

header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json; charset=UTF-8");
$conn = new mysqli("localhost", "DC", "admin", "angular-c4");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$id = $request->persoon->id;
$voornaam = mysqli_real_escape_string($conn, $request->persoon->voornaam);
$achternaam = mysqli_real_escape_string($conn, $request->persoon->achternaam);
$straat = mysqli_real_escape_string($conn, $request->persoon->straat);
$huisnummer = mysqli_real_escape_string($conn, $request->persoon->huisnummer);
$postcode = mysqli_real_escape_string($conn, $request->persoon->postcode);
$woonplaats = mysqli_real_escape_string($conn, $request->persoon->woonplaats);
$telefoonnummer = mysqli_real_escape_string($conn, $request->persoon->telefoonnummer);


$sql = "UPDATE personen SET voornaam='$voornaam', achternaam='$achternaam', straat='$straat', huisnummer='$huisnummer', postcode='$postcode',
                    woonplaats='$woonplaats', telefoonnummer='$telefoonnummer' WHERE id = '$id'";

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