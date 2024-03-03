const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

const listEl = document.querySelector("ul");

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
