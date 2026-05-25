import { BrowserRouter, Routes, Route, Link ,useParams} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./Products";
import Laptop from "./Laptop";
import Phone from "./Phone";

function App() {
  function User() {
    console.log(useParams());
    const { id } = useParams();
    return <h2>User ID: {id}</h2>;
  }
  function NotFound() {
    return <h2>404 Not Found</h2>;
  }

  return (
    <BrowserRouter>
      <h1>My React Router App</h1>
        <nav>
          <Link to="/">Home</Link> |
           <Link to="/about">About</Link> |
           <Link to="/contact">Contact</Link>|
           <Link to="/user/10">User</Link>|
           <Link to="/products">Products</Link>|
        </nav>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/products" element={<Products />}>
          <Route path="laptops" element={<Laptop />} />
          <Route path="phones" element={<Phone />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

