import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Footer, Navbar, Overview } from "./pages";


function App() { 

  return (
    <div className="App flex-row">
      <BrowserRouter>

        {/* public routes */}
        {/* <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route> */}

        {/* private routes */}
        <Navbar /> 
        <div className='components'>
          <Routes>
            <Route path="Overview" element={<Overview />} /> 
            <Route index  element={<Dashboard />} /> 
          </Routes>
        </div>
        <Footer />                                    
      </BrowserRouter>
    </div>
  );
}

export default App;
