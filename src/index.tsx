import React from "react";
import { createRoot } from 'react-dom/client';
import {UserSearch} from "./classes/UserSearch";


const users = [
    {name: 'Sarah', 'age': 20 },
    {name: 'Mike', 'age': 23 },
    {name: 'Charlie', 'age': 32 },
]


const App = () => {
    return <div>
        <h1> A headless Wordpress site.</h1>
        <UserSearch  users={users}/>
       </div>;
}


const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
