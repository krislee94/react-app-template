import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {counter} from './redux/app.redux';
import {
    BrowserRouter,
    Router,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';
import Login from './container/login/login'
import Register from './container/register/register';
import reducers from './reducer';
import './config';


const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            {/* <App/> */}
            <div>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);
registerServiceWorker();
