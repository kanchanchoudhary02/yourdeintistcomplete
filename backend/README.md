# Your Dentist - Backend

Node.js + Express + MongoDB backend for the dental clinic appointment system.

## Setup

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Create a `.env` file in the root (see `.env.example` structure below):
   \`\`\`env
   PORT=5000
   MONGO_URI=your_mongodb_atlas_connection_string
   WHATSAPP_ACCESS_TOKEN=
   WHATSAPP_PHONE_NUMBER_ID=
   WHATSAPP_BUSINESS_ACCOUNT_ID=
   CLINIC_WHATSAPP_NUMBER=
   \`\`\`

3. Run the server:
   \`\`\`bash
   npm run dev
   \`\`\`

Server runs on `http://localhost:5000`

## API Endpoints

### POST /api/appointments

Creates a new appointment.

**Request body:**
\`\`\`json
{
  "name": "Rahul Sharma",
  "phone": "9876543210",
  "email": "rahul@test.com",
  "service": "Dental Implant",
  "preferredDate": "2026-08-15",
  "message": "Need consultation"
}
\`\`\`

**Required fields:** name, phone, service, preferredDate
**Optional fields:** email, message

**Validation rules:**
- `phone`: must be a valid 10-digit Indian number (starts with 6-9)
- `email`: must be valid format if provided
- `preferredDate`: cannot be in the past
- Rate limit: 5 requests per IP per 15 minutes

**Success response (201):**
\`\`\`json
{
  "success": true,
  "message": "Appointment booked successfully",
  "data": { ... }
}
\`\`\`

**Error response (400/500):**
\`\`\`json
{
  "success": false,
  "error": "error message here"
}
\`\`\`

## Status
- ✅ Server, DB, API, validation, security — working
- 🔜 WhatsApp notification — pending Meta setup

## Notes for Frontend Developer
- CORS is enabled — any origin can call this API during development
- Send requests as `Content-Type: application/json`
- No admin panel/login — appointments are only stored in DB, clinic manages manually via WhatsApp