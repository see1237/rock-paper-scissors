// 가위바위보 공통 로직 - 객체지향 프로그래밍으로

// es5는 class가 없기 때문에 fucntion을 만들어야 함 (생성자 함수)
export function Item(key, name, onClick) {

    this.key = key;
    this.name = name;

    // 버튼 만들기
    this.buttonEl = document.createElement("button");
    this.buttonEl.textContent = name;

    // 클릭 이벤트 핸들링
    var _self = this;
    this.buttonEl.onclick = function(){
        onClick(_self);
    }


}
Item.prototype.render = function(parentEl) {
    parentEl.append(this.buttonEl);
}

Item.prototype.disable = function(value){
    if (value){
        this.buttonEl.setAttribute("disabled", true);
    } else {
        this.buttonEl.removeAttribute("disabled");
    }
}


