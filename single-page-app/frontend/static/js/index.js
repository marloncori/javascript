import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        // run that function whenever the user accesses the root path
        { path: "/", view: Dashboard },
        { path: "/posts", view: Posts },
        { path: "/settings", view: Settings },
    ];

    // test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path,
        }
        // location.pathname var can be either path value ("/", "/posts" or "/settings")
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if(!match){
        match = {
            route: routes[0],
            isMatch: true,
        };
    }
    const view = new match.route.view();
    document.querySelector("#app").innerHTML = await view.getHtml();

    console.log(match.route.view);
};

// this makes the history navigation enabled so I can go back or forward with <-- -->
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (elem) => {
        // prevent page from refreshing and redirect to source
        if(elem.target.matches("[data-link")){
            elem.preventDefault();
            navigateTo(elem.target.href);
        }
    })
    router();
});
