
import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, Hearticon, PaperAirplaneIcon, T } from "@heroicons/react/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
function Post({ id, username, useImg, img, caption }) {
    return (
        <div className="bg-white border rounded-sm my-7">
            {/* Header */}
            <div className="flex items-center p-5">
                <img src={useImg} alt="" className="object-contain w-12 h-12 p-1 mr-3 border rounded-full" />
                <p className="flex-1 font-bold ">{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>
            {/* Img */}
            <img src={img} alt="" className="object-cover w-full" />
            {/* Buttons */}
            <div className="flex justify-between px-4 py-4">

                <div className="flex space-x-4">
                    <HeartIcon className="btn" />
                    <ChatIcon className="btn" />
                    <PaperAirplaneIcon className="btn" />
                </div>
                <BookmarkIcon className="btn" />
            </div>

            {/* Caption */}
            <div>
                <p className="p-5 truncate ">
                    <span className="mr-1 font-bold">{username}</span> {caption}
                </p>
            </div>
            {/* Comments */}
            {/* input */}
            <div>
                <form className="flex items-center p-4">

                    <EmojiHappyIcon className="h-7" />
                    <input type="text" placeholder="Add your comment..." className="flex-1 border-none outline-none focus:ring-0" />
                    <button className="font-semibold text-blue-400">Post</button>
                </form>
            </div>
        </div>
    )
}

export default Post
