import React from 'react';
import './Home/style.sass'

import FeedList from '../components/FeedList';

export default class Home extends React.Component{
    constructor (){
        super();
    }

    render(){
        return(
            <div className={'main-page'}>
                <div className="container">
                    <div className={'main-page__inner'}>
                        <div className={"feed-container"}>
                            <FeedList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}