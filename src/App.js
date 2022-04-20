import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import HeaderHome from './components/HeaderHome/HeaderHome';
import Profile from './pages/Profile/Profile';
import Detail from './pages/Detail/Detail';
import ToDoApp from './pages/DemoAxios/ToDoApp/ToDoApp';
import UseStateDemo from './pages/Hooks/UseStateDemo/UseStateDemo';
import UseEffectDemo from './pages/Hooks/UseEffect/UseEffectDemo';
import UseCallbackDemo from './pages/Hooks/UseCallback/UseCallbackDemo';
import UseMemoDemo from './pages/Hooks/UseMemo/UseMemoDemo';
import UseRefDemo from './pages/Hooks/UseRef/UseRefDemo';
import ReduxHook from './pages/Hooks/ReduxHook/ReduxHook';
import ToDoListHook from './pages/Hooks/ToDoListHook/ToDoListHook';
import UseReducer from './pages/Hooks/UseReducer/UseReducer';
import ReactLifeCycle from './ReactLifeCycle/ReactLifeCycle';
import BaiTapXemChiTietSP from './Props/BaiTapXemChiTietSP/BaiTapXemChiTietSP';
import { useReducer } from 'react';



function App() {
  return (
    <BrowserRouter>
      <HeaderHome />

      <Switch>
        <Route exact path={'/home'} render={(pRoute) => { //pRoute là props của thẻ Route bao gồm : history,match,location
          return <div>
            <HeaderHome />
            <Home {...pRoute} />
          </div>
        }} />
        {/* <Route exact path={'/home'} component={Home} /> */}
        <Route exact path={'/about'} component={About} />
        <Route exact path={'/contact'} component={Contact} />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/register'} component={Register} />
        <Route exact path={'/reactlifecycle'} component={ReactLifeCycle} />
        <Route exact path={'/todoapp'} component={ToDoApp} />
        <Route exact path={'/xemchitiet'} component={BaiTapXemChiTietSP} />
        <Route exact path={'/usestate'} component={UseStateDemo} />
        <Route exact path={'/useeffect'} component={UseEffectDemo} />
        <Route exact path={'/usecallback'} component={UseCallbackDemo} />
        <Route exact path={'/usememo'} component={UseMemoDemo} />
        <Route exact path={'/useref'} component={UseRefDemo} />
        <Route exact path={'/usereducer'} component={UseReducer} />
        <Route exact path={'/reduxhook'} component={ReduxHook} />
        <Route exact path={'/todolisthook'} component={ToDoListHook} />
        <Route exact path={'/'} component={Home} />
      </Switch>

    </BrowserRouter>
    // <div>
    
      
    // </div>
  );
}



export default App;
