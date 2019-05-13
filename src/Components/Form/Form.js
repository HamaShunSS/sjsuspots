import React, { Component } from "react";
import Checkbox from "./Checkbox";

const category = ["ラーメン", "食事処", "景色","カフェ","娯楽", "クラブ", "バー", "勉強する場所", "自然","買い物", "美容系","デリ","その他"];

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
            deli: '',
            others:'',
            location: '',
            url:'',
            price:'',
            comments: ''
        };
        // console.log(this.state.checkboxes)
    }



    onNameChange = (event) => {
        this.setState({name: event.target.value}) // updated signInEmail from <input />
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



    handlePriceChange = changeEvent => {
        this.setState({
            price: changeEvent.target.value
        });
    };


    onSubmitForm =() => {
        if (this.state.name === '' || this.state.location === '' || this.state.comments === '' ) {
            alert("場所の名前か住所、コメントのどれかに記入漏れがあるようです...");
        } else {
            if (this.state.url.includes('jpg') || this.state.url.includes('jpeg')) {
                if (this.props.route === 'form') {
                    this.props.onRouteChange('loading');
                }
                fetch('https://spots-for-sjsu-students.herokuapp.com/register', {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                        name: this.state.name,
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
                        deli: this.state.checkboxes.デリ,
                        others: this.state.checkboxes.その他,
                        location: this.state.location,
                        url: this.state.url,
                        price: this.state.price,
                        comments: this.state.comments
                    })
                })
                    .then(response => response.json()) // Get response through json, and get data by ".then"
                    .then(response => {
                        console.log('what is ', response)
                        if (response === 'success') {
                            this.props.onRouteChange('thankyou');
                        } else if (response === 'incorrect form submission') {
                            this.props.onRouteChange('sorry');
                        }
                    })
            } else {
                alert("画像のURLは jpg 又は jpeg を含むものでお願いします");
            }
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

    selectAll = () => this.selectAllCheckboxes(true);

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
                <div className="tc fl w-100 w-100-ns tc">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 mt4-ns ">
                        <div className="f2 pv5 fl w-100 w-100-ns tc fw6 ph0 mh0">オススメの場所をシェアハピして下さい！！</div>
                        <div className="pt5">
                            <label className="db fw6 lh-copy f6" htmlFor="name">場所の名前は？</label>
                            <input
                                className="pa2 input-reset bg-white hover-bg-black hover-white br-pill w-100 w-50-ns"
                                type="text"
                                name="name"
                                id="name"
                                onChange={this.onNameChange}
                            />
                        </div>

                        <div className="container tc pt4">
                            <div className="">
                                <div className="col-sm-12 pb4">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">ジャンルは？　（複数選択可能）</label>
                                    <div className="tc fl w-100 w-100-ns tc w-50-ns">
                                        <form onSubmit={this.handleFormSubmit}>
                                            {this.createCheckboxes()}
                                            <div className="form-group pv2">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-primary ph2 pv2 bg-light-green grow pointer br-pill mr-2 f6 white"
                                                    onClick={this.selectAll}
                                                >
                                                    全選択
                                                </button> <label> </label>
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-primary ph2 pv2 bg-light-green grow pointer br-pill mr-2 f6 white"
                                                    onClick={this.deselectAll}
                                                >
                                                    全消し
                                                </button>
                                                {/*<button type="submit" className="btn btn-primary">*/}
                                                {/*Save*/}
                                                {/*</button>*/}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt5">
                            <label className="db fw6 lh-copy f6" htmlFor="name">住所</label>
                            <input
                                className="pa2 input-reset bg-white hover-bg-black hover-white br-pill w-100 w-50-ns"
                                type="text"
                                name="location"
                                id="location"
                                onChange={this.onLocationChange}
                            />
                        </div>

                        <form className="pt4">
                            <label className="db fw6 lh-copy f6" htmlFor="name">値段</label>
                            <div className=''>
                                <label className="f4 ph2">
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
                                <label className="f4 ph2">
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
                                <label className="f4 ph2">
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
                                <label className="f4 ph2">
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
                                <label className="f4 ph2">
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
                        <div className="pt4">
                            <label className="db fw6 lh-copy f6 pt2" htmlFor="name">写真のURLを貼って下さい</label>
                            <input
                                className="pa2 input-reset bg-white hover-bg-black hover-white br-pill w-100 w-50-ns"
                                type="text"
                                name="url"
                                id="url"
                                onChange={this.onURLChange}
                            />
                        </div>
                        <div className="pt4">
                            <label className="db fw6 lh-copy f6 pt2" htmlFor="name">写真のURLを貼って下さい</label>
                            <input
                                className="pa2 input-reset bg-white hover-bg-black hover-white br-pill w-100 w-50-ns"
                                type="file"
                                name="url"
                                id="url"
                                onChange={this.onURLChange}
                            />
                        </div>
                        <div className="pt4">
                            <label className="db fw6 lh-copy f6" htmlFor="name">コメント</label>
                            <input
                                className="pa2 input-reset bg-white hover-bg-black hover-white br-pill w-100 w-50-ns"
                                type="text"
                                name="comments"
                                id="comments"
                                onChange={this.onCommentsChange}
                            />
                        </div>
                    </fieldset>


                    <div className="pv5">
                        <input
                            onClick={this.onSubmitForm}
                            className="b ph3 pv3 input-reset ba bg-light-green white br-pill grow pointer f6 dib"
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