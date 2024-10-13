/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import './index.css'
import ReactDOM from "react-dom/client";
import { createRoutesFromElements, Route, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Root from "./root/Root.tsx";
import UIKitRoot from "@yourdash/uikit/core/root.tsx";
import Navigation from "./components/navigation/navigation.tsx";
import ProjectsPage from './projects/Projects.tsx';
import AboutPage from './about/About.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <UIKitRoot>
      <RouterProvider
          // @ts-ignore
          router={createBrowserRouter(
              createRoutesFromElements(
                  <>
                    <Route element={<Navigation/>}>
                      <Route index element={<Root/>}/>
                    </Route>
                    <Route element={<Navigation subtitle={"Projects"}/>}>
                      <Route path={"projects"} element={<ProjectsPage/>}/>
                    </Route>
                    <Route element={<Navigation subtitle={"About"}/>}>
                      <Route path={"about"} element={<AboutPage/>}/>
                    </Route>
                  </>
              ))}
      />
    </UIKitRoot>
)
