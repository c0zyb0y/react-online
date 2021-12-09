
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';
import './App.css';

function App() {
  return (
    <div className='logo'>
    <Logo/>
    <Header/>
    <Footer title = "Facebook" website = "google.com" address = "BKK" zipcode = {10250} isOpen ></Footer>
    </div>
  );
}

export default App;
