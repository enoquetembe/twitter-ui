import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export function Default() {
    return(
        <div className='max-w-[1000px] my-0 mx-auto grid grid-cols-twitter-grid'>
     
        <Sidebar/>
   
        <div className='border-l border-r border-twitter-black-secondary'>
            <Outlet/>
        </div>
      </div>
    )
}
