import React from 'react';

class ImportFileWithExtensition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div>
                Luôn sử dụng khai báo đầy đủ khi import file.
                
                import './images/Avatar.jpg';
                import './index.css';

            </div>
        )
    }
}

export default ImportFileWithExtensition;