import React from "react";
import { Suspense, lazy } from "react";
import ReactLoading from 'react-loading';
const Home = lazy(() => import("./pages/Home.jsx"))

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center">
          <ReactLoading type="cylon" color="#4FA9E2" height={'50px'} width={'50px'} />
        </div>
      }
    >
      <Home />
    </Suspense>
  );
};

export default App;