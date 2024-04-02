import { ReviewCard } from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl font-palanquin font-bold text-center">What our 
      <span className="text-coral-red"> Customers</span> Say?</h3>

      <p className="m-auto mt-4 info-text text-center max-w-lg">
      Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {
          reviews.map((review,index)=>(
            <ReviewCard key={index} 
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}/>
          ))
        }
      </div>
    </section>
  )
}

export default CustomerReviews