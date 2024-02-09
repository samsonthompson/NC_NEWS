import axios from "axios";

const deleteComment = (id, setDeleteError, setIsDeleting) => {
    axios.delete(`https://nc-news-fz7g.onrender.com/api/comments/${id}`)
    .then((response) => {
        console.log(response);
        if (response.status === 204) {
            setIsDeleting(false)
            window.location.reload()
        }
    })
    .catch((error) => {
        setDeleteError(error)
        setIsDeleting(false)
    })

    }

export default deleteComment;