import React from 'react';
import {userContext} from '../../App';
import ComponentE from './ComponentE';

function ComponentF() {
    return(
        <div>
            <userContext.Consumer>
                {
                    user => {
                        return <div>user userContext value {user}</div>;
                    }
                }
            </userContext.Consumer>
        </div>
    );
}
export default ComponentF;