import React from 'react';
import Header from '../components/Header';
import AccordionList from '../components/AccordionList';

export default class Answers extends React.Component{
    constructor (){
        super()
    }

    render(){
        return(
            <div>
                <Header/>
                <div className={'container'}>
                    <AccordionList />
                </div>
            </div>
        )
    }
}