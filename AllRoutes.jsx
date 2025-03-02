import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Admin, ProductList, ProductsDetail, Contact, ContactIn, ContactEu, ContactUs, PageNotFound } from "../pages";



export const AllRoutes = () => {
  const user = false; // Define user (Replace with actual auth logic)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Products" element={<ProductList />} />
      <Route path="Products/:id" element={<ProductsDetail />} />

      {/* Contact Page with Nested Routes */}
      <Route path="Contact" element={<Contact />}>
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="ContactIn" element={<ContactIn />} />
        <Route path="ContactEu" element={<ContactEu />} />
      </Route>

      {/* Admin Route with Authentication Check */}
      <Route path="Admin" element={user ? <Admin /> : <Navigate to="/" />} />

      {/* Catch-All Route for 404 */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
