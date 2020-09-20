import axios from "axios";
import cheerio from "cheerio";

export const getContent = async (url: string) => {
  const data = await axios
    .get(`https://cors-anywhere.herokuapp.com/${url}`)
    .then((res) => res.data)
    .catch((e) => null);
  if (data === null) {
    return null;
  }
  const $ = cheerio.load(data);
  const bodyList = $(".cnnBodyText")
    .text()
    .replace("ETTHIS", "ET.  \nTHIS")
    .replace(/\.\s+/gm, ".aaaaaa")
    .replace(/\s+/gm, " ")
    .replace(/.aaaaaa/gm, ".\n")
    .replace("THIS IS A RUSH TRANSCRIPT.", "")
    .replace("THIS COPY MAY NOT BE IN ITS FINAL FORM AND MAY BE UPDATED.", "")
    .split("\n");
  delete bodyList[0];
  return bodyList;
};
