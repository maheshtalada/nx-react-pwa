// eslint-disable-next-line @typescript-eslint/no-unused-vars
import '../styles.css';
import React from 'react';
import { useTransition, a } from 'react-spring'
import { useLocation, Link, Switch, Route } from 'wouter';
import Header from "./components/header/header";
//import Footer from "./components/Footer";
//import { useLocation, Link, Switch, Route } from 'react-router-dom';
const Login = React.lazy(() => import('./components/login/login'));

const Plp = React.lazy(() => import('./components/plp/plp'));

const Pdp = React.lazy(() => import('./components/pdp/pdp'));

const Checkout = React.lazy(() => import('./components/checkout/checkout'));

const Orders = React.lazy(() => import('./components/orders/orders'));

export function App() {
  const [location] = useLocation()
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
  })
  console.log(location);
  const isShowHeader = location !== '/' ? true : false;

  return (
    <React.Suspense fallback={null}>

      { isShowHeader &&  <Header /> }
      {
        transitions((style, item ) => (
          <a.div key={item} style={style}>
            <Switch location={item}>
              <Route path="/" component={Login} />
              <Route path="/shop" component={Plp} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/order" component={Orders} />
              <Route
            path="/shop/:category"
            component={Plp}
          />
              <Route
            path="/shop/:category/:productID"
            component={Pdp}
          />
            </Switch>
          </a.div>
        ))
      }
    </React.Suspense>
  );
}

export default App;
