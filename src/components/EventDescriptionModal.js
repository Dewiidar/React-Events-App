import React, {Component} from 'react';

class EventDescriptionModal extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        return (
            <>
                <div className="overlay" onClick={this.props.closeModalHandler}/>
                {/*Event description modal*/}
                <div className="modal-container">
                    <div className="modal-dialog modal-dialog-wide" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="hero">
                                <div className="hero-img"
                                     style={{backgroundImage: "url('https://via.placeholder.com/1366x568')"}}>
                                </div>
                                <div className="apply-btn-container">
                                    <b><h2 style={{backgroundColor: '#626262', borderRadius: '13px', padding: '10px', color: 'white', fontWeight: 'bold'}}>{this.props.eventDetails.eventName}</h2></b>
                                    <a className="btn btn-info apply" data-toggle="modal"
                                       data-target="#applyModal"
                                       onClick={this.props.applyModalHandler.bind(this, true, this.props.eventDetails)}>Apply</a>
                                    <div className="share-btns-container">
                        <span className="material-icons">
share
</span>

                                        {/*Facebook*/}
                                        <a href={"http://www.facebook.com/sharer.php?u=" + this.props.eventDetails.eventURL}
                                           target="_blank">
                                            <img src="https://i.ibb.co/bb6Fpj7/facebook.png" alt="Facebook"/>
                                        </a>

                                        {/*LinkedIn*/}
                                        <a href={"http://www.linkedin.com/shareArticle?mini=true&url=" + this.props.eventDetails.eventURL}
                                           target="_blank">
                                            <img src="https://i.ibb.co/z2J1zXX/linkedin.png" alt="LinkedIn"/>
                                        </a>

                                        {/*Twitter*/}
                                        <a href={"https://twitter.com/share?url=" + this.props.eventDetails.eventName + "&text=" + this.props.eventDetails.eventName}
                                           target="_blank">
                                            <img src="https://i.ibb.co/5LhfNnJ/twitter.png" alt="Twitter"/>
                                        </a>

                                    </div>
                                </div>
                            </div>
                            <div className="modal-body">
                                {/*Speakers*/}
                                <div className="section-container">
                                    <div className="section-title">
                                        <h3>Event Speakers</h3>
                                    </div>
                                    <div className="speaker-cards">
                                        <div className="row">
                                            <div className="col-4 speaker-card">
                                                <img src="https://via.placeholder.com/150x150"
                                                     className="rounded-circle"
                                                     alt="Cinque Terre"/>
                                                <div className="speaker-name">
                                                    Lorem ipsum dolor
                                                </div>
                                            </div>
                                            <div className="col-4 speaker-card">
                                                <img src="https://via.placeholder.com/150x150"
                                                     className="rounded-circle"
                                                     alt="Cinque Terre"/>
                                                <div className="speaker-name">
                                                    Lorem ipsum dolor
                                                </div>
                                            </div>
                                            <div className="col-4 speaker-card">
                                                <img src="https://via.placeholder.com/150x150"
                                                     className="rounded-circle"
                                                     alt="Cinque Terre"/>
                                                <div className="speaker-name">
                                                    Lorem ipsum dolor
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr/>

                                {/*Stats*/}
                                <div className="section-container">
                                    <div className="section-title">
                                        <h3>Stats</h3>
                                    </div>
                                    <div className="stats-cards">
                                        <div className="row">
                                            <div className="col-3 stats-card">
                                                <img src="https://via.placeholder.com/50x50"
                                                     className="rounded-circle"
                                                     alt="Cinque Terre"/>
                                            </div>
                                            <div className="col-3 stats-card">
                                                <img src="https://via.placeholder.com/50x50"
                                                     className="rounded-circle"
                                                     alt="Cinque Terre"/>
                                            </div>
                                            <div className="col-3 stats-card">
                                                <img src="https://via.placeholder.com/50x50"
                                                     className="rounded-circle"
                                                     alt="Cinque Terre"/>
                                            </div>
                                            <div className="col-3 stats-card">
                                                <img src="https://via.placeholder.com/50x50"
                                                     className="rounded-circle"
                                                     alt="Cinque Terre"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr/>

                                {/*Sponsors*/}
                                <div className="section-container">
                                    <div className="section-title">
                                        <h3>Sponsors</h3>
                                    </div>
                                    <div className="sponsors-logos">
                                        <div className="logo">
                                            <img className="rounded-circle"
                                                 src="https://via.placeholder.com/200x200" alt=""/>
                                        </div>
                                        <div className="logo">
                                            <img className="rounded-circle"
                                                 src="https://via.placeholder.com/200x200" alt=""/>
                                        </div>
                                        <div className="logo">
                                            <img className="rounded-circle"
                                                 src="https://via.placeholder.com/200x200" alt=""/>
                                        </div>
                                        <div className="logo">
                                            <img className="rounded-circle"
                                                 src="https://via.placeholder.com/200x200" alt=""/>
                                        </div>
                                        <div className="logo">
                                            <img className="rounded-circle"
                                                 src="https://via.placeholder.com/200x200" alt=""/>
                                        </div>
                                        <div className="logo">
                                            <img className="rounded-circle"
                                                 src="https://via.placeholder.com/200x200" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <hr/>

                                <div className="section-container">
                                    <div className="section-title">
                                        <h3>Venue information</h3>
                                    </div>
                                    <div className="map">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                        doloremque illum incidunt
                                        odit sed, velit? Consequatur cupiditate dolorem eos, et excepturi
                                        fugiat illum inventore nostrum
                                        quas quibusdam, tempora voluptatibus voluptatum.
                                    </div>
                                </div>

                                <hr/>

                                <div className="section-container">
                                    <div className="section-title center">
                                        <a className="btn btn-info apply" data-toggle="modal"
                                           data-target="#applyModal"
                                           onClick={this.props.applyModalHandler.bind(this, true, this.props.eventDetails)}>Apply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default EventDescriptionModal;
