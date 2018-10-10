import React from 'react';

const User = props => {
    return (
        <div className='row'>
            <div className='col-md-12'>
                { props.email }         
                <button className='btn btn-sm btn-danger ml-2' onClick={props.logout}>
                    Sair
                </button>
            </div>
        </div>
    )
}

export default User;