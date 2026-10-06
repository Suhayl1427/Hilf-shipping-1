// All site copy lives here. Used verbatim from the Hilf Shipping content inventory.

export const meta = {
  title: "Hilf Shipping - Dry Bulk Chartering & Shipping",
  description:
    "Hilf Shipping supports worldwide movement of dry bulk commodities through voyage charter, time charter and commercial management services.",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Business", href: "#business" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact Us", href: "#contact" },
];

export const hero = {
  kicker: "Dry bulk ship operator based in Dubai, UAE",
  title: "Dry Bulk Chartering With Ethical Global Execution",
  lead: "Hilf Shipping supports worldwide movement of dry bulk commodities through voyage charter, time charter and commercial management services.",
  primary: { label: "Explore Our Business", href: "#business" },
  secondary: { label: "Speak to Chartering", href: "#contact" },
};

export const about = {
  title: "About Hilf Shipping",
  p1: "HILF Shipping endeavors to surpass expectations in all facets of our operations, from vessel chartering to diverse shipping services. Our commitment ensures seamless, cost-effective, and high-standard solutions for dry bulk commodities across the globe.",
  p2: "Headquartered in Dubai, UAE, our team brings decades of maritime expertise, combining commercial judgment, operational discipline, and sustainable thinking to support clients across global shipping markets.",
  pillars: [
    "Industry Expertise",
    "Global Operations",
    "Innovative Solutions",
    "Customer-Centric Approach",
  ],
  image: { src: "/images/about/about.png", alt: "Cargo ship at sea" },
};

export const business = {
  title: "Our Business",
  intro:
    "Dry bulk chartering is our core business, backed by practical shipping services for commodity producers, traders, importers, exporters, mills, power companies, and industrial end-users.",
  services: [
    {
      title: "Dry Bulk Cargoes",
      text: "We handle limestone, gypsum, dolomite, iron ore, coal, minerals, grains, fertilizers, agri-products, bauxite, alumina, cement, and aggregates worldwide.",
      commodities: [
        "limestone",
        "gypsum",
        "dolomite",
        "iron ore",
        "coal",
        "minerals",
        "grains",
        "fertilizers",
        "agri-products",
        "bauxite",
        "alumina",
        "cement",
        "aggregates",
      ],
    },
    {
      title: "Voyage Charter",
      text: "Structured voyage charter solutions tailored to cargo profile, route economics, and operational requirements.",
    },
    {
      title: "Time Charter",
      text: "Flexible time charter coverage for clients seeking dependable tonnage, commercial clarity, and controlled execution.",
    },
    {
      title: "Commercial Management",
      text: "Commercial management support that aligns vessel employment, cargo timing, and market opportunity with client objectives.",
    },
    {
      title: "Client Coverage",
      text: "We support raw material producers, agricultural traders, importers, exporters, steel mills, power companies, and industrial end-users.",
    },
  ] as { title: string; text: string; commodities?: string[] }[],
};

export const whyUs = {
  title: "Why Choose Us",
  intro:
    "Operationally aware chartering, transparent communication, and a team built to deliver dependable outcomes across dry bulk trades.",
  items: [
    { word: "Proven", text: "Track record in shipping and reliable cargo execution." },
    { word: "Expert", text: "Sourcing and operational management with minimum claims." },
    { word: "Steadfast", text: "Professional, cooperative teams focused on execution quality." },
    { word: "Clear", text: "Transparent communication with real-time shipping updates." },
  ],
};

export const teams = {
  title: "Our Teams",
  intro:
    "Dedicated chartering and operations support built around disciplined execution, transparent communication, and dependable dry bulk cargo handling.",
  groups: [
    {
      name: "Pre-fixture Team",
      text: "The chartering team from the corporate profile, focused on dry bulk fixtures, market coverage, and client coordination.",
      people: [
        { name: "HAMEED ABDULLAH", role: "Managing Director" },
        { name: "MD JANA ALAM", role: "Operations Director" },
        { name: "MOHAMMED SHAMSUDEEN", role: "Chartering Manager" },
        { name: "JABIR NIZAM", role: "Assistant Chartering Manager" },
      ],
    },
    {
      name: "Post-fixture Team",
      text: "The operations team from the corporate profile, supporting smooth execution from inquiry through delivery.",
      people: [
        { name: "Akash A", role: "Operations Manager" },
        { name: "Ahmed Athif", role: "Assistant Operations Manager" },
        { name: "Ebrahim Khalil", role: "Operations Executive" },
        { name: "Kawsar Ahamed", role: "Operations Executive" },
        { name: "Younus Ahamed", role: "Senior Operations Coordinator" },
        { name: "Jahidul Hasan", role: "Senior Operations Executive" },
        { name: "Ahmed Athif", role: "Senior Operations Executive" },
        { name: "Zubair Ahmed", role: "Senior Operations Executive" },
      ],
    },
    {
      name: "Finance Team",
      text: "The finance team from the corporate profile, focused on smooth cash flow and client coordination.",
      people: [
        { name: "Mohamed Saleem", role: "HR & Finance Director" },
        { name: "Abdul Hakeem", role: "Senior Accountant" },
        { name: "Adil Mairaj", role: "Accountant" },
      ],
    },
  ],
};

export const clients = {
  title: "Our Clients",
  kicker: "Client.",
  logos: [
    { name: "Aditya Birla Global Trading", src: "/images/clients/aditya.png" },
    { name: "MGI Midgulf International Ltd", src: "/images/clients/mgi.png" },
    { name: "Tata Chemicals", src: "/images/clients/tata-chemicals.png" },
    { name: "ArcelorMittal", src: "/images/clients/ArcelorMittal.png" },
    { name: "TotalEnergies", src: "/images/clients/totalenergies.png" },
    { name: "Saint-Gobain", src: "/images/clients/Saint-Gobain.png" },
    { name: "Super Cement", src: "/images/clients/super_cement.png" },
    { name: "Stevin Rock", src: "/images/clients/sr.png" },
  ],
};

export const cargo = {
  title: "Cargo & Trade Coverage",
  intro: "Representative commodity focus areas from Hilf Shipping's dry bulk business.",
  cta: { label: "Discuss Your Cargo Program", href: "#contact" },
  items: [
    {
      tag: "Dry Bulk",
      title: "Minerals & Ores",
      text: "Commercial support for iron ore, bauxite, alumina, dolomite, limestone, gypsum, and related bulk mineral cargoes.",
      coverage: "Global trades",
      src: "/images/cargos/coal-mine.jpg",
      alt: "Minerals and ores cargo",
    },
    {
      tag: "Chartering",
      title: "Agricultural Cargoes",
      text: "Grains, fertilizers, and agri-products handled with chartering structures matched to seasonal and regional demand.",
      coverage: "Producers to traders",
      src: "/images/cargos/agri-cargo.webp",
      alt: "Agricultural cargo handling",
    },
    {
      tag: "Logistics",
      title: "Energy Commodities",
      text: "Coal and other power-sector dry bulk movements supported through commercially disciplined chartering execution.",
      coverage: "Utilities and industry",
      src: "/images/cargos/coal-yard.jpg",
      alt: "Energy commodities cargo",
    },
    {
      tag: "Dry Bulk",
      title: "Construction Inputs",
      text: "Cement, aggregates, and related construction cargoes moved with close attention to port efficiency and schedule control.",
      coverage: "Regional and long-haul",
      src: "/images/cargos/STEVEDORING.jpg",
      alt: "Construction input cargo",
    },
    {
      tag: "Chartering",
      title: "Industrial Raw Materials",
      text: "Support for steel mills, importers, exporters, and industrial end-users that depend on reliable raw material shipping.",
      coverage: "Industrial supply chains",
      src: "/images/cargos/cargo-ship-miami-harbor-web.jpg",
      alt: "Industrial raw materials shipping",
    },
    {
      tag: "Logistics",
      title: "Flexible Trade Support",
      text: "From single voyage needs to recurring cargo programs, we adapt chartering structures to commercial priorities and market conditions.",
      coverage: "Tailored engagement models",
      src: "/images/cargos/cargo-ship-miami-harbor2-web.jpg",
      alt: "Flexible trade support vessel",
    },
  ],
};

export const contact = {
  title: "Contact Us",
  intro: "Discuss chartering, cargo requirements, or shipping support with the Hilf team.",
  office: {
    label: "Office Location",
    text: "Communication Office #2007, Level 20, Tamani Arts Building, Al Asayel Street, Business Bay, Dubai, United Arab Emirates",
  },
  email: {
    label: "Email",
    display: "chartering(at)hilfshipping.com",
    href: "mailto:chartering@hilfshipping.com",
  },
  support: {
    label: "Chartering Support",
    text: "Send cargo details, laycan, and trade route requirements for a tailored response.",
  },
  mapSrc:
    "https://www.google.com/maps?q=Tamani+Arts+Building,+Al+Asayel+Street,+Business+Bay,+Dubai&output=embed",
  form: {
    name: "Name",
    email: "Email",
    message: "Message",
    check: "What is 9 + 9?",
    submit: "Send Message",
  },
};

export const footer = {
  logo: "/images/hilp-shipping-logo.jpeg",
  tagline: "Your Voyage, Our Expertise",
  text: "Dry bulk ship operator delivering chartering, shipping, and commercial management solutions across global commodity trades.",
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Business", href: "#business" },
    { label: "Contact", href: "#contact" },
  ],
  connect: ["LinkedIn", "X", "Instagram"],
  copyright: "© 2026 HILF Shipping LLC. All rights reserved.",
};
