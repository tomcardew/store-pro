import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import LandingView from './views/landing/landing'
import ProductView from './views/product/product'

const Collections = () => <div>Holis</div>

const RouterComponent = () => {
    return <Router>
        <Switch>
            <Route path="/" exact component={LandingView} />
            <Route path="/collections" exact component={Collections} />
            <Route path="/product/:slug" exact component={ProductView} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>    
}

export default RouterComponent