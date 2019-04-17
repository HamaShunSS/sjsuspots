import React from 'react';

const Contact = ({ onRouteChange }) => {
    return (
        <nav style={{color: 'white', display: 'flex'}} className='fl w-100 w-100-ns tc bg-dark-gray mt7-ns { background-color: #333333 }'>
            <div className="ph4">
                <p className="b f3">All For One</p>
                <p className="f5">〜スポット〜</p>
                <p className="f5">サンノゼのオススメのスポットを紹介</p>
                <p className="f6">Made by サンノゼの先輩方</p>
            </div>
            <div className="ph4">
                <p className="b f3">質問・連絡先</p>
                <p className="f5">Location: 1 Washington Sq, San Jose, CA 95192</p>
                <p className="f6">Email: shunsuke.hama@sjsu.edu</p>
            </div>
        </nav>
    );
}

export default Contact;