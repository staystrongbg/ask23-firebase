import { Topnav, Footer, Topbar, Breadcrumbs } from './';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col '>
      <Topbar />
      <Topnav />
      <Breadcrumbs />
      <div className='m-auto w-full  min-h-screen'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
