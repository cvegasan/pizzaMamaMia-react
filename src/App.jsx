import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    //App.jsx se mostrarán los componentes Navbar, Home y Footer
    <>
        <NavBar></NavBar>
        <Home></Home>
        <Footer></Footer>
    </>
  )
}
export default App;
