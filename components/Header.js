import Image from 'next/image'
import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon } from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"

function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                {/* Left */}
                <div className="relative hidden w-24 cursor-pointer lg:inline-grid">
                    <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain" />
                </div>
                <div className="relative flex-shrink-0 w-10 h-10 cursor-pointer lg:hidden">
                    <Image src="https://links.papareact.com/jjm" layout="fill" objectFit="contain" />
                </div>

                {/* Middle */}
                <div className="max-w-xs">
                    <div className="relative p-3 mt-1 rounded-md">
                        <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                            <SearchIcon className="w-5 h-5 text-gray-500" />
                        </div>
                        <input type="text" placeholder="Search" className="block w-full pl-10 border-gray-300 bg-gray-50 sm:text-sm focus:ring-black focus:border-black" />
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center justify-end space-x-4">

                    <HomeIcon className="navBtn" />
                    <MenuIcon className="h-6 cursor-pointer md:hidden" />
                    <div className="relative navBtn">

                        <PaperAirplaneIcon className="rotate-45 navBtn" />
                        <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-2 animate-pulse">
                            3
                        </div>
                    </div>
                    <PlusCircleIcon className="navBtn" />
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className="navBtn" />
                    <img src="https://scontent.fbne5-1.fna.fbcdn.net/v/t1.6435-9/182530552_10219335066316174_4076270653074423572_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hbRmQhXtbrkAX-mgzdD&_nc_ht=scontent.fbne5-1.fna&oh=6d5b6059d3ff9a20b049d46cd523011e&oe=61C3EC1F" alt="" class="h-10 rounded-full cursor-pointer" />
                </div>

            </div>
        </div>
    )
}

export default Header
