import React from 'react'
import './Home.scss';
import { useLoaderData } from 'react-router';
import QuestionCard from '../QuestionCard/QuestionCard';
import { Question } from '../../utils/interfaces';

export interface Props {
    [key: string]: any
}

const Home = (props: Props) => {
    const data = useLoaderData() as Question[];
    console.log(data);

    return (
        <div className = "home-page">
            <p className = "title">Home Page</p>
            {data.map((x:Question) => <QuestionCard data = {x}/>)}
        </div>
    );
}

export default Home;