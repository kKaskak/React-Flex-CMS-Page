import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "7u0kox4y",
  dataset: "production",
  apiVersion: "2023-06-23",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});
