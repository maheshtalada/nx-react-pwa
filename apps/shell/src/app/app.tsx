import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Login = React.lazy(() => import('login/Module'));

const Plp = React.lazy(() => import('plp/Module'));

const Pdp = React.lazy(() => import('pdp/Module'));

const Checkout = React.lazy(() => import('checkout/Module'));

const Orders = React.lazy(() => import('orders/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/plp">Plp</Link>
        </li>

        <li>
          <Link to="/pdp">Pdp</Link>
        </li>

        <li>
          <Link to="/checkout">Checkout</Link>
        </li>

        <li>
          <Link to="/orders">Orders</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />

        <Route path="/login" element={<Login />} />

        <Route path="/plp" element={<Plp />} />

        <Route path="/pdp" element={<Pdp />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/orders" element={<Orders />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
