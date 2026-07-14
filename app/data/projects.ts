export type Project = {
  title: string;
  desc: string;
  image?: string;
  icons: string[];
  liveUrl?: string;
  slug: string;
  category: "web" | "code";
  placeholder?: boolean;
  role?: string;
  problem?: string[];
  solution?: string[];
  result?: string[];
};

export type CurrentProject = {
  title: string;
  desc: string;
  tags?: string[];
};

export const currentProjects: CurrentProject[] = [
  {
    title: "Webflow Class Optimizer",
    desc: "Building a tool that analyzes a Webflow site and recommends class optimizations, following Finsweet's Client-First naming conventions.",
    tags: ["Webflow", "Client-First"],
  },
  {
    title: "Chess Variant Multiplayer",
    desc: "Adding WebSockets to the custom chess variant for real time multiplayer matches.",
    tags: ["WebSockets", "JavaScript"],
  },
];

export const projects: Project[] = [
  {
    title: "KKG Accountancy",
    desc: "Customized a Webflow template into a premium site for an e-commerce tax accounting firm, with a custom blog template built for granular styling control.",
    image: "/images/kkg-accountancy.png",
    icons: [
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/68fd46461596d44ee42b1926_Mark_Logo_Blue.svg",
    ],
    liveUrl: "https://kkgaccountancy.com",
    slug: "kkg-accountancy",
    category: "web",
    role: "Design & Development",
    problem: [
      "Karl Camden, founder of KKG Accountancy, needed a site for his e-commerce tax accounting business. The site couldn't just look good, it had to communicate a premium feel and brand that matched the trust an accounting firm needs to earn, and it needed to actually convert visitors into customers rather than just sit there looking nice.",
    ],
    solution: [
      "I customized a Webflow template to fit KKG's brand and premium positioning rather than building from a blank canvas, which let me focus the effort on the details that make a site feel high end, typography, spacing, imagery, and conversion focused CTAs, instead of rebuilding structural basics that were already solid.",
      "I also built out a custom blog template from scratch. Webflow's default CMS blog templates are fairly rigid, so I pushed the CMS to its limits to get granular control over styling within individual blog posts, giving KKG far more flexibility in how content is presented than a standard Webflow blog setup allows.",
    ],
    result: [
      "KKG Accountancy came away with a premium, credible looking site built to convert visitors into clients, along with a custom blog system that gives them much more styling control over their content than an out of the box Webflow blog would allow.",
    ],
  },
  {
    title: "AirBnB Website",
    desc: "Designed a website for an Airbnb in Relume and Figma, developing the final build in Webflow. Clear CTAs on the site boosted bookings.",
    image: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/68bc7ab875351f8186049991_Screenshot%202025-09-06%20141417.jpg",
    icons: [
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696bc911f363a8a547158ebf_relume-108.png",
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa94bb3e20271ac6542a_figma-108.png",
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/68fd46461596d44ee42b1926_Mark_Logo_Blue.svg",
    ],
    liveUrl: "https://blueoasishome.com",
    slug: "airbnb-website",
    category: "web",
    role: "Design & Development",
    problem: [
      "The client owns a local Airbnb and had no presence outside of Airbnb and VRBO. Anyone not already browsing those platforms would never come across the property. They wanted a site of their own that they could confidently share and be proud of, but they also didn't want to depend on a developer for every small update, like swapping a photo or fixing a typo. They were also thinking ahead to adding direct booking down the line, so the site needed to support that eventually.",
    ],
    solution: [
      "I built a simple 5 page Webflow site structured around Finsweet's Client-First naming conventions. Client-First doesn't add any functional components on its own, it's a naming and structuring standard for classes, so I used it purely to keep the class list predictable and easy to navigate in the Webflow Designer. That matters most for a client who plans to make their own edits later, since consistent naming means they're not hunting through a mess of auto generated class names to find what they want to change.",
      "There's no CMS collection involved. Every page is static, built directly in the Designer, since a 5 page site for a single property doesn't need the overhead of a CMS structure. All the interactions on the site are native Webflow interactions, hover states, scroll triggers, and basic transitions, with no custom JavaScript. That kept the build fast and kept future maintenance simple, since the client (or another developer down the line) never has to touch code to make a visual change.",
    ],
    result: [
      "The client came away with a clean, easy to navigate site that gives them a real presence beyond Airbnb and VRBO. It's simple for them to view and edit, and the flat structure (no CMS, no custom code) means there's nothing fragile that could break with a small content update. It's also set up to grow with the business if they choose to add direct booking in the future.",
    ],
  },
  {
    title: "Chess Variant",
    desc: "A custom chess variant built from scratch with vanilla HTML, CSS, and JavaScript, including custom rule logic.",
    image: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/69704868a1e2096f6df40cfc_chess%20variant%20thumb.avif",
    icons: [
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa945dd993880c814bff_html-108.png",
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa9441662fa6f43403f6_css-108.png",
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa9485929da6db91353d_js-108.png",
    ],
    slug: "chess-variant",
    category: "code",
    role: "Development",
    problem: [
      "I wanted to build something that pushed me past typical web dev work, a project with real logic complexity instead of just layout and styling. Standard chess didn't feel like enough of a challenge on its own, so I set out to build a variant with rules that don't exist in any chess engine or library, meaning I couldn't lean on existing chess logic and had to write all the rules myself from scratch.",
    ],
    solution: [
      "The board state is represented as a 2D array, with each cell holding either null (empty) or a piece object. That's the source of truth for the entire game, everything else, rendering, validation, movement, reads from and writes to that array.",
      "The part that makes this variant different is that both the pieces and the board itself can move, and pieces can jump over gaps in the board. The jump logic works by looping in the direction the piece is already allowed to move in (so a rook still moves along ranks and files, a bishop still moves diagonally, etc.), and checking each square along that path for whether it's active, meaning it exists and isn't an empty gap. If the loop hits an active square beyond a gap, the piece is allowed to jump directly to it, skipping over the empty space in between. That let me reuse each piece's normal movement direction logic rather than writing a whole separate rule set for jumping.",
      "The board itself is rendered with the DOM, a grid of divs rather than canvas, which made it straightforward to bind click and drag handlers directly to each square and piece without maintaining a separate coordinate to pixel mapping.",
      "Every move runs through validation at the point of piece drop. When a piece is released on a square, the game checks the move against that piece's legal move set (including the gap jump logic) before committing the change to the array and re rendering the board. Illegal drops get rejected and the piece snaps back.",
      "Right now it's built for a single player or two people sharing one screen, since there's no networking layer yet. The plan going forward is to add WebSockets so two people can play against each other remotely in real time.",
    ],
    result: [
      "A fully playable, working variant with custom rule logic built entirely from the ground up, no chess library, no shortcuts. The 2D array plus direction based jump checking turned out to be a clean way to handle a rule that doesn't exist anywhere else, and it's a solid proof of concept for the harder engineering problem still ahead: adding real time multiplayer with WebSockets.",
    ],
  },
  {
    title: "Travel Enlightened",
    desc: "Maintain and grow Travel Enlightened's website, adding new content sections and updating CMS components to improve functionality and content management.",
    image: "/images/travel-enlightened.png",
    icons: [
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/68fd46461596d44ee42b1926_Mark_Logo_Blue.svg",
    ],
    liveUrl: "https://www.travel-enlightened.com",
    slug: "travel-enlightened",
    category: "web",
    role: "Ongoing Maintenance & Development, Contract via Marli Creative",
    problem: [
      "Travel Enlightened needed ongoing help keeping their site current and functional as their offerings grew. Rather than a one time build, this has been ongoing maintenance and development work, adding new content structures and improving how their CMS handles existing content. This work was contracted through Marli Creative.",
    ],
    solution: [
      "I updated and expanded their Experiences, Destinations, and Stays CMS collections, which are the core content types that drive most of the site's dynamic pages. On top of that, I implemented Finsweet's CMS Combine and CMS Filter features. CMS Combine lets you merge multiple CMS collections into a single filterable, sortable list, which is useful when a site has related content types (like Experiences and Stays) that visitors want to browse together rather than as separate isolated lists. CMS Filter then gives visitors a way to narrow that combined list down by category, location, or whatever attributes matter most for planning a trip.",
      "Alongside the CMS work, I added roughly three unique new sections to the site, each built to fit into the existing design system while introducing new content types or layouts that didn't exist before.",
    ],
    result: [
      "The site now has a more flexible content structure that can grow without needing constant developer intervention. Visitors get a better way to browse and filter Experiences, Destinations, and Stays together, and the new sections give the client more ways to present their offerings.",
    ],
  },
  {
    title: "The Writing Agency",
    desc: "Maintain and enhance The Writing Agency's website, building new front-end sections and making targeted improvements to the CMS.",
    image: "/images/the-writing-agency.png",
    icons: [
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/68fd46461596d44ee42b1926_Mark_Logo_Blue.svg",
    ],
    liveUrl: "https://thewritingagency.co.uk",
    slug: "the-writing-agency",
    category: "web",
    role: "Ongoing Maintenance & Development, Contract via Marli Creative",
    problem: [
      "Similar to Travel Enlightened, this has been an ongoing engagement rather than a single build. The Writing Agency needed a better way to present their case studies and needed several smaller front end sections built out or refined, along with some custom code already running on the site. This work was contracted through Marli Creative.",
    ],
    solution: [
      "The main piece of work was a case study template built directly in their CMS. Instead of hand building a new static page every time they wanted to showcase a project, the case study template lets them create a new CMS item, fill in the relevant fields, and have it automatically render as a fully designed case study page matching the rest of the site. That's a much more scalable system for an agency that regularly adds new work to their portfolio.",
      "Beyond the case study template, I built and updated several smaller sections across the site and made updates to some existing custom code that was already running on the site, adjusting it to work correctly alongside the new CMS structure.",
    ],
    result: [
      "The Writing Agency now has a repeatable system for publishing new case studies without needing a developer to build a new page from scratch every time. The smaller section updates and custom code adjustments keep the rest of the site consistent and working correctly alongside the new template.",
    ],
  },
  {
    title: "The Uniform Company",
    desc: "Migrated a Sellers Commerce store to Webflow, preserving SEO through bulk redirects while rebuilding around a CMS driven catalog.",
    image: "/images/the-uniform-company.png",
    icons: [
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/68fd46461596d44ee42b1926_Mark_Logo_Blue.svg",
    ],
    liveUrl: "https://theuniformcompany.net",
    slug: "the-uniform-company",
    category: "web",
    role: "Design & Development",
    problem: [
      "The Uniform Company was migrating off Sellers Commerce onto Webflow. The priority was making sure the migration didn't tank their existing SEO, while also simplifying and modernizing a site that needed to clearly show off what's currently in stock.",
    ],
    solution: [
      "I rebuilt the site in Webflow using a template as the design foundation, then customized it into a simple 5 page site. Product data lives in Webflow's CMS, which gives the client an easy way to update what's in stock without touching code.",
      "The trickiest part of this migration was SEO preservation. Moving platforms means old URLs from the Sellfy site no longer exist, so I set up bulk redirects through Cloudflare to map old URLs to their new Webflow equivalents, preserving link equity and preventing a wave of 404s from tanking search rankings during the transition.",
      "To actually build out the redirect map and migrate product content, I wrote custom Python scraping scripts to pull product data and URL structures from the old Sellers Commerce site, since there wasn't a clean export path that gave me everything I needed in one place. That data then fed both the Webflow CMS setup and the Cloudflare redirect rules.",
    ],
    result: [
      "The client ended up with a simple, modern 5 page site that clearly shows what's currently in stock, without losing the SEO equity built up on their old platform. The redirect mapping means existing links and search rankings carried over cleanly instead of resetting to zero after the migration.",
    ],
  },
  {
    title: "Guiding Light CR",
    desc: "Optimized a Webflow site's mobile and desktop speed using a Cloudflare Worker to serve critical CSS while deferring render blocking scripts, taking PageSpeed from 55 to 90+. Also built three landing pages optimized for speed and conversion.",
    image: "/images/guiding-light-cr-pagespeed.png",
    icons: [
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/68fd46461596d44ee42b1926_Mark_Logo_Blue.svg",
    ],
    liveUrl: "https://guidinglightcr.com",
    slug: "guiding-light-cr",
    category: "web",
    role: "Performance Optimization & Development",
    problem: [
      "Guiding Light CR's Webflow site was slow on both mobile and desktop. Render blocking scripts and unoptimized CSS delivery were dragging their PageSpeed score down to 55, which matters even more here since their service pages were actively receiving paid traffic from Google Ads. Slow load times on a page you're paying to send traffic to directly hurts conversion rate and wastes ad spend.",
    ],
    solution: [
      "I built a Cloudflare Worker that sits in front of the site and rewrites the HTML response on the fly for specific pages, the homepage and a few landing pages, before it reaches the browser. It only triggers on GET requests where the Accept header includes text/html and the response's content type is also text/html, so it never touches non HTML requests like images, fonts, or API calls, and anything outside the targeted paths passes straight through untouched.",
      "The core of it is a critical CSS injector. Each targeted page has its own handwritten critical CSS string tailored to that page's above the fold layout, covering the nav, hero section, fonts, and base resets. The Worker uses HTMLRewriter to prepend a critical CSS style block directly into the head, along with preload tags for the hero image with the correct srcset and sizes per page, and fetchpriority set to high on the LCP image specifically. That means the browser can paint the visible, above the fold content immediately using inlined CSS instead of waiting on Webflow's full external stylesheet to download and parse first.",
      "Once that critical CSS is inlined, the actual Webflow stylesheet gets deferred. Every stylesheet link tag gets rewritten into the preload as style then swap to stylesheet pattern, with a noscript fallback for anyone without JS. That stylesheet still loads, just after the critical content is already painted, instead of blocking the initial render.",
      "Scripts get handled with more nuance than a blanket defer. Webflow's own core JS and a couple of proxied third party scripts are held back entirely until the user actually interacts with the page, listening for mouse movement or touch, with a timeout fallback (500ms to 2000ms depending on the script) so they still load even if the visitor never moves their mouse. reCAPTCHA is deferred until the user clicks or focuses into a form field, since it's really only needed once someone's about to submit the contact form. jQuery and CloudFront hosted scripts get a straightforward defer attribute, while Finsweet and jsDelivr scripts get async instead, since those don't depend on DOM order the same way. Anything left unflagged still gets a defer attribute by default, so nothing render blocks unless it's explicitly supposed to run early. Google Maps scripts get the same defer treatment through a separate handler, since it's rarely part of the initial critical path.",
    ],
    result: [
      "PageSpeed score jumped from 55 to 90+ on both mobile and desktop. Since the pages affected were the ones actively receiving Google Ads traffic, the speed improvement translates directly into a better user experience for paid visitors and a stronger foundation for ad conversion rates.",
    ],
  },
  {
    title: "14 Acres",
    desc: "Built a custom cash tracking web app for 14 Acres Winery, with an HTML, CSS, and JS frontend and a Supabase backend, letting staff count and register the till each night, log overages, and track cash across the whole property.",
    image: "/images/14-acres.png",
    icons: [
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa945dd993880c814bff_html-108.png",
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa9441662fa6f43403f6_css-108.png",
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa9485929da6db91353d_js-108.png",
    ],
    slug: "14-acres",
    category: "code",
    role: "Full-Stack Development",
    problem: [
      "14 Acres Winery needed a secure, reliable way for staff to count and register the cash till each night, log overages or shortages, and track cash across the whole property, all while integrating with their existing Clover POS system rather than working around it.",
    ],
    solution: [
      "I built a custom web app with an HTML, CSS, and JS frontend backed by Supabase. The database schema centers on tables for till counts, overage records, tips, and employees, with employee accounts protected by passwords. There are two distinct interfaces, an employee panel and an admin panel, each password protected separately, so staff can log their nightly counts while managers get a separate view with broader access and oversight.",
      "The system integrates directly with Clover for point of sale data. Each night, the app automatically calculates the expected cash on hand by taking the starting cash float, adding Clover's recorded cash sales, and subtracting any Clover cash refunds. That expected number gets compared against what staff actually count in the till. Anything over $300 off from that expected amount gets automatically flagged as an overage, and the app calculates exactly which bills and denominations make up that overage rather than just showing a raw dollar difference.",
      "All of that logic lives in a custom API layer, with sensitive configuration like Clover credentials and Supabase connection details handled through environment variables rather than hardcoded anywhere in the app. Data access is read and write on demand rather than real time subscriptions, since a nightly till count doesn't need live updates the way a chat app or dashboard might, a straightforward request/response model was the simpler and more appropriate choice here.",
    ],
    result: [
      "Employees and managers now have a secure, consistent daily workflow for registering and tracking cash across the whole winery. The automatic expected cash calculation and overage detection means discrepancies get caught and quantified immediately instead of someone manually reconciling Clover reports against a paper till count after the fact.",
    ],
  },
];
