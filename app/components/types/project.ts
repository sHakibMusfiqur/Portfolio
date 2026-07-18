export interface ProjectLink {
  label: string;
  href: string;
  icon: "github" | "external" | "case-study";
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  gradient: string;
  links: ProjectLink[];
  featured?: boolean;
}
