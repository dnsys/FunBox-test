import React from 'react';
import Main from './Main';

class App extends React.Component {
    constructor (){
        super();
    }

    render() {
        return (
            <div className={'app-wrapper'}>
                <Main />
            </div>
        );
    }
}

export default App;