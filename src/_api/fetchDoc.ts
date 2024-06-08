
import { PAGE } from "../_graphql/pages";
import { POST } from "../_graphql/posts";
import { SERVICE } from "../_graphql/_services";
import { PROJECT } from "../_graphql/projects";
import { Config } from "../utils/payload-types";

const queryMap = {
  pages: {
    query: PAGE,
    key: "Pages",
  },
  posts: {
    query: POST,
    key: "Posts",
  },
  projects: {
    query: PROJECT,
    key: "Projects",
  },
  services: {
    query: SERVICE,
    key: "Services",
  },
};

export const fetchDoc = async <T>(args: {
  collection: keyof Config["collections"];
  slug?: string;
  id?: string;
  draft?: boolean;
  locale?: string;
}): Promise<T> => {
  const { collection, slug, draft, locale } = args || {};

 

 
  if (!queryMap[collection])
    throw new Error(`Collection ${collection} not found`);

 

  const doc: T = await fetch(`http://127.0.0.1:3000/api/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

    },
    cache: "no-store",
    body: JSON.stringify({
      query: queryMap[collection].query,
      variables: {
        slug,
        draft,
        locale,
      },
    }),
  })
    ?.then((res) => {


    return  res.json()})
    ?.then((res) => {
      if (res.errors)
        console.log(res.errors);
        
        throw new Error(res?.errors?.[0]?.message ?? "Error fetching doc");
      return res?.data?.[queryMap[collection].key]?.docs?.[0];
    });

  return doc;
};
