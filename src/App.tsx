import { House } from "phosphor-react"
import logo from './assets/Logo.svg'
import { Sidebar } from "./components/Sidebar"


export function App() {
  
  return (
   <div className="max-w-[1000px] m-auto grid grid-cols-twitter-grid">
     
     <Sidebar/>
     <div className="border-l border-r border-twitter-gray-primary">
        Content
     </div>
   </div>
  )
}
