import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Plans from "./Components/Plans";
import Mission from "./Components/Mission";
import Vision from "./Components/Vision";
import Flow from "./Components/Flow";    
import Plan2 from "./Components/Plan2";
import Feature from "./Components/Feature";
import Products from "./Components/Products";
import About from "./Components/About";
import OurProducts from "./Components/OurProducts";
import Reason from "./Components/Reason";
import Bio from "./Components/Bio"; 
import Enquire from "./Components/Enquire";      
import WaterComposition from "./Components/Watercomposition";
import Custom from "./Components/Custom";
import HowItWorks from "./Components/HowItWorks";
import Form from "./Components/Form";
import Specifications from "./Components/Specifications";
import Specifications1 from "./Components/Specifications1";
import Specifications2 from "./Components/Specifications2";
import Specification5 from "./Components/Specifications5";
import Specification4 from "./Components/Specifications4";
import Specification3 from "./Components/Specifications3";
// Import other specification components as needed  

// Individual Product Pages
import Product50 from "./Components/Product50";
import Product100 from "./Components/Product100";
import Product250 from "./Components/Product250";
import Product500 from "./Components/Product500";
import Product1000 from "./Components/Product1000";
import Product2000 from "./Components/Product2000";

import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Main />
                <Plans />
                <Flow />
                <Plan2 />
                <Feature />
                <WaterComposition />
                <Bio />
              </>
            }
          />

          {/* Products Page */}
          <Route
            path="/products"
            element={
              <>
                <Products />
                <OurProducts />
                <Reason />
                <Flow />
              </>
            }
          />

          {/* Individual Product Pages */}
          <Route path="/product50" element={<><Product50 /><Specifications/><Bio /></>} />
          <Route path="/product100" element={<><Product100 /><Specifications1/><Bio /></>} />
          <Route path="/product250" element={<><Product250 /><Specifications2/><Bio /></>} />
          <Route path="/product500" element={<><Product500 /><Specification3/><Bio /></>} />
          <Route path="/product1000" element={<><Product1000 /><Specification4/><Bio /></>} />
          <Route path="/product2000" element={<><Product2000 /><Specification5/><Bio /></>} />

          {/* About Page */}
          <Route
            path="/about"
            element={
              <>
                <About />
                <Mission />
                <Vision />
              </>
            }
          />

          <Route
            path="/custom"
            element={
              <>
                <Custom/>
                <HowItWorks/>
                <Form/>
                
              </>
            }
          />

          {/* Enquire Page */}
          <Route path="/enquire" element={<Enquire />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
