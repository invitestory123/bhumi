/**
 * Single source of truth for one couple's invitation.
 * Duplicate the project, edit this file, swap the images in src/assets, deploy.
 */

export const invitation = {
  couple: {
    bride: "Bhumika",
    brideShort: "Bhumika",
    groom: "Piyush",
    groomShort: "Piyush",
    hashtag: "#BhumikaAndPiyush",
  },
  invite: {
    kicker: "Together with their families",
    line: "cordially invite you to celebrate their wedding ceremony",
  },
  family: {
    grandparents: "Late Smt. Kusum Lata & Late Shri. Satyapal Poswal",
    brideParents: "Late Mr. Kuldeep Poswal & Mrs. Anita Poswal",
    groomParents: "Mr. Harish Kasana & Mrs. Madhu Kasana",
    hosts: "Deepanjali Nagar & Vijay Nagar",
  },
  event: {
    title: "The Wedding of Bhumika & Piyush",
    type: "Wedding Ceremony",
    /** ISO with timezone offset — India Standard Time */
    startsAt: "2026-11-26T12:00:00+05:30",
    endsAt: "2026-11-26T22:00:00+05:30",
    dateLabel: "26 . 11 . 2026",
    dayLabel: "Thursday",
    timeLabel: "12:00 PM onwards",
    dressCode: "Traditional / Festive Indian Wedding Attire",
    note: "Lunch and celebrations to follow",
  },
  venue: {
    name: "Jaypee Residency Manor",
    address: "Barlowganj, Mussoorie, Uttarakhand 248122",
    mapsQuery: "Jaypee Residency Manor, Barlowganj, Mussoorie, Uttarakhand 248122",
    url: "https://maps.app.goo.gl/vYwBNE8fYitRXA2H8?g_st=ic",
    lat: 30.4503,
    lng: 78.0847,
  },
  story: [
    {
      year: "2024",
      title: "The First Meeting",
      text: "A warm introduction, shared smiles, and a conversation that effortlessly turned into something meaningful.",
      image: "story-2",
    },
    {
      year: "2025",
      title: "Growing Together",
      text: "Cherished memories, mutual understanding, and two souls discovering their perfect match.",
      image: "story-3",
    },
    {
      year: "2026",
      title: "The Wedding Ceremony",
      text: "Surrounded by our loved ones amidst the scenic hills of Mussoorie, we take our sacred vows and begin our forever.",
      image: "story-1",
    },
  ],
  blessing: {
    line: "May your intentions be one, may your hearts beat as one.",
    translation:
      "Two families, one thread of gold — and a lifetime of happiness made luminous together.",
    source: "A blessing from both families",
  },
  footer: {
    families: "With love & warm wishes from the Poswal, Kasana & Nagar Families",
    contacts: [],
  },
  meta: {
    title: "Bhumika & Piyush — Wedding Invitation",
    description:
      "Together with their families, Bhumika and Piyush cordially invite you to celebrate their wedding ceremony on Thursday, 26 November 2026 at Jaypee Residency Manor, Mussoorie, Uttarakhand.",
    url: "https://bhumi-invitestory.vercel.app",
    image: "/og-image.png",
    siteName: "Bhumika & Piyush Wedding",
  },
} as const;

export type Invitation = typeof invitation;
