import Header from './layouts/header';
import Footer from './layouts/footer';

import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="l-main">{children}</main>
      <Footer />
    </>
  )
}

export default Layout;