const DEFAULT_PROJECTS = [
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

export const dataService = {
    // --- Visits ---
    getVisits: async () => {
        try {
            const response = await fetch('/api/visits.php');
            if (!response.ok) return { count: 0 };
            return await response.json();
        } catch (error) {
            console.error('Error fetching visits:', error);
            return { count: 0 };
        }
    },
    incrementVisit: async () => {
        try {
            const response = await fetch('/api/visits.php', { method: 'POST' });
            if (!response.ok) return { count: 0 };
            return await response.json();
        } catch (error) {
            console.error('Error incrementing visits:', error);
            return { count: 0 };
        }
    },

    // --- Projects ---
    getProjects: async () => {
        try {
            const response = await fetch('/api/projects.php');
            if (!response.ok) return DEFAULT_PROJECTS;
            return await response.json();
        } catch (error) {
            console.error('Error fetching projects (using fallback):', error);
            return DEFAULT_PROJECTS;
        }
    },
    saveProject: async (project) => {
        try {
            const response = await fetch('/api/projects.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(project)
            });
            if (response.ok) {
                window.dispatchEvent(new Event('storage')); // Notify updates (optional, but good for uniformity)
            }
            return await response.json();
        } catch (error) {
            console.error('Error saving project:', error);
        }
    },
    deleteProject: async (id) => {
        try {
            const response = await fetch(`/api/projects.php?id=${id}`, { method: 'DELETE' });
            if (response.ok) {
                window.dispatchEvent(new Event('storage'));
            }
            return await response.json();
        } catch (error) {
            console.error('Error deleting project:', error);
        }
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
        if (username === 'NAMRTAGREENINDIA' && password === 'NAMRTAGREENUSA') {
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
