import { Outlet, NavLink } from 'react-router-dom';
import { Navigation } from '../components/Navigation';

export const Root = () => {
  return (
    <div>
      <Navigation />
      <h1 className="text-3xl font-bold underline text-center mb-4">
        My Store Page
      </h1>
      <main className="flex flex-col w-full px-4">
        <Outlet />
      </main>
    </div>
  );
};
