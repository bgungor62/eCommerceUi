import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import ProductDetailPage from "../pages/products/ProductDetailPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ProductListPage from "../pages/products/ProductListPage";
import ProtectedRoute from "../auth/ProtectedRoute";
import ProfilePage from "../pages/profile/ProfilePage";
import SellerRoute from "../auth/SellerRoute";
import SellerProductCreatePage from "../pages/seller/SellerProductCreatePage";
import AdminRoute from "../auth/AdminRoute";
import AdminSellerPage from "../pages/admin/AdminSellerPage";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Navigate to={"/products"} replace></Navigate>}
          />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage></ProfilePage>
              </ProtectedRoute>
            }
          />
          <Route
            path="/seller/products/create"
            element={
              <SellerRoute>
                <SellerProductCreatePage></SellerProductCreatePage>
              </SellerRoute>
            }
          />
          <Route
            path="/admin/seller"
            element={
              <AdminRoute>
                <AdminSellerPage></AdminSellerPage>
              </AdminRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboardPage></AdminDashboardPage>
              </AdminRoute>
            }
          />
          <Route
            path="*"
            element={
              <div>
                Sayfa Bulunamadı yanlış yerlerdesin.. Hacker mı olcann cenn
                slkdfjasdlfj
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
