import "semantic-ui-css/semantic.min.css";

import { Navigate, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import Layout from "./components/Layout";
import { Routes } from "react-router";

const Create = lazy(() => import("./features/create/Create"));
const Play = lazy(() => import("./features/play/Play"));

const App: React.FC = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/create" element={<Create />} />
                    <Route path="/play" element={<Play />} />
                    <Route path="/" element={<Navigate to="/play" replace />} />
                    <Route path="*" element={<Navigate to="/play" replace />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default App;
