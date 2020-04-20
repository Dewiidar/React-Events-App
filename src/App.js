import React from 'react';
import './App.css';
import Slider from './components/Slider'
import Modal from "./components/Modal";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applyModalState: {
                isShown: false
            }
        }
    }

    applyModalHandler = (isShownValue, eventDetails) => {
        this.setState({
            ...this.state,
            eventDetails: eventDetails,
            applyModalState: {
                isShown: isShownValue,
            }
        })
    };

    closeModalHandler = () => {
      this.setState({
          ...this.state,
          applyModalState: {
              isShown: false
          }
      })
    };


    render() {
        let modal;
        if(this.state.applyModalState.isShown) {
            modal = <Modal eventDetails={this.state.eventDetails} applyModalState={this.state.applyModalState} closeModalHandler={this.closeModalHandler}/>
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
                                <Slider applyModalHandler={this.applyModalHandler}/>
                            </div>
                            <hr/>

                        </div>
                    </div>
                </div>
            </>
        );

    }
}

export default App;
