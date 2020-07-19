import React from 'react';

var obj = {
    "results":[
       {
         "id":"460",
         "name":"Widget 1",
         "loc":"Shed"
       },{
         "id":"461",
         "name":"Widget 2",
         "loc":"Kitchen"
       }]
 };

var valuesWith460 = obj.results.filter(function(val) {
    return val.id === "460";
});

class QueryObject extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            object: valuesWith460
        }
    }

    

    render() {
        return(
            <div>
                { valuesWith460.map(x=>{return (<p>{x.id}-{x.name}-{x.loc}</p>)}) }
            </div>
        )
    }
}

export default QueryObject;