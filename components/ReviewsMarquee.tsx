import { approvedReviews, approvedReviewsSource } from '@/lib/reviews';

function ReviewSet({ duplicate = false }: { duplicate?: boolean }) {
  return <div className="review-set" aria-hidden={duplicate || undefined}>
    {approvedReviews.map((review) => <figure className="review-quote" key={`${duplicate ? 'duplicate-' : ''}${review.name}`}>
      <div className="review-stars" aria-label="Five out of five stars">★★★★★</div>
      <blockquote>“{review.quote}”</blockquote>
      <figcaption><strong>{review.name}</strong><span>{review.attribution}</span></figcaption>
    </figure>)}
  </div>;
}

export function ReviewsMarquee() {
  return <section className="reviews-marquee" aria-labelledby="reviews-title">
    <div className="reviews-heading"><p id="reviews-title">Verified StealthAgents client reviews</p><a href={approvedReviewsSource}>Official source</a></div>
    <div className="review-window"><div className="review-track"><ReviewSet /><ReviewSet duplicate /></div></div>
  </section>;
}
