import React from 'react';
import './App.css';
import Slider from './components/Slider'
import ApplyingModal from "./components/ApplyingModal";
import EventDescriptionModal from "./components/EventDescriptionModal";
import PremiumEventModal from "./components/PremiumEventModal";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applyModalState: {
                isShown: false
            },
            descriptionModalState: {
                isShown: false
            },
            premiumEventModalState: {
                isShown: false
            }
        }
    }

    applyModalHandler = (isShownValue, eventDetails) => {
        this.scrollToTop();
        this.setState({
            ...this.state,
            eventDetails: eventDetails,
            applyModalState: {
                isShown: isShownValue,
            }
        })
    };

    descriptionModalHandler = (isShownValue, eventDetails) => {
        this.scrollToTop();
        this.setState({
            ...this.state,
            eventDetails: eventDetails,
            descriptionModalState: {
                isShown: isShownValue,
            }
        })
    };

    premiumEventModalHandler = (isShownValue, eventDetails) => {
        this.scrollToTop();
        this.setState({
            ...this.state,
            eventDetails: eventDetails,
            premiumEventModalState: {
                isShown: isShownValue,
            }
        })
    };

    closeModalHandler = () => {
        this.setState({
            ...this.state,
            applyModalState: {
                isShown: false
            },
            descriptionModalState: {
                isShown: false,
            },
            premiumEventModalState: {
                isShown: false
            }
        })
    };

    // Scroll to top transition
    // reference: https://gist.github.com/ricardozea/abb9f98a19f6d04a0269
    scrollToTop = () => {
        let scrollAnimation;
        var position =
            document.body.scrollTop || document.documentElement.scrollTop;
        if (position) {
            window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
            scrollAnimation = setTimeout(this.scrollToTop, 30);
        } else clearTimeout(scrollAnimation);
    };


    render() {
        let modal;
        if (this.state.applyModalState.isShown) {
            modal = <ApplyingModal eventDetails={this.state.eventDetails} applyModalState={this.state.applyModalState}
                                   closeModalHandler={this.closeModalHandler}/>
        } else if (this.state.descriptionModalState.isShown) {
            modal = <EventDescriptionModal eventDetails={this.state.eventDetails}
                                           descriptionModalState={this.state.descriptionModalState}
                                           closeModalHandler={this.closeModalHandler}
                                           applyModalHandler={this.applyModalHandler}/>
        } else if (this.state.premiumEventModalState.isShown) {
            modal = <PremiumEventModal eventDetails={this.state.eventDetails} closeModalHandler={this.closeModalHandler} premiumEventModalState={this.state.premiumEventModalState}/>
        }
        return (

            <>
                {/*Modal*/}
                {modal}

                {/*Content*/}
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            {/* Meetups section*/}
                            <div id="meetups" className="events-container">
                                <Slider sectionName="MeetUps" applyModalHandler={this.applyModalHandler}
                                        descriptionModalHandler={this.descriptionModalHandler}/>
                            </div>
                            <hr/>

                            {/*Leaps section*/}
                            <div id="leaps" className="events-container">
                                <Slider sectionName="Leaps" applyModalHandler={this.applyModalHandler}
                                        descriptionModalHandler={this.descriptionModalHandler}/>
                            </div>
                            <hr/>

                            {/*Recruiting Missions section*/}
                            <div id="missions" className="events-container">
                                <Slider sectionName="Recruiting Missions" applyModalHandler={this.applyModalHandler}
                                        descriptionModalHandler={this.descriptionModalHandler}/>
                            </div>
                            <hr/>

                            {/*VanHackathons*/}
                            <div id="vanhackathons" className="events-container">
                                <Slider sectionName="VanHackathons" applyModalHandler={this.applyModalHandler}
                                        descriptionModalHandler={this.descriptionModalHandler}/>
                            </div>
                            <hr/>

                            {/*Premium-only Webinars*/}
                            <div id="premium-webinars" className="events-container">
                                <Slider sectionName="Premium-only Webinars" premiumEventModalHandler={this.premiumEventModalHandler}
                                        descriptionModalHandler={this.descriptionModalHandler}/>
                            </div>
                            <hr/>

                            {/*Open Webinars*/}
                            <div id="webinars" className="events-container">
                                <Slider sectionName="Open Webinars" applyModalHandler={this.applyModalHandler}
                                        descriptionModalHandler={this.descriptionModalHandler}/>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );

    }
}

export default App;
