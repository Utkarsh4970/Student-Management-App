
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import { Access_page, Access_student } from './components/Access_student';
import { Access } from './components/Access_student/Access_student';
import { Admin } from './components/Admin/Admin';
import { Admin_page } from './components/Admin';
import { Contest_page } from './components/Contest';
import { Contest } from './components/Contest/Contest';
import { SignUpForm4, Student_form } from './components/studentform';
import { Login_page } from './components/Login';

function App() {
  return (
    <div className="App">
 <Switch>
        <Route exact path="/">
          <Admin_page next1={"/contest"} next2={"/student"} next3={"/access"} />
        </Route>
        <Route exact path="/contest">
          <Contest_page />
        </Route>
        <Route exact path="/student">
          <Student_form  />
        </Route>
        <Route exact path="/access">
          <Access_page />
        </Route>

        </Switch>
        {/* <Login_page /> */}
      {/* <Access/> */}
      {/* <Admin/> */}
      {/* <Contest/> */}
     {/* <SignUpForm4 /> */}
    </div>
  );
}

export default App;
