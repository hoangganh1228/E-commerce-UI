import Header from '../components/client/Header';
import Footer from '../components/client/Footer';

const ClientLayout = ({ children }) => {
  return (
    <div className="client-layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default ClientLayout;
