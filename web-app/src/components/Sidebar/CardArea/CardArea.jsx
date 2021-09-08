import React from 'react';
import { useDrag } from 'react-dnd';
import './styles.css';

export default ({ cardList }) => {
    return (
        <div className="card-area">
            {cardList.map(card => {
                const [collected, drag, dragPreview] = useDrag(() => ({
                    type: 'card',
                    item: card
                }));
                const props = (() => {
                        if(collected.isDraging){
                            return {
                                ref: dragPreview
                            }
                        }
                        return {
                            ref: drag,
                            ...collected
                        };
                })();


                return (
                    <div key={card.multiverseId} className="card-container" {...props}>
                        <img
                            className="card"
                            src={card.imageUrl}
                        />
                    </div>
                )
            })}
        </div>
    );
}