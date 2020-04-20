import React, {Component} from 'react';
import Event from './Event';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {events: []};
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
        // Will be used to import real data
        // const response = await axios.get("https://dewiidar.github.io/");
        // console.log(response.data);

        this.setState({
            events: [
                {
                    id: 1,
                    eventName: 'First event',
                    eventDay: '20',
                    eventMonth: 'APR',
                    eventLocation: 'Vancouver, Canada',
                    eventURL: 'event_1_url',
                },
                {
                    id: 2,
                    eventName: 'Second event',
                    eventDay: '21',
                    eventMonth: 'MAY',
                    eventLocation: 'Vancouver, Canada',
                    eventURL: 'event_2_url',
                }
            ]
        });
    }

    render() {
        return (
            <>
                <h3 className="section-title">
                    MeetUps
                </h3>
                <div className="owl-carousel owl-theme">
                    {this.state.events.map(
                        event => <Event key={event.id} eventDetails={event} applyModalHandler={this.props.applyModalHandler}/>
                        )}
                </div>
            </>
        );
    }
}

export default Slider;
