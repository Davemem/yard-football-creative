export default {
  name: "program",
  title: "Program",
  type: "document",
  groups: [
    { name: "editorial", title: "Editorial", default: true },
    { name: "details", title: "Details" },
    { name: "cta", title: "CTA" },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "editorial",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      group: "editorial",
      options: {
        list: [
          { title: "Community Football Experiences", value: "community-football-experiences" },
          { title: "Elite Pathway Development", value: "elite-pathway-development" },
          { title: "Workshops and Education", value: "workshops-and-education" },
          { title: "Events and Gala Days", value: "events-and-gala-days" },
          { title: "All-Abilities and Inclusive Football", value: "all-abilities-and-inclusive-football" },
          { title: "Storytelling, Art, and Creative Projects", value: "storytelling-art-and-creative-projects" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "pathway",
      title: "Pathway",
      type: "string",
      group: "editorial",
      options: {
        list: [
          { title: "Community", value: "community" },
          { title: "Elite", value: "elite" },
          { title: "Shared", value: "shared" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "statusLabel",
      title: "Status Label",
      type: "string",
      group: "editorial",
      description: "Short pill text such as Open, Expression of Interest, Waitlist, or Closed.",
      validation: (Rule) => Rule.required().max(32),
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
      group: "editorial",
      rows: 3,
      validation: (Rule) => Rule.required().max(240),
    },
    {
      name: "audience",
      title: "Audience",
      type: "string",
      group: "details",
      description: "Short audience label used in the card meta row.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      group: "details",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
      group: "details",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
      group: "details",
    },
    {
      name: "primaryCtaLabel",
      title: "Primary CTA Label",
      type: "string",
      group: "cta",
      initialValue: "Contact Yard",
      validation: (Rule) => Rule.required().max(40),
    },
    {
      name: "primaryCtaUrl",
      title: "Primary CTA URL",
      type: "string",
      group: "cta",
      description: "Use an approved contact or registration destination only, including relative site links like contact.html.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      group: "details",
      description: "Lower numbers appear first when dates are equal.",
      initialValue: 50,
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      statusLabel: "statusLabel",
    },
    prepare({ title, category, statusLabel }) {
      const parts = [category, statusLabel].filter(Boolean);

      return {
        title,
        subtitle: parts.join(" - "),
      };
    },
  },
};
