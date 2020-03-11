import React from 'react';




const CardUsersB = ({ user,
                      onCommentsChangeB,
                        onDeleteUser,
                      email,
                        status,
                        onSubmitBackUserName,
                        onSubmitBackStatus,
                        onSubmitBackEmail,
                        onSubmitBackCountry,
                        onIsSignedInChange,
                        onRouteChange
                  } ) => {
    console.log('user (U) is ', user);
    if (status === 'mas') {
        return(
            <div className='tc bg-white-60 dib ma2-ns mh2 mv1 bw2 grow-ns shadow-5 w5-ns br2'>
                <div className="black tc">
                    <div className="pa3 tl">
                        <label className="db fw6 lh-copy f7" htmlFor="name">User Name</label>
                        <h4 className='f7'>{user.username}</h4>
                        <input
                            className="pa1 input-reset bg-white hover-bg-black hover-white br2 w-100 f7"
                            type="text"
                            name="comments"
                            id="comments"
                            placeholder= 'User Name'
                            onChange={onCommentsChangeB}
                        />
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                onClick={() => {onSubmitBackUserName(user.id);}} >User Name 変更</button>
                        <label className="db fw6 lh-copy f7" htmlFor="name">Status</label>
                        <h4 className='f7'>{user.status}</h4>
                        <input
                            className="pa1 input-reset bg-white hover-bg-black hover-white br2 w-100 f7"
                            type="text"
                            name="status"
                            id="status"
                            placeholder= 'Status'
                            onChange={onCommentsChangeB}
                        />
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                onClick={() => {onSubmitBackStatus(user.id);}} >Status 変更</button>
                        <label className="db fw6 lh-copy f7" htmlFor="name">Email</label>
                        <p className="f7">{user.email}</p>
                        <input
                            className="pa1 input-reset bg-white hover-bg-black hover-white br2 f7 w-100"
                            type="text"
                            name="comments"
                            id="comments"
                            placeholder= 'Email'
                            onChange={onCommentsChangeB}
                        />
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                onClick={() => {onSubmitBackEmail(user.id);}} > Email変更</button>
                        <p className="">
                            <label className="db fw6 lh-copy f7" htmlFor="name">Country</label>
                            <p className="f7"> {user.country}</p></p>
                        <input
                            className="pa1 input-reset bg-white hover-bg-black hover-white f7 br2 w-100"
                            type="text"
                            name="country"
                            id="country"
                            placeholder= 'Country'
                            onChange={onCommentsChangeB}
                        />
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                onClick={() => {onSubmitBackCountry(user.id);}} > Country変更</button>
                        <label className="db fw6 lh-copy f7" htmlFor="name">Login</label>
                        <button className="btnBa b mb3 ph2 pv1 white br2 pointer f7"
                                onClick={() => {onIsSignedInChange(user.username, user.email, user.country, user.status, user.id); onRouteChange('/'); console.log(user.username, user.email, user.country, user.status, user.id)}} >Log in</button>

                        <div>
                            <label className="db fw6 lh-copy f7" htmlFor="name">データを消す</label>
                            <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                    onClick={() => {onDeleteUser(user.id);}} >データ消去</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardUsersB;