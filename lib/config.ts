export const APP_NAME = "Starter Kit";
export const COURSE_GITHUB = "https://github.com/product-jam-2025";
export const COURSE_CREDITS = "Product Jam 2025";

export const DEMOS_ENABLED =
  process.env.DEMOS_ENABLED === "true" ? true : false;
export const DEMOS = [
  {
    title: "Blank",
    slug: "/demos/00_blank",
    description: "A minimal blank slate.",
  },
  {
    title: "HTML Elements",
    slug: "/demos/00_elements",
    description:
      "This page provides an overview of common HTML elements. Use this page to see how your CSS changes the styling of these elements.",
  },
  {
    title: "Contact form",
    slug: "/demos/01_contact",
    description:
      "A simple example of a contact form that sends an email. In this case, the contact form sends an email to the email entered in the form.",
  },
  {
    title: "Basic Data Visualization",
    slug: "/demos/02_viz",
    description:
      "A simple example of reading data from a public API and displaying it in a chart.",
  },
  {
    title: "Random Team Generator",
    slug: "/random",
    description:
      "An example of a fully functional application that builds random teams and product ideas from this year's students.",
  },
];

export const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS || "";
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || "";
export const EMAIL_HOST = process.env.EMAIL_HOST || "";
export const EMAIL_PORT = process.env.EMAIL_PORT || 587;

export const PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
export const PUBLIC_SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
export const PRIVATE_SUPABASE_SERVICE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const SUPABASE_ENABLED =
  PUBLIC_SUPABASE_URL &&
  PUBLIC_SUPABASE_ANON_KEY &&
  PRIVATE_SUPABASE_SERVICE_KEY
    ? true
    : false;

export const GOOGLE_CREDENTIALS = {
  client_id: process.env.GOOGLE_CLIENT_ID,
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  project_id: process.env.GOOGLE_PROJECT_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY,
};

export const GOOGLE_DRIVE_DIRECTORY = process.env.GOOGLE_DRIVE_DIRECTORY;
export const GOOGLE_SHEET = {
  id: process.env.GOOGLE_SHEET_ID,
  range: process.env.GOOGLE_SHEET_RANGE,
};

export const GOOGLE_SCOPES = [
  "https://www.googleapis.com/auth/drive",
  "https://www.googleapis.com/auth/drive.file",
  "https://www.googleapis.com/auth/spreadsheets",
];
