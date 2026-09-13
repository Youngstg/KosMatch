# KosMatch — UX and Visual Design Specification

## 1. Design Direction

KosMatch should feel like a clear personal decision workspace—not a marketplace full of promotional cards. The interface should help users slow down, compare consistently, and understand trade-offs.

Design keywords:

- clear;
- grounded;
- analytical but friendly;
- transparent;
- practical;
- confident without being absolute.

Avoid visual patterns associated with booking pressure: countdowns, fake scarcity, sponsored ranking, oversized discounts, attention-grabbing red, or “best choice” claims without evidence.

## 2. Design Principles

### Explain before persuading

Every score must be accompanied by reasons, trade-offs, and missing data.

### Compare like with like

Use the same categories and units for every option. Never hide an unfavorable value or substitute unknown with zero.

### Show cost in layers

Keep advertised rent, recurring monthly estimate, and initial move-in cost visually distinct.

### Requirements before preferences

A missing mandatory facility must be more visible than a small difference in score.

### Reduce decision overload

Reveal detail progressively. Summaries should answer the first question; expandable sections provide evidence.

### Responsive comparison by design

Do not shrink a desktop comparison table until it becomes unreadable. Use criterion-by-criterion cards on small screens.

## 3. Brand Foundation

### Name

**KosMatch**

### Tagline

**Cocok di harga, tepat untuk keseharian.**

### Logo concept

Use a simple combination of a location/room outline and two aligned comparison bars. Avoid a generic house-with-heart symbol and avoid copying marketplace visual identities.

### Color palette

| Token | Suggested value | Usage |
| --- | --- | --- |
| `--background` | `#F7F8FC` | Main background |
| `--surface` | `#FFFFFF` | Cards and panels |
| `--surface-subtle` | `#F0F2F8` | Grouped comparison rows |
| `--primary` | `#4F46E5` | Primary actions and active state |
| `--primary-hover` | `#3730A3` | Primary pressed/hover state |
| `--secondary` | `#E9E7FF` | Selected chips and soft emphasis |
| `--accent` | `#0F766E` | Positive fit and verified data |
| `--text` | `#182033` | Primary text |
| `--text-muted` | `#667085` | Supporting text |
| `--border` | `#DDE1EA` | Borders and dividers |
| `--warning` | `#A15C07` | Unknown or needs verification |
| `--danger` | `#B42318` | Missing requirement and destructive actions |
| `--focus` | `#2563EB` | Keyboard focus ring |

Do not rely on green/red alone for suitability. Always add a label and icon.

### Typography

Use `Inter`, `Geist Sans`, or another highly readable sans-serif. Use one type family.

| Style | Desktop | Mobile | Weight |
| --- | --- | --- | --- |
| Display | 44/52 px | 34/42 px | 700 |
| Page title | 30/38 px | 26/34 px | 700 |
| Section title | 20/28 px | 18/26 px | 650 |
| Numeric highlight | 28/34 px | 24/30 px | 700 |
| Body | 16/24 px | 16/24 px | 400 |
| Small | 14/20 px | 14/20 px | 400–500 |
| Caption | 12/16 px | 12/16 px | 500 |

Use tabular numerals for aligned currency and cost comparisons.

### Shape and elevation

- panel radius: 16 px;
- control radius: 10–12 px;
- chip radius: full/pill;
- border: 1 px neutral;
- elevation: subtle, reserved for floating layers and the currently selected option;
- never nest more than two bordered card levels.

## 4. Layout System

### Breakpoints

- mobile: 360–767 px;
- tablet: 768–1023 px;
- desktop: 1024 px and above;
- content max-width: 1280 px;
- reading/form max-width: 720 px.

### Desktop application shell

- compact left navigation, approximately 232 px;
- project switcher near the logo;
- top-right access to data explanation and settings;
- main area uses a 12-column grid;
- content padding 24–32 px.

### Mobile application shell

- top bar with project name and overflow menu;
- bottom navigation with four destinations;
- fixed safe-area-aware primary action when needed;
- content padding 16 px;
- multi-step forms use a full-screen flow.

### Primary navigation

1. Ringkasan
2. Pilihan Kos
3. Bandingkan
4. Keputusan

Preferences and methodology live under project settings, not as permanent navigation items.

## 5. Core Screens

### 5.1 Landing page

Goal: explain why KosMatch is different from a marketplace.

Sections:

- minimal navigation;
- hero with comparison preview;
- problem: advertised rent does not represent daily cost;
- three-step explanation;
- transparent-score section;
- fictional demo disclaimer;
- CTA and footer.

Hero copy:

> **Kos murah belum tentu paling hemat.**  
> Bandingkan biaya bulanan, perjalanan, fasilitas, dan kebutuhan pribadi dalam satu keputusan yang transparan.

Primary CTA: `Mulai Perbandingan`  
Secondary CTA: `Coba Data Contoh`

### 5.2 Preference onboarding

Use a four-step flow with visible progress and a back action.

#### Step 1 — Context

- project name;
- destination label;
- commuting days per month.

#### Step 2 — Budget and commute

- total monthly budget;
- maximum one-way commute time;
- short explanation that the budget includes recurring costs and travel.

#### Step 3 — Facilities and rules

- selectable facility chips;
- each selection can be changed between `Wajib` and `Diinginkan`;
- examples: Wi-Fi, private bathroom, kitchen, parking, laundry access;
- rule preferences: curfew compatibility, visitor policy, gender restriction if relevant and lawful.

#### Step 4 — Priorities

Use five discrete importance controls labeled `Tidak penting` to `Sangat penting`. Do not use unlabeled precision sliders.

Criteria:

- total cost;
- commute;
- facilities;
- environment;
- house-rule fit.

Show a plain-language summary before continuing.

### 5.3 Empty project dashboard

Do not show meaningless analytics. Show:

- preference summary;
- action to add the first option;
- option to load fictional examples;
- a small illustration or comparison preview;
- checklist explaining what details to collect.

### 5.4 Add/edit accommodation option

Use a multi-section form with autosaved draft:

1. Basic information
2. Monthly cost
3. Move-in cost
4. Commute
5. Facilities and rules
6. Personal observation
7. Review

Display a live cost subtotal as the user enters values. Unknown is the default; zero must be an explicit value.

Every currency field must have:

- visible label;
- `Rp` prefix;
- formatted display;
- numeric input semantics;
- helper text describing monthly versus one-time cost.

The final review lists missing information and lets the user save anyway.

### 5.5 Results overview

Top section:

- project title;
- active budget and commute constraints;
- count of eligible options;
- `Tambah pilihan` action.

Group A: `Memenuhi kebutuhan wajib`  
Group B: `Perlu dipertimbangkan ulang`

Each option card contains:

- name and area;
- Match Score with text label;
- data confidence label;
- total monthly estimate;
- advertised rent shown as secondary;
- commute time;
- required facility status;
- two reasons it fits;
- one trade-off or unknown;
- actions: detail, compare, shortlist.

Do not use large property photos as the main ranking cue. One optional thumbnail is enough because this is a decision tool.

### 5.6 Accommodation detail

Information hierarchy:

1. eligibility and score explanation;
2. monthly cost breakdown;
3. commute estimate;
4. facilities and requirements;
5. rules and environment;
6. missing/unverified data;
7. personal notes and source link.

Use horizontal criterion bars with numeric/text alternatives. Avoid radar charts because precise comparisons and screen-reader interpretation are weaker.

Example explanation:

> **Mengapa skornya 86?**  
> Biaya dan perjalanan sesuai prioritas utama Anda. Empat dari lima fasilitas pilihan tersedia. Biaya listrik belum masuk karena datanya belum diketahui.

### 5.7 Compare view

#### Desktop

- compare two or three columns;
- sticky option headers;
- a left label column;
- grouped sections that can collapse;
- emphasize best values subtly;
- pin `Data belum diketahui` instead of displaying `Rp0`.

#### Mobile

- option selector at top;
- one criterion group at a time;
- stacked cards with identical order;
- optional “show differences only” toggle;
- do not require horizontal scrolling for core information.

Comparison groups:

- summary and eligibility;
- monthly total and breakdown;
- move-in cost;
- commute;
- required facilities;
- desired facilities;
- rules and environment;
- data confidence;
- questions to verify.

### 5.8 Cost simulator

Allow the user to change commute days, transport cost, or one uncertain recurring item and immediately see the monthly impact.

Show:

- current estimate;
- simulated estimate;
- difference per month;
- difference over 6 and 12 months;
- assumptions used.

Simulation must not overwrite the saved option until the user explicitly chooses `Terapkan perubahan`.

### 5.9 Decision board

Show shortlisted options with:

- current favorite;
- personal pros;
- concerns;
- questions to verify;
- verification status;
- link to comparison summary.

The empty state prompts the user to shortlist from results rather than adding duplicate records.

## 6. Match Score Presentation

The score should be a compact number plus explanation—not a speedometer gauge.

Suggested display:

```text
86% cocok
Keyakinan data: Sedang
```

Then show criterion rows:

```text
Biaya total       100/100  Sesuai anggaran
Perjalanan         92/100  18 dari batas 20 menit
Fasilitas          80/100  4 dari 5 tersedia
Lingkungan         75/100  Penilaian pribadi 4/5
Aturan             85/100  Satu hal perlu dikonfirmasi
```

For ineligible options, lead with:

> `Belum memenuhi kebutuhan wajib`

The score may remain visible as supporting detail but cannot override the eligibility warning.

## 7. Cost Presentation

Use three clearly separated numbers:

| Label | Meaning |
| --- | --- |
| Harga sewa | Advertised room rent only |
| Estimasi bulanan | Rent + recurring fees + monthly transport |
| Biaya awal masuk | Deposit + administration + first required payment |

Use Indonesian Rupiah formatting such as `Rp1.850.000`. Do not display unnecessary decimals.

Cost details must distinguish:

- known values;
- user estimates;
- unknown values;
- simulated values.

## 8. Component Inventory

- `AppShell`
- `ProjectSwitcher`
- `PreferenceSummary`
- `StepProgress`
- `CurrencyField`
- `ImportanceControl`
- `RequirementChip`
- `OptionCard`
- `EligibilityBadge`
- `ConfidenceBadge`
- `MatchScore`
- `CriterionScoreRow`
- `CostBreakdown`
- `UnknownValue`
- `VerificationStatus`
- `ComparisonGrid`
- `MobileComparisonSection`
- `DecisionNoteCard`
- `EmptyState`
- `SkeletonState`
- `InlineAlert`
- `ConfirmationDialog`
- `Toast`

Use one consistent icon library. Do not use emoji as functional icons.

## 9. Interaction and Feedback States

Every data-driven component must define:

- default;
- hover where applicable;
- focus-visible;
- selected;
- loading/skeleton;
- empty;
- invalid;
- missing/unknown;
- save success;
- save failure;
- destructive confirmation;
- read-only shared mode.

Autosave must show `Menyimpan…`, `Tersimpan`, or `Gagal menyimpan`. Do not claim success before persistence completes.

## 10. Accessibility Requirements

- semantic landmarks and logical headings;
- full keyboard navigation;
- visible 2 px focus indicators;
- 44 × 44 px minimum touch targets;
- persistent labels on every input;
- errors associated with fields through accessible descriptions;
- no drag-only interaction for ordering options;
- score charts include text/numeric equivalents;
- status uses text and icons in addition to color;
- screen-reader-friendly currency values and comparison headings;
- tables use correct header associations on desktop;
- mobile comparison preserves identical content order;
- animations honor `prefers-reduced-motion`;
- support 200% zoom without lost content or actions.

## 11. Responsive Behavior

- option cards: one column on mobile, two on tablet, up to three on desktop;
- preference form: one column until desktop;
- cost breakdown: stacked on mobile, label/value rows on desktop;
- compare: stacked criterion groups on mobile, true table/grid on desktop;
- primary bottom action must not cover content;
- long option names wrap rather than truncate essential differences;
- URL and notes use safe wrapping.

## 12. Content Rules

- Use `pilihan kos`, not `listing`, in user-facing Indonesian text.
- Use `perkiraan` or `estimasi` for calculated costs.
- Use `cocok`, not `terbaik`, unless quoting the user's own label.
- Use `belum diketahui`, never zero, for absent values.
- Explain why a field matters near the field.
- Show formulas in plain language before mathematical notation.
- Destructive actions state whether they affect one option or the whole project.

## 13. Motion

- use 150–220 ms transitions;
- animate score changes only after user input settles;
- show cost simulation changes with subtle number transition and explicit difference;
- no looping decorative motion in the application;
- disable non-essential motion when reduced motion is requested.

## 14. Fictional Demo Scenario

Project: `Kos untuk Magang di Jakarta`

Preferences:

- budget: `Rp2.500.000` per month including transport;
- destination: `Kantor Kuningan`;
- commute days: 22 per month;
- maximum one-way commute: 35 minutes;
- required: Wi-Fi and private bathroom;
- desired: kitchen, laundry nearby, no curfew;
- highest priorities: cost and commute.

Options:

- `Kos Anggrek 12` — fictional;
- `Paviliun Mentari` — fictional;
- `Kost Taman Selatan` — fictional.

Every demo surface must state that names, prices, addresses, and availability are fictional.

## 15. Design Deliverables

Before declaring the design complete, produce:

- current user journey and pain-point map;
- preference and comparison user flow;
- low-fidelity sketches for onboarding, option entry, results, and compare;
- responsive high-fidelity screens;
- token and component reference;
- loading, empty, error, unknown-data, and read-only states;
- score-explanation prototype;
- at least one documented iteration from real feedback or a clearly labeled heuristic review.

