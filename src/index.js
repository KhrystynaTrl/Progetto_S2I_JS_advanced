require("./scss/index.scss");
const api = require("./js/api.js");

async function start() {
  let resultAllNews = await api.getAllNews();

  let tenNews = await api.showTenNews(resultAllNews);

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

  if (news.url) {
    let a = document.createElement("a");
    a.classList = "linkNews";
    a.target = "_blank";
    a.href = news.url;
    a.innerText = news.url;

    divListGroupItem.addEventListener("click", () =>
      window.open(news.url, "_blank")
    );
    p.appendChild(a);
  }

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

  return `${month.toString().padStart(2, "0")}/${day
    .toString()
    .padStart(2, "0")}/${year}`;
}

/* 
<li>
          <div class="list-group">
            <div class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">
                  E-4B “Doomsday Plane” Just Made Unusual Visit to Tonopah Test
                  Range Airpor.
                </h5>
                <small class="text-body-secondary">3 days ago</small>
              </div>
              <p class="mb-1">
                <a
                  target="_blank"
                  class="linkNews"
                  href="https://www.thedrive.com/the-war-zone/41669/e-4b-doomsday-plane-just-made-highly-unusual-visit-to-secretive-tonopah-test-range-airport"
                  >https://www.thedrive.com/the-war-zone/41669/e-4b-doomsday-plane-just-made-highly-unusual-visit-to-secretive-tonopah-test-range-airport</a
                >
              </p>
            </div>
          </div>
        </li> */
