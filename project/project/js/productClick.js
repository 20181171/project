const items = document.querySelector(".product-menu-items");
const itemAll = document.querySelectorAll(".product-menu-item");
const furniture = document.querySelector(".product-items-furniture");

const bed = [
  [1, "러버마르스침대", "550,000"],
  [2, "러버미젤침대", "550,000"],
  [3, "오크그라우스침대", "1,190,000"],
  [4, "오크마르스침대", "1,090,000"],
  [5, "조명서랍침대", "786,000"],
  [6, "티파니평상침대", "700,000"],
];
const chair = [
  [1, "땅콩체어", "57,800"],
  [2, "라탄사각체어", "142,000"],
  [3, "로이체어", "170,000"],
  [4, "루나체어", "125,000"],
  [5, "샤무드체어", "139,000"],
  [6, "오크라운드체어", "169,000"],
  [7, "월넛루이암체어", "260,000"],
  [8, "포니체어", "219,000"],
];
const sofa = [
  [1, "로이소파", "2,420,000"],
  [2, "비올라카우치소파", "1,890,000"],
  [3, "오스카소파", "1,990,000"],
  [4, "펜디4인소파", "2,558,000"],
  [5, "펠레카우치소파", "2,790,000"],
];
const table = [
  [1, "누이원형테이블", "190,000"],
  [2, "리치원형테이블", "179,000"],
  [3, "바네사4인테이블", "350,000"],
  [4, "아이언원형테이블", "250,000"],
  [5, "월넛메종6인테이블", "850,000"],
  [6, "제시카크롬원형테이블", "500,000"],
  [7, "큐브테이블", "190,000"],
];

function productClick(e) {
  const tg = e.target.parentNode;
  if (!tg.classList.contains("product-menu-item")) {
    return;
  }

  for (let i = 0; i < items.childElementCount; i++) {
    itemAll[i].classList.remove("click");
  }
  tg.classList.add("click");
}

function furniturePush(category) {
  let kinds;
  if (category === bed) {
    kinds = "bed";
  } else if (category === chair) {
    kinds = "chair";
  } else if (category === sofa) {
    kinds = "sofa";
  } else if (category === table) {
    kinds = "table";
  }
  let name;
  let price;
  for (let i of category) {
    num = i[0];
    name = i[1];
    price = i[2];
    const content = document.createElement("div");
    content.classList.add("furniture-item");
    content.innerHTML = `
      <img src="./image/${kinds}/${num}.jpg" alt="" />
      <div class="current-donating-price">
        <strong>현재 이 가구를 통한 기부 금액(DB연동 후 표시됌)</strong>
      </div>
      <p class="furniture-item-name">${name}</p>
      <p class="furniture-item-price"><strong>${price}</strong>원</p>
      `;
    furniture.append(content);
  }
}

function furnitureChange(e) {
  const tg = e.target.parentNode;
  if (!tg.classList.contains("product-menu-item")) {
    return;
  }
  furniture.innerHTML = "";

  if (tg.classList.contains("all")) {
    furniturePush(sofa);
    furniturePush(bed);
    furniturePush(table);
    furniturePush(chair);
  }

  if (tg.classList.contains("bed")) {
    furniturePush(bed);
  }

  if (tg.classList.contains("chair")) {
    furniturePush(chair);
  }

  if (tg.classList.contains("sofa")) {
    furniturePush(sofa);
  }

  if (tg.classList.contains("table")) {
    furniturePush(table);
  }
}

items.addEventListener("click", (e) => {
  productClick(e);
  furnitureChange(e);
});

furniturePush(sofa);
furniturePush(bed);
furniturePush(table);
furniturePush(chair);
