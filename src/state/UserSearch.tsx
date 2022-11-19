import React, { useState} from "react";


const users = [
    {name: 'Sarah', 'age': 20 },
    {name: 'Mike', 'age': 23 },
    {name: 'Charlie', 'age': 32 },
]

export const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number}|undefined>();


    const onClick = () =>{
        const foundUser = users.find((user)=>{
            return user.name === name;
        })
        setUser(foundUser);
    }
    return (

        <div>

            <h3>User Search</h3>
            <input value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={onClick}>Search</button>
            <div>
                {user && user.name /* Only display if user is defined */}
                {user && user.age  /* Only display if user is defined */}
            </div>
        </div>

    )

}