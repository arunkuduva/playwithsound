let dateAssemble = (req, resp, next) => {
  let date = new Date();
  let hours = 2; //date.getHours();
  let minutes = 4; //date.getMinutes();
  let listofaudiofiles = [];
  let firstpart, minutesFile;
  hourFile = "./music/" + `${hours}` + ".ogg";

  listofaudiofiles.push(hourFile);

  if (minutes <= 20) {
    minutesFile = "./music/" + `${minutes}` + ".ogg";
    listofaudiofiles.push(minutesFile);
  } else {
    if (minutes % 10 == 0) {
      minutesFile = "./music/" + `${minutes}` + ".ogg";
      listofaudiofiles.push(minutesFile);
    } else {
      firstPart = minutes - (minutes % 10);
      minutesFile = "./music/" + `${firstPart}` + ".ogg";

      listofaudiofiles.push(minutesFile);
      secondPart = minutes % 10;

      secondPartFile = "./music/" + `${secondPart}` + ".ogg";
      listofaudiofiles.push(secondPartFile);
    }
  }
  console.log(listofaudiofiles);
  resp.locals.listofaudiofiles = listofaudiofiles;
  next();
};

//dateAssemble();

module.exports = dateAssemble;
