import { CircleData } from "./circleData.js";
import { Item } from "./item.js";

function game(item){
    
    var next = items.getNext(item);
    if (item == comCurrentItem) {
        alert("비겼습니다.");
    } else if (next == comCurrentItem) {
        alert("졌습니다.");
    } else {
        alert("이겼습니다.")
    }

    clearInterval(timerId);
    startEl.removeAttribute("disabled");
    items.getAll().forEach(function (item) {
        item.disable(true);
    });
}

var items = new CircleData([
    new Item("sissor", "가위", game),
    new Item("rock", "바위", game),
    new Item("paper", "보", game)
]);

var comCurrentItem = items.getAll()[0];
var timerId;
var startEl = document.getElementById("start");
var comEl = document.getElementById("com");


// 항목 생성
var itemButtonsEl = document.getElementById("item-buttons");


// 항목 렌더링
items.getAll().forEach(function (item) {
    item.render(itemButtonsEl);
    item.disable(true);
});

// 시작 클릭 이벤트 핸들링
startEl.onclick = function(){
    startEl.setAttribute("disabled", true);
    items.getAll().forEach(function (item) {
        item.disable(false);
    });
    if(timerId>=1){
        clearInterval(timerId);
    }
    timerId = setInterval(() => {
        comCurrentItem = items.getNext(comCurrentItem);
        comEl.textContent = comCurrentItem.name;
    }, 100);
};