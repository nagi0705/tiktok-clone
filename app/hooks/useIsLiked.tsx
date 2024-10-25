import { Like } from "../types";

const useIsLiked = (userId: string, postId: string, likes: Array<Like>) => {
    const res: Like[] = likes?.filter((like) => like.user_id === userId && like.post_id === postId) || [];
    return res.length > 0;
}

export default useIsLiked