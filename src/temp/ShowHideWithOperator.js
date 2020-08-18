import React, {useState} from 'react';

// {condition && (<div></div>)}
// {condition ? true : false}
function ShowHideWithOperator() {
    let [isShow,setIsShow] = useState(false);
    function clickHandle() {
        setIsShow(!isShow);
    }
    return(
        <div>
            ShowHide<br/>
        { isShow && (
            <div>Can show</div>
          )}
          <button onClick={clickHandle}>{isShow?'Hide':'Show'}</button>
        </div>
    )
}

export default ShowHideWithOperator;