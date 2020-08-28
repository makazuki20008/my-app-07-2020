import * as React from 'react';

import ModuleCalenderChoose from './ModuleCalenderChoose';

export class FormAddCustomer extends React.Component {

  constructor(props: {}) {
    super(props);
    this.state = {

    };
  }

  public render() {

    return (
        <div>
            <ModuleCalenderChoose></ModuleCalenderChoose>
        </div>
    );
  }

}

export default FormAddCustomer;