import React from 'react';
import {Child, ChildAsFC} from './Child';

const Parent = () => {

    return <ChildAsFC color="red" onClick={(color)=>console.log(color)}>
       <div>Hello</div>
    </ChildAsFC>;
}
export default Parent