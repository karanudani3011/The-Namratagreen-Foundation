<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$dataFile = __DIR__ . '/../../data/visits.json';

// Ensure data directory exists
if (!file_exists(dirname($dataFile))) {
    mkdir(dirname($dataFile), 0755, true);
}

// Initialize file
if (!file_exists($dataFile)) {
    file_put_contents($dataFile, json_encode(["count" => 0]));
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    if (file_exists($dataFile)) {
        echo file_get_contents($dataFile);
    } else {
        echo json_encode(["count" => 0]);
    }
} elseif ($method === 'POST') {
    // Increment logic
    $data = ["count" => 0];
    if (file_exists($dataFile)) {
        $json = file_get_contents($dataFile);
        $data = json_decode($json, true);
    }
    
    $data['count']++;
    
    file_put_contents($dataFile, json_encode($data));
    echo json_encode($data);
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
?>
