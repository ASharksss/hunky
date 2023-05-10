import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import axios from "axios";
import { REHYDRATE, PERSIST } from 'redux-persist'
import { useSelector } from "react-redux";

// Компоненты
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { HomeDetail } from "./components/HomeDetail";
import { Stock } from "./components/Stock";
import { History } from "./components/History";
import { Profile } from "./components/Profile";
import { Review } from "./components/Review";
import { DefectDetail } from "./components/defectDetail";
import { CancelDetail } from "./components/cancelDetail";
import { Salary } from "./components/Salary";
import { AdminLayout } from "./components/admin/AdminLayout";
import { AdminUsers } from "./components/admin/AdminUsers";
import { AdminStock } from "./components/admin/AdminStock";
import { StockResume } from "./components/admin/StockResume";
import { AddUser } from "./components/admin/addUser";
import { UsersDetail } from "./components/admin/UsersDetail";
import { AdminReview } from "./components/admin/AdminReview";
import { Auth } from "./components/Auth";
import { AdminProducts } from "./components/admin/AdminProducts";
import { AddProduct } from "./components/admin/addProduct";
import { AddJob } from "./components/admin/job/addJob";
import { HistoryDetail } from "./components/HistoryDetail";
import { UserSalary } from "./components/admin/UsersSalary";
import { JobCost } from "./components/admin/JobCost";
import { ShippedProducts } from "./components/admin/ShippedProducts";
import { SendProducts } from "./components/SendProducts";
import { Notification } from "./components/admin/Notification";
import { AdminStockAccepted } from "./components/admin/AdminStockAccepted";
import {StockResumeAccepted} from "./components/admin/StockResumeAccepted";

axios.defaults.baseURL = 'https://rabotyagi-api.vodenoi.shop/v1';
// axios.defaults.baseURL = 'http://localhost:5000/v1';

function App() {
  const auth = useSelector(state => state.auth)
  const [preload, setPreload] = useState(true)
  useEffect(() => {
    setPreload(true)
  }, [PERSIST])
  useEffect(() => {
    setPreload(false)
    if (auth.isAuth) {
      axios.defaults.headers.common = { 'Authorization': `Bearer ${auth.token}` }
    }
  }, [REHYDRATE])
  // useEffect(() => {
  //   if (auth.isAuth) {
  //     axios.defaults.headers.common = {'Authorization': `Bearer ${auth.token}`}
  //   }
  // }, [])
  if (preload) {
    return <p>Загрузка...</p>
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {!auth.isAuth &&
            <Route path='/' element={<Auth />}>
              <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
          }
          {auth.isAuth & auth.role === 'Администратор' &&
            <Route path='/' element={<AdminLayout />}>
              <Route index element={<AdminStock />} />
              <Route path='/admin/users' element={<AdminUsers />} />
              <Route path='/admin/products' element={<AdminProducts />} />
              <Route path='/admin/job/add' element={<AddJob />} />
              <Route path='/admin/product/add' element={<AddProduct />} />
              <Route path='/admin/user/detail/:id' element={<UsersDetail />} />
              <Route path='/history/:id' element={<HistoryDetail />} />
              <Route path='/user/salary/:id' element={<UserSalary />} />
              <Route path='/admin/users/add' element={<AddUser />} />
              <Route path='/admin/users/review' element={<AdminReview />} />
              <Route path='/admin/products/cost' element={<JobCost />} />
              <Route path='/admin/stock/resume' element={<StockResume />} />
              <Route path='/admin/stock/accepted/resume' element={<StockResumeAccepted />} />
              <Route path='/admin/stock/shipped' element={<ShippedProducts />} />
              <Route path='/admin/stock/sendShipped' element={<SendProducts />} />
              <Route path='/admin/notification' element={<Notification />} />
              <Route path='/admin/stock/accepted' element={<AdminStockAccepted />} />
            </Route>
          }
          {auth.isAuth & auth.role === 'Зритель' &&
            <Route path='/' element={<AdminLayout />}>
              <Route index element={<AdminStock />} />
              <Route path='/admin/users' element={<AdminUsers />} />
              <Route path='/admin/user/detail/:id' element={<UsersDetail />} />
              <Route path='/user/salary/:id' element={<UserSalary />} />
              <Route path='/admin/stock/shipped' element={<ShippedProducts />} />
            </Route>
          }
          {auth.isAuth & auth.role !== 'Администратор' &&
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/product/:id' element={<HomeDetail />} />
              <Route path='/stock' element={<Stock />} />
              <Route path='/history' element={<History />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/profile/review' element={<Review />} />
              <Route path='/profile/defect' element={<DefectDetail />} />
              <Route path='/profile/cancel' element={<CancelDetail />} />
              <Route path='/profile/salary' element={<Salary />} />
            </Route>
          }
          <Route path="/logout" element={<Navigate replace to="/" />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
