import React from 'react'
import "./AddQuestion.scss";
import { useState } from 'react';
import { addQuestion } from '../../utils/api';
import { useAlert } from 'react-alert';

export interface Props {
    [key: string]: any
}

const AddQuestion = (props: Props) => {
    const [formData, setFormData] = useState({title: "", contents: ""});
    const alert = useAlert();

    const handleFormChange = (key: string) => (e: any) => {
        setFormData({...formData, [key]: e.target.value})
    }

    const handleSubmit = async (e: any) => { // redirect user to the question after posting it
        e.preventDefault();
        try{
            await addQuestion(formData.title, formData.contents);
            alert.success("New Question Added Successfully");
        }
        catch(e : any) {
            alert.error(e.message);
        }
    }

    return (
        <div className = "add-question">
            <h1>Add New Question</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <p>Title:</p>
                    <input onChange={handleFormChange("title")} value = {formData.title} type="text" required/>
                </div>
                <div className="input-wrapper">
                    <p>Content:</p>
                    <textarea onChange={handleFormChange("contents")} value = {formData.contents} required/>
                </div>
                <input type = "submit" value = "Post Question"/>
            </form>
        </div>
    );
}

export default AddQuestion;