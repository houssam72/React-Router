import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Admin } from "./components/Admin";
import { AuthProvider } from "./components/Auth";
import { FeatureProducts } from "./components/FeatureProducts";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { NewProducts } from "./components/NewProducts";
import { NoMatch } from "./components/NoMatch";
import { OrderSummary } from "./components/OrderSummary";
import { Products } from "./components/Products";
import { Profile } from "./components/Profile";
import { RequireAuth } from "./components/RequireAuth";
import { UserDetails } from "./components/userDetails";
import { Users } from "./components/Users";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="order-summary" element={<OrderSummary />}></Route>

          <Route path="products" element={<Products />}>
            {/* the special of Neted route is that React Router automatically  forms the full path to the childern routes*/}
            <Route index element={<FeatureProducts />} />
            <Route path="feature" element={<FeatureProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          ></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
