import Home from "../controllers/Home.controller"
import About from "../controllers/About.controller"
import Products from "../controllers/Products.controller"
import NotFound from "../controllers/NotFound.controller"

const router = async () => {
    const routes = [
        // run that function whenever the user accesses the root path
        { path: "/home", view: Home},
        { path: "/about", view: About},
        { path: "/products", view: Products},
        { path: "/not%found", view: NotFound}
    ]

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path,
        }
    })
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)
    if(!match){
        match = {
            route: routes[0],
            isMatch: true,
        }
    }

    const view = new match.route.view()
    document.getElementById("app").innerHTML = String.toString(view.getHTML())
    console.log(match.route.view)
}

export { router }