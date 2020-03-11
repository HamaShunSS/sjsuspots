import React, { Component } from "react";
import Checkbox from "./Checkbox";
import axios from "axios";
import Card from "../FUI/InfosCardList";
import List from "./AreaList";
import BusinessesList from './BusinessesList';
import Scroll from "../FUI/FUI";
import Spinner from 'react-spinner-material';
import Sorry from "./Sorry";
import Script from 'react-load-script';
import googlePlacesAPICall from "./googlePlacesAPICall"
const category = ["ラーメン", "食事処", "景色","カフェ","娯楽", "クラブ", "バー", "勉強する場所", "自然","買い物", "美容系","観光","その他"];

const samplearray = ['san jose', 'santa clara', 'palo alto']

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            restaurantName: '',
            results: [],
            gglresults: [],
            citys:[],
            lat:null,
            lon: null,
            city: '',
            businesses: [],
            photos: [],
            name: '',
            phone: '',
            photo1:'',
            photo2:'',
            photo3:'',
            url:'',
            price:'',
            comment: '',
            country: '',
            load: 'off',
            commentInDatabase: 'comments/3/Shunsuke/Japan//comments/7/Korean/South Korea',
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
            category:'',
            region:'',
        };
        // console.log(this.state.checkboxes)
    }


    componentDidMount() {
        fetch('https://spots-for-sjsu-students.herokuapp.com/allData')
            .then(response => response.json())
            .then(informations => this.setState({
                results: informations})
            );
        // fetch('https://spots-for-sjsu-students.herokuapp.com/userData',
        //     {
        //         method: 'post',
        //         headers: {'Content-Type': 'application/json'},
        //         body: JSON.stringify({
        //             region: this.props.region, // カテゴリーは List => App => FUI で来ている
        //         })
        //     })
        //     .then(response => response.json())
        //     .then(informations => this.setState({results: informations})
        //     );

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

    onCommentChange = (event) => {
        this.setState({comment: event.target.value}) // updated signInEmail from <input />
    }

    //CityChange
    onCityChange = (event) => {
        this.setState({city: event.target.value}) // updated signInEmail from <input />
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

    callSpinner = () => {
        if (this.state.businesses.length === 0) {
            return this.setState({
                load: 'on'
            })
        }
    }

    onAPIButton = () => {
        const breakfast = 'breakfast_brunch'
        this.callSpinner();
        //API呼ぶやつ
        console.log(this.state.city, this.state.name)
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
            headers: {
                Authorization: `Bearer iUa74dNqkfO5M737VXORC5lPpdKH460feCmM1pNg0VsUCR72lyFXQB84vNGkK3M1yVWcfp1wV0Vu5qTt0DRFm0aFanDBhbIB0nxKnuJe3FmaSne6_5omll6UyTUuXnYx`
            },
            params: {
                // latitude: this.state.lat,
                // longitude: this.state.lon,
                term: this.state.name,
                location: this.state.city,
                radius: 3500,
                limit: 50
            }
        })
            .then((res) => {
                this.setState({
                    businesses: res.data.businesses,
                    // id: res.data.businesses[0].id,
                    load: 'off'
                })

                console.log(this.state.businesses)
            })
            .catch((err) => {
                console.log('error', err)
                this.setState({
                    load: 'err'
                })
            })
    }

    // onBizIdCall = () => {
    //     //API呼ぶやつ
    //     axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${this.state.id}`, {
    //         headers: {
    //             Authorization: `Bearer iUa74dNqkfO5M737VXORC5lPpdKH460feCmM1pNg0VsUCR72lyFXQB84vNGkK3M1yVWcfp1wV0Vu5qTt0DRFm0aFanDBhbIB0nxKnuJe3FmaSne6_5omll6UyTUuXnYx`
    //         },
    //         params: {
    //             // latitude: this.state.lat,
    //             // longitude: this.state.lon,
    //             // term: 'starbuck',
    //             // location: 'san jose',
    //             // radius: 3500,
    //             // categories: 'food',
    //             // limit: 50
    //         }
    //     })
    //         .then((res) => {
    //             this.setState({
    //                 restaurantName: res.data.name,
    //                 price: res.data.price,
    //                 url: res.data.url,
    //                 phone: res.data.phone,
    //                 location: res.data.location.display_address[0] + ', '+ res.data.location.display_address[1],
    //                 photo1: res.data.photos[0],
    //                 photo2: res.data.photos[1],
    //                 photo3: res.data.photos[2],
    //                 lon: res.data.coordinates.longitude,
    //                 lat: res.data.coordinates.latitude
    //                 // mondayS: res.data.hours[0].open[0].start,
    //                 // mondayE: res.data.hours[0].open[0].end,
    //                 // tuesdayS: res.data.hours[0].open[1].start,
    //                 // tuesdayE: res.data.hours[0].open[1].end
    //             })
    //             console.log(res.data, this.state.location)
    //         })
    //         .catch((err) => {
    //             console.log('error')
    //         })
    // }

    //id 送ってきてbiz情報を得る
    onBizIdCall = (id) => {
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${id}`, {
            headers: {
                Authorization: `Bearer iUa74dNqkfO5M737VXORC5lPpdKH460feCmM1pNg0VsUCR72lyFXQB84vNGkK3M1yVWcfp1wV0Vu5qTt0DRFm0aFanDBhbIB0nxKnuJe3FmaSne6_5omll6UyTUuXnYx`
            },
            params: {
                // latitude: this.state.lat,
                // longitude: this.state.lon,
                // term: 'starbuck',
                // location: 'san jose',
                // radius: 3500,
                // categories: 'food',
                // limit: 50
            }
        })
            .then((res) => {
                this.setState({
                    restaurantName: res.data.name,
                    price: res.data.price,
                    url: res.data.url,
                    phone: res.data.phone,
                    location: res.data.location.display_address[0] + ', '+ res.data.location.display_address[1],
                    photo1: res.data.photos[0],
                    photo2: res.data.photos[1],
                    photo3: res.data.photos[2],
                    lon: res.data.coordinates.longitude,
                    lat: res.data.coordinates.latitude
                    // mondayS: res.data.hours[0].open[0].start,
                    // mondayE: res.data.hours[0].open[0].end,
                    // tuesdayS: res.data.hours[0].open[1].start,
                    // tuesdayE: res.data.hours[0].open[1].end
                })
                console.log(res.data, this.state.location)
            })
            .catch((err) => {
                console.log('error')
            })
    }

    onCountry = () => {
        const x = document.getElementById("mySelect").selectedIndex;
        return(document.getElementsByTagName("option")[x].value)

    }

    onSubmitToSpot =() => {
        //API呼ぶやつ
        const x= this.onCountry()
        console.log('check', x);
        if (this.state.restaurantName === '' || this.state.comments === ''|| x === '' ) {
            alert("場所の名前、コメントのどれかに記入漏れがあるようです...");
        } else {
            if (this.props.route === 'form') {
                this.props.onRouteChange('loading');
            }
            const addressParse = this.state.location.split(",");
            const city = addressParse[1].replace(" ", "");

            fetch('https://spots-for-sjsu-students.herokuapp.com/insert', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    name: this.state.restaurantName,
                    price: this.state.price,
                    url: this.state.url,
                    phone: this.state.phone,
                    location: this.state.location,
                    photo1: this.state.photo1,
                    photo2: this.state.photo2,
                    photo3: this.state.photo3,
                    lon: this.state.lon,
                    lat: this.state.lat,
                    bizid: this.state.id,
                    comment: this.state.comment,
                    commentid: this.props.userid,
                    userid: this.props.userid,
                    by: this.props.username,
                    country: x,
                    usercountry: this.props.country,
                    date: new Date(),
                    city: city
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


    onSubmitForm =() => {
        const breakfast = 'breakfast_brunch'
        //API呼ぶやつ
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${this.state.id}`, {
            headers: {
                Authorization: `Bearer iUa74dNqkfO5M737VXORC5lPpdKH460feCmM1pNg0VsUCR72lyFXQB84vNGkK3M1yVWcfp1wV0Vu5qTt0DRFm0aFanDBhbIB0nxKnuJe3FmaSne6_5omll6UyTUuXnYx`
            },
            params: {
                // latitude: this.state.lat,
                // longitude: this.state.lon,
                // term: 'starbuck',
                // location: 'san jose',
                // radius: 3500,
                // categories: 'food',
                // limit: 50
            }
        })
            .then((res) => {
                this.setState({
                    restaurantName: res.data.name,
                    price: res.data.price,
                    url: res.data.url,
                    phone: res.data.phone,
                    location: res.data.location.display_address[0] + ", " + res.data.location.display_address[1],
                    photo1: res.data.photos[0],
                    photo2: res.data.photos[1],
                    photo3: res.data.photos[2],
                    // mondayS: res.data.hours[0].open[0].start,
                    // mondayE: res.data.hours[0].open[0].end,
                    // tuesdayS: res.data.hours[0].open[1].start,
                    // tuesdayE: res.data.hours[0].open[1].end
                })
                console.log(res.data, this.state.location)
            })
            .catch((err) => {
                console.log('error')
            })
        if (this.state.name === '' || this.state.location === '' || this.state.region === '' || this.state.comment === '' ) {
            alert("場所の名前か地域、住所、コメントのどれかに記入漏れがあるようです...");
        } else {
                if (this.props.route === 'form') {
                    this.props.onRouteChange('loading');
                }
                const addressParse = this.state.location.split(",");
                const city = addressParse[1].replace(" ", "");

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
                        comments: this.state.comment,
                        city: city,
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

    // handleFormSubmit = formSubmitEvent => {
    //     formSubmitEvent.preventDefault();
    //
    //     Object.keys(this.state.checkboxes)
    //         .filter(checkbox => this.state.checkboxes[checkbox])
    //         .forEach(checkbox => {
    //             console.log(checkbox, "is selected.");
    //             console.log('the object is like ',this.state.checkboxes);
    //             console.log('the 食事処 is like ',this.state.checkboxes.食事処);
    //         });
    // };

    createCheckbox = option => (
        <Checkbox
            label={option}
            isSelected={this.state.checkboxes[option]}
            onCheckboxChange={this.handleCheckboxChange}
            key={option}
        />
    );

    createCheckboxes = () => category.map(this.createCheckbox);



//3. Google Place photo request
    photoRes = (imgs)=>{
        this.setState({
            photos: imgs
        })

        console.log(imgs)
    }
    googlePlacePhotocall =(photos)=> {
        const placePhoto = require('./googlePlacePhotoRequest');
        const photoRef = [];
        photos.map((photo, i) => {
            return (
                photoRef[i] = photo.photo_reference
            )
        })
        console.log(photoRef)
        // photoRef.map((ref) => {
        //     return placePhoto.searchPlaces(ref, this.photoRes)
        // })
        return placePhoto.searchPlaces(photoRef[0], this.photoRes)

    }

    //2. Google Place Detail
    detailRes = (result)=>{
        this.googlePlacePhotocall(result.photos);
        this.setState({
            placedetail: result
        })
    }
    googlePlaceDetailcall =(place_id)=> {
        const placeDetail = require('./googlePlaceDetailCall');
        return placeDetail.searchPlaces(place_id, this.detailRes)
    }

    // 1. Google Places API
    googleRes = (results)=>{
        const detail = this.googlePlaceDetailcall(results[0].place_id);
        this.setState({
            gglresults: detail
        })
    }

    googleAPIcall =()=> {
        const googleTrans = require('./googlePlacesAPICall.js');
        return googleTrans.searchPlaces('La costa', 'Salinas', this.googleRes)
    }


// .then(response => response.json()) // Get response through json, and get data by ".then"
// .then(response => {
//     if (response === 'success') {
//     this.props.onRouteChange('thankyou');
// } else if (response === 'incorrect form submission') {
//     this.props.onRouteChange('sorry');
// }
// })



    render(){
        console.log(this.state.gglresults)


        const arrayedComment = this.state.commentInDatabase.split('//');
        console.log(arrayedComment)

        const a = arrayedComment.map((comment) => {
            const num = comment.split('/')
            console.log(num)
            return (num);
        })



        //1. resultsからインフォスに
        const filterdCitys = this.state.results.filter(infos => {
            //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
            //ArrayList<String> cashList = new ArrayList<>(infos.price);
            return (
                infos.location
                // infos.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
                // infos.region.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
                // infos.location.toLowerCase().includes(this.state.searchfield.toLowerCase())
            )
        })

        //2. mapしてinfo.locationからcityを作りcitysに入れる
        filterdCitys.map((info, i) => {
            const addressParse = info.location.split(",");
            const lac = addressParse[1].replace(" ","");
            // console.log(this.state.citys)

            return (
                this.state.citys[i] =  lac
            )
        })

        //3. ダブってるやつを無くす
        const uniqueCitys = this.state.citys.filter((val,id,array) => array.indexOf(val) == id);

        //4. テキストボックス(this.state.city)とリンク
        const filtterduniqueCitys = uniqueCitys.filter((cit) => {
            return (
                cit.toLowerCase().includes(this.state.city.toLowerCase())
            )
        })

        //ビジネスたち
        const filterdBusinesses = this.state.businesses.filter(infos => {
            //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
            //ArrayList<String> cashList = new ArrayList<>(infos.price);
            return (
                infos.id.includes(this.state.id)
                // infos.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
                // infos.region.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
                // infos.location.toLowerCase().includes(this.state.searchfield.toLowerCase())
            )
        })

        // const num = 100
        // //現在地特定
        // navigator.geolocation.getCurrentPosition(
        //     pos => this.setState({
        //         lat: Math.round(pos.coords.latitude* num)/ num, //numはどの桁で切り上げるか
        //         lon: Math.round(pos.coords.longitude* num)/ num
        //     }),
        //     err => console.log(err)
        // );
        // console.log('lat and lon', this.state.lat, this.state.lon)

        const onCity = (res) => {
            this.setState({city: res}) // updated signInEmail from <input />
            console.log(this.state.city)
        }

        const onId = (res) => {
            this.setState({
                id: res,
            }) // updated signInEmail from <input />
            console.log(this.state.id)
        }





        if (this.state.load === 'on') {
            return <div className="fl w-100 w-100-ns">
                    <div className="pv4-ns"><h1 className='pv4 pv4-ns'>Loading...</h1></div>
                    <div className="ph6-ns tc center pb5-ns">
                        <div className="ph6 ph7-ns tc center pb6">
                            <Spinner className='justify-center pb6 pb6-ns' size={80} spinnerColor={"white"} spinnerWidth={8} visible={true} />
                        </div>
                        <p className="pv7 pv7-ns"> </p>
                        <p className="pv7-ns"> </p>
                    </div>

            </div>

        } else if (this.state.load === 'err') {
            return <Sorry onRouteChange={this.props.onRouteChange}/>
        }
        else {

            return (
                <main className="pa4">
                    <div className="fl w-100 w-100-ns tc">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0 mt4-ns">
                            <div
                                className="db f2-ns f5 pv5-ns pv2 fl w-100 w-100-ns tc fw6 ph0 mh0">Share your experience!!
                            </div>
                            {/*<button onClick={this.googleAPIcall}>Click</button>*/}
                            {/*<img src={"data:image/png;base64," + this.state.photos[0]} />*/}
                            <div className="pt5-ns pt2 pv2">
                                <label className="b db fw6 lh-copy f6 pt2 tl" htmlFor="">1. Type the name of the restaurant </label>
                                <input
                                    placeholder="ex) Ramen One"
                                    className='pa2-ns pa2 input-reset hover-black hover-bg-white w-100 w-70-ns btnSS b br2 pointer white f6'
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={this.state.name}
                                    onChange={this.onNameChange}
                                />
                            </div>
                            <div className="pt5-ns pv2">
                                <label className="b db fw6 lh-copy f6 pt2 tl" htmlFor="">2. Type the city and search: </label>
                                <input
                                    placeholder="ex) Saratoga"
                                    className='pa2-ns pl2 pv2 input-reset hover-black hover-bg-white w-100 w-70-ns btnSS b br2 pointer white f6'
                                    type="text"
                                    name="city"
                                    id="name"
                                    value={this.state.city}
                                    onChange={this.onCityChange}
                                />
                                <div className='b db fw6 lh-copy f6 w-100 w-70-ns'> {
                                    this.state.city.length > 0 &&
                                    <List areas={filtterduniqueCitys} onCity={onCity}/>
                                }
                                </div>
                                <input
                                    onClick={this.onAPIButton}
                                    className='b pa2-ns pv2 mt3 input-reset br2 w-20 w-10-ns clickbtnSS pointer f6'
                                    type="submit"
                                    value="Search"
                                />
                            </div>

                            <div className='b db fw6 lh-copy f6 tl'>
                                {
                                    filterdBusinesses.length > 0 &&
                                        <p className="mb2">*Tap the place you want to share below</p>
                                }
                                <BusinessesList businesses={filterdBusinesses} onId={onId} onBizIdCall={this.onBizIdCall}/>
                            </div>
                            <div className="pt4-ns pv2">
                                <label className="tl db fw6 lh-copy f6 pt2">3. Your recommendation and/or comment: </label>
                                <input
                                    placeholder="ex) recommend to eat seafood ramen!! The noodle is made of whole grains, and that is so delicious!"
                                    className='pa2-ns pa2 br2 w-100 w-70-ns btnSS b pointer input-reset hover-black hover-bg-white white f6'
                                    type="text"
                                    name="comment"
                                    id="comment"
                                    onChange={this.onCommentChange}
                                />
                            </div>

                            <label className="tl db fw6 lh-copy f6 pt2 pt2">4. What kind of cuisine is this?: </label>
                            <h6 className="tl">*Others for not particular restaurants</h6>
                            <select className='btnSS b pa2-ns pa2 br2 w-100 w-70-ns b--white white pointer f6' name="country" id="mySelect">
                                <option value="">Cuisine from...</option>
                                <option value="Afganistan">Afghanistan</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bonaire">Bonaire</option>
                                <option value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                <option value="Brunei">Brunei</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Canary Islands">Canary Islands</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">Cayman Islands</option>
                                <option value="Central African Republic">Central African Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Channel Islands">Channel Islands</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">Christmas Island</option>
                                <option value="Cocos Island">Cocos Island</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo">Congo</option>
                                <option value="Cook Islands">Cook Islands</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cote DIvoire">Cote D'Ivoire</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Curaco">Curacao</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="East Timor">East Timor</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands">Falkland Islands</option>
                                <option value="Faroe Islands">Faroe Islands</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="French Polynesia">French Polynesia</option>
                                <option value="French Southern Ter">French Southern Ter</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Great Britain">Great Britain</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iran">Iran</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Isle of Man">Isle of Man</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Laos">Laos</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libya">Libya</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macau">Macau</option>
                                <option value="Macedonia">Macedonia</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">Marshall Islands</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Midway Islands">Midway Islands</option>
                                <option value="Moldova">Moldova</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Nambia">Nambia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherland Antilles">Netherland Antilles</option>
                                <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                <option value="Nevis">Nevis</option>
                                <option value="New Caledonia">New Caledonia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">Norfolk Island</option>
                                <option value="North Korea">North Korea</option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau Island">Palau Island</option>
                                <option value="Palestine">Palestine</option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">Papua New Guinea</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Phillipines">Philippines</option>
                                <option value="Pitcairn Island">Pitcairn Island</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Republic of Montenegro">Republic of Montenegro</option>
                                <option value="Republic of Serbia">Republic of Serbia</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Romania">Romania</option>
                                <option value="Russia">Russia</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="St Barthelemy">St Barthelemy</option>
                                <option value="St Eustatius">St Eustatius</option>
                                <option value="St Helena">St Helena</option>
                                <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                <option value="St Lucia">St Lucia</option>
                                <option value="St Maarten">St Maarten</option>
                                <option value="St Pierre &amp; Miquelon">St Pierre &amp; Miquelon</option>
                                <option value="St Vincent &amp; Grenadines">St Vincent &amp; Grenadines</option>
                                <option value="Saipan">Saipan</option>
                                <option value="Samoa">Samoa</option>
                                <option value="Samoa American">Samoa American</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome &amp; Principe">Sao Tome &amp; Principe</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">Sierra Leone</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">Solomon Islands</option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">South Africa</option>
                                <option value="South Korea">South Korea</option>
                                <option value="Spain">Spain</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syria">Syria</option>
                                <option value="Tahiti">Tahiti</option>
                                <option value="Taiwan">Taiwan</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania">Tanzania</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">Turkmenistan</option>
                                <option value="Turks &amp; Caicos Is">Turks &amp; Caicos Is</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Erimates">United Arab Emirates</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States of America">United States of America</option>
                                <option value="Uraguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Vatican City State">Vatican City State</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                <option value="Wake Island">Wake Island</option>
                                <option value="Wallis &amp; Futana Is">Wallis &amp; Futana Is</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Zaire">Zaire</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                                <option value="Others">Others</option>
                            </select>

                            <div className="pv5-ns pv3">
                                <input
                                    onClick={this.onSubmitToSpot}
                                    className='b pa2-ns pa2 mb2 input-reset hover-white br-pill w-30 w-10-ns clickbtnSS pointer f6'
                                    type="submit"
                                    value="Share"
                                />
                            </div>
                            <div className="pv6">

                            </div>

                            {/*<label className="tl b db fw6 lh-copy f6">*エリア:</label>*/}
                            {/*<div className=''>*/}
                                {/*<label className="f7 ph2">*/}
                                    {/*<input*/}
                                        {/*type="radio"*/}
                                        {/*name="react-tips"*/}
                                        {/*value="San Jose"*/}
                                        {/*checked={this.state.region === "San Jose"}*/}
                                        {/*onChange={this.handleRegionChange}*/}
                                        {/*className="form-check-input tl"*/}
                                    {/*/>*/}
                                    {/*<label> </label>*/}
                                    {/*San Jose*/}
                                {/*</label>*/}
                                {/*<label className="f7 ph2">*/}
                                    {/*<input*/}
                                        {/*type="radio"*/}
                                        {/*name="react-tips"*/}
                                        {/*value="San Francisco"*/}
                                        {/*checked={this.state.region === "San Francisco"}*/}
                                        {/*onChange={this.handleRegionChange}*/}
                                        {/*className="form-check-input"*/}
                                    {/*/>*/}
                                    {/*<label> </label>*/}
                                    {/*San Francisco*/}
                                {/*</label>*/}
                                {/*<label className="f7 ph2">*/}
                                    {/*<input*/}
                                        {/*type="radio"*/}
                                        {/*name="react-tips"*/}
                                        {/*value="Monterey"*/}
                                        {/*checked={this.state.region === "Monterey"}*/}
                                        {/*onChange={this.handleRegionChange}*/}
                                        {/*className="form-check-input"*/}
                                    {/*/>*/}
                                    {/*<label> </label>*/}
                                    {/*Monterey*/}
                                {/*</label>*/}
                                {/*<label className="f7 ph2">*/}
                                    {/*<input*/}
                                        {/*type="radio"*/}
                                        {/*name="react-tips"*/}
                                        {/*value="San Luis Obispo"*/}
                                        {/*checked={this.state.region === "San Luis Obispo"}*/}
                                        {/*onChange={this.handleRegionChange}*/}
                                        {/*className="form-check-input"*/}
                                    {/*/>*/}
                                    {/*<label> </label>*/}
                                    {/*San Luis Obispo*/}
                                {/*</label>*/}
                                {/*<label className="f7 ph2">*/}
                                    {/*<input*/}
                                        {/*type="radio"*/}
                                        {/*name="react-tips"*/}
                                        {/*value="Santa Cruz"*/}
                                        {/*checked={this.state.region === "Santa Cruz"}*/}
                                        {/*onChange={this.handleRegionChange}*/}
                                        {/*className="form-check-input"*/}
                                    {/*/>*/}
                                    {/*<label> </label>*/}
                                    {/*Santa Cruz*/}
                                {/*</label>*/}
                                {/**/}
                            {/*</div>*/}
                            {/*<div className="pt5-ns pt2">*/}
                                {/*<label className="b db fw6 lh-copy f6 pt2 tl" htmlFor="">*場所の名前: </label>*/}
                                {/*<input*/}
                                    {/*placeholder="ex) Twin Peaks"*/}
                                    {/*className='pa2-ns pa2 input-reset hover-black hover-bg-white w-100 w-70-ns btnSS b br2 pointer white f6'*/}
                                    {/*type="text"*/}
                                    {/*name="name"*/}
                                    {/*id="name"*/}
                                    {/*onChange={this.onNameChange}*/}
                                {/*/>*/}
                            {/*</div>*/}
                            {/*<form>*/}
                                {/*<div className="tc pt4-ns pt3">*/}
                                    {/*<div className="">*/}
                                        {/*<div className="col-sm-12 pb4-ns pb1">*/}
                                            {/*<label className="db fw6 lh-copy f6 tl">カテゴリー: </label>*/}
                                            {/*<div className=''>*/}
                                                {/*<label className="f7 ph2">*/}
                                                    {/*<input*/}
                                                        {/*type="radio"*/}
                                                        {/*name="react-tips"*/}
                                                        {/*value="Restaurants"*/}
                                                        {/*checked={this.state.category === "Restaurants"}*/}
                                                        {/*onChange={this.handleCategoryChange}*/}
                                                        {/*className="form-check-input tl"*/}
                                                    {/*/>*/}
                                                    {/*<label> </label>*/}
                                                    {/*レストラン*/}
                                                {/*</label>*/}
                                                {/*<label className="f7 ph2">*/}
                                                    {/*<input*/}
                                                        {/*type="radio"*/}
                                                        {/*name="react-tips"*/}
                                                        {/*value="Cafes"*/}
                                                        {/*checked={this.state.category === "Cafes"}*/}
                                                        {/*onChange={this.handleCategoryChange}*/}
                                                        {/*className="form-check-input"*/}
                                                    {/*/>*/}
                                                    {/*<label> </label>*/}
                                                    {/*カフェ*/}
                                                {/*</label>*/}
                                                {/*<label className="f7 ph2">*/}
                                                    {/*<input*/}
                                                        {/*type="radio"*/}
                                                        {/*name="react-tips"*/}
                                                        {/*value="Bars"*/}
                                                        {/*checked={this.state.category === "Bars"}*/}
                                                        {/*onChange={this.handleCategoryChange}*/}
                                                        {/*className="form-check-input"*/}
                                                    {/*/>*/}
                                                    {/*<label> </label>*/}
                                                    {/*バー*/}
                                                {/*</label>*/}
                                                {/*<label className="f7 ph2">*/}
                                                    {/*<input*/}
                                                        {/*type="radio"*/}
                                                        {/*name="react-tips"*/}
                                                        {/*value="Clubs"*/}
                                                        {/*checked={this.state.category === "Clubs"}*/}
                                                        {/*onChange={this.handleCategoryChange}*/}
                                                        {/*className="form-check-input"*/}
                                                    {/*/>*/}
                                                    {/*<label> </label>*/}
                                                    {/*クラブ*/}
                                                {/*</label>*/}
                                                {/*<label className="f7 ph2">*/}
                                                    {/*<input*/}
                                                        {/*type="radio"*/}
                                                        {/*name="react-tips"*/}
                                                        {/*value="Nature"*/}
                                                        {/*checked={this.state.category === "Nature"}*/}
                                                        {/*onChange={this.handleCategoryChange}*/}
                                                        {/*className="form-check-input"*/}
                                                    {/*/>*/}
                                                    {/*<label> </label>*/}
                                                    {/*自然*/}
                                                {/*</label>*/}
                                                {/*<label className="f7 ph2">*/}
                                                    {/*<input*/}
                                                        {/*type="radio"*/}
                                                        {/*name="react-tips"*/}
                                                        {/*value="Parks"*/}
                                                        {/*checked={this.state.category === "Parks"}*/}
                                                        {/*onChange={this.handleCategoryChange}*/}
                                                        {/*className="form-check-input tl"*/}
                                                    {/*/>*/}
                                                    {/*<label> </label>*/}
                                                    {/*公園*/}
                                                {/*</label>*/}
                                                {/*<label className="f7 ph2">*/}
                                                    {/*<input*/}
                                                        {/*type="radio"*/}
                                                        {/*name="react-tips"*/}
                                                        {/*value="Amusement"*/}
                                                        {/*checked={this.state.category === "Amusement"}*/}
                                                        {/*onChange={this.handleCategoryChange}*/}
                                                        {/*className="form-check-input"*/}
                                                    {/*/>*/}
                                                    {/*<label> </label>*/}
                                                    {/*アミューズメント*/}
                                                {/*</label>*/}
                                                {/*<label className="f7 ph2">*/}
                                                    {/*<input*/}
                                                        {/*type="radio"*/}
                                                        {/*name="react-tips"*/}
                                                        {/*value="Salons"*/}
                                                        {/*checked={this.state.category === "Salons"}*/}
                                                        {/*onChange={this.handleCategoryChange}*/}
                                                        {/*className="form-check-input"*/}
                                                    {/*/>*/}
                                                    {/*<label> </label>*/}
                                                    {/*サロン・ビューティー*/}
                                                {/*</label>*/}
                                                {/*<label className="f7 ph2">*/}
                                                    {/*<input*/}
                                                        {/*type="radio"*/}
                                                        {/*name="react-tips"*/}
                                                        {/*value="Others"*/}
                                                        {/*checked={this.state.category === "Others"}*/}
                                                        {/*onChange={this.handleCategoryChange}*/}
                                                        {/*className="form-check-input"*/}
                                                    {/*/>*/}
                                                    {/*<label> </label>*/}
                                                    {/*その他*/}
                                                {/*</label>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</form>*/}
                            {/*<div className="pt5-ns pt2">*/}
                                {/*<label className="tl db fw6 lh-copy f6 pt2" htmlFor="">*住所: </label>*/}
                                {/*<input*/}
                                    {/*placeholder="ex) 501 Twin Peaks Blvd, San Francisco, CA 94114"*/}
                                    {/*className='pa2-ns pa2 input-reset hover-black hover-bg-white br2 w-100 w-70-ns btnSS b pointer white f6'*/}
                                    {/*type="text"*/}
                                    {/*name="location"*/}
                                    {/*id="location"*/}
                                    {/*onChange={this.onLocationChange}*/}
                                {/*/>*/}
                            {/*</div>*/}

                            {/*<form className="pt4-ns pt3">*/}
                                {/*<label className="tl db fw6 lh-copy f6">値段:</label>*/}
                                {/*<div className='tl'>*/}
                                    {/*<label className="f7 ph2">*/}
                                        {/*<input*/}
                                            {/*type="radio"*/}
                                            {/*name="react-tips"*/}
                                            {/*value="無料"*/}
                                            {/*checked={this.state.price === "無料"}*/}
                                            {/*onChange={this.handlePriceChange}*/}
                                            {/*className="form-check-input"*/}
                                        {/*/>*/}
                                        {/*<label> </label>*/}
                                        {/*無料*/}
                                    {/*</label>*/}
                                    {/*<label className="f7 ph2">*/}
                                        {/*<input*/}
                                            {/*type="radio"*/}
                                            {/*name="react-tips"*/}
                                            {/*value="$"*/}
                                            {/*checked={this.state.price === "$"}*/}
                                            {/*onChange={this.handlePriceChange}*/}
                                            {/*className="form-check-input"*/}
                                        {/*/>*/}
                                        {/*<label> </label>*/}
                                        {/*$ (~10)*/}
                                    {/*</label>*/}
                                    {/*<label className="f7 ph2">*/}
                                        {/*<input*/}
                                            {/*type="radio"*/}
                                            {/*name="react-tips"*/}
                                            {/*value="$$"*/}
                                            {/*checked={this.state.price === "$$"}*/}
                                            {/*onChange={this.handlePriceChange}*/}
                                            {/*className="form-check-input"*/}
                                        {/*/>*/}
                                        {/*<label> </label>*/}
                                        {/*$$ (~$18)*/}
                                    {/*</label>*/}
                                    {/*<label className="f7 ph2">*/}
                                        {/*<input*/}
                                            {/*type="radio"*/}
                                            {/*name="react-tips"*/}
                                            {/*value="$$$"*/}
                                            {/*checked={this.state.price === "$$$"}*/}
                                            {/*onChange={this.handlePriceChange}*/}
                                            {/*className="form-check-input"*/}
                                        {/*/>*/}
                                        {/*<label> </label>*/}
                                        {/*$$$ (~$30)*/}
                                    {/*</label>*/}
                                    {/*<label className="f7 ph2">*/}
                                        {/*<input*/}
                                            {/*type="radio"*/}
                                            {/*name="react-tips"*/}
                                            {/*value="$$$$"*/}
                                            {/*checked={this.state.price === "$$$$"}*/}
                                            {/*onChange={this.handlePriceChange}*/}
                                            {/*className="form-check-input"*/}
                                        {/*/>*/}
                                        {/*<label> </label>*/}
                                        {/*$$$$ ($30~)*/}
                                    {/*</label>*/}
                                {/*</div>*/}
                            {/*</form>*/}
                            {/*<div className="pt3-ns pt2">*/}
                                {/*<label className="tl db fw6 lh-copy f6 pt2">ネットから写真のURLを貼って下さい: </label>*/}
                                {/*<input*/}
                                    {/*placeholder="ex) https://fa8.com/746/16_dc_z.jpg"*/}
                                    {/*className='pa2-ns pa2 input-reset hover-black hover-bg-white w-100 w-70-ns btnSS b br2 pointer white f6'*/}
                                    {/*type="text"*/}
                                    {/*name="url"*/}
                                    {/*id="url"*/}
                                    {/*onChange={this.onURLChange}*/}
                                {/*/>*/}
                            {/*</div>*/}
                            {/*<div className="pt4-ns pt2">*/}
                                {/*<label className="tl db fw6 lh-copy f6 pt2">*コメント: </label>*/}
                                {/*<input*/}
                                    {/*placeholder="ex) Recommend to go here night time. They have a lot of parking spots."*/}
                                    {/*className='pa2-ns pa2 input-reset hover-black hover-bg-white br2 w-100 w-70-ns btnSS b pointer white f6'*/}
                                    {/*type="text"*/}
                                    {/*name="comment"*/}
                                    {/*id="comment"*/}
                                    {/*onChange={this.onCommentChange}*/}
                                {/*/>*/}
                            {/*</div>*/}
                        </fieldset>


                        {/*<div className="pv5-ns pv3">*/}
                            {/*<input*/}
                                {/*onClick={this.onSubmitForm}*/}
                                {/*className='b pa2-ns pa2 mb2 input-reset hover-white br-pill w-30 w-10-ns btnSS pointer white f6'*/}
                                {/*type="submit"*/}
                                {/*value="シェアハピ"*/}
                            {/*/>*/}
                        {/*</div>*/}

                    </div>
                </main>

            );
        }
    }

}

export default Form;