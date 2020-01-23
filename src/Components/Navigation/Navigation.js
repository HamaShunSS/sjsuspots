import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = ({ onRouteChange, isSignedIn, username }) => {
    if (isSignedIn === 'yes') {
        return (
            <nav style={{color: 'white', display: 'flex'}} className='w-100 w-100-ns bg-dark'>

                <div className="ma2 ma3-ns">
                    {/*ラウト変更可能時*/}
                    {/*<Link to="/about" className='moji b f4 pv1 ma3-ns pv2-ns'>Recotto</Link>*/}
                    {/*<label className=' f5 ma3 mv4-ns'>{username}</label>*/}

                    <label onClick={() => onRouteChange('about')} className='moji b f4 pv1 ma3-ns pv2-ns'>Recotto</label>
                    <label className=' f5 ma3 mv4-ns'>{username}</label>
                </div>
                <div className="ml4 ml7-ns">
                </div>
                <div className="ml7-ns">
                </div>
                <div style={{}} className="push ma2">
                    {/*ラウト変更可能時*/}
                    {/*<Link to="/form" className='fl dim btnS b tc ma2 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br-pill pointer f6'>シェア</Link>*/}
                    {/*<Link to="/" className='fl dim btnS b tc ma2 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br-pill pointer f6'>ホーム</Link>*/}

                    <button onClick={() => onRouteChange('form')} className='fl dim btnS b tc ma2 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br-pill pointer f6'>Share</button>
                    <button onClick={() => onRouteChange('/')} className='fl dim btnS b tc ma2 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br-pill pointer f6'>Home</button>
                </div>

            </nav>
        );
    }
    return (
        <nav style={{color: 'white', display: 'flex'}} className='w-100 w-100-ns bg-dark'>

            <div className="">
                {/*ラウト変更可能時*/}
                {/*<Link to="/about" className='moji b f4 pv1 ma3-ns pv2-ns'>Recotto</Link>*/}
                    <h3 onClick={() => onRouteChange('about')}  className='moji ma3 mv4-ns'>Recotto</h3>
            </div>
            <div className="ml4 ml7-ns">
            </div>
            <div className="ml7-ns">
            </div>
            <div style={{}} className="push ma2">
                {/*ラウト変更可能時*/}
                {/*<Link to="/userLogIn" className='fl dim btnS b tc ma2 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br-pill pointer f6'>シェア</Link>*/}
                {/*<Link to="/" className='fl dim btnS b tc ma2 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br-pill pointer f6'>ホーム</Link>*/}
                <button onClick={() => onRouteChange('userLogIn')} className='fl dim btnS b tc ma2 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br-pill pointer f6'>Share</button>
                <button onClick={() => onRouteChange('/')} className='fl dim btnS b tc ma2 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br-pill pointer f6'>Home</button>
            </div>

        </nav>
    );
}

export default Navigation;