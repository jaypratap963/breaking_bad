import React from 'react'
import { Link } from 'react-router-dom'
import './Character.css'
export default function Character({ character }) {
    return (
        <div className="characterCard animate-enter">
        <div className="overlap-group">
        <div className="rectangle-5"></div>
        <div className="rectangle-7">
            <Link to={`character/${character.char_id}`} >
                <div className="name">{character.name}</div>
                <div className="characterimg-div">
                <img src={character.img} className="characterimg" alt={character.name} />
                </div>
                

                <div className="text-1">
                {
                    character.occupation.map((occ)=> (
                        <p key={occ}>{occ}</p>
                    ))
                }
                </div>
                {character.birthday !=="Unknown" &&
                <div className="dob">{character.birthday}</div>
                }
                <div className="deceased">{character.status}</div>
            </Link>
            </div>
        
            </div>
        </div>

    )
}
