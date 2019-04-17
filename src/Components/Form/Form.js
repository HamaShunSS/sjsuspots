import React, { Component } from "react";
import Checkbox from "./Checkbox";

const category = ["ラーメン", "食事処", "景色","カフェ","公園", "クラブ", "バー", "勉強する場所", "ハイキング","買い物", "美容系"];

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
            park:'',
            club: '',
            bar: '',
            study: '',
            hiking: '',
            shopping: '',
            beauty:'',
            location: '',
            url:'',
            rate:'',
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



    handleRateChange = changeEvent => {
        this.setState({
            rate: changeEvent.target.value
        });
    };


    onSubmitForm =() => {
        fetch('https://spots-for-sjsu-students.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                name: this.state.name,
                ramen: this.state.checkboxes.ラーメン,
                food: this.state.checkboxes.食事処,
                view: this.state.checkboxes.景色,
                cafe: this.state.checkboxes.カフェ,
                park: this.state.checkboxes.公園,
                club: this.state.checkboxes.クラブ,
                bar: this.state.checkboxes.バー,
                study: this.state.checkboxes.勉強する場所,
                hiking: this.state.checkboxes.ハイキング,
                shopping: this.state.checkboxes.買い物,
                beauty: this.state.checkboxes.美容系,
                location: this.state.location,
                url: this.state.url,
                rate: this.state.rate,
                comments: this.state.comments
            })
        })
            .then(response => response.json()) // Get response through json, and get data by ".then"
            .then(response => {console.log('what is ', response)
                if (response === 'success') {
                    this.props.onRouteChange('thankyou');
                }
            })
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
                        <div className="">
                            <label className="db fw6 lh-copy f6" htmlFor="name">場所の名前は？</label>
                            <input
                                className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100"
                                type="text"
                                name="name"
                                id="name"
                                onChange={this.onNameChange}
                            />
                        </div>

                        <div className="container">
                            <div className="row mt-5">
                                <div className="col-sm-12">
                                    <label className="db fw6 lh-copy f6 pt5" htmlFor="name">ジャンルは？　（複数選択可能）</label>
                                    <div className="left">
                                        <form onSubmit={this.handleFormSubmit}>
                                            {this.createCheckboxes()}
                                            <div className="form-group mt-2">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-primary mr-2"
                                                    onClick={this.selectAll}
                                                >
                                                    Select All
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-primary mr-2"
                                                    onClick={this.deselectAll}
                                                >
                                                    Deselect All
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
                        <div className="pv3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">写真のURLを貼って下さい</label>
                            <input
                                className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100"
                                type="text"
                                name="url"
                                id="url"
                                onChange={this.onURLChange}
                            />
                        </div>

                        <form className="pv3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">星</label>
                            <div className=''>
                                <label className="f4 ph2">
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="5"
                                        checked={this.state.rate === "5"}
                                        onChange={this.handleRateChange}
                                        className="form-check-input"
                                    />
                                    5
                                </label>
                                <label className="f4 ph2">
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="4"
                                        checked={this.state.rate === "4"}
                                        onChange={this.handleRateChange}
                                        className="form-check-input"
                                    />
                                    4
                                </label>
                                <label className="f4 ph2">
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="3"
                                        checked={this.state.rate === "3"}
                                        onChange={this.handleRateChange}
                                        className="form-check-input"
                                    />
                                    3
                                </label >
                                <label className="f4 ph2">
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="2"
                                        checked={this.state.rate === "2"}
                                        onChange={this.handleRateChange}
                                        className="form-check-input"
                                    />
                                    2
                                </label>
                                <label className="f4 ph2">
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="1"
                                        checked={this.state.rate === "1"}
                                        onChange={this.handleRateChange}
                                        className="form-check-input"
                                    />
                                    1
                                </label>
                            </div>
                        </form>
                        <div className="pv3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">住所</label>
                            <input
                                className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100"
                                type="text"
                                name="location"
                                id="location"
                                onChange={this.onLocationChange}
                            />
                        </div>
                        <div className="pv3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">コメント</label>
                            <input
                                className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100"
                                type="text"
                                name="comments"
                                id="comments"
                                onChange={this.onCommentsChange}
                            />
                        </div>
                    </fieldset>


                    <div className="pv3">
                        <input
                            onClick={this.onSubmitForm}
                            className="b ph3 pv3 input-reset ba b--black bg-white grow pointer f6 dib"
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