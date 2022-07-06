const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]
//이미지 랜덤
const bgImage = document.createElement("img");
//html에 img라는 요소를 생성해줌 createElement

const bg = document.querySelector(".bg");

bgImage.src = `img/${chosenImage}`;
//bgImage의 경로는 img폴더에 chosenImage(랜덤)을 한것이다

bg.appendChild(bgImage);
//bgImage를 body에 추가한다. 
//부모노드(body)에 자식노드(bgImage) 추가

bgImage.classList.add("bgImage");







// JS에서 이미지를 만들어서 html에 추가하기
//createElement 를 사용해서 html에 img라는 요소를 생성해준다
//bgImage이미지 경로를 설정해준다
//bgImage를 body에 추가해준다















