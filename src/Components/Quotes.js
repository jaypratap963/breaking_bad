import React, { useEffect, useState } from 'react'
import './Quotes.css';
function Quotes({ characterDetail }) {
    const [quotes, setQuotes] = useState([]);
    console.log(characterDetail.name)

    useEffect(() => {
        getQuotes();
    }, [])

    const getQuotes = async () => {
        const Name1 = characterDetail.name.split(' ')[0];
        const Name2 = characterDetail.name.split(' ')[1];
        const response = await fetch(`https://www.breakingbadapi.com/api/quote?author=${Name1}+${Name2}`);
        const data = await response.json();
        setQuotes(data);
    }
    console.log(quotes.length)
    return (
        <div className="quotes_card">
        <div className="quotes_card_header">Quotes</div>
            {quotes.length===0 && <div className="quotes_card_detail">This Character has no quotes</div>
            }
            {quotes.map((quote) => (
                <div className="quotes_card_detail"><q>{quote.quote}</q></div>
            ))}
        </div>
    )
}

export default Quotes
