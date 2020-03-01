import React from 'react';
import Card from "./Card";


const CardList = ({infos,
                      onSubmitFormBackComments,
                      onCommentsChangeB,
                      onDeleteInfo,
                      onSubmitFormBackCountry,
                      onSpotIdChange,
                          status,
                          email
                      }) => {
    return(
        <div>
            {
                infos.map((user, i) => {
                    return (
                        <Card
                            info={infos[i]}
                            onSubmitFormBackComments={onSubmitFormBackComments}
                            onCommentsChangeB={onCommentsChangeB}
                            onDeleteInfo={onDeleteInfo}
                            onSubmitFormBackCountry={onSubmitFormBackCountry}
                            onSpotIdChange={onSpotIdChange}
                            email={email}
                            status={status}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;