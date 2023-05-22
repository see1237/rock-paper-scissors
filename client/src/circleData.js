export function CircleData(items) {
    this.items = items;
}

CircleData.prototype.getAll = function(){
    return this.items;
}
CircleData.prototype.getNext = function(item){
    // 
    var index = this.items.indexOf(item);
    var next = this.items[index + 1]; // 범위 넘으면 undefined 나옴
    return next ? next : this.items[0];
}