export default {
  siteUrl: "https://lingolab.sk",
};

export function getImageUrl(image, name) {
  return image
    ? process.env.BACKEND_URL + "/assets/" + image
    : `https://ui-avatars.com/api/?name=${name}&background=random`;
}
