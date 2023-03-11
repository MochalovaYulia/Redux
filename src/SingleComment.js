import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentUpdate } from "./redux/actions";

function SingleComment({data}) {
    const {text, id} = data;
    const [commentText, setCommentText] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (text) {
            setCommentText(text);
        }
    }, [text]);

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(commentUpdate(commentText, id));
    }

    const handleInput = (e) => {
        setCommentText(e.target.value);
    }

    return (
        <form onSubmit={handleUpdate} className="comments-item">
            <div className="comments-item-delete">&times;</div>
            <input type='text' value={commentText} onChange={handleInput}/>
            <input type='submit' hidden />
        </form>
    )
}

export default SingleComment;