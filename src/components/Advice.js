import React from 'react';
import '../styles/Advice.css'
const Advice = (props) => {
    return (

        <article className='advice'>
            <h1>{props.id}</h1>

            <p>Strona w budowie. Zapraszam wkrótce ;)</p>
        </article>
    );
}

export default Advice;

