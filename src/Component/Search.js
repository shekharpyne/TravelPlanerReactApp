import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import SearchResult from './SearchResult';
import axio from 'axios';
import UserProfile from './UserProfile';



class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panel: '',
            isOpen: true,
            from: '',
            to: '',
            tourList: ''
        };
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let { tourList, isOpen } = this.state;
        console.log(this.refs.from.value);
        console.log(this.refs.to.value);
        axio.get('http://desktop-11nrfkr:8090/api/packages/' + this.refs.from.value + '/to/' + this.refs.to.value).then(response => {
            this.setState({
                tourList: response.data,
                isOpen: false
            })

        })
            .catch(error => {
                console.log(error);
                this.setState({ errorMsg: 'Error in retriving data' })
            })
    }
    logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    renderForm = () => {
        let { isOpen, from, to, panel, tourList } = this.state;
        let dataList;
        let user = UserProfile.getName();
        console.log('User >>>>>>>' + user);
        return (
            <div className="card bg-light mb-3">
                <form onSubmit={(e) => this.handleFormSubmit(e)}>
                    <div className="card-header">Welcome <a href='#'>{user}</a> to Travel Planner
                    <button type="button" class="btn btn-link" onClick={() => this.logout}>Logout</button></div>
                    <div className="card-body">
                        <h5 class="card-title">Search your tour</h5>
                        <label>From</label>
                        <input type="text" className="form-control" id="fromId" ref="from" placeholder="Source" />
                        <label>Destination</label>
                        <input type="text" className="form-control" id="toId" ref="to" placeholder="Destination" />
                        <br />
                        <button className="btn-lg btn-primary btn-block">Search</button>&nbsp;
                         {
                            !isOpen ?
                                tourList != '' ?
                                    < span >
                                        <SearchResult tourList={tourList} />
                                    </span>
                                    : <div> No record found</div>
                                : null
                        }

                    </div>
                </form>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderForm()}
            </div>
        )
    }
}

export default Search;