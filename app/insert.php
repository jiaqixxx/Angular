<?php
/**
 * Created by PhpStorm.
 * User: jessy
 * Date: 26/10/2016
 * Time: 11:55 AM
 */

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$stars = $request->stars;
$comments = $request->comments;
$author = $request->author;
$date = $request->date;
$productid = $request->productid;

$servername = "localhost";
$username = "root";
$password = ""; //Your User Password
$dbname = "angular"; //Your Database Name


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO Comments (Stars, Comments, Author, Dates, ProductID)
VALUES ('$stars', '$comments', '$author', '$date', '$productid')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
