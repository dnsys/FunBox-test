import React from 'react'

class FeedItem extends React.Component {
    constructor (props){
        super(props)

        this.state = {
            selected: false
        }
    }

    select(event){
        event.preventDefault();
        if( !this.props.item.disabled ){
            this.setState({
                selected: !this.state.selected
            })
        }
    }

    hoverOn(event){
        let element = event.currentTarget
        if(element.classList.contains("no-hover")){
            element.classList.remove("no-hover")
        }
    }

    componentDidMount(){
        let selectLink = document.getElementsByClassName('feed-item-select')[0]
        selectLink.addEventListener('click', () => {
            this.hoverOn();
        })
    }

    render(){
        const itemFeed = this.props.item;
        const disabledClass = itemFeed.disabled ? 'disabled' : '';
        const feedAdditions = itemFeed.additions.map((item, index) => {
            return(
                <li key={index} dangerouslySetInnerHTML={{__html: item}} /> //todo - need to find a way to solve the issue (insert html)
            )
        });
        return(
            <div className={`feed-item ${disabledClass} ${this.state.selected ? 'selected' : ''}`} onClick={this.select.bind(this)}>
                <div className={`feed-item__wrapper ${this.state.selected ? 'no-hover' : ''}`} onMouseLeave={this.hoverOn.bind(this)}>
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
                            { feedAdditions }
                        </ul>
                        <div className="feed-item__weight">
                            <span>{ itemFeed.weight }</span>кг
                        </div>
                        <img src={itemFeed.imgUrl} className="feed-item__cat" alt=""/>
                    </div>
                </div>
                <div className="feed-item__description">
                    { <span dangerouslySetInnerHTML={{__html: itemFeed.description}} />}
                </div>
            </div>
        )
    }
}

export default FeedItem;