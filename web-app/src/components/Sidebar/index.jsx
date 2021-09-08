import React, { useState, useRef } from 'react';
import './styles.css';
import { AiOutlineSearch } from 'react-icons/ai';
import colors from '../../constants/colors';
import ColorSelector from './ColorSelector/ColorSelector';
import CardArea from './CardArea/CardArea';
import { stringify } from 'query-string';
import axios from 'axios';

export default ({ isOpen, openSidebar }) => {

    const filterSearch = useRef({
        name: '',
        colors: []
    });

    const [cardList, setCardList] = useState([]);

    const searchCards = async () => {
        const query = stringify(filterSearch.current, { arrayFormat: 'comma' });
        const { data } = await axios.get(`http://localhost:4000/?${query}`, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        });
        setCardList(data);
    };

    return (
        <div className={`sidebar ${isOpen ? 'opened' : 'closed'}`}>
            {
                !isOpen && 
                <AiOutlineSearch onClick={openSidebar} />
            }
            {
                isOpen && (
                    <>
                        <h2>Search Card</h2>
                        <div className="search">
                            <input 
                                placeholder="name" 
                                onChange={(event) => {
                                    filterSearch.current.name = event.target.value;
                                    console.log(filterSearch);
                                }}
                            />
                            <button onClick={searchCards}>
                                Search
                            </button>
                        </div>
                        <div className="colors">
                            {colors.map(color => {
                                return (
                                    <ColorSelector 
                                        color={color} 
                                        onChange={(color) => {
                                            if(filterSearch.current.colors.includes(color)){
                                                filterSearch.current.colors = filterSearch.current.colors.filter(item => item !== color);
                                            }
                                            else {
                                                filterSearch.current.colors.push(color);
                                            }
                                        }}
                                    />
                                );
                            })}
                        </div>
                        <CardArea 
                            cardList={cardList}
                        />
                    </>
                )
            }
        </div>
    );
}