import React, { useContext, useEffect, useState } from 'react'
import { Question } from '../../utils/interfaces';
import "./QuestionCard.scss";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export interface Props {
    data: Question,
    [key: string]: any
}

const QuestionCard = ({data}: Props) => {
    const [vote, setVote] = useState <undefined | "upvote" | "downvote"> (undefined);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        data.upvoters.forEach(x => {
            if (x == user?.user_id) setVote("upvote");
        })
        data.downvoters.forEach(x => {
            if (x == user?.user_id) setVote("downvote");
        })
    }, [user])


    return (
        <div className = "question-card">
            <Link to = {`/question/${data.id}`} className = "title">{data.title}</Link>
            <p className = "body">
                {data.contents}
            </p>
            <div className = "footer">
                <div className = "vote">
                    <div>
                        <i className={"fas fa-arrow-up upvote option" + ((vote === "upvote") ? " voted" : "")}></i>
                    </div>
                    <p className = "diff">{data.upvoters.length - data.downvoters.length}</p>
                    <div>
                        <i className={"fas fa-arrow-down downvote option" + ((vote === "downvote") ? " voted" : "")}></i>
                    </div>
                </div>
                <Link to = {`/profile/${data.submitter_id}`}>
                    {data.submitter_id}
                </Link>
            </div>
        </div>
    );
}

export default QuestionCard;