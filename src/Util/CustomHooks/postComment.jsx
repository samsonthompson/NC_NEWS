import axios from "axios";

    const postComment = (id, setCommentError, setCommentPosted, userName, commentBody) => {
        axios.post(`https://nc-news-fz7g.onrender.com/api/articles/${id}/comments`, { username: userName, body: commentBody })
            .then((response) => {
                setCommentPosted(true);
            })
            .catch((error) => {
                setCommentError(error);
            });
        }

export default postComment








