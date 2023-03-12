import { Sidebar } from './components/Sidebar'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

export function App() {
  
  return (
   <div className='max-w-[1000px] my-0 mx-auto grid grid-cols-twitter-grid'>
     
     <Sidebar/>

     <div className='border-l border-r border-twitter-black-secondary'>
       <RouterProvider router={router}/>
     </div>
   </div>
  )
}
