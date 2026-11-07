# KosMatch — Product Description

## 1. Product Summary

KosMatch is a responsive decision-support web application for students, interns, and early-career workers who need to choose accommodation in a new city. Users bring several boarding-house or rental options they have already found, enter the relevant details, and compare them based on **real monthly cost, commute, required facilities, personal priorities, and trade-offs**.

KosMatch is not another accommodation marketplace. It does not sell rooms, publish listings, or decide on behalf of the user. It turns scattered listing information into an explainable comparison that helps the user make a more confident decision.

## 2. Portfolio Objective

This project should demonstrate:

- understanding of a real and relatable decision-making problem;
- product scoping that avoids rebuilding an existing marketplace;
- transparent algorithmic thinking;
- thoughtful information architecture and interaction design;
- responsive, accessible web engineering;
- awareness of data quality, uncertainty, and user trust;
- iteration based on research or clearly labeled assumptions.

The case study must explain how product and algorithm decisions were made, not only show final screens.

## 3. Problem Statement

People who move for study, internships, or work often compare accommodation using rent and photos alone. Important costs and constraints are easy to overlook:

- electricity, water, internet, laundry, and service fees;
- daily transport cost and commute time;
- deposits and initial move-in expenses;
- facilities that are required versus merely preferred;
- house rules and daily routines;
- trade-offs between a cheaper room and a more practical location.

Information is also distributed across marketplace pages, chats with owners, screenshots, map searches, and personal notes. This makes comparison inconsistent and mentally demanding.

## 4. How Might We

> How might we help people compare accommodation based on the way they will actually live, rather than rent price alone?

## 5. Target Users

### Primary user — Fresh graduate moving for work

A recent graduate who has received an internship or job opportunity in another city and needs to choose accommodation under time and budget pressure.

Needs:

- understand true monthly spending;
- compare commute and convenience;
- avoid forgetting a required facility;
- explain the decision to family;
- make a choice without maintaining a complex spreadsheet.

### Secondary user — Student moving near campus

A student comparing several options with different facilities, rules, distances, and hidden costs.

Needs:

- set a realistic budget;
- distinguish mandatory needs from preferences;
- compare options consistently;
- retain notes and questions for the owner.

## 6. Product Positioning

KosMatch begins after a user finds possible accommodation elsewhere.

Marketplace:

> “Here are rooms you can rent.”

KosMatch:

> “Here is how the rooms you found fit your actual priorities and monthly routine.”

## 7. Value Proposition

KosMatch turns accommodation choices into a clear, personalized, and explainable comparison—so users can see the real cost and understand every trade-off before deciding.

## 8. Core User Journey

1. The user creates a comparison project, such as `Kos untuk Magang Jakarta`.
2. The user defines their monthly budget, destination, commute routine, required facilities, and priority weights.
3. The user adds 2–5 accommodation options found from any source.
4. KosMatch calculates each option's recurring monthly estimate and initial move-in cost.
5. The system evaluates eligible options and creates an explainable Match Score.
6. The user compares up to three options side by side.
7. The user saves a preferred option, adds verification questions, and exports or shares a summary.

## 9. Product Hypotheses

These are hypotheses until validated through user research:

- users underestimate recurring costs outside the advertised rent;
- users find it difficult to apply the same criteria consistently to every option;
- a single score is not trusted unless its calculation and trade-offs are visible;
- separating required facilities from preferences reduces unsuitable recommendations;
- a comparison summary helps users discuss the decision with family.

Do not present hypotheses as research findings.

## 10. MVP Features

### 10.1 Quick start and demo

- start a comparison without mandatory sign-up;
- choose `Mulai Perbandingan` or `Coba dengan Data Contoh`;
- store an anonymous project locally for the MVP;
- use fictional accommodation data in demo mode;
- optional account sync may be implemented only after the full local flow works.

### 10.2 Preference setup

- project name;
- destination label, such as office or campus;
- monthly housing-and-commute budget;
- maximum acceptable one-way commute time;
- number of commute days per month;
- desired facilities;
- mark facilities as `Wajib` or `Diinginkan`;
- assign importance from 1 to 5 for cost, commute, facilities, environment, and house-rule fit.

Provide sensible defaults and explain what each preference affects.

### 10.3 Add accommodation option

Fields:

- option name;
- area or neighborhood;
- optional source URL;
- date information was last checked;
- advertised monthly rent;
- recurring electricity estimate;
- recurring water estimate;
- recurring internet estimate;
- recurring laundry estimate;
- other recurring fees;
- deposit;
- administration or move-in fee;
- one-way commute time;
- round-trip transport cost;
- available facilities;
- house rules or compatibility flags;
- personal environment rating from 1 to 5;
- notes and questions to verify.

Users must be able to save an incomplete draft. Missing data must be labeled as unknown instead of silently treated as zero.

### 10.4 Real monthly cost calculator

Show:

- advertised rent;
- recurring utilities and services;
- estimated monthly transport;
- other recurring fees;
- total estimated monthly cost;
- initial move-in cost shown separately.

Monthly transport estimate:

```text
round-trip transport cost × commute days per month
```

Do not merge deposits and one-time fees into the monthly total by default. If a time-horizon simulation is added, clearly label the assumption.

### 10.5 Explainable Match Score

For every eligible option, show:

- overall score from 0–100;
- criterion-level scores;
- matched required facilities;
- missing required facilities;
- the strongest advantages;
- the most important trade-offs;
- missing or unverified data.

Example:

> **86% cocok**  
> Sesuai anggaran dan hanya 18 menit dari kantor. Namun, biaya listrik belum terverifikasi dan tidak tersedia dapur bersama.

The app must never show only a mysterious number.

### 10.6 Results and ranking

- separate `Memenuhi kebutuhan wajib` from `Belum memenuhi`;
- rank eligible options by personalized score;
- allow sorting by match, monthly cost, commute, or recently added;
- filter by budget, required facility completion, and verification status;
- clearly indicate that results are estimates based on user-entered data.

### 10.7 Side-by-side comparison

- compare two or three options;
- sticky option headings on desktop;
- grouped rows: cost, commute, facilities, rules, and confidence;
- highlight differences without hiding unfavorable values;
- use text and icons in addition to color;
- mobile view supports one criterion group at a time rather than an unreadable wide table.

### 10.8 Decision board

- shortlist options;
- mark one as current favorite;
- add pros, concerns, and questions to verify;
- track simple verification status: `Belum dicek`, `Dikonfirmasi`, `Berubah`;
- generate a printable/shareable comparison summary without exposing private account data.

## 11. Matching Logic

The score is a decision aid, not an objective verdict.

### Eligibility

An option is eligible only when all facilities marked `Wajib` are available. An ineligible option remains visible but is placed in a separate section with a precise reason.

### Criterion scores

Each criterion produces a normalized score from 0 to 100:

- **Cost:** 100 when total monthly cost is within budget; above-budget options decline proportionally and reach 0 at twice the budget.
- **Commute:** 100 when one-way commute is within the user's limit; longer commutes decline proportionally and reach 0 at twice the limit.
- **Facilities:** percentage of desired, non-required facilities provided.
- **Environment:** user-entered 1–5 rating converted to 0–100.
- **Rule fit:** percentage of selected compatibility preferences met.

If a value required for a criterion is unknown, do not treat it as zero or perfect. Mark that criterion as `Data belum lengkap`, reduce confidence, and exclude its weight from the calculated denominator until the user provides data.

### Weighted score

```text
matchScore = sum(criterionScore × criterionWeight)
             / sum(weights of criteria with known data)
```

Round only the displayed final score. Keep full precision internally.

### Confidence label

Display a separate confidence indicator based on data completeness:

- `Tinggi`: all key fields verified;
- `Sedang`: one or two non-critical values unknown;
- `Rendah`: rent, commute, or several recurring costs are unknown.

Confidence is not part of the Match Score. Keeping them separate prevents false precision.

## 12. Roles and Data Ownership

The core MVP can work without accounts using local browser storage. If account sync is added:

- users can access only their own comparison projects;
- a shared read-only summary uses a revocable random token;
- recipients cannot edit through the shared link;
- source URLs and personal notes are excluded from a public summary unless the owner explicitly includes them.

## 13. Explicit Non-goals

Do not include these in the MVP:

- accommodation booking or payment;
- chat with property owners;
- public accommodation reviews;
- automated scraping from marketplace websites;
- AI-generated facts about a room;
- landlord dashboards;
- real-time map routing;
- exact neighborhood safety claims;
- legal or financial advice;
- opaque machine-learning recommendations;
- a public social feed;
- automatic selection of a “best” option without explanation.

## 14. Trust, Privacy, and Data Quality

- Clearly label all demo listings as fictional.
- Tell users that costs and availability must be verified directly with the property owner.
- Never invent missing values.
- Preserve the source URL and `last checked` date when provided.
- Avoid storing exact office/home addresses when a general destination label is sufficient.
- Do not collect identity documents, payment data, or landlord credentials.
- Validate shared links and make them revocable.
- A disclaimer must state that scores reflect the user's inputs and preferences, not a guarantee of quality or availability.

## 15. Success Criteria

The MVP is successful when a test user can:

- define essential needs and priorities without assistance;
- add an accommodation option in under three minutes;
- correctly understand the difference between advertised rent, monthly total, and move-in cost;
- identify why one option ranks above another;
- spot missing required facilities and unverified data;
- compare three options on mobile and desktop;
- make a shortlist without using a separate spreadsheet.

Suggested usability measures:

- task completion rate;
- time to create the first comparison;
- comprehension of score explanation;
- number of overlooked recurring costs discovered;
- confidence before and after using the comparison;
- accessibility issues found during keyboard and zoom testing.

Do not fabricate metric results.

## 16. Suggested User Research

Interview 4–6 students, interns, or workers who have searched for accommodation in another city.

Questions:

1. Tell me about the last time you compared accommodation.
2. What information did you record, and where?
3. Which cost surprised you after moving?
4. Which facility or rule was non-negotiable?
5. How did commute affect your decision?
6. Who else influenced the final choice?
7. What would make you distrust a recommendation score?

Ask about behavior and past experiences rather than asking users to design features. Convert findings into pain points, decision criteria, and documented design changes.

## 17. Portfolio Case Study Outline

1. Personal context: moving for study, internship, or work.
2. The limitation of comparing rent and photos alone.
3. Research or clearly labeled initial hypotheses.
4. Decision to build a comparison tool rather than a marketplace.
5. Information architecture and calculation model.
6. Early wireframes and scoring transparency exploration.
7. Working web MVP and technical implementation.
8. Usability test: did users understand cost, match, and confidence?
9. Iterations made after feedback.
10. Reflection, limitations, and next experiment.

## 18. Product Voice

The interface language is Indonesian. The tone is practical, reassuring, neutral, and honest about uncertainty.

Preferred examples:

- “Lihat biaya sebenarnya, bukan hanya harga sewa.”
- “Pilihan ini belum memenuhi kebutuhan wajib Anda.”
- “Biaya listrik belum diketahui. Lengkapi data untuk meningkatkan keyakinan hasil.”
- “Mengapa pilihan ini cocok?”
- “Periksa kembali informasi kepada pemilik kos sebelum memutuskan.”

Avoid:

- “Ini pasti kos terbaik untuk Anda.”
- false urgency;
- manipulative ranking labels;
- unexplained percentages;
- blaming users for incomplete information.

## 19. Definition of Done

KosMatch is portfolio-ready when:

- the complete preference → add options → score → compare → shortlist flow works;
- the score calculation is deterministic and unit-tested;
- unknown values are handled honestly;
- demo data is fictional and clearly labeled;
- important algorithm assumptions are visible in the interface;
- loading, empty, validation, error, and success states exist;
- the app is usable at 360 px width, 200% zoom, and with keyboard navigation;
- the README explains the problem, algorithm, limitations, and setup;
- there are no fake marketplace integrations or non-working action buttons.

