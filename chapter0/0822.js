var jumin_nums = "0608284000000";
checkAdult(jumin_nums);

const checkAdult = (jumin) => {
  console.log(jumin.substring(6, 7));
  console.log(jumin.substring(0, 2));
  console.log("length: "+jumin_nums.length);

  if ((jumin.length) != 13) {
    console.log("주민번호는 13자리여야 합니다");
    return;
  }

  let ss = jumin.substring(6,7);
  if (1(ss<5 && ss>0)) {
    console.log("성별이 올바르지 않습니다");
    return;
  }

  let year = Number(jumin.substring(0,2));
  if (ss == 1 || ss == 2) year += 1900;
  else year += 2000;

  let now_year = 2023;
  let age = now_year - year + 1;
  if (age>19) console.log("성인입니다.");
  else console.log("미성년자입니다.");
  
}