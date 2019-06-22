import React, {Component} from 'react';
// import { BrowserRouter, Route } from 'react-router-dom'; /**To use history object created by react browserrouter */
import { Router, Route, Switch } from 'react-router-dom'; /**To use custom history object created by us */
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import Header from './Header';
import history from '../history';

class App extends Component {
    render(){
        /**To use defaut history object created by browserrouter use BrowserRouter instead of Router here */
        /**Custom history object is used to do programatic navigation from action creator */

        /**We can Also use regex since react router v4, thus to solve our route problems we can also use this instead of switch */
        return (
            <div className="ui container">
                <Router history={history}>
                    <Header></Header>
                    <div>
                        <Switch>
                            <Route path="/" exact component={StreamList}></Route>
                            <Route path="/Streams/new" exact component={StreamCreate}></Route>
                            <Route path="/Streams/:id" exact component={StreamShow}></Route>
                            <Route path="/Streams/edit/:id" exact component={StreamEdit}></Route>
                            <Route path="/Streams/delete/:id" exact component={StreamDelete}></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;