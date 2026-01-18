import { DefaultSeo } from "next-seo";
import { OG_URL, SITE_LINK, SITE_NAME } from "@/constant";

const BaseSeo = () => {
  return (
    <DefaultSeo
      title={SITE_NAME}
      description={SITE_NAME}
      twitter={{
        cardType: "summary_large_image",
      }}
      openGraph={{
        title: SITE_NAME,
        description: SITE_NAME,
        type: "website",
        locale: "en_IN",
        url: SITE_LINK,
        site_name: SITE_NAME,
        images: [
          {
            url: OG_URL,
            width: 300,
            height: 300,
            alt: SITE_NAME,
          },
        ],
      }}
    />
  );
};

export default BaseSeo;
