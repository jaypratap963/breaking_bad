import React, { useEffect, useState } from 'react'
import Quotes from './Quotes';
import './CharacterDetail.css';
import heisenberg from './heisenberg.svg';
import Rectangle_9 from './Rectangle_9.svg';
import Detail_column from './Detail_column.svg'
const CharacterDetail = ({ match }) => {
    const [characterDetail, setCharacterDetail] = useState();
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getCharacterDetail();
    }, []);

    const getCharacterDetail = async () => {
        const response = await fetch(
            `https://www.breakingbadapi.com/api/characters/${match.params.characterId}`
        )
        const data = await response.json();
        setCharacterDetail(data[0])
        console.log(data[0])
        setLoading(false);
    }
    if (loading) {
        return (

            <h1 className="Loading">Loading...</h1>

        )
    }


    return (
        
        
        <div className="characterCardDetail">
        <div className="banner">
        <img src={heisenberg} className="heisenberg"/>
         <img src={characterDetail.img} className="character-image" />
            <div className="name1">{characterDetail.name}</div>
            </div>
            
            <div className="some-detail" background-image={Rectangle_9}>
            <div className="rectangle-1"></div>
            <img src={Detail_column} className="detail_column"/>
            <div className="details">
            {characterDetail.birthday === "Unknown" && <div className="card-details">-----------</div>}
            {characterDetail.birthday !== "Unknown" && <div className="card-details">{characterDetail.birthday}</div>}
            <div className="card-details">
            
            <div className="occBreaking">
            {characterDetail.occupation.map((occ) => (
                <div key={occ} className="occupation">&nbsp;{occ} |</div>
            ))}
            </div>
            </div>
            <div className="card-details">{characterDetail.nickname}</div>
            <div className="card-details">
            <div className="seasonapp">
            {
                characterDetail.appearance.map((appear) => (
                    <div key={appear} className="season">&nbsp;season {appear} |</div>
                ))
            }
            </div>
            </div>
            <div className="card-details">{characterDetail.portrayed}</div>
            <div className="card-details">{characterDetail.status}</div>
            
            
            
            </div>
            </div>
            
            <Quotes characterDetail={characterDetail} />
            
        </div>
        
    )
}

export default CharacterDetail
