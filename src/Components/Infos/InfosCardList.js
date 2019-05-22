import React from 'react';
import Card from "./InfosCard";


const CardList = ({infos, onButtonSubmit, onButtonSubmitW, onSubmitForm, onCommentsChange}) => {
    return(
        <div>
            {
                infos.map((user, i) => {
                    return (
                        <Card
                            info={infos[i]} onButtonSubmit={onButtonSubmit} onButtonSubmitW={onButtonSubmitW} onSubmitForm={onSubmitForm} onCommentsChange={onCommentsChange}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;