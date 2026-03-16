import useLikeStore from "../store/likeStore";

function UserCard({ user }) {
    const { likes, increase } = useLikeStore()
    const likeCount = likes[user.id] || 0

    return (
        <div
            style={{
                border: "1px solid #ddd",
                padding: "15px",
                margin: "10px",
                borderRadius: "6px"
            }}
        >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button
                onClick={() => increase(user.id)}
            >
                ❤️ 좋아요 {likeCount}
            </button>
        </div>

    )

}

export default UserCard