import {Route, Routes} from "react-router-dom";
import {PublicRouter} from "./Routes.ts";



const AppRouter = () => {
    return (
        <>


            <Routes>
                {PublicRouter.map((el)=>{
                    return(
                        <Route path={el.path} element={<el.component/>}>
                        </Route>
                    )
                })}
            </Routes>
        </>
    );
};

export default AppRouter;