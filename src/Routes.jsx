import App from "./App";
import Reting from "./components/Reting";
import ShowSubmit from "./components/ShowSubmit";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Reting />,
      },
      {
        path: "/submit",
        element: <ShowSubmit />,
      },
    ],
  },
];

export default routes;
