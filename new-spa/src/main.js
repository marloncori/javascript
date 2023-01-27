import './main.css'
import { router } from './router/index.router'

// this makes the history navigation enabled so I can go back or forward with <-- -->

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

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


window.addEventListener('hashchange', () => {
    router(window.location.hash)
})