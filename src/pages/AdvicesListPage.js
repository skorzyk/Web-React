import React from 'react';
import { Link } from 'react-router-dom'
import "../styles/AdvicesListPage.css"

const advices = ["Kontuzje", "Obowiązki dzienne", "Siła ogólna i siła dynamiczna"]

const ProductListPage = () => {

    const list = advices.map(item => (
        <li key={item}>
            <Link to={`/advice/${item}`}>{item}</Link>
        </li>
    ))

    return (
        <div className="advices">
            <h2>Porady:</h2>
            <ul>
                {list}
            </ul>
        </div>
    );
}

export default ProductListPage
