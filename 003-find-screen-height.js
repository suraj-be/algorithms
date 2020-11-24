function findScreenHeight(width, ratio) {
  let [widthRatio, heightRatio] = ratio.split(':');
  let height = width / widthRatio * heightRatio;
  return `${width} x ${height}`; 
}

/*
- findScreenHeight(1280,"16:9")
"1280 x 720"

- findScreenHeight(3840,"32:9") 
"3840 x 1080"
*/