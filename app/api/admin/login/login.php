<?php
// api/admin/login.php

session_start();
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once "../../db/connection.php";

$data = json_decode(file_get_contents("php://input"), true);
$username = $data['username'] ?? '';
$password = $data['password'] ?? '';

// Check against DB
$stmt = $db->prepare("SELECT * FROM admins WHERE username = :username LIMIT 1");
$stmt->execute(['username' => $username]);
$admin = $stmt->fetch(PDO::FETCH_ASSOC);

if ($admin && $password === $admin['password']) {
    $_SESSION['admin_logged_in'] = true;
    echo json_encode([
        "message" => "Login successful",
        "redirectTo" => "/admin"
    ]);
    http_response_code(200);
} else {
    echo json_encode(["message" => "Invalid credentials"]);
    http_response_code(401);
}
?>
