import React from 'react';
import Card from "./CardForB";
import CardList from "./GUIforMaster";


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
                          onCommentsChangeB,
                          onDeleteInfo,
                          onSubmitFormBackUserName,
                          onSubmitFormBackCountry,
                          onSubmitFormBackEnglish,
                          onSubmitFormBackDate,
                          status,
                          email,

                          changeComment,
                          changeCountryOfSpot
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
                            onDeleteInfo={onDeleteInfo}
                            email={email}
                            status={status}
                            onSubmitFormBackUserName={onSubmitFormBackUserName}
                            onSubmitFormBackCountry={onSubmitFormBackCountry}
                            onSubmitFormBackEnglish={onSubmitFormBackEnglish}
                            onSubmitFormBackDate={onSubmitFormBackEnglish}

                            changeComment={changeComment}
                            changeCountryOfSpot={changeCountryOfSpot}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardListForB;