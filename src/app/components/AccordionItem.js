import React from 'react';

class AccordionItem extends React.Component{
    constructor (){
        super();

        this.state = {
            isShowAnswer: false
        }
    }

    showAnswer(){
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
                <div className="accordion-item__header" onClick={this.showAnswer.bind(this)}>
                    { accordionItem.question }
                </div>
                { accordionAnswerBody }
            </div>
        );
    }
}

export default AccordionItem;