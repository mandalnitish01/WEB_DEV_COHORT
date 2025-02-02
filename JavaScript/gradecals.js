// 90 <= A  80 <= B 70 <= C 60 <= D baaki sbb fail



function gradecalc(grade){
    if(grade >= 90){
        return "A";
    }
  else  if(grade >= 80){
        return "B";
    }
  else  if(grade >= 70){
        return "C";
    }
    else if(grade >= 60){
        return "D";
    }
    else{
        return "F";
    }
}
let grade = 78;
let graderesult = gradecalc(grade);
console.log(graderesult);