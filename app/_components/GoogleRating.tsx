export function GoogleRating() {
  const rating = process.env.NEXT_PUBLIC_GOOGLE_RATING;
  const count = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT;
  const profile = process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL;
  if (!rating || !count || !profile) return null;
  return <a className="google-rating" href={profile} rel="noreferrer" target="_blank" aria-label={`${rating} out of 5 from ${count} Google reviews`}><strong>{rating}</strong><span aria-hidden="true">★★★★★</span><small>{count} Google reviews</small></a>;
}
