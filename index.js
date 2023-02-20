let subjects = "Art Subject" 

if (subjects == "Art Subject"){
    console.log("As an art student, you will be taking the following subjects: Government, Economics, Literature, History")
}else if (subjects == "Science Subjects"){
    console.log("As a science student, you will be taking the following subjects: Physics, Chemistry, Biology, Technical Drawing")
}else if (subjects == "Social Science Subjects"){
    console.log("As a Social Science student, you will be taking the following subjects: Accounting, Commerce, Marketing, Geography")
}else{
        console.log("As a General Student, you will be taking the following subjects: English, Mathematics")
}


function findNearestPowerOf2(num) {
    let pwr = 1;
    while (pwr < num) {
      pwr *= 2;
    }
    if (num - (pwr / 2) < pwr - num) {
      pwr /= 2;
    }
    console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);
  }

  findNearestPowerOf2(10)
  