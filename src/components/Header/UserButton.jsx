import { useState } from "react"
import { UserIcon } from "../Icons"
import { useAuth } from "../../context/auth"

const UserButton = () => {
    const [open, setOpen] = useState(false)
    const { user, signout } = useAuth()

    return(
        <div class="relative inline-block text-left">
            <div>
                <button type="button" onClick={() => setOpen(!open)} className="flex items-center w-full justify-center rounded-md text-sm font-semibold hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                <UserIcon />
                </button>
            </div>

            <div className={`absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${open ? 'enterIn transition ease-in duration-100' : 'leaveOut transition ease-out duration-75'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1" role="none">
                    <a href="#" class="text-mint-900 active:bg-gray-100 hover:bg-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Sesión como</a>
                    <a href="#" class="text-mint-900 active:bg-gray-100 hover:bg-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">{user}</a>
                </div>
                <div className="py-1" role="none">
                    <a href="#" className="text-mint-900 active:bg-gray-100 hover:bg-gray-50 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Archive</a>
                    <a href="#" className="text-mint-900 active:bg-gray-100 hover:bg-gray-50 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Move</a>
                </div>
                <div className="py-1" role="none">
                    <a href="#" className="text-mint-900 active:bg-gray-100 hover:bg-gray-50 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-4">Share</a>
                    <a href="#" className="text-mint-900 active:bg-gray-100 hover:bg-gray-50 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-5">Add to favorites</a>
                </div>
                <div className="py-1" role="none" onClick={signout}>
                    <a href="/" className="text-mint-900 active:bg-gray-100 hover:bg-gray-50 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-6">Salir</a>
                </div>
            </div>
            </div>
    )
}

export default UserButton