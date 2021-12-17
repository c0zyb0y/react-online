
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';
import './App.css';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';

function App() {
  return (
    <div className='logo'>
    <Logo/>
    <Header/>
    <Footer title = "Facebook" website = "google.com" address = "BKK" zipcode = {10250} isOpen ></Footer>
    <Sidebar />
    <Menu />
    </div>
  );
}

export default App;
