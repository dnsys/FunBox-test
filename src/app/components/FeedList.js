import React from 'react';
import FeedItem from './FeedItem';

class FeedList extends React.Component {
    constructor (){
        super()
    }

    render(){
        const items = [
            {
                imgUrl: './images/cote.png',
                weight: '0,5'
            },
            {
                imgUrl: './images/cote.png',
                weight: '2'
            },
            {
                imgUrl: './images/cote.png',
                weight: '5'
            }
        ]
        const loopItems = items.map((item, index) => {
            return(
                <div key={index} className={'feed-list__item'}>
                    <FeedItem item={item} />
                </div>
            )
        })
        return(
            <div className={'feed-list'}>
                <div className={'feed-list__title'}>
                    Ты сегодня покормил кота?
                </div>
                <div className={'feed-list__container'}>
                    <div className={'feed-list__container-inner'}>
                        { loopItems }
                    </div>
                </div>
            </div>
        )
    }
}

export default FeedList;