import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchVideoContainer from "./components/SearchVideoContainer";
import VideoByCategoryContainer from "./components/VideoByCategoryContainer";
// import ExeptionPage from "./utils/ExeptionPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },

      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: <SearchVideoContainer />,
      },
      {
        path: "/category",
        element: <VideoByCategoryContainer />,
      },
    ],
  },
]);

function App() {
  return <Providers />;
}

function Providers({ children }) {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}>{children}</RouterProvider>
    </Provider>
  );
}

export default App;
