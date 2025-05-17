import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const Body = () => {
    return (
        <div className="flex flex-row"
        // className="flex flex-row top-10 absolute w-screen"
         >

            {/* <div className="fixed top-20 left-0 w-[10%] h-full bg-white z-50 shadow-lg">
            </div> */}
                <Sidebar />

            {/* Main Content - With left margin */}
            {/* <div className="ml-[10%] w-[90%] mt-10">
            </div> */}
                <Outlet />

        </div>
    )
}

export default Body