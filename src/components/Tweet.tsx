import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"
import { Link } from "react-router-dom"

interface TweetProps {
    content: string
}

export function Tweet({ content }: TweetProps) {
    return(
        <Link to='/tweet' 
            className="grid grid-cols-tweet-grid border border-twitter-black-secondary gap-3 px-6 py-5"
        >
            <img 
                src="https://github.com/enoquetembe.png" 
                alt="Enoque Tembe"
                className="w-12 h-12 rounded-[999px]" 
            />

            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1">
                    <strong>Enoque Tembe</strong>
                    <span className="text-[14px] text-gray-500">@enoquetembe</span>
                </div>

                <p className="leading-tight">
                  { content }
                </p>

                <div className="flex items-center gap-12 mt-3">
                    <button 
                        type="button"
                        className="flex items-center gap-1 bg-transparent border-0 text-[14px] text-gray-500 hover:text-twitter-blue"
                    >
                       <ChatCircle className="w-5 h-5"/>
                       20 
                    </button>

                    <button 
                        type="button"
                        className="flex items-center gap-1 bg-transparent border-0 text-[14px] text-gray-500 hover:text-twitter-blue"
                    >
                       <ArrowsClockwise className="w-5 h-5"/>
                       20 
                    </button>
                    
                    <button 
                        type="button"
                        className="flex items-center gap-1 bg-transparent border-0 text-[14px] text-gray-500 hover:text-twitter-blue"
                    >
                       <Heart className="w-5 h-5"/>
                       20 
                    </button>
                </div>
            </div>
        </Link>
    )
}