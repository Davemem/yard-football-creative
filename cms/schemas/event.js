export default {
  name: "event",
  title: "Event",
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
          { title: "Event", value: "event" },
          { title: "Gala Day", value: "gala-day" },
          { title: "Workshop", value: "workshop" },
          { title: "Collaboration", value: "collaboration" },
          { title: "Current Activity", value: "current-activity" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "statusLabel",
      title: "Status Label",
      type: "string",
      group: "editorial",
      description: "Short pill text such as Upcoming, Featured, Sold Out, or Past.",
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
      name: "timeLabel",
      title: "Time Label",
      type: "string",
      group: "details",
      description: "Short readable time range used in the card meta row.",
    },
    {
      name: "primaryCtaLabel",
      title: "Primary CTA Label",
      type: "string",
      group: "cta",
      initialValue: "Enquire About Events",
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
