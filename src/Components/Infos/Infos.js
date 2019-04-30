import React from 'react';
import CardList from './InfosCardList'; //child
import Scroll from '../Scroll';
import Spinner from 'react-spinner-material';

class Infos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [], //必要
        };

    }

    componentDidMount() {
        fetch('https://spots-for-sjsu-students.herokuapp.com/places',
            {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    category: this.props.category // カテゴリーは List => App => Infos で来ている
                })
            })
            .then(response => response.json())
            .then(informations => this.setState({results: informations})
            );
        console.log('results is ',this.state.results);
    }

    render() {
        const filterdInfos = this.state.results.filter(infos => {
            //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
            return infos
        })
        if (this.state.results.length === 0) {
            return <div className="pt6 pt6-ns">
                <div className="pv4-ns"><h1 className='pv4 pv4-ns'>Loading...</h1></div>
                <div className="ph6-ns tc center pb5-ns">
                    <div className="ph6 ph7-ns tc center pb6">
                        <Spinner class='justify-center pb6 pb6-ns' size={80} spinnerColor={"white"} spinnerWidth={8} visible={true} />
                    </div>
                    <p className="pv7 pv7-ns"> </p>
                    <p className="pv7-ns"> </p>
                </div>

            </div>
        } else {
            return (
                <div className="tc">
                    <div className="pv4 pb4-ns">
                        <label className="fl pv4 w-100 w-100-ns tc db fw6 lh-copy f2">オススメの場所です</label>
                    </div>
                    <Scroll>
                        <CardList infos={filterdInfos}/>
                    </Scroll>
                    <div className="center">
                        <label onClick={() => this.props.onRouteChange('home')} className="fl b tc center ph3 pv3 ma3 grow pointer f4 f4-ns dib"><p className="ph3 pv3 bg-light-green white br-pill grow">カテゴリーに戻る</p></label>
                    </div>
                </div>
            );
        }
    }
}


export default Infos;