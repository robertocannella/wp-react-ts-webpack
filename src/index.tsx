import React from "react";
import Parent from "./props/Parent";
import { createRoot } from 'react-dom/client';

const App = () => {
    return <div>
        <Parent/>

        A headless Wordpress site.</div>;
}


const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
