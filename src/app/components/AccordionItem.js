import React from 'react';

class AccordionItem extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            isShowAnswer: false
        }
    }

    showAnswer(){
        this.props.closeHint();

        this.setState({
            isShowAnswer: !this.state.isShowAnswer
        })
    }

    render(){
        const accordionItem = this.props.item;
        let accordionAnswerBody;

        if(this.state.isShowAnswer){
            accordionAnswerBody = <div className="accordion-item__body" dangerouslySetInnerHTML={{__html: accordionItem.answer}} />
        }else{
            accordionAnswerBody = ''
        }

        return(
            <div className="accordion-item">
                <div className={`accordion-item__header ${ this.state.isShowAnswer ? 'active' : '' }`} onClick={this.showAnswer.bind(this)}>
                    { accordionItem.question }
                </div>
                { accordionAnswerBody }
            </div>
        );
    }
}

export default AccordionItem;