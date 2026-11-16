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
  initials: string;
  role: string;
  email: string;
  group: StaffGroup;
};

export const FEATURED_STAFF: StaffMember = {
  name: "Cecilia Tilley",
  initials: "CT",
  role: "CEO",
  email: "cecilia.t@brigacare.com",
  group: "leadership",
};

export const STAFF: StaffMember[] = [
  { name: "Robert J Tilley", initials: "RT", role: "MD, MBA · Exec VP", email: "rob.t@brigacare.com", group: "leadership" },
  { name: "Amanda Dorman", initials: "AD", role: "MS · Clinical Director", email: "amanda.d@brigacare.com", group: "leadership" },
  { name: "Susan Savant", initials: "SS", role: "PhD · Behavior Professional", email: "susan.s@brigacare.com", group: "clinical" },
  { name: "Angela Pickering", initials: "AP", role: "M.Ed · Behavior Professional", email: "angela.p@brigacare.com", group: "clinical" },
  { name: "Kasey Daisher", initials: "KD", role: "BS · Behavior Professional", email: "kasey.d@brigacare.com", group: "clinical" },
  { name: "Jamie Blackwell", initials: "JB", role: "BA · Behavior Professional", email: "jamie.b@brigacare.com", group: "clinical" },
  { name: "Mesha Koos", initials: "MK", role: "BS · Behavior Professional", email: "mesha.k@brigacare.com", group: "clinical" },
  { name: "Kaitlyn Herbst", initials: "KH", role: "BS · Behavior Professional", email: "kaitlyn.h@brigacare.com", group: "clinical" },
  { name: "Michael Arthur", initials: "MA", role: "BA · Behavior Professional", email: "michael.a@brigacare.com", group: "clinical" },
  { name: "Kristen Davis", initials: "KD", role: "MS · Behavior Professional", email: "kristen.d@brigacare.com", group: "clinical" },
  { name: "Grace Battle", initials: "GB", role: "Behavior Professional / OIS Instructor", email: "grace.b@brigacare.com", group: "clinical" },
  { name: "Alexis Wright", initials: "AW", role: "BA · Behavior Professional / OIS Instructor", email: "alexis.w@brigacare.com", group: "clinical" },
  { name: "Shannon Alfaro", initials: "SA", role: "BA · Behavior Professional", email: "shannon.a@brigacare.com", group: "clinical" },
  { name: "Amber Rail", initials: "AR", role: "BS · Behavior Professional", email: "amber.r@brigacare.com", group: "clinical" },
  { name: "Melea Kellogg", initials: "MK", role: "MS · Behavior Professional", email: "melea.k@brigacare.com", group: "clinical" },
  { name: "Jacob Pscheidt", initials: "JP", role: "BS · Behavior Professional", email: "jacob.p@brigacare.com", group: "clinical" },
  { name: "Christine Rodriguez", initials: "CR", role: "MSW · Behavior Professional", email: "christine.r@brigacare.com", group: "clinical" },
  { name: "Courtney Slater", initials: "CS", role: "MS, CADC I, QMHP · Behavior Professional", email: "courtney.s@brigacare.com", group: "clinical" },
  { name: "Brian Prusynski", initials: "BP", role: "BA · Behavior Professional", email: "brian.p@brigacare.com", group: "clinical" },
  { name: "Haley Holte", initials: "HH", role: "MS · Behavior Professional", email: "haley.h@brigacare.com", group: "clinical" },
  { name: "Misha Micheau", initials: "MM", role: "M.Ed · Behavior Professional", email: "misha.m@brigacare.com", group: "clinical" },
  { name: "Aaron Vice", initials: "AV", role: "BS · OIS Instructor", email: "aaron.v@brigacare.com", group: "clinical" },
  { name: "Megan Klein", initials: "MK", role: "Billing Specialist", email: "megan.k@brigacare.com", group: "support" },
  { name: "Reanna Todd", initials: "RT", role: "Billing Specialist", email: "reanna.t@brigacare.com", group: "support" },
  { name: "Edelyn Murillo", initials: "EM", role: "Care Coordinator", email: "edelyn.m@brigacare.com", group: "support" },
];
