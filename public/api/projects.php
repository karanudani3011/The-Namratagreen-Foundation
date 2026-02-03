<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Define data file path (one level up from api/ into data/)
$dataFile = __DIR__ . '/../../data/projects.json';

// Ensure data directory exists
if (!file_exists(dirname($dataFile))) {
    mkdir(dirname($dataFile), 0755, true);
}

// Default Data
$defaultProjects = [
    [
        "id" => 1,
        "title" => "Project Urban Green",
        "location" => "India",
        "image" => "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
        "description" => "Transforming concrete jungles into green corridors by planting native trees along highways.",
        "details" => "Project Urban Green is our flagship initiative aimed at reducing the urban heat island effect. By strategically planting native tree species along major highways and in available urban pockets, we are creating green corridors that not only beautify the city but also significantly improve air quality. We work closely with municipal corporations and local communities to ensure the long-term survival of every sapling planted. Our goal is to plant 100,000 trees across 5 major metro cities by 2030."
    ],
    [
        "id" => 2,
        "title" => "River Rejuvenation",
        "location" => "India",
        "image" => "https://images.unsplash.com/photo-1466611632172-22b467ef8652?auto=format&fit=crop&w=600&q=80",
        "description" => "Cleaning and planting along river banks to restore flow and biodiversity.",
        "details" => "Rivers are the lifelines of our ecosystem, yet many are choking with pollution. Our River Rejuvenation project focuses on cleaning up river banks, removing plastic waste, and planting deep-rooted native vegetation to arrest soil erosion. This holistic approach helps in restoring the natural flow of the river, improving water quality, and bringing back aquatic life. We also conduct awareness drives to educate river-side communities about sustainable waste disposal."
    ],
    [
        "id" => 3,
        "title" => "Coastal Shield Mangroves",
        "location" => "India",
        "image" => "https://images.unsplash.com/photo-1572099606223-6e29045d7de3?auto=format&fit=crop&w=600&q=80",
        "description" => "Planting mangroves to protect coastlines from erosion and provide habitat for marine life.",
        "details" => "Mangroves are nature's first line of defense against cyclones and rising sea levels. The Coastal Shield Mangroves project is dedicated to restoring degraded mangrove ecosystems along India's coastline. These forests act as critical nurseries for fish and protect inland areas from storm surges. We involve local fishing communities in the planting process, providing them with alternative livelihoods while securing their future against climate change risks."
    ]
];

// Initialize file if not exists
if (!file_exists($dataFile)) {
    file_put_contents($dataFile, json_encode($defaultProjects, JSON_PRETTY_PRINT));
}

// Helper to read data
function getProjects() {
    global $dataFile;
    if (file_exists($dataFile)) {
        return json_decode(file_get_contents($dataFile), true);
    }
    return [];
}

// Helper to save data
function saveProjects($projects) {
    global $dataFile;
    file_put_contents($dataFile, json_encode($projects, JSON_PRETTY_PRINT));
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        echo json_encode(getProjects());
        break;

    case 'POST':
        $input = json_decode(file_get_contents('php://input'), true);
        if (!$input) {
            http_response_code(400);
            echo json_encode(["error" => "Invalid JSON"]);
            exit;
        }

        $projects = getProjects();
        
        // Check if ID exists (Update) or new (Create)
        $id = isset($input['id']) ? $input['id'] : null;
        
        if ($id) {
            $updated = false;
            foreach ($projects as $key => $project) {
                // Loose comparison for ID
                if ($project['id'] == $id) {
                    $projects[$key] = array_merge($project, $input);
                    $updated = true;
                    break;
                }
            }
            if (!$updated) {
                // If ID sent but not found, treat as new? Or error?
                // For simplicity, just add it
                 $projects[] = $input;
            }
        } else {
            // New project
            $input['id'] = time() * 1000; // Generate ID
            $projects[] = $input;
        }

        saveProjects($projects);
        echo json_encode($projects);
        break;

    case 'DELETE':
        // Get ID from query string ?id=...
        $id = isset($_GET['id']) ? $_GET['id'] : null;
        if (!$id) {
             http_response_code(400);
             echo json_encode(["error" => "ID required"]);
             exit;
        }

        $projects = getProjects();
        $projects = array_filter($projects, function($p) use ($id) {
            return $p['id'] != $id;
        });
        
        // Re-index array
        $projects = array_values($projects);
        
        saveProjects($projects);
        echo json_encode($projects);
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "Method not allowed"]);
        break;
}
?>
