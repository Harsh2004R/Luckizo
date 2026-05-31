import { Outlet } from "react-router-dom";
import Navigator from "../App/AppComponents/Navigator";

function NavigationLayout() {
  return (
    <>
      <Outlet />
      <Navigator />
    </>
  );
}

export default NavigationLayout;
