import React from 'react';

var a, b, x;
a =5; b = 14;
x = (-b)/a;

const input = (
    <div>
        <input name="a" placeholder="a" value={a}/><input name="x" placeholder="x" value={x}/>+<input name="b" placeholder="b" value={b}/> = 0
    </div>
);

function Tinh() { 
    alert("x = " + (-b)/a + "\n Cảm ơn bạn đã sử dụng!");
}

const KetQua = (
    <button onClick={Tinh}>Tinh</button>
);

function PTBac1 (){
    return(
        <div>
            <input name="a" placeholder="a" value={a}/><input name="x" placeholder="x" value="x"/>+<input name="b" placeholder="b" value={b}/> = 0 <br/>
            <button onClick={Tinh}>Tinh</button>
        </div>
        
    );
};

export default PTBac1;