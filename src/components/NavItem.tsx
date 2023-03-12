interface NavItemProps{
    Icon: React.ElementType
    title: string,
}

export function NavItem({Icon, title}: NavItemProps) {
    return(
        <a 
            href="#"
            className='flex items-center gap-5 text-xl font-bold'
        >
            {Icon && <Icon className='w-8 h-8'/> }
            
            <span>
                {title}
            </span>
        </a>
    )
}
