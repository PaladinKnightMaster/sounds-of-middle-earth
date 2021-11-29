import * as React from 'react';
import { hot } from 'react-hot-loader';
import './../assets/scss/App.scss';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import { LOTRMap } from './Map';
import { About } from './About';
import { Source } from './Source';
import { Credits } from './Credits';
import { Contribute } from './Contribute';
import { Navigation } from './Navigation';

class App extends React.Component<Record<string, unknown>, undefined> {
    public render() {
        return (
            <div className="App">
                <Layout style={{ minHeight: '100vh' }}>
                    <Navigation/>
                    <div id="content">
                        <Layout className="site-layout">
                            <Switch>
                                <Route exact path='/' component={LOTRMap} />
                                <Route path='/home' component={LOTRMap} />
                                <Route path='/about' component={About} />
                                <Route path='/source' component={Source} />
                                <Route path='/credits' component={Credits} />
                                <Route path='/contribute' component={Contribute} />
                            </Switch>
                        </Layout>
                    </div>
                </Layout>
            </div>
        );
    }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);