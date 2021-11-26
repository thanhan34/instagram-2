import Post from "./Post"
const posts = [
    {
        id: 123,
        username: "An Doan",
        useImg: "https://scontent.fbne5-1.fna.fbcdn.net/v/t1.6435-9/182530552_10219335066316174_4076270653074423572_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hbRmQhXtbrkAX-mgzdD&_nc_ht=scontent.fbne5-1.fna&oh=6d5b6059d3ff9a20b049d46cd523011e&oe=61C3EC1F",
        img: "https://scontent.fbne5-1.fna.fbcdn.net/v/t1.6435-9/182530552_10219335066316174_4076270653074423572_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hbRmQhXtbrkAX-mgzdD&_nc_ht=scontent.fbne5-1.fna&oh=6d5b6059d3ff9a20b049d46cd523011e&oe=61C3EC1F",
        caption: "Hello I am a super man in the Earth"
    },
    {
        id: 1233,
        username: "An Doan",
        useImg: "https://scontent.fbne5-1.fna.fbcdn.net/v/t1.6435-9/182530552_10219335066316174_4076270653074423572_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hbRmQhXtbrkAX-mgzdD&_nc_ht=scontent.fbne5-1.fna&oh=6d5b6059d3ff9a20b049d46cd523011e&oe=61C3EC1F",
        img: "https://scontent.fbne5-1.fna.fbcdn.net/v/t1.6435-9/182530552_10219335066316174_4076270653074423572_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hbRmQhXtbrkAX-mgzdD&_nc_ht=scontent.fbne5-1.fna&oh=6d5b6059d3ff9a20b049d46cd523011e&oe=61C3EC1F",
        caption: "Hello I am a super man in the Earth"
    },
    {
        id: 1243,
        username: "An Doan",
        useImg: "https://scontent.fbne5-1.fna.fbcdn.net/v/t1.6435-9/182530552_10219335066316174_4076270653074423572_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hbRmQhXtbrkAX-mgzdD&_nc_ht=scontent.fbne5-1.fna&oh=6d5b6059d3ff9a20b049d46cd523011e&oe=61C3EC1F",
        img: "https://scontent.fbne5-1.fna.fbcdn.net/v/t1.6435-9/182530552_10219335066316174_4076270653074423572_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hbRmQhXtbrkAX-mgzdD&_nc_ht=scontent.fbne5-1.fna&oh=6d5b6059d3ff9a20b049d46cd523011e&oe=61C3EC1F",
        caption: "Hello I am a super man in the Earth"
    },
    {
        id: 1253,
        username: "An Doan",
        useImg: "https://scontent.fbne5-1.fna.fbcdn.net/v/t1.6435-9/182530552_10219335066316174_4076270653074423572_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hbRmQhXtbrkAX-mgzdD&_nc_ht=scontent.fbne5-1.fna&oh=6d5b6059d3ff9a20b049d46cd523011e&oe=61C3EC1F",
        img: "https://scontent.fbne5-1.fna.fbcdn.net/v/t1.6435-9/182530552_10219335066316174_4076270653074423572_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hbRmQhXtbrkAX-mgzdD&_nc_ht=scontent.fbne5-1.fna&oh=6d5b6059d3ff9a20b049d46cd523011e&oe=61C3EC1F",
        caption: "Hello I am a super man in the Earth"
    },
]

function Posts() {
    return (
        <div>
            {
                posts.map((post) => (

                    <Post
                        key={post.id}
                        id={post.id}
                        username={post.username}
                        useImg={post.useImg}
                        img={post.img}
                        caption={post.caption}
                    />
                ))
            }


        </div>
    )
}

export default Posts
