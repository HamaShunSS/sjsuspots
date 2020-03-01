import React from 'react';

const FontAwesome = require('react-fontawesome');

const About = ({ onRouteChange }) => {
    return (
        <div className="ma3-ns ma2">
            <label className="moji db b pv3 lh-copy f3 mt4 mt5-ns ph4" htmlFor="name">Recotto</label>
            <p className="h3-ns f4 h6 mv2">
                ~Discover authentic information~
            </p>
            <p className="h3-ns h6 mv4">
                Recotto is a place that people discover authentic restaurants shared by other people who have authentic taste buds

            </p>

            <p className='b f3 mt4 mt6 mb3'>How to use</p>
            <div>
                <div className='tc pa1 '>
                    <p className='b mv2 mv4-ns f4'>
                        <FontAwesome
                            className='super-crazy-colors'
                            name='search'
                            size='1x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />{' '}
                        Discover:</p>
                    <p className='tc mv2 mv4-ns'>1. Choose the area</p>
                    <p className='tc mv2 mv4-ns'>2. Choose the category</p>
                </div>
                <div className='push pa1 tc '>
                    <p className='b mv2 mv4-ns f4'>
                        <FontAwesome
                            className='super-crazy-colors'
                            name='share'
                            size='1x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />{' '}Share:</p>
                    <p className='tc mv2 mv4-ns'>1. Login</p>
                    <p className='tc mv2 mv4-ns'>2. Share your experience!</p>
                </div>

                <div className='ma7-ns mv5'>
                    <button onClick={() => onRouteChange('/')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">Back to home</button>
                </div>
            </div>
        </div>
    );
}


export default About;