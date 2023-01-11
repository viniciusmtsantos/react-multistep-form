import React from "react";

import './ReviewForm.css'

const ReviewForm = ({data, updateFieldHandler}) => {
    return (
        <div className="review-form">
            <div className="form-control">
                <label htmlFor="comment">Quantos personagens na Ilustração:</label>
                <textarea 
                name="comment" 
                id="comment" 
                placeholder="Descreva a sua ideia de ilustração..." 
                required
                value={data.review || ""}
                onChange={(e) => updateFieldHandler("review", e.target.value)}>
                </textarea>
            </div>
            <div className="form-control">
                <label htmlFor="comment">Descrição da Ilustração:</label>
                <textarea 
                name="comment" 
                id="comment" 
                placeholder="Descreva a sua ideia de ilustração..." 
                required
                value={data.comment || ""}
                onChange={(e) => updateFieldHandler("comment", e.target.value)}>
                </textarea>
            </div>
        </div>
    );
};

export default ReviewForm;