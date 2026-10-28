import type { ResearchPost } from './types';

export const october28ResearchBatch: readonly ResearchPost[] = [
  {
    "slug": "sequence-exit-criteria-study-oct28",
    "title": "When Should an Outbound Sequence Stop?",
    "summary": "A protocol for testing whether sequence exit rules fire at the reply, role change, opt-out, or account mismatch they were meant to catch.",
    "cluster": "Account research",
    "publishedAt": "2026-10-28",
    "finding": "A protocol for testing whether sequence exit rules fire at the reply, role change, opt-out, or account mismatch they were meant to catch.",
    "thumbnail": "/article-thumbnails/october-28/sequence-exit-criteria-study-oct28.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines sequence exit timing. It reports what a defined record can show in one window and does not claim an industry rate or a causal effect."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one sequence exit event. Keeping one unit prevents linked events from being counted as independent successes or failures."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The main measure is the share of exits that match the written rule and the time to stop. Report the denominator and time window beside every count so the result is not read as a bare percentage."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "Collect the exit reason, timestamp, and owner. Label missing, unavailable, and confirmed negative as separate states rather than collapsing them into a blank."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The sample is sequences active during one month across three segments. Record the observation date and exclude items that were already open before the window begins."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Present exit reason counts and late-stop cases. Separate seller behavior from tool behavior whenever the evidence allows that distinction."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "Limits include missed replies and ambiguous role changes. State them beside the finding and avoid turning a small operational sample into a universal standard."
        ]
      },
      {
        "heading": "Review cadence and next action",
        "paragraphs": [
          "The practical next step is to test one exit rule change on a later sample. Re-test a later sample after the change so the review produces a decision, not just a report."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/ooh/"
      },
      {
        "label": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/eta"
      },
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance"
      },
      {
        "label": "NIST",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "USA.gov business guidance",
        "url": "https://www.usa.gov/business"
      },
      {
        "label": "Microsoft support",
        "url": "https://support.microsoft.com"
      },
      {
        "label": "Salesforce Ben",
        "url": "https://www.salesforceben.com"
      },
      {
        "label": "HubSpot Blog",
        "url": "https://blog.hubspot.com/sales"
      }
    ]
  },
  {
    "slug": "lead-source-lineage-study-oct28",
    "title": "Can Every Lead List Entry Be Traced to a Source?",
    "summary": "A lineage review that checks whether each list entry has a dated source, a collection method, and an accountable owner.",
    "cluster": "Account research",
    "publishedAt": "2026-10-28",
    "finding": "A lineage review that checks whether each list entry has a dated source, a collection method, and an accountable owner.",
    "thumbnail": "/article-thumbnails/october-28/lead-source-lineage-study-oct28.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines lead source lineage. It reports what a defined record can show in one window and does not claim an industry rate or a causal effect."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one list entry at first import. Keeping one unit prevents linked events from being counted as independent successes or failures."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The main measure is the share with a complete source chain. Report the denominator and time window beside every count so the result is not read as a bare percentage."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "Collect the source URL, collection date, and importer. Label missing, unavailable, and confirmed negative as separate states rather than collapsing them into a blank."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The sample is a fixed sample from each active list source. Record the observation date and exclude items that were already open before the window begins."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Present completeness by source and list owner. Separate seller behavior from tool behavior whenever the evidence allows that distinction."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "Limits include lists rebuilt from screenshots or forwarded files. State them beside the finding and avoid turning a small operational sample into a universal standard."
        ]
      },
      {
        "heading": "Review cadence and next action",
        "paragraphs": [
          "The practical next step is to reject one list source that cannot show lineage. Re-test a later sample after the change so the review produces a decision, not just a report."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/ooh/"
      },
      {
        "label": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/eta"
      },
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance"
      },
      {
        "label": "NIST",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "USA.gov business guidance",
        "url": "https://www.usa.gov/business"
      },
      {
        "label": "Microsoft support",
        "url": "https://support.microsoft.com"
      },
      {
        "label": "Salesforce Ben",
        "url": "https://www.salesforceben.com"
      },
      {
        "label": "HubSpot Blog",
        "url": "https://blog.hubspot.com/sales"
      }
    ]
  },
  {
    "slug": "account-tier-agreement-study-oct28",
    "title": "Do Reviewers Agree on Account Tier?",
    "summary": "A protocol for measuring whether two reviewers assign the same tier to the same account using a written fit model.",
    "cluster": "Account research",
    "publishedAt": "2026-10-28",
    "finding": "A protocol for measuring whether two reviewers assign the same tier to the same account using a written fit model.",
    "thumbnail": "/article-thumbnails/october-28/account-tier-agreement-study-oct28.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines account tier agreement. It reports what a defined record can show in one window and does not claim an industry rate or a causal effect."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one account scored by two reviewers. Keeping one unit prevents linked events from being counted as independent successes or failures."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The main measure is agreement rate and the fields that drive disagreement. Report the denominator and time window beside every count so the result is not read as a bare percentage."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "Collect the fit fields, evidence dates, and reviewer notes. Label missing, unavailable, and confirmed negative as separate states rather than collapsing them into a blank."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The sample is accounts scored in one planning cycle. Record the observation date and exclude items that were already open before the window begins."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Present agreement by segment and account size. Separate seller behavior from tool behavior whenever the evidence allows that distinction."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "Limits include legacy lists and incomplete firmographic data. State them beside the finding and avoid turning a small operational sample into a universal standard."
        ]
      },
      {
        "heading": "Review cadence and next action",
        "paragraphs": [
          "The practical next step is to clarify one tier rule that causes disagreement. Re-test a later sample after the change so the review produces a decision, not just a report."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/ooh/"
      },
      {
        "label": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/eta"
      },
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance"
      },
      {
        "label": "NIST",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "USA.gov business guidance",
        "url": "https://www.usa.gov/business"
      },
      {
        "label": "Microsoft support",
        "url": "https://support.microsoft.com"
      },
      {
        "label": "Salesforce Ben",
        "url": "https://www.salesforceben.com"
      },
      {
        "label": "HubSpot Blog",
        "url": "https://blog.hubspot.com/sales"
      }
    ]
  },
  {
    "slug": "reply-intent-classification-study-oct28",
    "title": "How Often Do Reply Intents Get Misrouted?",
    "summary": "A review protocol for checking whether positive replies, objections, referrals, and opt-outs reach the right owner with a usable response clock.",
    "cluster": "Outreach operations",
    "publishedAt": "2026-10-28",
    "finding": "A review protocol for checking whether positive replies, objections, referrals, and opt-outs reach the right owner with a usable response clock.",
    "thumbnail": "/article-thumbnails/october-28/reply-intent-classification-study-oct28.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines reply intent routing. It reports what a defined record can show in one window and does not claim an industry rate or a causal effect."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one inbound reply at classification. Keeping one unit prevents linked events from being counted as independent successes or failures."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The main measure is the share misrouted and the time lost before correction. Report the denominator and time window beside every count so the result is not read as a bare percentage."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "Collect the intent code, owner, and first response. Label missing, unavailable, and confirmed negative as separate states rather than collapsing them into a blank."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The sample is replies received during one week. Record the observation date and exclude items that were already open before the window begins."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Present misroutes by intent and by channel. Separate seller behavior from tool behavior whenever the evidence allows that distinction."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "Limits include threads with mixed intent and forwarded replies. State them beside the finding and avoid turning a small operational sample into a universal standard."
        ]
      },
      {
        "heading": "Review cadence and next action",
        "paragraphs": [
          "The practical next step is to revise one intent rule after a misroute sample. Re-test a later sample after the change so the review produces a decision, not just a report."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/ooh/"
      },
      {
        "label": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/eta"
      },
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance"
      },
      {
        "label": "NIST",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "USA.gov business guidance",
        "url": "https://www.usa.gov/business"
      },
      {
        "label": "Microsoft support",
        "url": "https://support.microsoft.com"
      },
      {
        "label": "Salesforce Ben",
        "url": "https://www.salesforceben.com"
      },
      {
        "label": "HubSpot Blog",
        "url": "https://blog.hubspot.com/sales"
      }
    ]
  },
  {
    "slug": "suppression-propagation-study-oct28",
    "title": "How Quickly Do Opt-Outs Reach Every Outbound Tool?",
    "summary": "A protocol for measuring the gap between an opt-out event and suppression in each sending system.",
    "cluster": "Outreach operations",
    "publishedAt": "2026-10-28",
    "finding": "A protocol for measuring the gap between an opt-out event and suppression in each sending system.",
    "thumbnail": "/article-thumbnails/october-28/suppression-propagation-study-oct28.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines suppression propagation. It reports what a defined record can show in one window and does not claim an industry rate or a causal effect."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one opt-out event across connected tools. Keeping one unit prevents linked events from being counted as independent successes or failures."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The main measure is the time until the contact is suppressed everywhere. Report the denominator and time window beside every count so the result is not read as a bare percentage."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "Collect the opt-out source, tool timestamps, and contact identity. Label missing, unavailable, and confirmed negative as separate states rather than collapsing them into a blank."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The sample is opt-out events observed for two weeks. Record the observation date and exclude items that were already open before the window begins."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Present propagation time by tool pair and contact type. Separate seller behavior from tool behavior whenever the evidence allows that distinction."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "Limits include manual overrides and identity mismatches. State them beside the finding and avoid turning a small operational sample into a universal standard."
        ]
      },
      {
        "heading": "Review cadence and next action",
        "paragraphs": [
          "The practical next step is to close the slowest propagation gap first. Re-test a later sample after the change so the review produces a decision, not just a report."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/ooh/"
      },
      {
        "label": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/eta"
      },
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance"
      },
      {
        "label": "NIST",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "USA.gov business guidance",
        "url": "https://www.usa.gov/business"
      },
      {
        "label": "Microsoft support",
        "url": "https://support.microsoft.com"
      },
      {
        "label": "Salesforce Ben",
        "url": "https://www.salesforceben.com"
      },
      {
        "label": "HubSpot Blog",
        "url": "https://blog.hubspot.com/sales"
      }
    ]
  }
];
