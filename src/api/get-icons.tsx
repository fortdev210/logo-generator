import axios from "axios";
import { faker } from "@faker-js/faker";

export const getHubspotIcons = async (
  industry: string,
  page: number = 1,
  limit: number = 12
) => {
  const url = `https://www.hubspot.com/_hcms/api/bkg/v3/icons/list?industry=${industry}&limit=${limit}&page=${page}`;

  const res = await axios.get(url);
  return res.data;
};

export const getBusinessLogos = (industry: string, quantity: number = 12) => {
  if (!industry) {
    return;
  }
  const images = Array.from({ length: quantity }, () =>
    faker.image.urlLoremFlickr({
      category: "logo",
      width: 200,
      height: 200,
    })
  );
  return images;
};
