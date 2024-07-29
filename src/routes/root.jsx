import { Outlet, NavLink } from 'react-router-dom';

export const Root = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to={`store`}>Store</NavLink>
          </li>
          <li>
            <NavLink to={`about-us`}>About us</NavLink>
          </li>
          <li>
            <NavLink to={`terms`}>Terms & Conditions</NavLink>
          </li>
          <li>
            <NavLink to={`privacy-policy`}>Privacy Policy</NavLink>
          </li>
          <li>
            <NavLink to={`contact`}>Contact us</NavLink>
          </li>
        </ul>
      </nav>
      <h1>Root page</h1>
      <Outlet />
    </div>
  );
};
