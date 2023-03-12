import { Sparkle } from 'phosphor-react'
import { Sidebar } from './components/Sidebar'
import { Tweet } from './components/Tweet'


export function App() {
  
  return (
   <div className='max-w-[1000px] my-0 mx-auto grid grid-cols-twitter-grid'>
     
     <Sidebar/>

     <div className='border-l border-r border-twitter-black-secondary'>
       <main className=''>
          <div className='flex items-center justify-between px-8 py-5 text-xl font-bold border-b border-twitter-black-secondary'>
            Home
            <Sparkle className='w-8 h-8 text-twitter-blue'/>
          </div>

          <form action='' 
            className='px-8 py-5 flex flex-col gap-2'
          >
            <label 
              htmlFor='tweet'
              className='flex gap-3'
            >
              <img 
                src='https://github.com/enoquetembe.png' 
                alt='Enoque Tembe'
                className='w-12 h-12 rounded-[999px]' 
              />
              
              <textarea 
                id='tweet'
                placeholder="What's happening" 
                className='bg-twitter-black-900 flex-1 text-xl font-medium mt-3 resize-none focus:outline-none placeholder:text-gray-700'
              >
              </textarea>
            </label>

              <button 
                type='submit'
                className='w-24 ml-auto p-4 bg-twitter-blue rounded-[9999px] text-4 text-white font-black hover:brightness-90'  
              > 
                Tweet 
              </button>
          </form>

          <div className='h-3 bg-twitter-black-secondary '/>
          
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
       </main>
     </div>
   </div>
  )
}
