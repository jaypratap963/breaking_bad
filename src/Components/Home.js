import { useEffect, useState } from "react";
import './Home.css'
import Character from './Character'
import header from './header.svg'
import blur_header from './blur_header.svg'
import about from './about.svg';
import Characters from './Characters.svg'
import next from './next.svg'
import previous from './previous.svg'
import Fade from 'react-reveal/Fade';

function Home() {
    const [characters, setCharacters] = useState([]);
    const [value, setValue] =useState(0);
    const Indices =[0, 10 , 20 , 30 , 40 , 50, 60]
    useEffect(() => {
        getCharacters();
    }, []);
    useEffect(()=> {
        getCharacters();
    },[value])
    const handlePrevious = () => {
        if(value === 0){
            setValue(60);
        }
        else{
            setValue(value-10);
        }
    }
    
    const handleNext = () => {
        if(value === 60){
            setValue(0);
        }
        else{
            setValue(value+10);
        }
    }
    
    const getCharacters = async () => {
        const response = await fetch(
            `https://www.breakingbadapi.com/api/characters?limit=10&offset=${value}`
        );
        const data = await response.json();
        setCharacters(data);
    };
    

    return (
        <div className="App">
        <div className="header_class">
        <img src={blur_header} className="blur_header animate_header" />
        <img src={header} className="header" />
        
        </div>
        
        <img src={about} className="about" />
        
        <div className="charac">      
         <div className="rectangle-4"></div>
         <Fade Left>
        <img src={Characters} className="characters animate-enter"/>
        </Fade>
        </div>
        <Fade Left>
        <div className="characterBox">

            {characters.map((character) => (
                <Character character={character} />
            ))}
            </div>
        <div className="pagination">
        <button className="previous_button" onClick={handlePrevious}><img src={previous} height="40px" width="40px" /></button>
        {
            Indices.map((index)=> (
                <button onClick={()=> setValue(index)} className={`pagination_BUTTON ${index===value? 'active_Button': null}`}></button>
            ))
        }
        <button className="next_button" onClick={handleNext}><img src={next} height="40px" width="40px" /></button>
        </div>
        </Fade>
        </div>
    );
}

export default Home