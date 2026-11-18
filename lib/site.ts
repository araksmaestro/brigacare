// Static site content: navigation, contact details, staff and embedded form URLs.

export type NavItem = { href: string; label: string };

export const NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/client-referral-form", label: "ODDS Client Referral Form" },
  { href: "/apd-referral", label: "APD Client Referral Form" },
  { href: "/work-with-brigacare", label: "Work with BrigaCare" },
];

export const CONTACT_NAV: NavItem = { href: "/contact", label: "Contact" };

export const CONTACT = {
  phoneDisplay: "503.840.0387",
  phoneDashed: "503-840-0387",
  phoneHref: "tel:5038400387",
  fax: "503-925-3023",
  addressLine1: "20577 SW Duckridge Pl",
  addressLine2: "Sherwood, OR 97140",
  email: "cecilia.t@brigacare.com",
};

/** TODO: LinkedIn URL not supplied yet. Set it to show the LinkedIn card on the Contact page. */
export const LINKEDIN_URL: string | null = null;

/** SmartSuite public forms embedded on the site (iframes). */
export const FORMS = {
  // Writes to Brigacare Platform 2026 → Bullpen
  odds: "https://form.smartsuite.com/sjt1p5k1/9X5uiQkaAP?header=false",
  // Writes to Brigacare Platform 2026 → Bullpen
  apd: "https://app.smartsuite.com/form/sjt1p5k1/K0IYY1POXp?embed=true&header=false",
  // Writes to Oregon HR → OR Staff
  work: "https://app.smartsuite.com/form/sjt1p5k1/RubF3jEUV4?header=false",
};

export type StaffGroup = "leadership" | "clinical" | "support";

export type StaffMember = {
  name: string;
  /** Degrees and licenses shown after the name, e.g. "MS, CADC I". */
  credentials?: string;
  role: string;
  email: string;
  group: StaffGroup;
};

export const FEATURED_STAFF: StaffMember = {
  name: "Cecilia Tilley",
  role: "CEO",
  email: "cecilia.t@brigacare.com",
  group: "leadership",
};

export const STAFF: StaffMember[] = [
  { name: "Robert J Tilley", credentials: "MD, MBA", role: "Exec VP", email: "rob.t@brigacare.com", group: "leadership" },
  { name: "Amanda Dorman", credentials: "MS", role: "Clinical Director", email: "amanda.d@brigacare.com", group: "leadership" },
  { name: "Susan Savant", credentials: "PhD", role: "Behavior Professional", email: "susan.s@brigacare.com", group: "clinical" },
  { name: "Angela Pickering", credentials: "M.Ed", role: "Behavior Professional", email: "angela.p@brigacare.com", group: "clinical" },
  { name: "Kasey Daisher", credentials: "BS", role: "Behavior Professional", email: "kasey.d@brigacare.com", group: "clinical" },
  { name: "Jamie Blackwell", credentials: "BA", role: "Behavior Professional", email: "jamie.b@brigacare.com", group: "clinical" },
  { name: "Mesha Koos", credentials: "BS", role: "Behavior Professional", email: "mesha.k@brigacare.com", group: "clinical" },
  { name: "Kaitlyn Herbst", credentials: "BS", role: "Behavior Professional", email: "kaitlyn.h@brigacare.com", group: "clinical" },
  { name: "Michael Arthur", credentials: "BA", role: "Behavior Professional", email: "m.arthur@brigacare.com", group: "clinical" },
  { name: "Kristen Davis", credentials: "MS", role: "Behavior Professional", email: "kristen.d@brigacare.com", group: "clinical" },
  { name: "Grace Battle", role: "Behavior Professional / OIS Instructor", email: "grace.b@brigacare.com", group: "clinical" },
  { name: "Alexis Wright", credentials: "BA", role: "Behavior Professional / OIS Instructor", email: "alexis.w@brigacare.com", group: "clinical" },
  { name: "Shannon Alfaro", credentials: "BA", role: "Behavior Professional", email: "shannon.a@brigacare.com", group: "clinical" },
  { name: "Amber Rail", credentials: "BS", role: "Behavior Professional", email: "amber.r@brigacare.com", group: "clinical" },
  { name: "Melea Kellogg", credentials: "MS", role: "Behavior Professional", email: "melea.k@brigacare.com", group: "clinical" },
  { name: "Jacob Pscheidt", credentials: "BS", role: "Behavior Professional", email: "jacob.p@brigacare.com", group: "clinical" },
  { name: "Christine Rodriguez", credentials: "MSW", role: "Behavior Professional", email: "christine.r@brigacare.com", group: "clinical" },
  { name: "Courtney Slater", credentials: "MS, CADC I, QMHP", role: "Behavior Professional", email: "courtney.s@brigacare.com", group: "clinical" },
  { name: "Brian Prusynski", credentials: "BA", role: "Behavior Professional", email: "brian.p@brigacare.com", group: "clinical" },
  { name: "Haley Holte", credentials: "MS", role: "Behavior Professional", email: "haley.h@brigacare.com", group: "clinical" },
  { name: "Misha Micheau", credentials: "M.Ed", role: "Behavior Professional", email: "misha.m@brigacare.com", group: "clinical" },
  { name: "Yeliz Boynukisa-Pleasant", credentials: "M.Ed", role: "Behavior Professional", email: "yeliz.b@brigacare.com", group: "clinical" },
  { name: "Victoria Steelman", credentials: "MA", role: "Behavior Professional", email: "victoria.b@brigacare.com", group: "clinical" },
  { name: "Aaron Vice", credentials: "BS", role: "OIS Instructor", email: "aaron.v@brigacare.com", group: "clinical" },
  { name: "Megan Klein", role: "Billing Specialist", email: "megan.k@brigacare.com", group: "support" },
  { name: "Reanna Todd", role: "Billing Specialist", email: "reanna.t@brigacare.com", group: "support" },
  { name: "Edelyn Murillo", role: "Care Coordinator", email: "edelyn.m@brigacare.com", group: "support" },
];
