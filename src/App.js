import { Route,Routes, useLocation} from "react-router-dom";
import Home from "./contactAppjs/Home";
import AddContact from "./contactAppjs/AddContact";
import About from "./Routes/About";
//import TodoApp from "./TodoApp";
import WelcomePage from "./contactAppjs/WelcomePage";
import Navbar from "./contactAppjs/Navbar";
import "./contactAppjs/contact.css"
import pxsst from "./contactAppjs/pxsst.png";
import RQheros from "./Routes/RQheros";
import classNames from "classnames";
import Path from "./Path";
import { QueryClientProvider,QueryClient } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"
const queryClient = new QueryClient();
function App() {
  const { pathname } = useLocation()
  return (
      <QueryClientProvider client={queryClient}>
    <div className="App">
      <img src={pxsst} alt="alt" />
      <Navbar/>
      <div className={`${pathname==="/home"? "routes":""}`}>
      <Routes >
        <Route path="/rq" element={<RQheros/>}/>
        <Route path="/home" element={<Home/>} ></Route>
        <Route path="/addcontact" element={<AddContact/>} ></Route>
        <Route  path="/" element={<WelcomePage/>}></Route>
        <Route path="/about/:name" element={<About/>} ></Route>
        <Route path='/delete' element ={<Path/>}/>
      </Routes>
      </div>
    </div>
    <ReactQueryDevtools initalsOpen={false} position = 'bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
