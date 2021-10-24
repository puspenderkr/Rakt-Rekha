import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { firebaseApp, userRef } from './firebase';
import Signup from './components/Signup';
import "./App.css"
import Feed from './components/Feed';
import Navbars from './components/reusable/Navbars';
import Signin from './components/Signin';
import Home from './Home';
import { 
  Switch,
  Route,
} from "react-router-dom";



function App() {

  const [stage, setStage] = useState("");
  const [signupSignin, setSignupSignin] = useState("SI")
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {

    firebaseApp.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user.uid)
        userRef.child(user.uid).once("value", snap => {
          setUserDetails(snap.val())
        })
        setStage("loggedIn")
        setSignupSignin("SI")
      } else {
        console.log("No user log in")
        setStage("notLoggedIn")
      }
    })
  }, [])

  const changeState = (value) => {
    setSignupSignin(value);
  }


  return (
    <div className="App">
      <Navbars stage={stage} />
     
        <Switch>

          <Route exact path="/" >
            {stage === 'loggedIn' && <Feed userDetails={userDetails} />}
            {stage === 'notLoggedIn' && signupSignin === "SI" && <Signin changeState={changeState} />}
            {stage === 'notLoggedIn' && signupSignin === "SU" && <Signup changeState={changeState} />}
          </Route>

          {/* <Route path="/:uid">
            <ProfilePage/>
          </Route> */}

          <Route exact path="/home" component={Home}> <Home/> </Route>
        </Switch>
     

    </div>
  );
}

export default App;
