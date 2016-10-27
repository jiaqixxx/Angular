<?php
/**
 * Created by PhpStorm.
 * User: jessy
 * Date: 26/10/2016
 * Time: 4:48 PM
 */

$conn = mysqli_connect("localhost", "root", "", "angular");
$result = mysqli_query($conn, "select * from Comments");

$data = array();
while ($row = mysqli_fetch_array($result)) {
    $data[] = $row;
}
print json_encode($data);