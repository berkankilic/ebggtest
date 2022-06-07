/* react */
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

/* plugins */
/* router */ import Ebggrouter from "./router";
/* lazy-load */ import LazyLoad from "react-lazyload";

function App() {
  return <Ebggrouter />;
}

export default App;
