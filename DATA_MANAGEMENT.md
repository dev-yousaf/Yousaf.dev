# Portfolio Data Management

## Overview
All portfolio content is now managed through a single centralized data file: `lib/portfolio-data.ts`

## Data Structure

### Personal Info
Contains your basic information:
- Name, title, subtitle
- Bio and availability status
- Contact details (email, phone, location)
- Social media links (GitHub, LinkedIn)
- Profile image path

### About Section
- Headline and description
- Philosophy statement
- Stats (experience, projects, clients, etc.)

### Timeline
Work experience and education history with:
- Year, title, company, location
- Description and tags
- Icon reference (as string)

### Skills
Technical skills organized by category:
- Category name
- Icon reference (as string)
- List of specific skills/technologies

### Services
What you offer as a developer:
- Service name
- Icon reference
- Description

### Process
Your development workflow steps:
- Step name
- Icon reference
- Brief description

### Testimonials
Client reviews with:
- Name, role, text
- Rating

### Projects Data
Complete project portfolio with:
- Basic info (id, title, descriptions, category)
- Technologies used
- Links (GitHub, live demo)
- Featured flag
- Challenge, solution, outcome
- Features list
- Screenshots array

### Contact Info
Contact methods with:
- Icon, title, value
- Link href
- Color and background styling

## Usage

Import what you need from the data file:

```typescript
import { 
  personalInfo, 
  about, 
  timeline, 
  skills, 
  projectsData,
  // ... etc
} from "@/lib/portfolio-data"
```

## Icon Handling

Icons are stored as strings (e.g., "Smartphone", "Database") and converted to components using helper functions like `getIconComponent()` in each page.

## Updating Content

To update your portfolio content:
1. Open `lib/portfolio-data.ts`
2. Find the relevant section
3. Update the data
4. Save the file
5. The changes will reflect across all pages automatically

## Benefits

- **Single Source of Truth**: All content in one place
- **Type Safety**: TypeScript ensures data consistency
- **Easy Updates**: Change once, update everywhere
- **Maintainability**: Clear structure, easy to understand
- **Scalability**: Easy to add new sections or fields
