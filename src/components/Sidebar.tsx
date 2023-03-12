import logo from '../assets/Logo.svg'
import '../global/details.css'
import { House, Hash, Bell, BookmarkSimple, Envelope, FileText, User, DotsThreeCircle, Pencil } from 'phosphor-react'
import { Link, NavLink } from 'react-router-dom'
import { NavItem } from './NavItem'

export function Sidebar() {

    return (
        <aside className='flex flex-col gap-8 mx-6 my-5 sidebar'>
           <img 
                src={logo} 
                alt="Logo"
                className='w-8 h-8 '
            />

            <nav className='flex flex-col gap-8'>
                <NavLink to="/" className='flex items-center gap-5 text-xl font-bold'>
                    <House className='w-8 h-8 ' weight='fill'/>
                    <span>Home</span>
                </NavLink>


                <NavItem Icon={Hash} title='Explore'/>
                <NavItem Icon={Bell} title='Notification'/>
                <NavItem Icon={Envelope} title='Messages'/>
                <NavItem Icon={BookmarkSimple} title='Bookmarks'/>
                <NavItem Icon={FileText} title='Lists'/>
                <NavItem Icon={User} title='Profile'/>
                <NavItem Icon={DotsThreeCircle} title='More'/>
            </nav>

            <button 
                type='button'
                className='botao w-full rounded-[999px] p-4 bg-twitter-blue text-white text-xl font-extrabold hover:brightness-90'
            >   
                <Pencil className='none'/>
                <span>Tweet</span>
            </button>
        </aside>
    )
}
