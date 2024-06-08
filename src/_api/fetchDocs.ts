import type { Config } from "../utils/payload-types";
import { SERVICES } from "../_graphql/_services";
import { PAGES } from "../_graphql/pages";
import { POSTS } from "../_graphql/posts";
import { PROJECTS } from "../_graphql/projects";
import { GRAPHQL_API_URL } from "./shared";

const queryMap = {
  pages: {
    query: PAGES,
    key: "Pages",
  },
  posts: {
    query: POSTS,
    key: "Posts",
  },
  projects: {
    query: PROJECTS,
    key: "Projects",
  },
  services: {
    query: SERVICES,
    key: "Services",
  },
};

export const fetchDocs = async <T>(
  collection: keyof Config["collections"]
): Promise<T[]> => {
  const docs: T[] = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify({
      query: queryMap[collection].query,
    }),
  })
    ?.then((res) => {
      console.log(res.json());

      return res.json();
    })
    ?.then((res) => {
      if (res.errors)
        throw new Error(res?.errors?.[0]?.message ?? "Error fetching docs");
      return res?.data?.[queryMap[collection].key]?.docs;
    });
  console.log({ docs });

  return docs;
};
