export type ApprovedReview = {
  name: string;
  attribution: string;
  quote: string;
};

// Verified against the official StealthAgents client review collection on 2026-11-06.
// Source: https://stealthagents.com/services
export const approvedReviews: ApprovedReview[] = [
  {
    name: 'Chad Sublet',
    attribution: 'Business Owner',
    quote: 'Lindsay has been incredible. She handles the tactical work, which has freed me up to focus on bigger-picture initiatives.'
  },
  {
    name: 'Alex Behrens',
    attribution: 'Client since Oct 2024',
    quote: 'They have made a real difference in our day-to-day operations and truly feel like part of our internal team.'
  },
  {
    name: 'Sarah Jacoby',
    attribution: 'Client',
    quote: 'Great communication, efficient and proactive assistant, visible business growth.'
  }
];

export const approvedReviewsSource = 'https://stealthagents.com/services';
