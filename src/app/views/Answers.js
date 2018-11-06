import React from 'react';
import Header from '../components/Header';
import AccordionList from '../components/AccordionList';
import ImageCat from '../../images/cote.png';
import './Answers/index.sass';

export default class Answers extends React.Component{
    constructor (){
        super()
    }

    render(){

        return(
            <div className="answer-page">
                <Header/>
                <div className={'container'}>
                    <div className="answer-page__title">Теоретические вопросы</div>
                    <AccordionList />
                </div>
                <div className="cat">
                    <div className="cat__cloud">
                        Choose me, please!
                    </div>
                    <img src={ImageCat} alt="cat"/>
                </div>
            </div>
        )
    }
}