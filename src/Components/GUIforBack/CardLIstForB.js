import React from 'react';
import Card from "./CardForB";


const CardListForB = ({infos,
                          onButtonSubmit,
                          onButtonSubmitW,
                          onButtonSubmitD,
                          onButtonSubmitWD,
                          onSubmitForm,
                          onCommentsChange,
                          onSubmitFormBackComments,
                          onSubmitFormBackURL,
                          onSubmitFormBackName,
                          onSubmitFormBackLocation,
                          onSubmitFormBackPrice,
                          onSubmitFormBackCategory,
                          onCommentsChangeB
}) => {
    return(
        <div>
            {
                infos.map((user, i) => {
                    return (
                        <Card
                            info={infos[i]}
                            onButtonSubmit={onButtonSubmit}
                            onButtonSubmitW={onButtonSubmitW}
                            onButtonSubmitD={onButtonSubmitD}
                            onButtonSubmitWD={onButtonSubmitWD}
                            onSubmitFormBackComments={onSubmitFormBackComments}
                            onSubmitFormBackURL={onSubmitFormBackURL}
                            onSubmitFormBackName={onSubmitFormBackName}
                            onSubmitFormBackLocation={onSubmitFormBackLocation}
                            onSubmitFormBackPrice={onSubmitFormBackPrice}
                            onSubmitFormBackCategory={onSubmitFormBackCategory}
                            onCommentsChange={onCommentsChange}
                            onCommentsChangeB={onCommentsChangeB}

                        />
                    );
                })
            }
        </div>
    );
}

export default CardListForB;