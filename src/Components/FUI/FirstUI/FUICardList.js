import React from 'react';
import Card from "./FUICard";

const FUICardList = ({infos, changeAuthentic, changeNotAuthentic, changeGood, changeBad, authentic, onRouteChange, onSpotIdChange, onButtonSubmit, onButtonSubmitW, onSubmitForm, onCommentsChange}) => {
    const makeNewOneFirst = infos.sort(
        function compareFunc(a,b){
            return (a.id < b.id);
        }
    );

    //Authentic 多い順
    const filterdInfos = infos.sort(function(a,b){
        if(a.authentic.length<b.authentic.length) return 1;
        if(a.authentic.length > b.authentic.length) return -1;
        return 0;
    });
    console.log(filterdInfos)

    return(
        <div>
            {
                infos.map((user, i) => {
                    return (
                        <Card
                            info={filterdInfos[i]}  changeAuthentic={changeAuthentic} changeNotAuthentic={changeNotAuthentic} changeGood={changeGood} changeBad={changeBad} authentic={authentic} onRouteChange={onRouteChange} onSpotIdChange={onSpotIdChange} onSubmitForm={onSubmitForm} onCommentsChange={onCommentsChange}
                            //元々　infos[i]
                        />
                    );
                })
            }
        </div>
    );
}

export default FUICardList;