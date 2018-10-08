import React from 'react';

const Comment = ({ c }) =>  {

    const email = c.email;
    return (
        <div className='card mt-2'>
            <div className='card-body'>
                {c.comment} 
                <br />
                <span className='text-muted'>
                    Enviado por: {email || ''}
                </span>
            </div>
        </div>
    )
}

export default Comment;