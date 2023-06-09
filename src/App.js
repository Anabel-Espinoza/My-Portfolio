import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <div className="wrapper d-flex flex-column">
      <Header />
      <Footer className="my-auto"/>
    </div>
  );
}

export default App;
