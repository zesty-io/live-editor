export * from "./dummydata"
import zestyName from "../assets/zestyname.svg"
import zestyLogo from "../assets/zesty-io-logo.svg"

export const dummycontent = {
   title: "Mat",
   content:
      "\u003Cp\u003EMUI is a lightweight CSS framework that follows Google\u0027s Material Design guidelinesc\u003C/p\u003E",
   meta: {
      type: "item",
      model_name: "homepage",
      model_alternate_name: "Homepage",
      zuid: "7-f4f99e80ec-pq3q7s",
      createdAt: "2022-05-05 16:20:15",
      updatedAt: "2022-05-05 16:20:15",
      listed: "1",
      version: "8",
      locale: {
         id: "1",
         name: "English (United States)",
         code: "en-US",
         default: "1",
         active: "1",
         enabled: "1",
      },
      model: {
         type: "model",
         zuid: "6-8eb48d80ec-8ggrzt",
         name: "homepage",
         label: "Homepage",
         resourceURI:
            "https://qzp3zx5t-dev.webengine.zesty.io/-/instant/6-8eb48d80ec-8ggrzt.json",
      },
      web: {
         url: "https://qzp3zx5t-dev.webengine.zesty.io/",
         uri: "/",
         fragment: "zesty_home",
         canonical_tag_mode: "1",
         sitemap_priority: "-1.0",
         sitemap_last_updated: "2022-05-05 16:20:15",
         canonical_query_param_whitelist: null,
         canonical_tag_custom_value: null,
         seo_link_text: "Homepage",
         seo_meta_title: "Homepage",
         seo_meta_description: "",
         seo_meta_keywords: null,
      },
   },
}

// list of tabs to render
export const tabList = [
   { id: 1, label: "Edit", value: "Edit" },
   { id: 2, label: "SEO", value: "SEO/Meta" },
   { id: 3, label: "Navigator", value: "Navigator" },
   { id: 4, label: "Health", value: "Health" },
   { id: 5, label: "Code Helper", value: "Code Helper" },
   { id: 6, label: "JSON", value: "JSON" },
]

export const urls = {
   parselyDocs:
      "https://www.zesty.io/docs/services/web-engine/introduction-to-parsley/README/",
   nextJsDocs: "https://nextjs.org/docs",
   zestyBrandLogo: "https://brand.zesty.io/zesty-io-logo.svg",
   zestyBrandLogoMid:
      "https://storage.googleapis.com/brand-assets.zesty.io/zesty-io-app-icon-transparent.png",
}

export const assets = {
   zestyLogo,
   zestyName,
}
