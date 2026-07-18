const SITE_URL = "https://musfiqurshakib.dev";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Musfiqur Shakib",
  url: SITE_URL,
  jobTitle: "Software Engineer",
  description:
    "Full-stack software engineer specializing in enterprise software, AI-powered applications, and scalable platforms.",
  email: "musfiqur@example.com",
  sameAs: [
    "https://linkedin.com/in/musfiqurshakib",
    "https://github.com/musfiqurshakib",
    "https://t.me/musfiqurshakib",
  ],
  knowsAbout: [
    "Full Stack Development",
    "Software Engineering",
    "Artificial Intelligence",
    "Machine Learning",
    "Platform Engineering",
    "System Architecture",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "NestJS",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "AWS",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Engineer",
    occupationLocation: {
      "@type": "Country",
      name: "Bangladesh",
    },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Musfiqur Shakib — Software Engineer",
  url: SITE_URL,
  description:
    "Portfolio of Musfiqur Shakib — Full-stack software engineer specializing in enterprise software, AI-powered applications, and scalable platforms.",
  author: {
    "@type": "Person",
    name: "Musfiqur Shakib",
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Musfiqur Shakib | Software Engineer",
  url: SITE_URL,
  description:
    "Portfolio and professional profile of Musfiqur Shakib — Software Engineer specializing in full-stack development, AI, and platform engineering.",
  mainEntity: {
    "@type": "Person",
    name: "Musfiqur Shakib",
    jobTitle: "Software Engineer",
    url: SITE_URL,
  },
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </>
  );
}
