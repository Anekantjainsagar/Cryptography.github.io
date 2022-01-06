function submit() {
  const preview = document.querySelector(".preview");
  const value = document.querySelector("input").value;
  const box2 = document.querySelector(".box2")
  console.log(box2)

  let newStr = value.toUpperCase();

  let alpha = newStr.includes("A");
  switch (alpha) {
    case newStr.includes("A"):
      let str1 = newStr.replaceAll("A", "1");

    case str1.includes("B"):
      let str2 = str1.replaceAll("B", "2");

    case str2.includes("C"):
      let str3 = str2.replaceAll("C", "3");

    case str3.includes("D"):
      let str4 = str3.replaceAll("D", "4");

    case str4.includes("E"):
      let str5 = str4.replaceAll("E", "5");

    case str5.includes("F"):
      let str6 = str5.replaceAll("F", "6");

    case str6.includes("G"):
      let str7 = str6.replaceAll("G", "");

    case str7.includes("H"):
      let str8 = str7.replaceAll("H", "8");

    case str8.includes("I"):
      let str9 = str8.replaceAll("I", "9");

    case str9.includes("J"):
      let str10 = str9.replaceAll("J", "!");

    case str10.includes("K"):
      let str11 = str10.replaceAll("K", "@");

    case str11.includes("L"):
      let str12 = str11.replaceAll("L", "#");

    case str12.includes("M"):
      let str13 = str12.replaceAll("M", "$");

    case str13.includes("N"):
      let str14 = str13.replaceAll("N", "^");

    case str14.includes("O"):
      let str15 = str14.replaceAll("O", "&");

    case str15.includes("P"):
      let str16 = str15.replaceAll("P", "*");

    case str16.includes("Q"):
      let str17 = str16.replaceAll("Q", "(");

    case str17.includes("R"):
      let str18 = str17.replaceAll("R", ")");

    case str18.includes("S"):
      let str19 = str18.replaceAll("S", "_");

    case str19.includes("T"):
      let str20 = str19.replaceAll("T", "=");

    case str20.includes("U"):
      let str21 = str20.replaceAll("U", "+");

    case str21.includes("V"):
      let str22 = str21.replaceAll("V", "-");

    case str22.includes("W"):
      let str23 = str22.replaceAll("W", "/");

    case str23.includes("X"):
      let str24 = str23.replaceAll("X", "<");

    case str24.includes("Y"):
      let str25 = str24.replaceAll("Y", "~");

    case str25.includes("Z"):
      let str26 = str25.replaceAll("Z", "|");

    case str26.includes("  "):
      let str27 = str26.replaceAll("  ", ";");

      console.log(str27);
      preview.innerText = str27;
      break;
    default:
      console.log("invalid alpha");
  }
}

function submit2() {
  const code = document.querySelector(".code").value;
  const preview2 = document.querySelector(".txtpre");

  let newCode = code.includes("1");
  switch (newCode) {
    case code.includes("1"):
      let code1 = code.replaceAll("1", "A");

    case code1.includes("2"):
      let code2 = code1.replaceAll("2", "B");

    case code2.includes("3"):
      let code3 = code2.replaceAll("3", "C");

    case code3.includes("4"):
      let code4 = code3.replaceAll("4", "D");

    case code4.includes("5"):
      let code5 = code4.replaceAll("5", "E");

    case code5.includes("6"):
      let code6 = code5.replaceAll("6", "F");

    case code6.includes("7"):
      let code7 = code6.replaceAll("7", "G");

    case code7.includes("8"):
      let code8 = code7.replaceAll("8", "H");

    case code8.includes("9"):
      let code9 = code8.replaceAll("9", "I");

    case code9.includes("!"):
      let code10 = code9.replaceAll("!", "J");

    case code10.includes("@"):
      let code11 = code10.replaceAll("@", "K");

    case code11.includes("#"):
      let code12 = code11.replaceAll("#", "L");

    case code12.includes("$"):
      let code13 = code12.replaceAll("$", "M");

    case code13.includes("^"):
      let code14 = code13.replaceAll("^", "N");

    case code14.includes("&"):
      let code15 = code14.replaceAll("&", "O");

    case code15.includes("*"):
      let code16 = code15.replaceAll("*", "P");

    case code16.includes("("):
      let code17 = code16.replaceAll("(", "Q");

    case code17.includes(")"):
      let code18 = code17.replaceAll(")", "R");

    case code18.includes("_"):
      let code19 = code18.replaceAll("_", "S");

    case code19.includes("="):
      let code20 = code19.replaceAll("=", "T");

    case code20.includes("+"):
      let code21 = code20.replaceAll("+", "U");

    case code21.includes("-"):
      let code22 = code21.replaceAll("-", "V");

    case code22.includes("/"):
      let code23 = code22.replaceAll("/", "W");

    case code23.includes("<"):
      let code24 = code23.replaceAll("<", "X");

    case code24.includes("~"):
      let code25 = code24.replaceAll("~", "Y");

    case code25.includes("|"):
      let code26 = code25.replaceAll("|", "Z");

    case code26.includes(";"):
      let code27 = code26.replaceAll(";", "  ");

      code28 = code27.toLowerCase()
      preview2.innerText = code28;
      break;
    default:                                
      console.log("invalid code");
  }
}

function encry(){
  const encryption = document.querySelector("#encryption")
  const decryption = document.querySelector("#decryption")
  encryption.style.display = "block"
  decryption.style.display = "none"
}

function decry(){
  const encryption = document.querySelector("#encryption")
  const decryption = document.querySelector("#decryption")
  encryption.style.display = "none"
  decryption.style.display = "block"
}
