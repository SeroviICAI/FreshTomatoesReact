import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewItem from "../reviewItem/ReviewItem";
import "./movieReviews.css";
import "swiper/css";

const MovieReviews = ({ reviews }) => {
    return (
        <div className="movie-reviews">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={4}
            >
                {reviews.map((review) => {
                    return (
                        <SwiperSlide key={review.id}>
                            <ReviewItem review={review} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
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
