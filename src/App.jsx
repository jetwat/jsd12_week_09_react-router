import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
// createBrowserRouter รับพารามิเตอร์เป็น array
const router = createBrowserRouter([
  {
  path: "/",
  element: <Layout />,
  }
]);

export default function App() {
  return <RouterProvider router={router}/>;
}
