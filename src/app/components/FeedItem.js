import React from 'react'

class FeedItem extends React.Component {
    constructor (props){
        super(props)
    }

    render(){
        const itemFeed = this.props.item
        return(
            <div className={'feed-item'}>
                <div className="feed-item__inner">
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