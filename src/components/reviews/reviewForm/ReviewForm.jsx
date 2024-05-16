import React, { useState } from 'react';
import './reviewForm.css';
import { postReview } from '../../../helpers/fetchMovies';
import ReactStars from "react-rating-stars-component";

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
                <ReactStars
                    count={10}
                    value={rating}
                    size={24}
                    activeColor="#0ea039"
                    onChange={(newRating) => setRating(newRating)}
                />
                <textarea placeholder="Type your review..." value={review} onChange={(e) => setReview(e.target.value)} required />
                <button type="submit" disabled={isSubmitting}>Send Review</button>
            </form>
        </div>
    );
};

export default ReviewForm;
