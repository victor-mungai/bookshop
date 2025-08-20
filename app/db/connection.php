<?php
// db/connection.php

$host = "mysql"; 
$dbname = "bookshop";
$username = "root";
$password = "1234";

try {
    $db = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8",
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::MYSQL_ATTR_SSL_MODE => PDO::MYSQL_SSL_MODE_DISABLED
        ]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "error" => "Database connection failed: " . $e->getMessage()
    ]);
    exit;
}
