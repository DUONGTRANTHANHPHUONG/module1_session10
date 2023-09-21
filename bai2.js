let thang = prompt("nhập vào số tháng");

  switch (Number(thang)) {
    case 1:
      document.write("tháng 1 có 31 ngày");
      break;
    case 2:
      document.write("tháng 2 có 28 hoặc 29 ngày");
      break;
    case 3:
      document.write("tháng 3 có 31 ngày");
      break;
    case 4:
      document.write("tháng 4 có 30 ngày");
      break;
    case 5:
      document.write("tháng 5 có 31 ngày");
      break;
    case 6:
      document.write("tháng 6 có 30 ngày");
      break;
    case 7:
      document.write("tháng 7 có 31 ngày");
      break;
    case 8:
      document.write("tháng 8 có 30 ngày");
      break;
    case 9:
      document.write("tháng 9 có 31 ngày");
      break;
    case 10:
      document.write("tháng 10 có 31 ngày");
      break;
    case 11:
      document.write("tháng 11 có 30 ngày");
      break;
    case 12:
      document.write("tháng 12 có 31 ngày");
      break;
    default:
      document.write("reload và nhập lại số tháng");
  }

  