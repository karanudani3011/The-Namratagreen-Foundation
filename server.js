const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const DATA_FILE = path.join(__dirname, 'data', 'visits.json');

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'build')));

const PROJECTS_FILE = path.join(__dirname, 'data', 'projects.json');

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, 'data'))) {
    fs.mkdirSync(path.join(__dirname, 'data'));
}

// Ensure data file exists with default data
if (!fs.existsSync(PROJECTS_FILE)) {
    const defaultProjects = [
        {
            id: 1,
            title: "Project Urban Green",
            location: "India",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
            description: "Transforming concrete jungles into green corridors by planting native trees along highways.",
            details: "Project Urban Green is our flagship initiative aimed at reducing the urban heat island effect. By strategically planting native tree species along major highways and in available urban pockets, we are creating green corridors that not only beautify the city but also significantly improve air quality. We work closely with municipal corporations and local communities to ensure the long-term survival of every sapling planted. Our goal is to plant 100,000 trees across 5 major metro cities by 2030."
        },
        {
            id: 2,
            title: "River Rejuvenation",
            location: "India",
            image: "https://images.unsplash.com/photo-1466611632172-22b467ef8652?auto=format&fit=crop&w=600&q=80",
            description: "Cleaning and planting along river banks to restore flow and biodiversity.",
            details: "Rivers are the lifelines of our ecosystem, yet many are choking with pollution. Our River Rejuvenation project focuses on cleaning up river banks, removing plastic waste, and planting deep-rooted native vegetation to arrest soil erosion. This holistic approach helps in restoring the natural flow of the river, improving water quality, and bringing back aquatic life. We also conduct awareness drives to educate river-side communities about sustainable waste disposal."
        },
        {
            id: 3,
            title: "Coastal Shield Mangroves",
            location: "India",
            image: "https://images.unsplash.com/photo-1572099606223-6e29045d7de3?auto=format&fit=crop&w=600&q=80",
            description: "Planting mangroves to protect coastlines from erosion and provide habitat for marine life.",
            details: "Mangroves are nature's first line of defense against cyclones and rising sea levels. The Coastal Shield Mangroves project is dedicated to restoring degraded mangrove ecosystems along India's coastline. These forests act as critical nurseries for fish and protect inland areas from storm surges. We involve local fishing communities in the planting process, providing them with alternative livelihoods while securing their future against climate change risks."
        }
    ];
    fs.writeFileSync(PROJECTS_FILE, JSON.stringify(defaultProjects));
}

// Ensure visits file exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ count: 0 }));
}

// --- API Endpoints ---

// Get Projects
app.get('/api/projects', (req, res) => {
    try {
        if (!fs.existsSync(PROJECTS_FILE)) {
            res.json([]);
            return;
        }
        const data = JSON.parse(fs.readFileSync(PROJECTS_FILE));
        res.json(data);
    } catch (error) {
        console.error('Error reading projects:', error);
        res.status(500).json({ error: 'Failed to read projects' });
    }
});

// Save Project (Create or Update)
app.post('/api/projects', (req, res) => {
    try {
        const newProject = req.body;
        let projects = [];

        if (fs.existsSync(PROJECTS_FILE)) {
            projects = JSON.parse(fs.readFileSync(PROJECTS_FILE));
        }

        if (newProject.id) {
            // Update existing
            const index = projects.findIndex(p => p.id == newProject.id);
            if (index !== -1) {
                console.log('Update project found at index:', index);
                projects[index] = { ...projects[index], ...newProject };
            } else {
                console.log('Project ID not found, acting as new push/insert logic might be needed but for now we ignore or push');
                projects.push(newProject);
            }
        } else {
            // Create new
            newProject.id = Date.now();
            projects.push(newProject);
        }

        fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects));
        res.json(projects);
    } catch (error) {
        console.error('Error saving project:', error);
        res.status(500).json({ error: 'Failed to save project' });
    }
});

// Delete Project
app.delete('/api/projects/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        let projects = [];
        if (fs.existsSync(PROJECTS_FILE)) {
            projects = JSON.parse(fs.readFileSync(PROJECTS_FILE));
        }

        const filteredProjects = projects.filter(p => p.id !== id);
        fs.writeFileSync(PROJECTS_FILE, JSON.stringify(filteredProjects));

        res.json(filteredProjects);
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ error: 'Failed to delete project' });
    }
});

// Get visit count
app.get('/api/visits', (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(DATA_FILE));
        res.json(data);
    } catch (error) {
        console.error('Error reading visits:', error);
        res.status(500).json({ error: 'Failed to read visits' });
    }
});

// Increment visit count
app.post('/api/visits/increment', (req, res) => {
    try {
        let data = { count: 0 };
        if (fs.existsSync(DATA_FILE)) {
            data = JSON.parse(fs.readFileSync(DATA_FILE));
        }

        data.count += 1;
        fs.writeFileSync(DATA_FILE, JSON.stringify(data));

        res.json(data);
    } catch (error) {
        console.error('Error incrementing visits:', error);
        res.status(500).json({ error: 'Failed to increment visits' });
    }
});

// Handle React routing, return all requests to React app
app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
