import faker from "faker";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Story from "./Story";
function Stories() {
    const { data: session } = useSession()
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }))
        setSuggestions(suggestions)
        console.log(suggestions)
    }, [])

    return (
        <div className="flex p-6 mt-8 space-x-2 overflow-x-scroll bg-white border rounded-sm border-gray-20 scrollbar-thin scrollbar-thumb-black">
            {
                session && <Story
                    key={session?.user?.uid}
                    img={session.user?.img}
                    username={session.user?.username}
                />
            }
            {suggestions.map(profile => (
                <Story
                    key={profile.id}
                    img={profile.avatar}
                    username={profile.username}
                />
            ))}
        </div>
    )
}

export default Stories
