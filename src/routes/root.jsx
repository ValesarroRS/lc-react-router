import { Outlet, NavLink } from 'react-router-dom';

export const Root = () => {
  return (
    <div>
      <nav>
        <ul className="flex flex-row gap-4 items-center justify-center mb-4">
          <li>
            <NavLink to="/">Landing</NavLink>
          </li>
          <li>
            <NavLink to="store">Store</NavLink>
          </li>
          <li>
            <NavLink to="about-us">About us</NavLink>
          </li>
          <li>
            <NavLink to="terms">Terms & Conditions</NavLink>
          </li>
          <li>
            <NavLink to="privacy-policy">Privacy Policy</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact us</NavLink>
          </li>
        </ul>
      </nav>
      <h1 className="text-3xl font-bold underline text-center mb-4">
        My Store Page
      </h1>
      <main className="flex flex-col w-full px-4">
        <Outlet />
      </main>
    </div>
  );
};
