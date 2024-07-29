import { readItem, readItems } from "@directus/sdk";
import directus from "./directus";

async function getGlobals() {
  return directus.request(readItem("globals", 1));
}

async function getSocials() {
  return directus.request(readItem("socials", 1));
}

async function getFaq() {
  return directus.request(readItem("faq", 1));
}

async function getReviews() {
  return directus.request(
    readItems("reviews", {
      limit: 3,
      status: "published",
      sort: ["-date_created"],
    })
  );
}

async function getLecturers() {
  return directus.request(
    readItems("lecturers", {
      limit: 6,
      status: "published",
      sort: ["-date_created"],
      fields: ["name", "avatar", "language", "languagecode", "slug"],
    })
  );
}

async function getLanguages(limit = 100) {
  return directus.request(readItems("languages", {
    limit,
    // deep: { lecturers: { _limit: 3 } },
    // TODO: Figure out how to max 3 lecturers per language 
  }));
}

async function getCoursesFaq() {
  return directus.request(readItems("courses_faq"));
}

export {
  getGlobals,
  getSocials,
  getFaq,
  getReviews,
  getLecturers,
  getLanguages,
  getCoursesFaq,
};
