import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {publicRoutes, privateRoutes} from "../router";
const AppRouter = () => {
    const isAuth = false;
    return (
            isAuth ?
                <Routes>
                    {privateRoutes.map((route, key) =>
                        <Route element={route.component}
                               path={route.path}
                               key={key} />
                    )}
                    <Route path='*' element={<Navigate to="/posts" replace />} />
                </Routes>
                :
                <Routes>
                    {publicRoutes.map((route, key) =>
                        <Route element={route.component}
                               path={route.path}
                               key={key} />
                    )}
                    <Route path='*' element={<Navigate to="/login" replace />} />
                </Routes>

        // <Route path='/error' element={<Error/>}
    );
};

export default AppRouter;