function updateClock() {
    const clockElement = document.getElementById('live-clock');
    const now = new Date();

    // 1. Format the Date (e.g., Tuesday, March 24, 2026)
    const dateOptions = { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
    };
    const dateString = now.toLocaleDateString('en-US', dateOptions);

    // 2. Format the Time (e.g., 21:45:05)
    // Using 'en-GB' gives 24-hour format, which fits your "Raw" aesthetic
    const timeOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
    };
    const timeString = now.toLocaleTimeString('en-GB', timeOptions);

    // 3. Combine them and inject into HTML
    clockElement.textContent = `${dateString} | ${timeString}`;
}

// Update the clock every 1 second (1000ms)
setInterval(updateClock, 1000);

// Run it once immediately so the user doesn't see "Loading..."
updateClock();

// Function to make external links open in new tabs
function handleExternalLinks() {
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        // Check if the link starts with "http" (meaning it's an external site)
        if (link.href.includes('http')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

// Call it when the page loads
handleExternalLinks();