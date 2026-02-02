export const dataService = {
    // --- Visits ---
    getVisits: async () => {
        try {
            const response = await fetch('/api/visits');
            if (!response.ok) return { count: 0 };
            return await response.json();
        } catch (error) {
            console.error('Error fetching visits:', error);
            return { count: 0 };
        }
    },
    incrementVisit: async () => {
        try {
            const response = await fetch('/api/visits/increment', { method: 'POST' });
            if (!response.ok) return { count: 0 };
            return await response.json();
        } catch (error) {
            console.error('Error incrementing visits:', error);
            return { count: 0 };
        }
    },

    // --- Projects ---
    getProjects: () => {
        const DATA_VERSION = '2.0';
        const currentVersion = localStorage.getItem('data_version');
        let projects = null;

        if (currentVersion === DATA_VERSION) {
            projects = JSON.parse(localStorage.getItem('projects'));
        }

        if (!projects) {
            // Default Data (Version 2.0)
            projects = [
                {
                    id: 1,
                    title: "Project Urban Green",
                    location: "India",
                    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
                    description: "Transforming concrete jungles into green corridors by planting native trees along highways."
                },
                {
                    id: 2,
                    title: "River Rejuvenation",
                    location: "India",
                    image: "https://images.unsplash.com/photo-1466611632172-22b467ef8652?auto=format&fit=crop&w=600&q=80",
                    description: "Cleaning and planting along river banks to restore flow and biodiversity."
                },
                {
                    id: 3,
                    title: "Coastal Shield Mangroves",
                    location: "India",
                    image: "https://images.unsplash.com/photo-1572099606223-6e29045d7de3?auto=format&fit=crop&w=600&q=80",
                    description: "Planting mangroves to protect coastlines from erosion and provide habitat for marine life."
                },
                {
                    id: 4,
                    title: "Future Roots Schools",
                    location: "India",
                    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
                    description: "Creating green belts in 50+ rural schools and teaching students about environmental stewardship."
                },
                {
                    id: 5,
                    title: "Agroforestry Initiative",
                    location: "India",
                    image: "https://images.unsplash.com/photo-1622383563227-0440114a871b?auto=format&fit=crop&w=600&q=80",
                    description: "Helping farmers integrate trees into their farms to improve soil health and increase income."
                },
                {
                    id: 6,
                    title: "City Lungs Vertical Gardens",
                    location: "India",
                    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80",
                    description: "Installing vertical gardens on building facades to reduce urban heat islands and improve air quality."
                },
                {
                    id: 7,
                    title: "Urban Forestry Initiative",
                    location: "USA",
                    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
                    description: "Planting trees in urban areas to combat heat islands and provide shade."
                },
                {
                    id: 8,
                    title: "Desert Greening Project",
                    location: "India",
                    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
                    description: "Restoring green cover in arid regions using drought-resistant native species."
                },
                {
                    id: 9,
                    title: "Wetland Restoration",
                    location: "USA",
                    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
                    description: "Protecting and restoring critical wetland ecosystems to support diverse wildlife."
                },
                {
                    id: 10,
                    title: "Spice Garden Conservation",
                    location: "India",
                    image: "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?auto=format&fit=crop&w=600&q=80",
                    description: "Preserving native spice varieties and promoting organic farming practices in the Western Ghats."
                },
                {
                    id: 11,
                    title: "Himalayan Pine Restoration",
                    location: "India",
                    image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=600&q=80",
                    description: "Reforesting high-altitude areas with native pine to prevent landslides and soil erosion."
                },
                {
                    id: 12,
                    title: "Community Garden Network",
                    location: "USA",
                    image: "https://images.unsplash.com/photo-1591857177580-dc82b9af00c2?auto=format&fit=crop&w=600&q=80",
                    description: "Building community food gardens to support local food security and education."
                },
                {
                    id: 13,
                    title: "Rooftop Farm Project",
                    location: "USA",
                    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80",
                    description: "Converting unused rooftops into productive green farms to reduce building temperatures."
                },
                {
                    id: 14,
                    title: "Sacred Grove Restoration",
                    location: "India",
                    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80",
                    description: "Protecting ancient sacred groves that are hotspots of biodiversity in the Northeast."
                },
                {
                    id: 15,
                    title: "Urban Lake Cleanup",
                    location: "India",
                    image: "https://images.unsplash.com/photo-1583096114844-06ce5a5f2771?auto=format&fit=crop&w=600&q=80",
                    description: "Revitalizing polluted urban lakes and creating walking tracks for citizens."
                },
                {
                    id: 16,
                    title: "Redwood Conservation",
                    location: "USA",
                    image: "https://images.unsplash.com/photo-1543355208-886915654324?auto=format&fit=crop&w=600&q=80",
                    description: "Protecting old-growth redwood forests from logging and development."
                },
                {
                    id: 17,
                    title: "Native Prairie Restoration",
                    location: "USA",
                    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c7dd1?auto=format&fit=crop&w=600&q=80",
                    description: "Reintroducing native grasses and bison to restore the original prairie ecosystem."
                }
            ];

            // Save updated data and version
            localStorage.setItem('projects', JSON.stringify(projects));
            localStorage.setItem('data_version', DATA_VERSION);
            window.dispatchEvent(new Event('storage'));
        }

        return projects;
    },
    saveProject: (project) => {
        const projects = dataService.getProjects();
        if (project.id) {
            const index = projects.findIndex(p => p.id === project.id);
            if (index !== -1) projects[index] = project;
        } else {
            project.id = Date.now();
            projects.push(project);
        }
        localStorage.setItem('projects', JSON.stringify(projects));
        window.dispatchEvent(new Event('storage')); // Notify updates
    },
    deleteProject: (id) => {
        const projects = dataService.getProjects().filter(p => p.id !== id);
        localStorage.setItem('projects', JSON.stringify(projects));
        window.dispatchEvent(new Event('storage'));
    },

    // --- Messages ---
    getMessages: () => {
        const msgs = localStorage.getItem('messages');
        return msgs ? JSON.parse(msgs) : [];
    },
    saveMessage: (message) => {
        const msgs = dataService.getMessages();
        message.id = Date.now();
        message.timestamp = new Date().toISOString();
        msgs.push(message);
        localStorage.setItem('messages', JSON.stringify(msgs));
        window.dispatchEvent(new Event('storage'));
    },
    deleteMessage: (id) => {
        const msgs = dataService.getMessages().filter(m => m.id !== id);
        localStorage.setItem('messages', JSON.stringify(msgs));
        window.dispatchEvent(new Event('storage'));
    },

    // --- Donations ---
    getDonations: () => {
        const donations = localStorage.getItem('donations');
        return donations ? JSON.parse(donations) : [];
    },
    saveDonation: (donation) => {
        const donations = dataService.getDonations();
        donation.id = Date.now();
        donation.timestamp = new Date().toISOString();
        donations.push(donation);
        localStorage.setItem('donations', JSON.stringify(donations));
        window.dispatchEvent(new Event('storage'));
    },

    // --- Auth ---
    isAuthenticated: () => {
        return localStorage.getItem('isAdminAuthenticated') === 'true';
    },
    login: (username, password) => {
        if (username === 'admin' && password === '123') {
            localStorage.setItem('isAdminAuthenticated', 'true');
            return true;
        }
        return false;
    },
    logout: () => {
        localStorage.removeItem('isAdminAuthenticated');
    },

    // --- Export ---
    exportData: () => {
        const data = {
            projects: dataService.getProjects(),
            messages: dataService.getMessages(),
            donations: dataService.getDonations(),
            exportedAt: new Date().toISOString()
        };
        const dataStr = JSON.stringify(data, null, 2);
        const Blob = window.Blob;
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `namratagreen_backup_${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};
