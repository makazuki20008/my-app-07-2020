import React from 'react';

const numbers = [1,2,3,4,5,6,7,8,9];

function MapReact() {
    return(
        <div>
            {numbers.map((e) => (<div>{e}</div>))}
        </div>
    )
}

export default MapReact;

// su dung map de thuc hien cho tung phan tu con
// numbers.map((bien dac trung cho doi tuong con) => <div>{ten dac trung cho doi tuong con}</div>)
// bumbers.map(dieu gi)
// dieu gi: la mot function react ben trong no la function gido(doituongcon) { return ( <div>{doituongcon}</div> ) }
// dieu gi: khi dung pure function (doituongcon)=> (<div>{doituongcon}</div>)
// dieu gi: khi pure function rut gon cach viet (doituongcon) => <div>{doituongcon}</div>
// boi vi doi tuong trong ngoac () chi la jsx cho nen khong can dung den { }