import Home from "./Routes/Home/Home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Navigation/navigation.component";
import SignIn from "./Routes/SignIn/signIn.component";



const Shop = () => {

  return(
    <div>
    im shop
    </div>
  )
}



function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop/>} />
        <Route path="sign-in" element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}

export default App;
