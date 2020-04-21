import React, {Component} from 'react';

class PremiumEventModal extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        return (
            <>
                <div className="overlay" onClick={this.props.closeModalHandler}/>
                {/*Premium Event Modal*/}
                <div className="modal-container">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.closeModalHandler}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <hr/>
                            <div className="modal-body">
                                <div className="success-message">
                                    <div className="row success-message-content">
                                        <div className="col-12 alert alert-warning center">
                                            This event is available only for premium members!
                                        </div>
                                    </div>
                                    <div className="row event-details">
                                        <div className="col-12 center event-url">
                                            <a href="">
                                                Read more about our Premium Plans
                                            </a>
                                        </div>
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

export default PremiumEventModal;
