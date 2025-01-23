import { Helmet } from "react-helmet";

function SEO({ title, description, keywords, url }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="canonical" href={url} />
    </Helmet>
  );
}

export default SEO;
