import React from 'react';
import { Link } from 'react-router-dom';
const FontAwesome = require('react-fontawesome');


const Menu = ({ onRouteChange, isSignedIn, username, onMenuChange, loadisSignedInChange, onIsSignedInChange}) => {
    return (
        <div style={{color: 'white', display: 'flex'}} className='w-100 w-100-ns bg-dark'>

                                <ul className=' tc w-100 w-100-ns '>
                                    <li className=' b link tc pv2 bb' onClick={() => {onRouteChange('/'); onMenuChange('no')}}>
                                        <FontAwesome
                                            className='super-crazy-colors'
                                            name='home'
                                            size='1x'
                                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                        /> Home</li>
                                    {
                                        isSignedIn === 'yes' &&
                                        <li className=' b link tc pv2 bb' onClick={() => {onRouteChange('form'); onMenuChange('no')}}>
                                            <FontAwesome
                                                className='super-crazy-colors'
                                                name='share'
                                                size='1x'
                                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                            /> Share</li>
                                    }
                                    {
                                        isSignedIn === '' &&
                                        <li className=' b link tc pv2 bb' onClick={() =>{onRouteChange('userLogIn'); onMenuChange('no')}}>
                                            <FontAwesome
                                                className='super-crazy-colors'
                                                name='share'
                                                size='1x'
                                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                            /> Share</li>
                                    }
                                    {
                                        isSignedIn === 'yes' &&
                                        <li className=' b link tc pv2 bb' onClick={() => {onRouteChange('mypage'); onMenuChange('no')}}>
                                            <FontAwesome
                                                className='super-crazy-colors'
                                                name='user-circle'
                                                size='1x'
                                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                            /> My page</li>
                                    }
                                    {
                                        isSignedIn === '' &&
                                        <li className=' b link tc pv2 bb' onClick={() =>{onRouteChange('userLogIn'); onMenuChange('no')}}><FontAwesome
                                            className='super-crazy-colors'
                                            name='user-circle'
                                            size='1x'
                                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                        /> My page</li>
                                    }
                                    {
                                        isSignedIn === 'yes' &&
                                        <li className=' b link tc pv2 bb' onClick={() => {loadisSignedInChange(''); onRouteChange('/'); onMenuChange('no')}}>
                                            <FontAwesome
                                                className='super-crazy-colors'
                                                name='sign-out'
                                                size='1x'
                                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                            /> Log out</li>
                                    }
                                    {
                                        isSignedIn === '' &&
                                        <li className=' b link tc pv2 bb' onClick={() =>{onRouteChange('userLogIn'); onMenuChange('no')}}>
                                            <FontAwesome
                                                className='super-crazy-colors'
                                                name='sign-in'
                                                size='1x'
                                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                            /> Log in</li>
                                    }
                                    {
                                        isSignedIn === '' &&
                                        <li className=' b link tc pv2 bb' onClick={() =>{onRouteChange('userSignUp'); onMenuChange('no')}}>
                                            <FontAwesome
                                                className='super-crazy-colors'
                                                name='user-plus'
                                                size='1x'
                                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                            /> Sign up</li>
                                    }
                                    {/*<li className=' b link tc pv2 bb' onClick={() => {onRouteChange('mypage'); onMenuChange('no'); onIsSignedInChange(*/}
                                        {/*'Shunsuke',*/}
                                        {/*'shun248301@gmail.com',*/}
                                        {/*'Japan',*/}
                                        {/*'mas',*/}
                                        {/*3)}}>Cheat</li>*/}
                                </ul>
        </div>
    );
}

export default Menu;