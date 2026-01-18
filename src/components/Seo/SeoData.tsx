import { NextSeo } from "next-seo";
import { SITE_LINK, OG_URL } from "@/constant";

type SeoDataProps = {
  seoTitle: string;
  seoDescription: string;
  url: string;
  metaImage?: string;
  metaImageAlt?: string;
  ogType?: string;
  publishDate?: string;
};

const SeoData = ({
  seoTitle,
  seoDescription,
  url,
  metaImage,
  metaImageAlt,
  ogType,
  publishDate,
}: SeoDataProps) => {
  const SEO = {
    title: seoTitle,
    description: seoDescription,
    canonical: `${SITE_LINK}${url}`,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `${SITE_LINK}${url}`,
      type: ogType,
      publishedTime: publishDate,
      images: [
        {
          url: metaImage || OG_URL,
          alt: metaImageAlt || seoTitle,
        },
      ],
    },
  };

  return <NextSeo {...SEO} />;
};

export default SeoData;
