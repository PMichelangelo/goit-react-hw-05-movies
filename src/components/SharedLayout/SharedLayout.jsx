import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import MainMenu from "components/MainMenu/MainMenu";

const SharedLayout = () => {
  return (
    <>
      <MainMenu />
      <Suspense fallback={<p>...Loading page</p>}>
        <Outlet/>
      </Suspense>

    </>

  )
}

export default SharedLayout
