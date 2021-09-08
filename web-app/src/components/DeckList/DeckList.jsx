import React from 'react';
import './styles.css';
import { useDrop } from 'react-dnd';

export default ({ 
    isSidebarOpen,
    cards, 
    setCards
}) => {

    const [_, drop] = useDrop(() => {
        return {
            accept: 'card',
            drop: (card) => {
                setCards([...cards, card]);
            }
        }
    }, [cards]);

    return (
        <div 
            ref={drop}
            className="deck-area" 
            style={{width: isSidebarOpen ? '70%' : '90%', marginLeft: isSidebarOpen ? '30%' : '10%' }}
        >
            {cards.map(card => {
                return (
                    <div
                        className="deck-card" 
                        style={{
                            backgroundImage: `url(${card.imageUrl})`,
                            backgroundSize: '150px 250px',
                        }}
                    >
                    </div>
                )
            })}
        </div>
    );
}