import React from 'react';
import FeedItem from './FeedItem';

class FeedList extends React.Component {
    constructor (){
        super()
    }

    render(){
        const items = [
            {
                title: 'Нямушка',
                subTitle: 'с фуа-гра',
                imgUrl: './images/cote.png',
                weight: '0,5',
                additions: [
                    '<strong>10</strong> пораций',
                    'мышь в подарок'
                ]
            },
            {
                title: 'Нямушка',
                subTitle: 'с рыбой',
                imgUrl: './images/cote.png',
                weight: '2',
                additions: [
                    '<strong>40</strong> пораций',
                    '<strong>2</strong> мышы в подарок'
                ]
            },
            {
                disabled: true,
                title: 'Нямушка',
                subTitle: 'с курой',
                imgUrl: './images/cote.png',
                weight: '5',
                additions: [
                    '<strong>100</strong> пораций',
                    '<strong>5</strong> мышей в подарок',
                    'заказчик доволен'
                ]
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