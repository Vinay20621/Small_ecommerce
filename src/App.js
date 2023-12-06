import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import Cart from './pages/Cart';
import Navigation from './components/Navigation';
import './Index.css'


const App = () => {

    return (
        <>
            <Router>
               
                    <Navigation />
                    <Switch>
                            <Route path="/" component={Home} exact></Route>
                           
                            <Route path="/products" exact component={ProductsPage}></Route>
                            
                            <Route path="/cart" component={Cart}></Route>
                    </Switch>
              
            </Router>
        </>
    )
}

export default App;