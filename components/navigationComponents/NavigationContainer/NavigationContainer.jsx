import React, {useState} from "react";

import AuthenticatedNavigation from "../AuthenticatedNavigation/AuthenticatedNavigation";
import UnauthenticatedNavigation from "../UnauthenticatedNavigation/UnauthentiactedNavigation";

const Navigation = () => {
  const [token, setToken] = useState(true)
  return (
    token ?
    <AuthenticatedNavigation/> :
    <UnauthenticatedNavigation/>
  )
};

export default Navigation;