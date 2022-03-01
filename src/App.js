import { BrowserRouter as Routing, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
// import Home from './Components/Home';
// import Service from './Components/Services';
// import About from './Components/About';
// import Contact from './Components/Contact'
import Form from './Components/FormSection';
// import Footer from './Components/Footer';

import AllPages from './Components/AllPages';
function App() {
  return (

    <div className="App">
      <Routing>
        <AllPages/>
            {/*<Home/>
            <Service/>
            <About/>
            <Contact/>
            <Form/>
            <Footer/> */}
        
                    {/* <Route exact path="/" component={AllPages} /> */}
                    {/* <Route path="/form" componet={Form} /> */}
        </Routing> 
    </div>
  );
}

export default App;
