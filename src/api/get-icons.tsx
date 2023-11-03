import axios from "axios";
import { faker } from "@faker-js/faker";
import mockData from "@/utils/mock-data.json";

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

export function getRandomElementsFromArray(arr: Array<any>, n: number) {
  return arr.sort(() => 0.5 - Math.random()).slice(0, n);
}

export const getBusinessIcons = (industry: string, quantity: number = 12) => {
  if (!industry) {
    return;
  }
  const icons = mockData.icons;

  const selectedIcons = getRandomElementsFromArray(icons, quantity);

  return selectedIcons;
};
