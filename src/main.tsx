import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Root from "./root/Root.tsx";
import UIKitRoot from "@yourdash/uikit/core/root.tsx";
import Navigation from "./components/navigation/navigation.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UIKitRoot>
    <BrowserRouter>
      <Routes>
        <Route element={<Navigation/>}>
        <Route index element={<Root/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </UIKitRoot>
  </React.StrictMode>,
)
