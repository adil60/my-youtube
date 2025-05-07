
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


function App() {

  const appRoutes = createBrowserRouter(
    [
      {
        path: "/", element: <Body />, children: [
          { path: "/", element: <MainContainer /> },
          { path: "/watch", element: <WatchVideo /> },
          { path: "/results", element: <Results /> },
          {
            path: "/demo", element:
              <>
                <Demo /><Demo2 /> </>
          }
        ]
      }
    ]
  )

  return (
    <Provider store={store} >
      <div>
        <Header />
        <RouterProvider router={appRoutes} />
      </div>
    </Provider>
  );
}


export default App;
