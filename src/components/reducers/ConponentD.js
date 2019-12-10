import React,{useContext} from 'react';
//import { userContext } from '../../App';
// import ComponentB from './ComponentB';
import {countContext} from '../../App'

function ComponentD() {

const cntContext = useContext(countContext)
return (
<div>
      Component_D_via_C_Count: {cntContext.countState}
      <button onClick={() => cntContext.countDispatch('increment')}>Increment</button>  
      <button onClick={() => cntContext.countDispatch('decrement')}>Decrement</button>  
      <button onClick={() => cntContext.countDispatch('reset')}>Reset</button>  
</div>
   
);

}
export default ComponentD;