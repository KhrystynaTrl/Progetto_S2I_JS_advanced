require("./scss/index.scss");
const api = require("./js/api.js");
const IDS = [];
const buttonLoadMore = document.getElementById("buttonLoadMore");
async function start() {
  IDS.push(...(await api.getAllNews()));

  let tenNews = await api.showTenNews(IDS);

  for (let news of tenNews) {
    createItem(news);
  }
}

start();

function createItem(news) {
  const UL = document.getElementById("ulNews");

  let li = document.createElement("li");

  let divListGroup = document.createElement("div");
  divListGroup.classList = "list-group";

  let divListGroupItem = document.createElement("div");
  divListGroupItem.classList = [
    "list-group-item",
    "list-group-item-action",
  ].join(" ");

  let divInner = document.createElement("div");
  divInner.classList = ["d-flex", "w-100", "justify-content-between"].join(" ");

  let h5 = document.createElement("h5");
  h5.classList = "mb-1";
  h5.innerText = news.title;

  let smallClass = document.createElement("small");
  smallClass.classList = "text-body-secondary";
  smallClass.innerText = getDateByMs(news.time);

  let p = document.createElement("p");
  p.classList = "mb-1";

  let a = document.createElement("a");
  a.classList = "linkNews";
  a.target = "_blank";
  a.href = news.url;
  a.innerText = news.url;

  divListGroupItem.addEventListener("click", () =>
    window.open(news.url, "_blank")
  );
  p.appendChild(a);

  divInner.append(h5, smallClass);
  divListGroupItem.appendChild(divInner);
  divListGroupItem.appendChild(p);
  divListGroup.append(divListGroupItem);
  li.append(divListGroup);
  UL.append(li);
}

function getDateByMs(ms) {
  const date = new Date(ms * 1000);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  let hh = date.getHours();
  const mm = date.getMinutes();

  const ampm = hh >= 12 ? "PM" : "AM";
  hh = hh % 12;
  hh = hh === 0 ? 12 : hh;

  return `${month.toString().padStart(2, "0")}/${day
    .toString()
    .padStart(2, "0")}/${year} - ${hh.toString().padStart(2, "0")}:${mm
    .toString()
    .padStart(2, "0")} ${ampm}`;
}

buttonLoadMore.addEventListener("click", async () => {
  let newsmore = await api.showTenNews(IDS);

  for (let news of newsmore) {
    createItem(news);
  }
});
