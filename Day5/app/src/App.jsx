/*import Pages from "./component/pages"
import Login from "./component/Login";
import AfterLogin from "./component/AfterLogin";

function App(){
  return (
    <>
    <Pages/>
    <Login/>
    </>
  )
  
}

export default App;*/

import { useState } from "react";
import Pages from "./component/pages";
import Login from "./component/Login";
import AfterLogin from "./component/AfterLogin";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Pages />
      {isLoggedIn ? (
        <AfterLogin />
      ) : (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}

export default App;
