const axios = require("axios");

const BASEURL = new URL(process.env.HACKER_NEWS_URL);

async function getAllNews() {
  let allNews = await axios.get(new URL("newstories.json", BASEURL));
  return allNews.data;
}

async function getNews(id) {
  let news = await axios.get(new URL(`item/${id}.json`, BASEURL));
  return news.data;
}

let i = 0;
async function showTenNews(ids) {
  let tenNewsArray = [];
  for (i; i < ids.length; i++) {
    if (tenNewsArray.length == 10) {
      break;
    }
    let news = await getNews(ids[i]);
    if (!news.url) {
      continue;
    }
    tenNewsArray.push(news);
  }
  return tenNewsArray;
}

module.exports = {
  getAllNews,
  showTenNews,
};
