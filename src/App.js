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
import {AdminLayout} from "./components/admin/AdminLayout";
import {AdminUsers} from "./components/admin/AdminUsers";
import {AdminStock} from "./components/admin/AdminStock";
import {StockResume} from "./components/admin/StockResume";
import {AddUser} from "./components/admin/addUser";
import {UsersDetail} from "./components/admin/UsersDetail";
import {AdminReview} from "./components/admin/AdminReview";
import {Auth} from "./components/Auth";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/auth' element={<Auth/>} />
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
          <Route path='/admin' element={<AdminLayout/>}>
            <Route path='/admin/users' element={<AdminUsers/>}/>
            <Route path='/admin/users/detail' element={<UsersDetail/>}/>
            <Route path='/admin/users/add' element={<AddUser/>}/>
            <Route path='/admin/users/review' element={<AdminReview/>}/>
            <Route path='/admin/stock' element={<AdminStock/>}/>
            <Route path='/admin/stock/resume' element={<StockResume/>}/>

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
