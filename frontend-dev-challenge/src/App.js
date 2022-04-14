
import './sass/styles.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Home } from "./components/Home"
import { ContactForm } from "./components/ContactForm"
import { Article } from "./components/article"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>         
          <Route path="/" element= {<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/contact" element= {<ContactForm />} />       
        </Routes>   
      </div>
    </BrowserRouter>
    
  );
}

export default App;
