import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <nav id="nav">
    <ul className="flex flex-row gap-4 items-center justify-center mb-4">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="store">Store</NavLink>
      </li>
      <li>
        <NavLink to="about-us">About us</NavLink>
      </li>
      <li>
        <NavLink to="contact">Contact us</NavLink>
      </li>
      <li>
        <NavLink to="terms">Terms & Conditions</NavLink>
      </li>
      <li>
        <NavLink to="privacy-policy">Privacy Policy</NavLink>
      </li>
    </ul>
  </nav>
);
