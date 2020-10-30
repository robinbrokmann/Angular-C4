<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = new mysqli("localhost", "DC", "admin", "angular-c4");

$id = $_GET['id'];


$sql = "DELETE FROM personen WHERE id = $id";

$error = true;

if ($conn->query($sql) === TRUE) {
    $error = false;
}

echo json_encode(array(
    'error' => $error,
));

$conn->close();
?>