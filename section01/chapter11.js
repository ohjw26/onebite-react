// 함수
// function greeting () {
//     console.log("안녕하세요!");
// }

// console.log("호출 전")
// greeting();
// console.log("호출 후");

function getArea(width, height) {
    function another() { // 중첩 함수
        console.log("another");
    }

    another();
    let area = width * height;

    return area; //반환값
}

let area1 = getArea(10, 20);
console.log(area1);

//자바스크립트의 함수는 호이스팅(끌어올리다)이 가능해서
//함수 선언을 호출문보다 아래에 두어도 정상적으로 실행됨