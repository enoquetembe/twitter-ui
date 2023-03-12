import logo from '../assets/Logo.svg'
import '../global/details.css'
import { House, Hash, Bell, BookmarkSimple, Envelope, FileText, User, DotsThreeCircle } from 'phosphor-react'
import { Link, NavLink } from 'react-router-dom'

export function Sidebar() {

    return (
        <aside className='flex flex-col gap-8 mx-6 my-5 '>
           <img 
                src={logo} 
                alt="Logo"
                className='w-8 h-8'
            />

            <nav className='flex flex-col gap-8'>
                <NavLink to="/" className='flex items-center gap-5 text-xl font-bold'>
                    <House className='w-8 h-8 ' weight='fill'/>
                    Home
                </NavLink>
                <a href="" className='flex items-center gap-5 text-xl font-bold'>
                    <Hash className='w-8 h-8 '/>
                    Explorer
                </a>
                <a href="" className='flex items-center gap-5 text-xl font-bold'>
                    <Bell className='w-8 h-8 '/>
                    Notification
                </a>
                <a href="" className='flex items-center gap-5 text-xl font-bold'>
                    <Envelope className='w-8 h-8 '/>
                    Messages
                </a>
                <a href="" className='flex items-center gap-5 text-xl font-bold'>
                    <BookmarkSimple className='w-8 h-8 '/>
                    Bookmarks
                </a>
                <a href="" className='flex items-center gap-5 text-xl font-bold'>
                    <FileText className='w-8 h-8 '/>
                    Lists
                </a>
                <a href="" className='flex items-center gap-5 text-xl font-bold'>
                    <User className='w-8 h-8 '/>
                    Profile
                </a>
                <a href="" className='flex items-center gap-5 text-xl font-bold'>
                    <DotsThreeCircle className='w-8 h-8 '/>
                    More
                </a>
            </nav>

            <button 
                type='button'
                className='w-full rounded-[999px] p-4 bg-twitter-blue text-white text-xl font-extrabold hover:brightness-90'
            >
                Tweet
            </button>
        </aside>
    )
}
