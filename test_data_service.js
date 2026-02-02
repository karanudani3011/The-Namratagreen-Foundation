
// Mock localStorage
const store = {};
global.localStorage = {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value; },
    removeItem: (key) => { delete store[key]; }
};

// Simplified dataService logic (copy of the delete logic we want to test)
const dataService = {
    getMessages: () => {
        const stored = localStorage.getItem('contact_messages');
        return stored ? JSON.parse(stored) : [];
    },
    saveMessage: (message) => {
        const messages = dataService.getMessages();
        const newMessage = { id: Date.now(), ...message };
        messages.push(newMessage);
        localStorage.setItem('contact_messages', JSON.stringify(messages));
        return newMessage.id;
    },
    deleteMessage: (id) => {
        const messages = dataService.getMessages();
        // Force type matching just in case (though Date.now() returns number)
        const filtered = messages.filter(m => m.id !== id);
        console.log(`Deleting ID: ${id} (Type: ${typeof id})`);
        console.log(`Messages before: ${messages.length}`);
        console.log(`Messages after: ${filtered.length}`);
        localStorage.setItem('contact_messages', JSON.stringify(filtered));
    }
};

async function runTest() {
    console.log("Saving message 1...");
    const id1 = dataService.saveMessage({ name: "Test 1" });
    // Wait a bit to ensure unique ID if using strictly timestamp
    await new Promise(r => setTimeout(r, 10));
    console.log("Saving message 2...");
    const id2 = dataService.saveMessage({ name: "Test 2" });

    console.log(`Created IDs: ${id1}, ${id2}`);

    console.log("Messages count:", dataService.getMessages().length);

    console.log(`Deleting message ${id1}...`);
    dataService.deleteMessage(id1);

    const remaining = dataService.getMessages();
    console.log("Remaining count:", remaining.length);

    if (remaining.length === 1 && remaining[0].id === id2) {
        console.log("TEST PASSED");
    } else {
        console.log("TEST FAILED");
    }
}

runTest();
