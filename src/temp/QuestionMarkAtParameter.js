import React from 'react';

function QuestionMarkAtParameter(data) {
    var a = this.data.param?.value;
    return(
        <div>
            {a}
        </div>
    )
}

export default QuestionMarkAtParameter;
