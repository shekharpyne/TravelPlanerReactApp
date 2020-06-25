import React from 'react';
import '../App.css';

import TourDetails from './TourDetails';

function SearchResult(props) {
    let { tourList } = props;
    let errorMsg = '';

    return (
        <div className="card bg-light mb-3">


            <div class="card-body">
                <div className="col-8"> <TourDetails tourDetails={tourList} /></div>
            </div>
        </div>
    )
}

export default SearchResult;