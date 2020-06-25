import React from 'react';
import '../App.css';
import Moment from 'moment';

function TourDetails(props) {
    let { tourDetails } = props;
    let img = Math.floor(Math.random() * Math.floor(5));
    console.log('IMG :' + img);
    const logo = require('../images/' + img + '.png');
    Moment.locale('en');

    return (

        <span>
            <div className="Light card title" >
                <div class="p-3 mb-2 bg-primary text-white">
                    From {tourDetails.sourcePlace} to {tourDetails.destinationPlace}
                    <br /> <b>Time </b> {Moment(tourDetails.date).format('d MMM')} </div>
                <img src={logo} height="200px" width="50px" className='card-img-top' />

                {tourDetails.packageType.map((pkg => <ul key={pkg.id} className="list-group">
                    <li className="list-group-item"> <b>Package Name:</b> {pkg.packageName}</li>
                    <li className="list-group-item"> <b>Tour Details:</b> {pkg.tourDetails}</li>
                    <li className="list-group-item"> <b>Duration:</b> {pkg.duration}</li>
                    <li class="list-group-item"><b>Cost for 2 members</b> {'\u20B9'} {pkg.packageCost}</li>
                </ul>
                ))}

            </div>
        </span>

    );
}

export default TourDetails; 