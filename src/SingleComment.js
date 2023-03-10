import { useEffect, useState } from "react";

function SingleComment({data}) {
    const {text, id} = data;
    const [commentText, setCommentText] = useState('');
    useEffect(() => {
        if (text) {
            setCommentText(text);
        }
    }, [text]);

    return (
        <form className="comments-item">
            <div className="comments-item-delete">&times;</div>
            <input type='text' value={commentText}/>
            <input type='submit' hidden />
        </form>
    )
}

export default SingleComment;