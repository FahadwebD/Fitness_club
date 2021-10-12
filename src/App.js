
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter , Switch ,Route } from 'react-router-dom';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUS/AboutUs';
import NotFound from './components/NotFound/NotFound';
import Blog from './components/Blog/Blog';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Switch>
      <Route exact path ='/'>
        <Home></Home>
      </Route>
      <Route exact path ='/home'>
        <Home></Home>
      </Route>
      <Route exact path ='/services'>
        <Services></Services>
      </Route>
      <Route exact path ='/aboutus'>
        <AboutUs></AboutUs>
      </Route>
      <Route exact path ='/blogs'>
     <Blog></Blog>
      </Route>
      <Route exact path ='/shop'>
     <Shop></Shop>
      </Route>
      <Route  path='/*'>
        <NotFound></NotFound>
      </Route>
     </Switch>
     
     </BrowserRouter>
     <Footer></Footer>

    </div>
  );
}

export default App;
