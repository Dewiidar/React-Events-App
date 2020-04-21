import React, {Component} from 'react';

class ApplyingModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            city: '',
            state: '',
            zip: '',
            hasApplied: false
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = (event) => {
        this.setState({
            hasApplied: true
        });

        event.preventDefault();
    };

    render() {
        if (this.state.hasApplied) {
            return (
                <>
                    <div className="overlay" onClick={this.props.closeModalHandler}/>
                    {/*Apply to event form modal*/}
                    <div className="modal-container">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="success-message">
                                    <div className="row success-message-content">
                                        <div className="col-12 alert alert-success center"> You have applied
                                            successfully, {this.state.firstName}!
                                        </div>
                                    </div>
                                    <div className="row event-details">
                                        <div className="col-6">
                                            <div className="event-location-title center"> Location</div>
                                            <div
                                                className="event-location-content center"> {this.props.eventDetails.eventLocation}</div>
                                        </div>
                                        <div className="col-6">
                                            <div className="event-date-title center"> Date</div>
                                            <div
                                                className="event-date-content center"> {this.props.eventDetails.eventDay + this.props.eventDetails.eventMonth}</div>
                                        </div>
                                        <div className="col-12 center event-url"><a
                                            href={this.props.eventDetails.eventURL}> Visit Event Page </a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="overlay" onClick={this.props.closeModalHandler}/>
                    {/*Apply to event form modal*/}
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="applyModalLabel">Apply to event: <b><span
                                    className='section-title'>{this.props.eventDetails.eventName}</span></b></h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                        onClick={this.props.closeModalHandler}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form id="apply_to_event" onSubmit={this.handleSubmit}>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationDefault01">First name</label>
                                            <input type="text" className="form-control" id="firstName"
                                                   placeholder="First name" required value={this.state.firstName}
                                                   onChange={this.handleChange}/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationDefault02">Last name</label>
                                            <input type="text" className="form-control" id="lastName"
                                                   placeholder="Last name" required value={this.state.lastName}
                                                   onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationDefault03">City</label>
                                            <input type="text" className="form-control" id="city" placeholder="City"
                                                   required value={this.state.city} onChange={this.handleChange}/>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationDefault04">State</label>
                                            <input type="text" className="form-control" id="state" placeholder="State"
                                                   required value={this.state.state} onChange={this.handleChange}/>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationDefault05">Zip</label>
                                            <input type="text" className="form-control" id="zip" placeholder="Zip"
                                                   required value={this.state.zip} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="invalidCheck2"
                                                   required/>
                                            <label className="form-check-label" htmlFor="invalidCheck2">
                                                Agree to terms and conditions
                                            </label>
                                        </div>
                                    </div>
                                    {/*Event id*/}
                                    <input type="hidden" value="20"/>
                                    <button className="btn btn-info center" type="submit">Apply</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }
}

export default ApplyingModal;
