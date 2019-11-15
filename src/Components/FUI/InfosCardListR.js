import React from 'react';
import CardR from "./InfosCardR";


const CardListR = ({infos, onButtonSubmit, onButtonSubmitW, onSubmitForm, onCommentsChange}) => {
    return(
        <p>
            {
                infos.map((user, i) => {
                    return (
                        <CardR
                            info={infos[i]} onButtonSubmit={onButtonSubmit} onButtonSubmitW={onButtonSubmitW} onSubmitForm={onSubmitForm} onCommentsChange={onCommentsChange}
                        />
                    );
                })
            }
        </p>
    );
}

export default CardListR;