import Home from "../../pages/Home.tsx";
import ItemPage from "../../pages/[id].tsx";
import TopicsPage from "../../pages/[name].tsx";

export const PublicRouter =[
    {
        path: '/',
        component: Home
    },
    {
        path: "/item/:id",
        component: ItemPage
    },
    {
        path: "/topic/:name",
        component: TopicsPage
    },
]