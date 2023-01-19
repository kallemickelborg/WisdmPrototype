import React from "react";
import { useSelector } from 'react-redux';
import { authToken } from "../../../redux/reducers/userSlice";

import AuthenticatedNavigation from "../AuthenticatedNavigation/AuthenticatedNavigation";
import UnauthenticatedNavigation from "../UnauthenticatedNavigation/UnauthenticatedNavigation";

const Navigation = () => {
  const token = useSelector(authToken); 
  // console.log(token);
  return (
    !!token ?
    <AuthenticatedNavigation/> :
    <UnauthenticatedNavigation/>
  )
};

export default Navigation;