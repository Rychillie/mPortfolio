import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
  isHome?: boolean;
};

const Layout = ({ children, isHome }: Props) => {
  return (
    <>
      <Header isHome={isHome} />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
