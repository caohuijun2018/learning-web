let myImage = document.querySelector('img');
myImage.onclick = ( () => {
    let mySrc = myImage.getAttribute('src');    //获取src的属性值
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src',"images/firefox2.png");
    }else{
        myImage.setAttribute('src','images/firefox-icon.png')
    }
})
let myButton = document.querySelector('button');
let myHeading = document.querySelector('hi')

function setUsername() {
    let myName = prompt('请输入你的名字');  //弹出对话框，要求用户输入数据
    localStorage.setItem('name',myName);    // localStorage API ，它可以将数据存储在浏览器中供后续获取
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    
}

if(!localStorage.getItem('name')){
    setUsername();
}else{
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了,' + storeName;
}
myButton.onclick = () => {
    setUsername();
}