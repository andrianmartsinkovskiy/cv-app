import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom";
import {HomePage} from "./pages/home";
import {PersonPage} from "./pages/person";
import {AppRoutes} from "./const/app-routes";

const useRoutes = () => {


  return (
    <div>
      <Routes>
        <Route exact path={AppRoutes.home} element={<HomePage/>} />
        <Route path='/:id' element={<PersonPage />} />

        <Route
          path="*"
          element={<Navigate to={AppRoutes.home} />}
        />
      </Routes>
    </div>
  )
}

export {useRoutes}
