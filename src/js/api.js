const axios = require("axios");

const BASEURL = new URL(process.env.HACKER_NEWS_URL);

async function getAllNews() {
  try {
    let allNews = await axios.get(new URL("newstories.json", BASEURL));
    if (allNews.status >= 400) {
      throw new Error(
        `Chiamata con errore ${allNews.status} - ${allNews.statusText}`
      );
    }
    return allNews.data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

async function getNews(id) {
  try {
    let news = await axios.get(new URL(`item/${id}.json`, BASEURL));
    if (news.status >= 400) {
      throw new Error(
        `Chiamata con errore ${news.status} - ${news.statusText}`
      );
    }
    return news.data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

let i = 0;
async function showTenNews(ids) {
  let tenNewsArray = [];
  for (i; i < ids.length; i++) {
    if (tenNewsArray.length == 10) {
      break;
    }
    let news = await getNews(ids[i]);
    if (news == null || !news.url) {
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
