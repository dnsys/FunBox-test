import React from 'react';
import {Link} from 'react-router-dom'
import './Home/style.sass'

import FeedList from '../components/FeedList';

export default class Home extends React.Component{
    constructor (){
        super();
    }

    render(){
        return(
            <div className={'main-page'}>
                <div className={'main-page__inner'}>
                    <Link to="/answers" className={'btn btn--answers'}>?</Link>
                    <div className="container">
                        <div className={"feed-container"}>
                            <FeedList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}