import Table from "./components/Table";
import Home from "./components/Home";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import New from "./components/New";

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
      children:[
        {
          path:'/',
          element:<Table/>
        }
      ]
    },
    {
      path:'/new',element:<New/>
    }
  ])
  return (
   <>
    <RouterProvider router={router}/>
   </>
  )
}

export default App
