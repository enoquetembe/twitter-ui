import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export function Default() {
  return (
    <div className="max-w-[1000px] max-md:grid-cols-responsive-grid my-0 mx-auto grid grid-cols-twitter-grid max">
      <Sidebar />

      <div className="border-l border-r border-twitter-black-secondary ">
        <Outlet />
      </div>
    </div>
  );
}
