# Better Care Health Group

## Enquiry email setup

The enquiry API sends two transactional emails through Resend in one batch:

1. A full enquiry notification to the Better Care team.
2. A short English confirmation to the customer who submitted the form.

Copy `.env.example` to `.env.local` for local development and configure the same values in Vercel:

```env
RESEND_API_KEY=re_your_api_key
ENQUIRY_TO_EMAIL=info@bettercarehg.com
ENQUIRY_FROM_EMAIL=Better Care Health Group <enquiries@bettercarehg.com>
```

Before production sending, add and verify `bettercarehg.com` in Resend. The API returns `503` and does not pretend an enquiry was sent when the API key or verified sender is missing.
