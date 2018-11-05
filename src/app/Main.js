import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Answers from './views/Answers';
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/answers' component={Answers}/>
        </Switch>
    </main>
)

export default Main;