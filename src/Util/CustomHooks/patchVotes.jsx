import axios from "axios";

    const patchVotes = (id, setVotes, setVoteError, setVoteSuccess) => {
        setVotes((currentCount) => currentCount +1)
        axios.patch(`https://nc-news-fz7g.onrender.com/api/articles/${id}`, { inc_votes: 1 })
            .then((response) => {
            setVoteSuccess(true)
            })
            .catch((error) => {
                setVotes((currentCount) => currentCount -1)
                setVoteError(true)
            });
        }

export default patchVotes