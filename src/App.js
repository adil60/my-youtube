
import './App.css';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from "./components/Body"
import MainContainer from './components/MainContainer';
import WatchVideo from './components/WatchVideo';


function App() {

  const appRoutes = createBrowserRouter(
    [
      { path: "/" , element : <Body/>,children: [
        { path : "/" , element : <MainContainer />},
        { path :"/watch" , element : <WatchVideo /> }
      ] }
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
