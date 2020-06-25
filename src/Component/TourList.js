import React, { Component } from 'react';
import axio from 'axios';
import '../App.css';

import TourDetails from './TourDetails';

class TourList extends Component {

    constructor(props) {
        super(props);
        console.log('this.props.tourList ' + this.props.tourList);
        this.state = {
            from: this.props.from,
            to: this.props.to,
            tourList: this.props.tourList,
            errorMsg: ''
        }
    }

    // componentDidMount() {
    //     axio.get('http://desktop-11nrfkr:8090/api/packages/Kolkata/to/UAE').then(response => {
    //         console.log('>>>>>' + response)
    //         this.setState({ tourList: response.data })
    //     })
    //         .catch(error => {
    //             console.log(error);
    //             this.setState({ errorMsg: 'Error in retriving data' })
    //         })
    // }

    componentDidMount111() {
        console.log("Calling--------------")
        let tourList;
        axio.get('http://desktop-11nrfkr:8090/api/packages/' + this.state.from + '/to/' + this.state.to).then(response => {

            tourList = response.data;
            console.log(this.state.tourList.length);
        })
            .catch(error => {
                console.log(error);
                this.setState({ errorMsg: 'Error in retriving data' })
            })

    }


    render() {
        const { tourList, errorMsg } = this.state;
        // this.componentDidMount111();
        return (

            <div className="card">

                <div className="card-header">
                    <span className="font-weight-bold"> Welcome to Travel Planer </span>
                </div>
                <div class="card-body">
                    {
                        tourList.length ?
                            tourList.map(tour =>
                                <div key={tour.id}>
                                    <div className="col-8"> <TourDetails tourDetails={tour} /></div>
                                </div>

                            ) :
                            null
                    }
                    {
                        errorMsg ? <div> {errorMsg}</div> : null
                    }
                </div>
            </div>);
    }
}
export default TourList;