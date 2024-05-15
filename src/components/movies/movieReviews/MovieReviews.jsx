import React from 'react';
import './movieReviews.css';


const ReviewCard = ({ review }) => {
    return (
        <div className="review-info">
            <p>
                "<span>{review.comment}</span>" (<span>{review.userRating}</span>/10)
                <br />
                Review by <span>{review.user.username}</span>
            </p>
        </div>
    )
}

const MovieReviews = ({ reviews }) => {
    return (
        <div className="item-reviews">
            <h2>Reviews</h2>
            {reviews.map((review) => {
                return <ReviewCard review={review} key={review.id} />
            })}
            {reviews.length === 0 && (
                <div className="review-info">
                    <p>
                        No reviews available. You can be the first one!
                    </p>
                </div>
            )}
        </div>
    )
}

export default MovieReviews;
