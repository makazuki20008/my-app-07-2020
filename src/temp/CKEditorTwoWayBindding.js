import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CKEditor from 'ckeditor4-react';

class CKEditorTwoWayBinding extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            data: '<p>React is really <em>nice</em>!</p>'
        };

        this.handleChange = this.handleChange.bind( this );
        this.onEditorChange = this.onEditorChange.bind( this );
    }

    // dữ liệu từ ckeditor
    onEditorChange( evt ) {
        this.setState( {
            data: evt.editor.getData()
        } );
    }

    handleChange( changeEvent ) {
        this.setState( {
            data: changeEvent.target.value
        } );
    }

    render() {
        return (
            <div>
                <CKEditor 
                    data={this.state.data}
                    onChange={this.onEditorChange} /> {/* nhập liệu ở đây */}
                    
                <label>
                    <span>Change value:</span>
                    <textarea defaultValue={this.state.data} onChange={this.handleChange} /> {/* hiển thị ở đây */}
                </label>
                
                <EditorPreview data={this.state.data} /> {/* hiển thị ở đây */}
            </div>
        );
    }
}

class EditorPreview extends Component {
    render() {
        return (
            <div className="editor-preview">
                <h2>Rendered content</h2>
                <div dangerouslySetInnerHTML={ { __html: this.props.data } }></div> {/* dangerouslySetInnerHTML is props of div*/}
            </div>
        );
    }
}

// check props
EditorPreview.defaultProps = {
    data: ''
};
// check props
EditorPreview.propTypes = {
    data: PropTypes.string
};

export default CKEditorTwoWayBinding;