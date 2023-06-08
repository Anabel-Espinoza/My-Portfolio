import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <div className="d-flex flex-column h-100vh">
      <Header />
      <Footer className="my-auto"/>
    </div>
  );
}

export default App;
