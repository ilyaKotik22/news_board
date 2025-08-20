import Home from "../../pages/Home.tsx";
import ItemPage from "../../pages/ItemPage.tsx";
import {GeographyPage} from "../../pages/Geography.tsx";
import {TopicPage} from "../../pages/Topic.tsx";
import Auth from "../../pages/Auth.tsx";

export const PublicRouter =[
    {
        path: '/',
        component: Home
    },
    {
        path: "/auth",
        component: Auth
    },
    {
        path: "/item/:id",
        component: ItemPage
    },
    {
        path: "/topic",
        component: TopicPage
    },
    {
        path: "/geography/:name",
        component: GeographyPage
    },

]