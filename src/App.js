import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";
import {Home} from "./components/Home";
import {HomeDetail} from "./components/HomeDetail";
import {Stock} from "./components/Stock";
import {History} from "./components/History";
import {Profile} from "./components/Profile";
import {Review} from "./components/Review";
import {DefectDetail} from "./components/defectDetail";
import {CancelDetail} from "./components/cancelDetail";
import {Salary} from "./components/Salary";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/product/id' element={<HomeDetail/>}/>
            <Route path='/stock' element={<Stock/>}/>
            <Route path='/history' element={<History/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/profile/review' element={<Review/>}/>
            <Route path='/profile/defect' element={<DefectDetail/>}/>
            <Route path='/profile/cancel' element={<CancelDetail/>}/>
            <Route path='/profile/salary' element={<Salary/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
