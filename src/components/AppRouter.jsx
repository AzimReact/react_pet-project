import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {routes} from "../router";
const AppRouter = () => {
// const route = useRoutes(routes);

    return (
        <Routes>
            {routes.map((route, key) =>
                <Route element={route.component} path={route.path} key={key} />
            )}
        </Routes>
        // <Route path='/error' element={<Error/>}
        // <Route path='*' element={<Navigate to="/posts" replace />}
    );
};

export default AppRouter;