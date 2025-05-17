
import './App.css';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from "./components/Body"
import MainContainer from './components/MainContainer';
import WatchVideo from './components/WatchVideo';
import Results from './components/Results';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';
import Search from './components/Search';


const AppLayout = () => {
  return (
    <>
      <Header />

      <Body />
      </>

  )
}

function App() {

  const appRoutes = createBrowserRouter(
    [
      {
        path: "/", element: <AppLayout />, children: [
          { path: "/", element: <MainContainer /> },
          { path: "/watch", element: <WatchVideo /> },
          { path: "/results", element: <Results /> },
          { path: "/demo", element: <><Demo /><Demo2 /> </> },
          { path: "/search", element: <Search /> }
        ]
      }
    ]
  )

  return (
    <Provider store={store} >
      <RouterProvider router={appRoutes} />
    </Provider>
  );
}


export default App;
