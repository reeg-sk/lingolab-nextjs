const siteMetadata = {
  siteUrl: "https://lingolab.sk",
};

export default siteMetadata;

export function getImageUrl(image, name) {
  return image
    ? "https://cdn.lingolab.sk/uploads/" + image + ".jpg"
    : `https://ui-avatars.com/api/?name=${name}&background=random&format=png`;
}
