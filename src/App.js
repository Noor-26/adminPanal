import logo from './logo.svg';
import './App.css';
import SideNav from './components/SideNav/SideNav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Contents/Home/Home';
import Activityprojects from './components/Contents/Activityprojects/Activityprojects';
import SubProjectList from './components/Contents/SubProjectlist/SubProjectList';
import AddNewSubProject from './components/Contents/AddNewSubProject/AddNewSubProject';
import SparProgressList from './components/Contents/SparProgressList/SparProgressList';
import SparProgressEntry_update from './components/Contents/SparProgressEntry_update/SparProgressEntry_update';
import Activity from './components/Activity/Activity';
import Manualworksheet from './components/Contents/manualmeworksheet/Manualworksheet';
import SubProjectPlanning from './components/Contents/SubProjects/SubProjectPlanning';
import PresentStMl from './components/Contents/PresentStatus&Milestone/PresentStMl';
import DEDProgress from './components/Contents/DEDProgress/DEDProgress';
import SBDProgress from './components/Contents/SBDProgress/SBDProgress';

function App() {
  
  return (
    <div className="App">
<Routes>
<Route
              path="/"
              element={<SideNav />
              }
            >
              <Route index element={<Home />} />
              <Route path='subprojectplanning' element={<SubProjectPlanning/>} />
              <Route path='activityproject' element={<Activityprojects />} />
              <Route path='subprojectlist' element={<SubProjectList />} />
              <Route path='createnew' element={<AddNewSubProject/>} />
              <Route path='sparprogresslist' element={<SparProgressList/>} />
              <Route path='sparprogressentry-update' element={<SparProgressEntry_update/>} />
              <Route path='dedprogress' element={<DEDProgress/>} />
              <Route path='sbdprogress' element={<SBDProgress/>} />
              <Route path='activity' element={<Activity/>} />
              <Route path='manualmeworksheet' element={<Manualworksheet/>} />
              <Route path='presentstatus&milestone' element={<PresentStMl/>} />
              
              
            </Route>
</Routes>
    </div>
  );
}

export default App;
