import React from "react";
import Parent from "./props/Parent";
import { createRoot } from 'react-dom/client';
import {GuestList} from "./state/GuestList";

const App = () => {
    return <div>
        <GuestList/>

        A headless Wordpress site.</div>;
}


const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
