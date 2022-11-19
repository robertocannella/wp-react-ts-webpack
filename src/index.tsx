import React from "react";
import { createRoot } from 'react-dom/client';
import {EventComponent} from "./events/EventComponent";




const App = () => {
    return <div>
        <h1> A headless Wordpress site.</h1>
        <EventComponent/>
       </div>;
}


const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
