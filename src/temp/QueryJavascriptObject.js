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

var obj2 = {
    hocsinh1: {
        name: '',
        dob: '',
        parent: {
            father: {
                name: '',
                old: '',
                job: '',
                address: '',
                email: ''
            },
            mother: {
                name: '',
                old: '',
                address: '',
                email: ''
            }
        },
        email: '',
        phonenumber: '',
        social: {
            facebook: {
                name: '',
                link: ''
            },
            twitter: {
                name: '',
                link: ''
            },
            instagram: {
                name: '',
                link: ''
            }
        },
        class: '',
        power: '',
        skill: ''
    },
    hocsinh2: {
        name: '',
        dob: '',
        parent: {
            father: {
                name: '',
                old: '',
                job: '',
                address: '',
                email: ''
            },
            mother: {
                name: '',
                old: '',
                address: '',
                email: ''
            }
        },
        email: '',
        phonenumber: '',
        social: {
            facebook: {
                name: '',
                link: ''
            },
            twitter: {
                name: '',
                link: ''
            },
            instagram: {
                name: '',
                link: ''
            }
        },
        class: '',
        power: '',
        skill: ''
    },
    hocsinh3: {
        name: '',
        dob: '',
        parent: {
            father: {
                name: '',
                old: '',
                job: '',
                address: '',
                email: ''
            },
            mother: {
                name: '',
                old: '',
                address: '',
                email: ''
            }
        },
        email: '',
        phonenumber: '',
        social: {
            facebook: {
                name: '',
                link: ''
            },
            twitter: {
                name: '',
                link: ''
            },
            instagram: {
                name: '',
                link: ''
            }
        },
        class: '',
        power: '',
        skill: ''
    },
    hocsinh4: {
        name: '',
        dob: '',
        parent: {
            father: {
                name: '',
                old: '',
                job: '',
                address: '',
                email: ''
            },
            mother: {
                name: '',
                old: '',
                address: '',
                email: ''
            }
        },
        email: '',
        phonenumber: '',
        social: {
            facebook: {
                name: '',
                link: ''
            },
            twitter: {
                name: '',
                link: ''
            },
            instagram: {
                name: '',
                link: ''
            }
        },
        class: '',
        power: '',
        skill: ''
    },
    hocsinh5: {
        name: '',
        dob: '',
        parent: {
            father: {
                name: '',
                old: '',
                job: '',
                address: '',
                email: ''
            },
            mother: {
                name: '',
                old: '',
                address: '',
                email: ''
            }
        },
        email: '',
        phonenumber: '',
        social: {
            facebook: {
                name: '',
                link: ''
            },
            twitter: {
                name: '',
                link: ''
            },
            instagram: {
                name: '',
                link: ''
            }
        },
        class: '',
        power: '',
        skill: ''
    },
    hocsinh6: {
        name: '',
        dob: '',
        parent: {
            father: {
                name: '',
                old: '',
                job: '',
                address: '',
                email: ''
            },
            mother: {
                name: '',
                old: '',
                address: '',
                email: ''
            }
        },
        email: '',
        phonenumber: '',
        social: {
            facebook: {
                name: '',
                link: ''
            },
            twitter: {
                name: '',
                link: ''
            },
            instagram: {
                name: '',
                link: ''
            }
        },
        class: '',
        power: '',
        skill: ''
    },
    hocsinh7: {
        name: '',
        dob: '',
        parent: {
            father: {
                name: '',
                old: '',
                job: '',
                address: '',
                email: ''
            },
            mother: {
                name: '',
                old: '',
                address: '',
                email: ''
            }
        },
        email: '',
        phonenumber: '',
        social: {
            facebook: {
                name: '',
                link: ''
            },
            twitter: {
                name: '',
                link: ''
            },
            instagram: {
                name: '',
                link: ''
            }
        },
        class: '',
        power: '',
        skill: ''
    },
    hocsinh8: {
        name: '',
        dob: '',
        parent: {
            father: {
                name: '',
                old: '',
                job: '',
                address: '',
                email: ''
            },
            mother: {
                name: '',
                old: '',
                address: '',
                email: ''
            }
        },
        email: '',
        phonenumber: '',
        social: {
            facebook: {
                name: '',
                link: ''
            },
            twitter: {
                name: '',
                link: ''
            },
            instagram: {
                name: '',
                link: ''
            }
        },
        class: '',
        power: '',
        skill: ''
    },
    hocsinh9: {
        name: '',
        dob: '',
        parent: {
            father: {
                name: '',
                old: '',
                job: '',
                address: '',
                email: ''
            },
            mother: {
                name: '',
                old: '',
                address: '',
                email: ''
            }
        },
        email: '',
        phonenumber: '',
        social: {
            facebook: {
                name: '',
                link: ''
            },
            twitter: {
                name: '',
                link: ''
            },
            instagram: {
                name: '',
                link: ''
            }
        },
        class: '',
        power: '',
        skill: ''
    },
    hocsinh10: {
        name: '',
        dob: '',
        parent: {
            father: {
                name: '',
                old: '',
                job: '',
                address: '',
                email: ''
            },
            mother: {
                name: '',
                old: '',
                address: '',
                email: ''
            }
        },
        email: '',
        phonenumber: '',
        social: {
            facebook: {
                name: '',
                link: ''
            },
            twitter: {
                name: '',
                link: ''
            },
            instagram: {
                name: '',
                link: ''
            }
        },
        class: '',
        power: '',
        skill: ''
    },
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
            <div>var objectFilter = obj.results.filter( () => ( val.id === "460")) <br/>
            Result:
                { valuesWith460.map(x=>{return (<p>{x.id}-{x.name}-{x.loc}</p>)}) }
            </div>
        )
    }
}

export default QueryObject;