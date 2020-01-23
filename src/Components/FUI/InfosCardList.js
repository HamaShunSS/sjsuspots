import React from 'react';
import Card from "./InfosCard";

const CardList = ({infos, onButtonSubmit, onButtonSubmitW, onSubmitForm, onCommentsChange}) => {
    const funcy = infos.sort(
        function compareFunc(a,b){
            return (a < b);
        }
    );　
    return(
        <div>
            {　
                infos.map((user, i) => {
                    return (
                        <Card
                            info={funcy[i]} onButtonSubmit={onButtonSubmit} onButtonSubmitW={onButtonSubmitW} onSubmitForm={onSubmitForm} onCommentsChange={onCommentsChange}
                            //元々　infos[i]
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;