// Router configuration
const routerConfig = {
    baseElementId: "main-page",
    routes: {
        404: "/pages/404.html",
        "": "/pages/index.html",
        "/login": "/pages/login.html",
        "/cadastro": "/pages/signin.html",
        "/alunos": "/pages/alunos.html",
        "/cursos": "/pages/cursos.html",
    },
};

// Function to fetch content from the server
const fetchContent = async (route) => {
    try {
        const response = await fetch(route);

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }

        return await response.text();
    } catch (error) {
        console.error('Error fetching content:', error);
        throw error;
    }
};

// Function to update the DOM with fetched content
const updateDOM = (html, targetElementId) => {
    const targetElement = document.getElementById(targetElementId);

    if (targetElement) {
        targetElement.innerHTML = html;
    } else {
        console.error(`Target element with ID '${targetElementId}' not found.`);
    }
};

// Placeholder functions for loading indicators
const showLoadingIndicator = () => {
    // Display a loading indicator (implement based on your UI)
};

const hideLoadingIndicator = () => {
    // Hide the loading indicator (implement based on your UI)
};

// Function to handle errors during route handling
const handleErrors = (error) => {
    // Handle errors (e.g., show a generic error page)
    console.error('Error during route handling:', error);
    // Optionally redirect to a generic error page
    window.location.href = '/pages/error.html';
};

// Function to handle location changes
const handleLocation = async () => {
    showLoadingIndicator();

    const path = window.location.pathname;
    const route = routerConfig.routes[path] || routerConfig.routes[404];

    try {
        const html = await fetchContent(route);
        updateDOM(html, routerConfig.baseElementId);
    } catch (error) {
        handleErrors(error);
    } finally {
        hideLoadingIndicator();
    }
};

// Event listener for clicks on anchor tags using event delegation
document.body.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        window.history.pushState({}, '', event.target.href);
        handleLocation();
    }
});

// Event listener for popstate events (e.g., back/forward buttons)
window.onpopstate = handleLocation;

// Expose the route function to the global scope
window.route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, '', event.target.href);
    handleLocation();
};

// Initial handling of location to set up the initial state
handleLocation();

/////////////////