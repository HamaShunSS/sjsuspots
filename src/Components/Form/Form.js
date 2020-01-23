import React, { Component } from "react";
import Checkbox from "./Checkbox";

const category = ["ラーメン", "食事処", "景色","カフェ","娯楽", "クラブ", "バー", "勉強する場所", "自然","買い物", "美容系","観光","その他"];

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            checkboxes: category.reduce(
                (options, option) => ({
                    ...options,
                    [option]: false
                }),
                {}
            ),
            ramen: '',
            food: '',
            view: '',
            cafe: '',
            hobby:'',
            club: '',
            bar: '',
            study: '',
            nature: '',
            shopping: '',
            beauty:'',
            kankou: '',
            others:'',
            location: '',
            url:'',
            category:'',
            price:'',
            region:'',
            comments: '',
        };
        // console.log(this.state.checkboxes)
    }

    componentDidMount() {
        fetch('https://spots-for-sjsu-students.herokuapp.com/userData',
            {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    region: this.props.region, // カテゴリーは List => App => FUI で来ている
                })
            })
            .then(response => response.json())
            .then(informations => this.setState({results: informations})
            );
    }


    onNameChange = (event) => {
        this.setState({name: event.target.value}) // updated signInEmail from <input />
    }

    onCategoryChange = (event) => {
        this.setState({category: event.target.value}) // updated signInEmail from <input />
    }

    onLocationChange = (event) => {
        this.setState({location: event.target.value}) // updated signInEmail from <input />
    }

    onURLChange = (event) => {
        this.setState({url: event.target.value}) // updated signInEmail from <input />
    }

    onCommentsChange = (event) => {
        this.setState({comments: event.target.value}) // updated signInEmail from <input />
    }

    handleRegionChange = changeEvent => {
        this.setState({
            region: changeEvent.target.value
        });
    };

    handleCategoryChange = changeEvent => {
        this.setState({
            category: changeEvent.target.value
        });
    };

    handlePriceChange = changeEvent => {
        this.setState({
            price: changeEvent.target.value
        });
    };


    onSubmitForm =() => {
        if (this.state.name === '' || this.state.location === '' || this.state.region === '' || this.state.comments === '' ) {
            alert("場所の名前か地域、住所、コメントのどれかに記入漏れがあるようです...");
        } else {
                if (this.props.route === 'form') {
                    this.props.onRouteChange('loading');
                }
                fetch('https://spots-for-sjsu-students.herokuapp.com/register', {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                        name: this.state.name,
                        category: this.state.category,
                        ramen: this.state.checkboxes.ラーメン,
                        food: this.state.checkboxes.食事処,
                        view: this.state.checkboxes.景色,
                        cafe: this.state.checkboxes.カフェ,
                        hobby: this.state.checkboxes.娯楽,
                        club: this.state.checkboxes.クラブ,
                        bar: this.state.checkboxes.バー,
                        study: this.state.checkboxes.勉強する場所,
                        nature: this.state.checkboxes.自然,
                        shopping: this.state.checkboxes.買い物,
                        beauty: this.state.checkboxes.美容系,
                        kankou: this.state.checkboxes.観光,
                        others: this.state.checkboxes.その他,
                        location: this.state.location,
                        url: this.state.url,
                        price: this.state.price,
                        region: this.state.region,
                        comments: this.state.comments,
                        date: new Date(),
                        username: this.props.username,
                        country: this.props.country
                    })
                })
                    .then(response => response.json()) // Get response through json, and get data by ".then"
                    .then(response => {
                        if (response === 'success') {
                            this.props.onRouteChange('thankyou');
                        } else if (response === 'incorrect form submission') {
                            this.props.onRouteChange('sorry');
                        }
                    })
        }
    }


//Check box

    selectAllCheckboxes = isSelected => {
        Object.keys(this.state.checkboxes).forEach(checkbox => {
            // BONUS: Can you explain why we pass updater function to setState instead of an object?
            this.setState(prevState => ({
                checkboxes: {
                    ...prevState.checkboxes,
                    [checkbox]: isSelected
                }
            }));
        });
    };

    selectAll = () => this.selectAllCheckboxes(true); //使わない

    deselectAll = () => this.selectAllCheckboxes(false);

    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;

        this.setState(prevState => ({
            checkboxes: {
                ...prevState.checkboxes,
                [name]: !prevState.checkboxes[name]
            }
        }));
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        Object.keys(this.state.checkboxes)
            .filter(checkbox => this.state.checkboxes[checkbox])
            .forEach(checkbox => {
                console.log(checkbox, "is selected.");
                console.log('the object is like ',this.state.checkboxes);
                console.log('the 食事処 is like ',this.state.checkboxes.食事処);
            });
    };

    createCheckbox = option => (
        <Checkbox
            label={option}
            isSelected={this.state.checkboxes[option]}
            onCheckboxChange={this.handleCheckboxChange}
            key={option}
        />
    );

    createCheckboxes = () => category.map(this.createCheckbox);



    render(){
        return (
            <main className="pa4">
                <div className="fl w-100 w-100-ns tc">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 mt4-ns">
                        <div className="db f2-ns f5 pv5-ns pv3 fl w-100 w-100-ns tc fw6 ph0 mh0">オススメの場所をシェアして下さい！！</div>
                            <label className="tl b db fw6 lh-copy f6" >*エリア:</label>
                            <div className=''>
                                <label className="f7 ph2">
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="San Jose"
                                        checked={this.state.region === "San Jose"}
                                        onChange={this.handleRegionChange}
                                        className="form-check-input tl"
                                    />
                                    <label> </label>
                                    San Jose
                                </label>
                                <label className="f7 ph2">
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="San Francisco"
                                        checked={this.state.region === "San Francisco"}
                                        onChange={this.handleRegionChange}
                                        className="form-check-input"
                                    />
                                    <label> </label>
                                    San Francisco
                                </label>
                                <label className="f7 ph2">
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="Monterey"
                                        checked={this.state.region === "Monterey"}
                                        onChange={this.handleRegionChange}
                                        className="form-check-input"
                                    />
                                    <label> </label>
                                    Monterey
                                </label >
                                <label className="f7 ph2">
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="San Luis Obispo"
                                        checked={this.state.region === "San Luis Obispo"}
                                        onChange={this.handleRegionChange}
                                        className="form-check-input"
                                    />
                                    <label> </label>
                                    San Luis Obispo
                                </label >
                                <label className="f7 ph2">
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="Santa Cruz"
                                        checked={this.state.region === "Santa Cruz"}
                                        onChange={this.handleRegionChange}
                                        className="form-check-input"
                                    />
                                    <label> </label>
                                    Santa Cruz
                                </label>
                                {/*<label className="f7 ph2">*/}
                                    {/*<input*/}
                                        {/*type="radio"*/}
                                        {/*name="react-tips"*/}
                                        {/*value="Berkeley"*/}
                                        {/*checked={this.state.region === "Berkeley"}*/}
                                        {/*onChange={this.handleRegionChange}*/}
                                        {/*className="form-check-input"*/}
                                    {/*/>*/}
                                    {/*<label> </label>*/}
                                    {/*Berkeley*/}
                                {/*</label>*/}
                            </div>
                        <div className="pt5-ns pt2">
                            <label className="b db fw6 lh-copy f6 pt2 tl" htmlFor="">*場所の名前: </label>
                            <input
                                placeholder="ex) Twin Peaks"
                                className='pa2-ns pa2 input-reset hover-black hover-bg-white w-100 w-70-ns btnSS b br2 pointer white f6'
                                type="text"
                                name="name"
                                id="name"
                                onChange={this.onNameChange}
                            />
                        </div>
                        <form>
                            <div className="tc pt4-ns pt3">
                                <div className="">
                                    <div className="col-sm-12 pb4-ns pb1">
                                        <label className="db fw6 lh-copy f6 tl" >カテゴリー: </label>
                                        <div className=''>
                                            <label className="f7 ph2">
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="Restaurants"
                                                    checked={this.state.category === "Restaurants"}
                                                    onChange={this.handleCategoryChange}
                                                    className="form-check-input tl"
                                                />
                                                <label> </label>
                                                レストラン
                                            </label>
                                            <label className="f7 ph2">
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="Cafes"
                                                    checked={this.state.category === "Cafes"}
                                                    onChange={this.handleCategoryChange}
                                                    className="form-check-input"
                                                />
                                                <label> </label>
                                                カフェ
                                            </label>
                                            <label className="f7 ph2">
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="Bars"
                                                    checked={this.state.category === "Bars"}
                                                    onChange={this.handleCategoryChange}
                                                    className="form-check-input"
                                                />
                                                <label> </label>
                                                バー
                                            </label >
                                            <label className="f7 ph2">
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="Clubs"
                                                    checked={this.state.category === "Clubs"}
                                                    onChange={this.handleCategoryChange}
                                                    className="form-check-input"
                                                />
                                                <label> </label>
                                                クラブ
                                            </label>
                                            <label className="f7 ph2">
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="Nature"
                                                    checked={this.state.category === "Nature"}
                                                    onChange={this.handleCategoryChange}
                                                    className="form-check-input"
                                                />
                                                <label> </label>
                                                自然
                                            </label>
                                            <label className="f7 ph2">
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="Parks"
                                                    checked={this.state.category === "Parks"}
                                                    onChange={this.handleCategoryChange}
                                                    className="form-check-input tl"
                                                />
                                                <label> </label>
                                                公園
                                            </label>
                                            <label className="f7 ph2">
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="Amusement"
                                                    checked={this.state.category === "Amusement"}
                                                    onChange={this.handleCategoryChange}
                                                    className="form-check-input"
                                                />
                                                <label> </label>
                                                アミューズメント
                                            </label>
                                            <label className="f7 ph2">
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="Salons"
                                                    checked={this.state.category === "Salons"}
                                                    onChange={this.handleCategoryChange}
                                                    className="form-check-input"
                                                />
                                                <label> </label>
                                                サロン・ビューティー
                                            </label>
                                            <label className="f7 ph2">
                                                <input
                                                    type="radio"
                                                    name="react-tips"
                                                    value="Others"
                                                    checked={this.state.category === "Others"}
                                                    onChange={this.handleCategoryChange}
                                                    className="form-check-input"
                                                />
                                                <label> </label>
                                                その他
                                            </label>
                                        </div>
                                        {/*<div className="tl fl w-100 w-100-ns tc w-50-ns">*/}
                                        {/*<form onSubmit={this.handleFormSubmit}>*/}
                                        {/*{this.createCheckboxes()}*/}
                                        {/*<div className="form-group pv2">*/}
                                        {/*<button*/}
                                        {/*type="button"*/}
                                        {/*// className="btn btn-outline-light-green ph3-ns pv2-ns pa2 bg-light-green grow pointer br-pill mr-2 f6 white"*/}
                                        {/*className='pa2-ns pa1 input-reset hover-white br-pill w-30 w-60-ns btnSS b ba b--white pointer white f6'*/}
                                        {/*onClick={this.deselectAll}*/}
                                        {/*>*/}
                                        {/*全消し*/}
                                        {/*</button>*/}
                                        {/*</div>*/}
                                        {/*</form>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="pt5-ns pt2">
                            <label className="tl db fw6 lh-copy f6 pt2" htmlFor="">*住所: </label>
                            <input
                                placeholder="ex) 501 Twin Peaks Blvd, San Francisco, CA 94114"
                                className='pa2-ns pa2 input-reset hover-black hover-bg-white br2 w-100 w-70-ns btnSS b pointer white f6'
                                type="text"
                                name="location"
                                id="location"
                                onChange={this.onLocationChange}
                            />
                        </div>

                        <form className="pt4-ns pt3">
                            <label className="tl db fw6 lh-copy f6" >値段:</label>
                            <div className='tl'>
                                <label className="f7 ph2">
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="無料"
                                        checked={this.state.price === "無料"}
                                        onChange={this.handlePriceChange}
                                        className="form-check-input"
                                    />
                                    <label> </label>
                                    無料
                                </label>
                                <label className="f7 ph2">
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="$"
                                        checked={this.state.price === "$"}
                                        onChange={this.handlePriceChange}
                                        className="form-check-input"
                                    />
                                    <label> </label>
                                    $ (~10)
                                </label>
                                <label className="f7 ph2">
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="$$"
                                        checked={this.state.price === "$$"}
                                        onChange={this.handlePriceChange}
                                        className="form-check-input"
                                    />
                                    <label> </label>
                                    $$ (~$18)
                                </label >
                                <label className="f7 ph2">
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="$$$"
                                        checked={this.state.price === "$$$"}
                                        onChange={this.handlePriceChange}
                                        className="form-check-input"
                                    />
                                    <label> </label>
                                    $$$ (~$30)
                                </label>
                                <label className="f7 ph2">
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="$$$$"
                                        checked={this.state.price === "$$$$"}
                                        onChange={this.handlePriceChange}
                                        className="form-check-input"
                                    />
                                    <label> </label>
                                    $$$$ ($30~)
                                </label>
                            </div>
                        </form>
                        <div className="pt3-ns pt2">
                            <label className="tl db fw6 lh-copy f6 pt2" >ネットから写真のURLを貼って下さい: </label>
                            <input
                                placeholder="ex) https://fa8.com/746/16_dc_z.jpg"
                                className='pa2-ns pa2 input-reset hover-black hover-bg-white w-100 w-70-ns btnSS b br2 pointer white f6'
                                type="text"
                                name="url"
                                id="url"
                                onChange={this.onURLChange}
                            />
                        </div>
                        {/*<div className="pt4">*/}
                            {/*<label className="db fw6 lh-copy f6 pt2" >写真のURLを貼って下さい (アップロード)</label>*/}
                            {/*<input*/}
                                {/*className="pa2 input-reset bg-white hover-bg-black hover-white br-pill w-100 w-50-ns"*/}
                                {/*type="file"*/}
                                {/*name="file"*/}
                                {/*id="file"*/}
                                {/*onChange={this.onURLChange}*/}
                            {/*/>*/}
                        {/*</div>*/}
                        <div className="pt4-ns pt2">
                            <label className="tl db fw6 lh-copy f6 pt2" >*コメント: </label>
                            <input
                                placeholder="ex) 501 Twin Peaks Blvd, San Francisco, CA 94114"
                                className='pa2-ns pa2 input-reset hover-black hover-bg-white br2 w-100 w-70-ns btnSS b pointer white f6'
                                type="text"
                                name="comments"
                                id="comments"
                                onChange={this.onCommentsChange}
                            />
                        </div>
                    </fieldset>


                    <div className="pv5-ns pv3">
                        <input
                            onClick={this.onSubmitForm}
                            className='b pa2-ns pa2 mb2 input-reset hover-white br-pill w-30 w-10-ns btnSS pointer white f6'
                            type="submit"
                            value="シェアハピ"
                        />
                    </div>
                </div>
            </main>

        );
    }

}

export default Form;