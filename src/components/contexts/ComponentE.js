import React,{useContext} from 'react';
import ComponentF from './ComponentF';
import {userContext} from '../../App'
function ComponentE() {

    const user=useContext(userContext);
return (
<div>
    <p>{user}</p>
    <ComponentF/>
</div>
);

}
export default ComponentE;
