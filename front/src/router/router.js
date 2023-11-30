const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
}

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

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routerConfig.routes[path] || routerConfig.routes[404];

    try {
        const response = await fetch(route);

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }

        const html = await response.text();
        const targetElement = document.getElementById(routerConfig.baseElementId);
        
        if (targetElement) {
            targetElement.innerHTML = html;
        } else {
            console.error(`Target element with ID '${routerConfig.baseElementId}' not found.`);
        }
    } catch (error) {
        console.error(`Error during route handling: ${error.message}`);
        // Handle errors (e.g., show a generic error page)
    }
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

/////////////////