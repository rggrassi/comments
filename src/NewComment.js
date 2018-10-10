import React, { Component } from 'react';

class NewComment extends Component {

    state = {
        newComment: ''
    }

    handleChange = event => {
        this.setState({ newComment: event.target.value })
    }

    sendComment = () => {
        this.props.sendComment(this.state.newComment);
        this.setState({ newComment: '' })
    }
    
    render() {
        return (
            <div className='row mt-2 mb-3' >
                <div className='col-md-12'>
                    <textarea className='form-control mb-2' value={this.state.newComment} onChange={this.handleChange}></textarea>
                    <button className='btn btn-primary' onClick={this.sendComment}>Enviar</button>  
                </div>
            </div>
        )
    }
}

export default NewComment;