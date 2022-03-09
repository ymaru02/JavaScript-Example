const container = document.getElementById("root");
const ajax = new XMLHttpRequest();
const content = document.createElement("div");

const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

function getDate(url) {
  ajax.open("GET", url, false);
  ajax.send();

  return JSON.parse(ajax.response);
}

function newsFeed() {
  const newsFeed = getDate(NEWS_URL);
  const newsList = [];

  newsList.push("<ul>");

  for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");

    newsList.push(`
    <li>
      <a href="#${newsFeed[i].id}">
        ${newsFeed[i].title} (${newsFeed[i].comments_count})
      </a>
    </li>
  `);
  }

  newsList.push("</ul>");
  container.innerHTML = newsList.join("");
}

function newDetail() {
  const id = location.hash.substr(1);

  const newsContent = getDate(CONTENT_URL.replace("@id", id));

  container.innerHTML = `
    <h1>${newsContent.title}</h1>

    <div>
      <a href="#">
        목록으로
      </a>
    </div>
  `;
}

function router() {
  const routePath = location.hash;

  if (routePath === "") {
    newsFeed();
  } else {
    newDetail();
  }
}

window.addEventListener("hashchange", router);

router();
