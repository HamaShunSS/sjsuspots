import React from 'react';




const CardR = ({ info, onButtonSubmit, onButtonSubmitW, onSubmitForm, onCommentsChange} ) => {
    console.log('info is ',info);
    return(
        <h4 className='black bg-white ma1 shadow-5 w-80'>
                <p className="pa1">
                    <h4>{info.region}</h4>
                </p>
        </h4>
    );
}

export default CardR;