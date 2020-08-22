import React, { useState, useEffect }  from 'react';

function ReactjsHookBasic() {
    const [hook, setHook] = useState(0);

    useEffect(() => {
        setHook('15');
    });
    
    return(
        <div>Reactjs Hook basic {hook}</div>
    );
}

export default ReactjsHookBasic;