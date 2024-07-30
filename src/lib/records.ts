import { readItem, readItems, readSingleton } from "@directus/sdk";
import directus from "./directus";

async function getGlobals() {
  return directus.request(readSingleton("globals"));
}

async function getSocials() {
  return directus.request(readSingleton("socials"));
}

async function getFaq() {
  return directus.request(readSingleton("faq"));
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
  return directus.request(
    readItems("languages", {
      limit,
      fields: [
        "type",
        "slug",
        "online",
        "inperson",
        "name",
        "code",
        {
          lecturers: [
            {
              lecturers_id: ["name", "avatar", "slug"],
            }
          ],
        }
      ],
      deep: { lecturers: { _limit: 3 } },
    })
  );
}

async function getCoursesFaq() {
  return directus.request(readItems("courses_faq"));
}

async function getLatestPosts() {
  return directus.request(readItems("posts", {
    limit: 3,
    status: "published",
    sort: ["-date_created"],
    fields: ["title", "slug", "description", "date_created", "cover", "user_created"],
  }));
}

export {
  getGlobals,
  getSocials,
  getFaq,
  getReviews,
  getLecturers,
  getLanguages,
  getCoursesFaq,
  getLatestPosts,
};
