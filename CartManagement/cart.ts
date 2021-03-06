
function storeinSession(cartObj:any):void {
    let obj:any = sessionStorage.getItem("cart-item");
    if(obj != undefined){
        let dataObj:any = JSON.parse(obj);
        if(cartObj.length > 0){
            dataObj.push(cartObj[0]);
            sessionStorage.setItem("cart-item",JSON.stringify(dataObj));
        }
    }else{
        sessionStorage.setItem("cart-item",JSON.stringify(cartObj));
    }
}
function add(index:number): void { 
    let cartObj:any = [];
    let item:any = readformData(index);
    cartObj.push(item);
    storeinSession(cartObj);
}

function readformData(index:number):any {  //item = {"name": "watch", "price": 99}
    var item:any = {};
    item.name = document.getElementById("name" + index).textContent;
    item.price = document.getElementById("price" + index).textContent;
    console.log(item);
    return item;
}
