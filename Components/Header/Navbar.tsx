import First from "./First"
import Second from "./Second"

export default function Navbar () {
    return (
        <div  className="bg-[url('../public/BG.png')] flex flex-col transition-all h-full w-full bg-contain bg-no-repeat select-none relative max-xl:bg-cover max-sm:bg-center">
            
            <Second/>
        </div>
    )
}