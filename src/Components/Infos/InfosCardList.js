import React from 'react';
import Card from "./InfosCard";


const CardList = ({infos}) => {
    return(
        <div>
            {
                infos.map((user, i) => {
                    return (
                        <Card
                            info={infos[i]}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;