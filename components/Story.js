
function Story({ img, username }) {
    return (
        <div>
            <img src={img} alt="" className="rounded-full h-14 w-14 p-[1.5px] border-red-500 object-contain cursor-pointer border-2 hover:scale-110 transition transform duration-200 ease-out" />
            <p className="text-xs text-center truncate w-14">{username}</p>
        </div>
    )
}

export default Story
