import React, {Component} from 'react';
import Event from './Event';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            sectionName: props.sectionName
        };
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        window.$(".owl-carousel").owlCarousel({
            margin: 20,
            autoWidth: true,
        });
    }

    async getData() {

        // ========= Mock data (where we should call api endpoints) =======
        // Will be used to import real data
        // const response = await axios.get("https://dewiidar.github.io/");
        // console.log(response.data);

        if (this.props.sectionName === 'MeetUps') {
            this.setState({
                events: [
                    {
                        id: 1,
                        eventName: 'First meetup',
                        eventDay: '20',
                        eventMonth: 'APR',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_1_url',
                    },
                    {
                        id: 2,
                        eventName: 'Second meetup',
                        eventDay: '21',
                        eventMonth: 'MAY',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_2_url',
                    },
                    {
                        id: 3,
                        eventName: 'Third meetup',
                        eventDay: '20',
                        eventMonth: 'MAY',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_3_url',
                    },
                    {
                        id: 4,
                        eventName: 'Fourth meetup',
                        eventDay: '21',
                        eventMonth: 'MAY',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_4_url',
                    },
                    {
                        id: 5,
                        eventName: 'Fifth meetup',
                        eventDay: '21',
                        eventMonth: 'MAY',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_5_url',
                    },
                    {
                        id: 6,
                        eventName: 'Sixth meetup',
                        eventDay: '21',
                        eventMonth: 'MAY',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_6_url',
                    }
                ]
            });
        }

        if (this.props.sectionName === 'Leaps') {

            this.setState({
                events: [
                    {
                        id: 1,
                        eventName: 'First Leap',
                        eventDay: '20',
                        eventMonth: 'APR',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_1_url',
                    },
                    {
                        id: 2,
                        eventName: 'Second Leap',
                        eventDay: '21',
                        eventMonth: 'MAY',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_2_url',
                    },
                    {
                        id: 3,
                        eventName: 'Third Leap',
                        eventDay: '20',
                        eventMonth: 'MAY',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_3_url',
                    },
                    {
                        id: 4,
                        eventName: 'Fourth Leap',
                        eventDay: '21',
                        eventMonth: 'MAY',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_4_url',
                    },
                    {
                        id: 5,
                        eventName: 'Fifth Leap',
                        eventDay: '21',
                        eventMonth: 'MAY',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_5_url',
                    },
                    {
                        id: 6,
                        eventName: 'Sixth Leap',
                        eventDay: '21',
                        eventMonth: 'MAY',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_6_url',
                    }
                ]
            });

        }

        if (this.props.sectionName === 'Recruiting Missions') {

            this.setState({
                events: [
                    {
                        id: 1,
                        eventName: 'First Mission',
                        eventDay: '20',
                        eventMonth: 'APR',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_1_url',
                    },
                    {
                        id: 2,
                        eventName: 'Second Mission',
                        eventDay: '21',
                        eventMonth: 'MAY',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_2_url',
                    },
                    {
                        id: 3,
                        eventName: 'Third Mission',
                        eventDay: '20',
                        eventMonth: 'MAY',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_3_url',
                    },
                    {
                        id: 4,
                        eventName: 'Fourth Mission',
                        eventDay: '21',
                        eventMonth: 'MAY',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_4_url',
                    },
                    {
                        id: 5,
                        eventName: 'Fifth Mission',
                        eventDay: '21',
                        eventMonth: 'MAY',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_5_url',
                    },
                    {
                        id: 6,
                        eventName: 'Sixth Mission',
                        eventDay: '21',
                        eventMonth: 'MAY',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_6_url',
                    }
                ]
            });

        }

        if (this.props.sectionName === 'VanHackathons') {

            this.setState({
                events: [
                    {
                        id: 1,
                        eventName: 'First VanHackathons',
                        eventDay: '20',
                        eventMonth: 'APR',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_1_url',
                    },
                    {
                        id: 2,
                        eventName: 'Second Hackathons',
                        eventDay: '21',
                        eventMonth: 'MAY',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_2_url',
                    },
                    {
                        id: 3,
                        eventName: 'Third VanHackathons',
                        eventDay: '20',
                        eventMonth: 'MAY',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_3_url',
                    },
                ]
            });

        }

        if (this.props.sectionName === 'Premium-only Webinars') {

            this.setState({
                events: [
                    {
                        id: 1,
                        eventName: 'First Premium-only Webinars',
                        eventDay: '20',
                        eventMonth: 'APR',
                        eventLocation: 'Cairo, Egypt',
                        eventURL: 'event_1_url',
                    },
                    {
                        id: 2,
                        eventName: 'Second Premium-only Webinars',
                        eventDay: '21',
                        eventMonth: 'MAY',
                        eventLocation: 'Cairo, Egypt',
                        eventURL: 'event_2_url',
                    },
                    {
                        id: 3,
                        eventName: 'Third Premium-only Webinars',
                        eventDay: '20',
                        eventMonth: 'MAY',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_3_url',
                    },
                    {
                        id: 4,
                        eventName: 'Fourth Premium-only Webinars',
                        eventDay: '27',
                        eventMonth: 'AUG',
                        eventLocation: 'Cairo, Egypt',
                        eventURL: 'event_4_url',
                    },
                ]
            });

        }

        if (this.props.sectionName === 'Open Webinars') {

            this.setState({
                events: [
                    {
                        id: 1,
                        eventName: 'First Webinars',
                        eventDay: '20',
                        eventMonth: 'APR',
                        eventLocation: 'Cairo, Egypt',
                        eventURL: 'event_1_url',
                    },
                    {
                        id: 2,
                        eventName: 'Second Webinars',
                        eventDay: '21',
                        eventMonth: 'MAY',
                        eventLocation: 'Cairo, Egypt',
                        eventURL: 'event_2_url',
                    },
                    {
                        id: 3,
                        eventName: 'Third Webinars',
                        eventDay: '20',
                        eventMonth: 'MAY',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_3_url',
                    },
                    {
                        id: 4,
                        eventName: 'Fourth Webinars',
                        eventDay: '27',
                        eventMonth: 'AUG',
                        eventLocation: 'Cairo, Egypt',
                        eventURL: 'event_4_url',
                    },
                    {
                        id: 5,
                        eventName: 'Fifth Webinars',
                        eventDay: '20',
                        eventMonth: 'AUG',
                        eventLocation: 'Vancouver, Canada',
                        eventURL: 'event_5_url',
                    },
                ]
            });

        }

    }

    render() {
        return (
            <>
                <h3 className="section-title">
                    {this.props.sectionName}
                </h3>
                <div className="owl-carousel owl-theme">
                    {this.state.events.map(
                        event => <Event sectionName={this.props.sectionName} key={event.id} eventDetails={event}
                                        applyModalHandler={this.props.applyModalHandler}
                                        descriptionModalHandler={this.props.descriptionModalHandler}/>
                    )}
                </div>
            </>
        );
    }
}

export default Slider;
