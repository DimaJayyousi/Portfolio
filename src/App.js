import "./App.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Heder from "./component/Heder/heder";
import Footer from "./component/Footer/Footer";
import Projects from "./Pages/project";
import Activity from "./Pages/activity";
import Home from "./Pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Heder />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
