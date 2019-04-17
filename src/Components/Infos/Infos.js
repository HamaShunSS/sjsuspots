import React from 'react';
import CardList from './InfosCardList'; //child
import Scroll from '../Scroll';

class Infos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };

    }

    componentDidMount() {
        fetch('https://spots-for-sjsu-students.herokuapp.com/places',
            {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    category: this.props.category
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
        return (
            <div className="cat">
                <div className="pv4" >
                    <label className="fl pv4 w-100 w-100-ns tc db fw6 lh-copy f2">オススメの場所です</label>
                </div>
                <Scroll>
                    <CardList infos={filterdInfos} />
                </Scroll>
            </div>
        );
    }
}


export default Infos;