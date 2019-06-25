var flag = 0, fClick = null, secClick = null,fId=null,secId=null,clickFlag=true;
var imgarr = [];
for (let i = 1; i <= 18; i++) {
    imgarr.push("images/" + i.toString(10) + ".jpg")
    imgarr.push("images/" + i.toString(10) + ".jpg")
}
function peek() {
    for (let i = 1; i <= 36; i++)
        document.getElementById(i.toString(10)).src = imgarr[i - 1];
}

function flip(id) {
    if (flag <= 1&&clickFlag) {
        document.getElementById(id).src = imgarr[id - 1];
        if (fClick == null){
            fClick = document.getElementById(id).src;
            fId=id;

        }
        else{
            secClick = document.getElementById(id).src;
           secId=id;    
        }
        flag++;
    }
    if (flag == 2) {
        clickFlag=false;
        setTimeout(function () {
            console.log(fClick);
            console.log(secClick);
            console.log(fClick != secClick);
            if (fClick != secClick) {
                document.getElementById(fId).src="images/mem.jpg"
                document.getElementById(secId).src="images/mem.jpg"
            }
            fClick=null;
            flag=0;
        }, 1000)
        clickFlag=true;
    }
}
function displaygrid() {
    setTimeout(function () {
        for (let i = 1; i <= 36; i++)
            document.getElementById(i.toString(10)).src = "images/mem.jpg";
    }, 1000);
}
