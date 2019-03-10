let dateAssemble = (req, resp, next) => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let listofaudiofiles = [];
  let firstpart, minutesFile;
  listofaudiofiles.push("./music/Time Now in Chicago.ogg");
  if (hours < 13) {
    hourFile = "./music/" + `${hours}` + " Mani.ogg";
    listofaudiofiles.push(hourFile);
  } else {
    hourFile = "./music/" + `${hours - 12}` + " Mani.ogg";
    listofaudiofiles.push(hourFile);
  }

  if (minutes <= 20) {
    minutesFile = "./music/" + `${minutes}` + " Nimidangal.ogg";
    listofaudiofiles.push(minutesFile);
  } else {
    if (minutes % 10 == 0) {
      minutesFile = "./music/" + `${minutes}` + " Nimidangal.ogg";
      listofaudiofiles.push(minutesFile);
    } else {
      firstPart = minutes - (minutes % 10);
      minutesFile = "./music/" + `${firstPart}` + " M.ogg";
      listofaudiofiles.push(minutesFile);

      secondPart = minutes % 10;
      secondPartFile = "./music/" + `${secondPart}` + " Nimidangal.ogg";
      listofaudiofiles.push(secondPartFile);
    }
  }
  console.log(listofaudiofiles);
  resp.locals.listofaudiofiles = listofaudiofiles;
  next();
};

//dateAssemble();

module.exports = dateAssemble;
