import React from 'react';
import Card from "./SpotCard";

const SpotCardList = ({infos, changeAuthentic, changeNotAuthentic, changeGood, changeBad, authentic, onRouteChange, onSpotIdChange, onButtonSubmit, onButtonSubmitW, onSubmitForm, onCommentsChange}) => {
    // 新着順
    const makeNewOneFirst = infos.sort(
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
                            info={makeNewOneFirst[i]} changeAuthentic={changeAuthentic} changeNotAuthentic={changeNotAuthentic} changeGood={changeGood} changeBad={changeBad} authentic={authentic} onRouteChange={onRouteChange} onSpotIdChange={onSpotIdChange} onSubmitForm={onSubmitForm} onCommentsChange={onCommentsChange}
                            //元々　infos[i]
                        />
                    );
                })
            }
        </div>
    );
}

export default SpotCardList;