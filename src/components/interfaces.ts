export type Language = {
  title: string;
  flag: string;
  price: number;
  slug: string;
  mentors: Array<{
    fullName: string;
    image: string;
  }>;
};
