import Header from './Header';
import Footer from './Footer';



const Layout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />

  <style jsx global>{`
    body { 
      margin:0px;
      font: 11px menlo;
    }
  `}</style>
  </div>
);

export default Layout;