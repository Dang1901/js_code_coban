/**
 * Toán tử logic
 * 1. && - And
 * 2. || - Or
 * 3. ! - Not
 */

var a = 1;
var b = 2;
var c = 3;

    /* && */
// bắt buộc cả hai vế phải đúng thì log sẽ sinh ra
// nếu một trong 2 vế hoặc cả 2 vế sai thì log sẽ không sinh ra
// nếu có vế thứ 3 hoặc nhiều hơn thì cũng phải tương tự như 2 điều kiện trên
if (a>0 && b>0 ) {
    console.log('DIeu kien dung');  
}


/* || */
// chỉ cần 1 trong 2 toán tủ là đúng thì sẽ in ra log
if(a>0 || b<0) {
    console.log('dieu kien dung 2');
}


/* ! */
// toán tử Not sẽ phủ định lại điều kiênj (đúng -> sai và sai -> đúng)
// trường hợp 1
if(!(a>0)) {
    console.log('dieu kien dung '); // do a > 0 là đúng nhưng khi phủ định lại thì nó là sai nên kh in ra log
}

// trường hợp 2
if(!(a<0)){
    console.log('dieu kien dung 3'); // do a < 0 sai nên sẽ phủ định lại là đúng thì in ra log
}






