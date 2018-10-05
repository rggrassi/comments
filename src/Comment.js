import React from 'react';

const Comment = ({ c }) =>  {

    const email = c.email;
    return (
        <div>
            {c.comment} 
            <br />
            Enviado por: {email || ''}
            <hr />
        </div>
    )
}

export default Comment;