import React from 'react';

var content = `hello
I'm 
multi
line
`;

function MultiLine() {
    return(
        <div>
            {content}
        </div>
    );
};

export default MultiLine;