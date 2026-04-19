for (let idx = 1; idx <= 10; idx++) { //초기식; 조건식; 증감식
    if (idx % 2 === 0) {
        continue;
    }
    
    console.log("반복!");

    if (idx >= 5) {
        break;
    }
}