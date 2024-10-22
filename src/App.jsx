import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import JewelleryShop from "./pages/JewelleryShop";
 
import Shop from "./pages/Shop";
import ShopDetails from "./pages/ShopDetails";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Checkout from "./pages/Checkout";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
 
 
 
 
 
 
 
import Shop2 from "./pages/Shop2";




import Login from "./components/Admin/Adminlogin/Login";
import Dashboard from "./pages/Dashboard/Dashboard"
import AddCategory from "./components/Admin/Categories/AddCategory"
import ManageCategory from "./components/Admin/Categories/ManageCategory"

function App() {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<JewelleryShop />} />   
 
      
    
      
    
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-2" element={<Shop2 />} />
        <Route path="/shopDetails" element={<ShopDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogDetails" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
{/* .............................................................................................................. */}
        <Route path="/login" element={<Login/>} /> 
        <Route path="/dashboard" element={<Dashboard/>} /> 
        <Route path="/add-category" element={<AddCategory/>} /> 
        <Route path="/manage-category" element={<ManageCategory/>} /> 
        

        
      </Routes>



    </Router>
  );
}

export default App;
