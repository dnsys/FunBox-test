import React from 'react'

class FeedItem extends React.Component {
    constructor (props){
        super(props)
    }

    render(){
        const itemFeed = this.props.item;
        const disabledClass = itemFeed.disabled ? 'disabled' : '';
        return(
            <div className={`feed-item ${disabledClass}`}>
                <div className="feed-item__inner">
                    <div className="feed-item__capture">
                        Сказочное заморское яство
                    </div>
                    <div className="feed-item__title">
                        { itemFeed.title }
                    </div>
                    <div className="feed-item__sub-title">
                        { itemFeed.subTitle }
                    </div>
                    <ul className="feed-item__list">
                        <li><strong>10</strong> порций</li>
                        <li>мышь в подарок</li>
                    </ul>
                    <div className="feed-item__weight">
                        <span>{ itemFeed.weight }</span>кг
                    </div>
                    <img src={itemFeed.imgUrl} className="feed-item__cat" alt=""/>
                </div>
            </div>
        )
    }
}

export default FeedItem;