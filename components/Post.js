
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from "@firebase/firestore"
import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, Hearticon, PaperAirplaneIcon, } from "@heroicons/react/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
import { useSession } from 'next-auth/react'
import { useEffect, useState } from "react"
import { db } from "../firebase"
import Moment from 'react-moment';
function Post({ id, username, useImg, img, caption }) {
    const { data: session } = useSession()
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState("")
    const [likes, setLikes] = useState([])
    const [hasLike, setHasLike] = useState(false)
    const sendComment = async (e) => {
        e.preventDefault()
        const commentToSend = comment
        setComment("")

        await addDoc(collection(db, "posts", id, "comments"), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp()
        })
    }

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, "posts", id, "comments"),
                    orderBy("timestamp", "desc")
                ),
                (snapshot) => setComments(snapshot.docs)
            )
        , [db, id])

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, "posts", id, "likes")
                ),
                (snapshot) => setLikes(snapshot.docs)
            )
        , [db, id])

    const likePost = async () => {
        if (hasLike) {
            await deleteDoc(doc(db, "posts", id, "likes", session.user.uid))
        }
        else {
            await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
                username: session.user.username,
            })
        }


    }

    useEffect(() =>
        setHasLike(
            likes.findIndex((like) => like.id === session?.user?.uid) !== -1
        )
        , [likes])
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
            {session &&
                <div className="flex justify-between px-4 py-4">

                    <div className="flex space-x-4">
                        {
                            hasLike ? (<HeartIconFilled className="text-red-500 btn" onClick={likePost} />) :
                                <HeartIcon className="btn" onClick={likePost} />
                        }
                        <ChatIcon className="btn" />
                        <PaperAirplaneIcon className="btn" />
                    </div>
                    <BookmarkIcon className="btn" />
                </div>

            }


            {/* Caption */}
            <div>
                <p className="p-5 truncate ">
                    {likes.length > 0 && (
                        <p className="mb-1 font-bold">{likes.length} likes</p>
                    )}
                    <span className="mr-1 font-bold">{username}</span> {caption}
                </p>
            </div>
            {/* Comments */}
            {comments.length > 0 && (

                <div className="h-20 ml-10 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                    {
                        comments.map(comment => (
                            <div key={comment.id} className="flex items-center mb-3 space-x-2">
                                <img className="rounded-full h-7" src={comment.data().userImage} alt="" />
                                <p className="flex-1 text-sm"><span className="font-bold">{comment.data().username}</span>{" "}{comment.data().comment}</p>
                                <Moment fromNow className="pr-5 text-sm">
                                    {comment.data().timestamp?.toDate()}
                                </Moment>
                            </div>
                        ))
                    }
                </div>
            )
            }
            {/* input */}
            <div>
                {session &&
                    <form className="flex items-center p-4">
                        <EmojiHappyIcon className="h-7" />
                        <input type="text" value={comment}
                            onChange={e => setComment(e.target.value)}
                            placeholder="Add your comment..." className="flex-1 border-none outline-none focus:ring-0" />
                        <button type="submit" disabled={!comment.trim()} onClick={sendComment} className="font-semibold text-blue-400">Post</button>
                    </form>
                }
            </div>
        </div >
    )
}

export default Post
