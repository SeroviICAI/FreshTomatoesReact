import React, { useState } from 'react';
import './reviewForm.css';
import { postReview } from '../../../helpers/fetchMovies';

const ReviewForm = ({movieID}) => {
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await postReview(movieID, rating, review);
        } catch (error) {
            console.error("Error adding review.", error);
            if (error.statusCode == 409) {
                window.alert("Only one review per User is allowed.");
            }
            else{
                window.alert("You must log in to make a review.");                
            }

        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="review-container">
            <form onSubmit={handleSubmit} className="review-form">
                <textarea placeholder="Type your review..." value={review} onChange={(e) => setReview(e.target.value)} required />
                <input type="number" min="0" max="10" placeholder="Rating (0-10)" value={rating} onChange={(e) => setRating(e.target.value)} required />
                <button type="submit" disabled={isSubmitting}>Enviar Revisión</button>
            </form>
        </div>
    );
};

export default ReviewForm;
