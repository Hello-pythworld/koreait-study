import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NewVariable from './components/01_NewVariable.jsx'
import RouterTest from './pages/02_RouterTest.jsx'
import Query from './pages/03_Query.jsx'
import Path from './pages/04_Path.jsx'
import Extension
 from './pages/05_Extension.jsx'
import Props from './pages/06_Props.jsx'
import Rendering from './pages/07_Rendering.jsx'
import ListRendering from './pages/08_ListRendering.jsx'
import EventHandler from './pages/09_EventHandler.jsx'
import ProfilePage from './pages/Training/Q1_ProfilePage.jsx'
import Q2_ButtonPage from './pages/Training/Q2_ButtonPage.jsx'
import Q3_LoginPage from './pages/Training/Q3_LoginPage.jsx'
import Q4_FruitPage from './pages/Training/Q4_FruitPage.jsx'
import Q5_EvenPage from './pages/Training/Q5_EvenPage.jsx'
import Q6_MenuPage from './pages/Training/Q6_MenuPage.jsx'
import State from './pages/10_State.jsx'
import UseState from './pages/11_UseState.jsx'
import FormHandling from './pages/12_FormHandling.jsx'
import Lifting from './pages/13_Lifting.jsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/01",
    element: <NewVariable />// 해당 URL로 요청이 왔을 때 보여줄(렌더링 할) 함수
  },
  {
    path: "/02",
    element: <RouterTest />
  },
  {
    path: "/03",
    element: <Query />
  },
    {
      path: "/04/:value",
      element: <Path />
    },
    {
      path: "/05",
      element:<Extension />
    },
    {
      path: "/06",
      element:<Props />
    },
    {
      path: "/07",
      element: <Rendering />
    },
    {
      path:"/08",
      element: <ListRendering />
    },
    {
      path:"/09",
      element: <EventHandler />
    },
    {
      path:"/10",
      element: <State />
    },
    {
      path:"/11",
      element: <UseState />
    },
    {
      path:"/12",
      element: <FormHandling />
    },
    {
      path:"/13",
      element: <Lifting />
    },
    {
      path:"/q1",
      element: <ProfilePage />
    },
    {
      path:"/q2",
      element: <Q2_ButtonPage />
    },
    {
      path:"/q3",
      element: <Q3_LoginPage />
    },
    {
      path:"/q4",
      element: <Q4_FruitPage />
    },
    {
      path:"/q5",
      element: <Q5_EvenPage />
    },
    {
      path:"/q6",
      element: <Q6_MenuPage />
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)




