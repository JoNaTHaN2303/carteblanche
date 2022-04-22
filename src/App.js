import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components/Components'
import { Home, Contact, ContactVraag, ContactOfferte, Products, Privacy, Nothing } from "./pages/Pages"
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <div className='min-w-full min-h-screen bg-gray-100 font-light'>
        <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/products" element={<Products/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/contact-vraag" element={<ContactVraag/>} />
              <Route path="/contact-offerte" element={<ContactOfferte/>} />
              <Route path="/privacy" element={<Privacy/>} />
              <Route path="*" element={<Nothing/>} />
            </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
