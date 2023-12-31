import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
    const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(10); //хук который генерирует rtk query добавляет к названию ендпоинта FetchAllPosts use и Query
    return (
        <div className="post__list">
            {isLoading && <h1>Идет загрузка....</h1>}
            {error && <h1>Произошла ошибка при загрузке</h1>}
            {posts?.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostContainer;
