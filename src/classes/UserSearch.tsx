import React, {Component} from "react";

interface User {
    name: string;
    age: number;
}
interface UserSearchProps {
    users: User[]
}
interface UserSearchState {
    name:string;
    user: {name:string,age: number}| undefined;
}

export class UserSearch extends Component<UserSearchProps> {
   state:UserSearchState = {
     name: '',
     user: undefined
   };
   onClick = () => {
       const foundUser = this.props.users.find((user)=>{
           return user.name === this.state.name;
       })
       this.setState({user: foundUser});
   }
   render() {
        const {name, user} = this.state;
       return (
           <div>

               <h3>User Search</h3>
               <input value={name}
                      onChange={(e)=>this.setState({name: e.target.value})}
               />
               <button onClick={this.onClick}>Search</button>
               <div>
                   {user && user.name /* Only display if user is defined */}
                   {user && user.age /* Only display if user is defined */}
               </div>
           </div>
       )
   }
}