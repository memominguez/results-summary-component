const listEl = document.querySelector("ul");

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      listEl.insertAdjacentHTML(
        "beforeend",
        `
            <li>
            <div class="item-left">
              <img src=${item.icon} alt=${item.category} />
              <p class="category-red">${item.category}</p>
            </div>
            <div class="item-right">
              <p><span class="score-span">${item.score} </span><span>/ 100</span></p>
            </div>
          </li>
            `
      );
    });
  });
