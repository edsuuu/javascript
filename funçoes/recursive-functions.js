function recursiva(max){
    if(max >= 2000) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0)