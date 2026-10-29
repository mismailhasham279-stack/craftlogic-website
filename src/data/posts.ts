export type PostBlock =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "list"; items: string[] };

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  published: string;
  readTime: string;
  author: string;
  blocks: PostBlock[];
}

export const POSTS: Post[] = [
  {
    slug: "how-a-professional-website-brings-more-customers",
    title: "How a Professional Website Brings More Customers to Your Business",
    description:
      "A professional website works for your business 24/7: it builds trust, answers customer questions, and turns visitors into paying customers. Here is how.",
    date: "October 29, 2026",
    published: "2026-10-29",
    readTime: "6 min read",
    author: "Muhammad Ismail",
    blocks: [
      {
        kind: "p",
        text: "Before a customer calls you, they search for you. If they cannot find a proper website, most of them move on to a competitor who has one. A professional website is not decoration — it is a salesperson that works 24 hours a day, 7 days a week, without asking for a salary.",
      },
      { kind: "h2", text: "1. It builds trust in seconds" },
      {
        kind: "p",
        text: "People judge a business by its website within seconds. A clean, modern website with your services, photos of real work, and customer reviews tells a visitor one thing: this business is serious. Social media profiles help, but a profile is rented space — your website is property you own.",
      },
      { kind: "h2", text: "2. Your business stays open 24/7" },
      {
        kind: "p",
        text: "Your shop may close at night, but your website does not. Customers can view your services, check your prices, and send an inquiry at midnight. With WhatsApp buttons and a contact form, every visit can become a conversation — even while you sleep.",
      },
      { kind: "h2", text: "3. It answers questions before customers ask" },
      {
        kind: "p",
        text: "How much does it cost? Where are you located? Do you offer this service? A good website answers these questions upfront. That means fewer repetitive messages for you, and faster decisions for your customers.",
      },
      { kind: "h2", text: "4. Google sends you customers who are already looking" },
      {
        kind: "p",
        text: "When someone searches for a service in their city, Google shows them websites, not social media posts. A website optimized for search puts your business in front of people at the exact moment they want to buy. This is why businesses with websites keep getting inquiries long after their social media posts stop reaching people.",
      },
      { kind: "h2", text: "5. It makes your other marketing work harder" },
      {
        kind: "p",
        text: "Every Instagram post, every ad, every business card should send people somewhere. If that somewhere is a professional website with a clear booking or contact step, more of those visitors become customers. Without it, attention leaks away.",
      },
      { kind: "h2", text: "What every business website should include" },
      {
        kind: "list",
        items: [
          "A clear description of your services",
          "Photos of your real work",
          "Customer reviews",
          "A WhatsApp button and a simple contact form",
          "Your location and opening hours",
          "Fast loading on mobile phones",
        ],
      },
      { kind: "h2", text: "The bottom line" },
      {
        kind: "p",
        text: "A website does not replace your work — it multiplies it. It takes the quality you already deliver and shows it to more people, day and night. If your business still runs on social media alone, you are leaving customers on the table.",
      },
      {
        kind: "p",
        text: "At CRAFTLOGIC, we build fast, modern business websites — and we start with a free homepage concept, so you can see the design before you commit to anything. If you want more customers finding you online, that is the first step.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function getAllPosts(): Post[] {
  return [...POSTS].sort((a, b) => (a.published < b.published ? 1 : -1));
}
