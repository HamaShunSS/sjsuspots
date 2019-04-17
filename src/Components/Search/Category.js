import React from 'react';
import List from '../LIst'; //child
import Scroll from '../Scroll'

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }

    render() {
        return (
            <div className="fl w-100 w-100-ns tc">
                <div className="pv6 fl w-100 w-100-ns tc">
                    <label className="fl w-100 w-100-ns tc db fw6 lh-copy f1">スポット</label>
                    <label className="fl w-100 w-100-ns tc db pv2 fw6 lh-copy f">〜サンノゼのオススメのスポットを紹介〜</label>
                </div>
                <p></p>
                <label className="fl w-100 w-100-ns tc db fw6 lh-copy f3" htmlFor="name">↓↓カテゴリーから選んでね！↓↓</label>
                <Scroll>
                    <List  onRouteChange={this.props.onRouteChange} loadCategory={this.props.loadCategory}/>
                </Scroll>
            </div>
        );
    }
}


export default Category;