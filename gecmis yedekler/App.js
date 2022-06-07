import { useEffect, useState } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Other from "./components/Other";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 50);
  }, []);

  return <div>{loading ? <div> Yükleniyor</div> : <Header />}</div>;
}

export default App;

/* <>
      
    </><Router>
        <Routes>
          <Route exact path="/Hakkimizda" element={<Home />} />
        </Routes>
      </Router>
    */
