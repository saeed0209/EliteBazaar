import React from 'react'
import './index.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import TopProducts from './Components/TopProducts/TopProducts'
import Banner from './Components/Banner/Banner'
import Subscribe from './Components/Subscribe/Subscribe'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import Popup from './Components/Popup/Popup'
import AOS from 'aos'
import "aos/dist/aos.css"


const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      delay: 100,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <div>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};
export default App
