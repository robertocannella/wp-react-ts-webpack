import React from "react";
import { createRoot } from 'react-dom/client';
import {UserSearch} from "./state/UserSearch";

const App = () => {
    return <div>
        <UserSearch/>

        A headless Wordpress site.</div>;
}


const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
