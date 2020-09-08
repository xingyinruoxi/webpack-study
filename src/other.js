console.log('+++++++++++++++');
var btn = document.createElement("button");
btn.innerHTML = "新增";
document.body.appendChild(btn);
btn.onclick = function() {
    var div = document.createElement("div");
    div.innerHTML = "item";
    document.body.appendChild(div);
};

import _ from 'lodash';

var objc = { "name": "戈德斯文", "car": "宝马" };
var objd = { "name": "柴硕", "loveEat": true, 'aa': 888 };


console.log(_.assign(objc, objd));