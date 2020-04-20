import React, {useState} from 'react';

const Event = (props) => {
    const initialState = {
        eventName: props.eventDetails.eventName,
        eventDay: props.eventDetails.eventDay,
        eventMonth: props.eventDetails.eventMonth,
        eventLocation: props.eventDetails.eventLocation,
        eventURL: props.eventDetails.eventURL
    };

    const [eventDetails] = useState(initialState);

    return (
        <>
            {/* Event card*/}
            <div className="item">
                <a href="#" data-toggle="modal" data-target="#eventDescriptionModal">
                    <div className="event-card-container">
                        <div className="cover-img-container">
                            <img src="https://via.placeholder.com/350x500" alt=""/>
                        </div>
                        <div className="body-container">
                            <div className="event-date">
                                <span>{eventDetails.eventDay}</span>
                                {eventDetails.eventMonth}
                            </div>
                            <div className="event-details">
                                <div className="title">
                                    {eventDetails.eventName}
                                </div>
                                <div className="place">
                                    <span className="material-icons">place</span>
                                    {eventDetails.eventLocation}
                                </div>
                            </div>
                        </div>
                        <div className="apply-button">
                            {/* Todo */}
                            <a href="#" id="openApplyModalButton" className="btn btn-info apply" data-toggle="modal"
                               data-target="#applyModal" onClick={props.applyModalHandler.bind(this, true, eventDetails)}>Apply</a>
                            <a id="OpenEventDescriptionButton" className="btn btn-info info" data-toggle="modal"
                               data-target="#eventDescriptionModal">Info<span className="material-icons">info</span></a>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
};

export default Event;
