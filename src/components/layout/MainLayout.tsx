import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Content from '../Content/Content';
import './MainLayout.css'


export default function MainLayout(){
    return (
      <div className="Layout">
        <Header />
        <div className="Content">
          <Content/>
        </div>
        <Footer />
      </div>
    );
}