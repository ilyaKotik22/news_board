import {Route, Routes} from "react-router-dom";
import {PublicRouter} from "./Routes.ts";
import {Header} from "../../entitys/header/Header.tsx";
import {Navigation} from "../../entitys/navigation/Navigation.tsx";



const AppRouter = () => {
    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>
            <Header/>
            <Navigation/>
            <Routes>
                {PublicRouter.map((el)=>{
                    return(
                        <Route path={el.path} element={<el.component/>}>
                        </Route>
                    )
                })}
            </Routes>
        </div>
    );
};

export default AppRouter;