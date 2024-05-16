import React from "react";
import ReactStars from "react-rating-stars-component";
import "./reviewItem.css";

const ReviewItem = ({ review }) => {
    return (
        <div className="review-item">
            <p>
                "<span>{review.comment}</span>"
                <br />
                Review by <span>{review.user.username}</span>
            </p>
            <ReactStars
                count={10}
                value={review.userRating}
                size={24}
                activeColor="#0ea039"
                isHalf={true}
                edit={false}
            />
        </div>
    )
}

export default ReviewItem;
