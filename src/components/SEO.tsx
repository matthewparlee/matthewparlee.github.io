import { Helmet } from "react-helmet-async";

const SITE_URL = "https://matthewparlee.com";
const DEFAULT_TITLE = "Matthew Parlee — Senior Learning Experience Designer";
const DEFAULT_DESCRIPTION =
  "Portfolio of Matthew Parlee, a Senior Learning Experience Designer with 10+ years of experience crafting impactful learning solutions.";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SEOProps {
  title?: string;
  description?: string;
  path: string;
  image?: string;
  type?: string;
  jsonLd?: Record<string, unknown>;
}

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image = OG_IMAGE,
  type = "website",
  jsonLd,
}: SEOProps) => {
  const fullTitle = title ? `${title} — Matthew Parlee` : DEFAULT_TITLE;
  const canonical = `${SITE_URL}${path}`;

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matthew Parlee",
    url: SITE_URL,
    jobTitle: "Senior Learning Experience Designer",
    sameAs: ["https://www.linkedin.com/in/matthew-parlee-a7bb27120"],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(jsonLd ?? defaultJsonLd)}</script>
    </Helmet>
  );
};

export default SEO;
