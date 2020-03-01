import React from 'react';
import { Link } from 'react-router-dom';
const FontAwesome = require('react-fontawesome');





// const field = '';
// function setField(res){
//     return field = res
// }
//
// function bashoDisplay(){
//     if (field === '') {
//         return 'All Regions'
//     }　else
//         return this.state.searchfield
// }

const Navigation = ({ onRouteChange, isSignedIn, username, onMenuChange, menu}) => {
    // if (isSignedIn === 'yes') {
    //     return (
    //         <nav style={{color: 'white', display: 'flex'}} className='w-100 w-100-ns bg-dark'>
    //
    //             <div className="ma2 ma3-ns">
    //                 {/*ラウト変更可能時*/}
    //                 {/*<Link to="/about" className='moji b f4 pv1 ma3-ns pv2-ns'>Recotto</Link>*/}
    //                 {/*<label className=' f5 ma3 mv4-ns'>{username}</label>*/}
    //
    //                 <label onClick={() => onRouteChange('about')} className='moji b f4 pv1 ma3-ns pv2-ns'>Recotto</label>
    //                 <label className=' f5 ma3 mv4-ns'>{username}</label>
    //             </div>
    //             <div className="ml4 ml7-ns">
    //             </div>
    //             <div className="ml7-ns">
    //             </div>
    //             <div style={{}} className="push ma2">
    //                 {/*ラウト変更可能時*/}
    //                 {/*<Link to="/form" className='fl dim btnS b tc ma2 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br-pill pointer f6'>シェア</Link>*/}
    //                 {/*<Link to="/" className='fl dim btnS b tc ma2 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br-pill pointer f6'>ホーム</Link>*/}
    //                 {
    //                     isSignedIn === 'yes' &&
    //                     <button onClick={() => onRouteChange('form')} className='fl dim btnS b tc ma2 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br-pill pointer f6'>Share</button>
    //                 }
    //                 <button onClick={() => onRouteChange('/')} className='fl dim btnS b tc ma2 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br-pill pointer f6'>Home</button>
    //             </div>
    //
    //         </nav>
    //     );
    // }
    return (
        <nav style={{color: 'white', display: 'flex'}} className='w-100 w-100-ns bg-dark'>
            <div className="ma2 ma2-ns">
                {/*ラウト変更可能時*/}
                {/*<Link to="/about" className='moji b f4 pv1 ma3-ns pv2-ns'>Recotto</Link>*/}
                {/*<label className=' f5 ma3 mv4-ns'>{username}</label>*/}

                <label onClick={() => onRouteChange('about')} className='moji b f4 pv1 ma3-ns'>Recotto</label>
                <label className='ml4 f5 ma2 ma3-ns'>
                    {
                        isSignedIn === 'yes' &&
                        <FontAwesome
                            className='super-crazy-colors'
                            name='user-circle'
                            size='1x'
                            style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                        />
                    }
                    {' '}{username}
                    </label>
            </div>
            <div className="ml3-ns">
            </div>
            <div className="ml3-ns">
            </div>
            <div style={{}} className="push ma2 mb2 ma2-ns mb2-ns">
                {/*/!*ラウト変更可能時*!/*/}
                {/*/!*<Link to="/userLogIn" className='fl dim btnS b tc ma2 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br-pill pointer f6'>シェア</Link>*!/*/}
                {/*/!*<Link to="/" className='fl dim btnS b tc ma2 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br-pill pointer f6'>ホーム</Link>*!/*/}

                {/*{*/}
                    {/*isSignedIn === 'yes' &&*/}
                    {/*<button onClick={() => onRouteChange('form')} className='fl dim btnS b tc ma2 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br-pill pointer f6'>Share</button>*/}
                {/*}*/}
                {/*{*/}
                    {/*isSignedIn === '' &&*/}
                    {/*<button onClick={() => onRouteChange('userLogIn')} className='fl dim btnS b tc ma2 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br-pill pointer f6'>Share</button>*/}
                {/*}*/}

                {/*<button onClick={() => onRouteChange('/')} className='fl dim btnS b tc ma2 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br-pill pointer f6'>Home</button>*/}

                {
                    menu === 'no' &&
                    <button onClick={() => onMenuChange('yes')} className='fl dim btnS b tc ma1 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br2 pointer f6'><FontAwesome
                        className='super-crazy-colors'
                        name='bars'
                        size='1x'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    /> </button>
                }
                {
                    menu === 'yes' &&
                    <button onClick={() => onMenuChange('no')} className='fl dim btnS b tc ma1 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br2 pointer f6'><FontAwesome
                        className='super-crazy-colors'
                        name='times'
                        size='1x'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    /> </button>
                }


            </div>

        </nav>
    );
}

export default Navigation;