/* router */ import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";

/* pages */
/* homepage */ import Homepage from "./components/ui/pages/static-pages/home-page/homeindex";
/* 404 */ import Template404 from "./components/ui/error-pages/404";
/* test1 */ import Test1 from "./components/ui/pages/static-pages/testpage1";
/* test1 */ import Test2 from "./components/ui/pages/static-pages/testpage2";

export default function Ebggrouter() {
  return (
    <Router>
      <Routes>
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/lol" element={"lol"} />
        <Route exact path="/" element={<Homepage />} />
        <Route path="*" element={<Template404 />} />
      </Routes>
    </Router>
  );
}
