var damageList = [
  [
    [2000],
    [9, 14],
    [15, 23],
    [18, 27],
    [23, 33],
    [36, 54],
    [45, 68],
    [54, 81],
  ],
  [
    [1950],
    [9, 14],
    [15, 23],
    [18, 27],
    [23, 33],
    [36, 54],
    [45, 67],
    [54, 80],
  ],
  [
    [1900],
    [9, 14],
    [15, 22],
    [18, 27],
    [22, 32],
    [35, 53],
    [44, 66],
    [53, 79],
  ]

];

function damageCal(temperature) {
  var i = damageList.length - 1;
  //alert(i);

  temp = parseInt(temperature);

  if (temp == 0){
    return [
      [0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ];
  };
  if (temp > 2000){
    return damageList[0];
  }

  do{
    if (temp == damageList[i][0][0]) {
      //alert(damageList[1]);
      return damageList[i];
    };

    i--;
  }while (temperature <= damageList[i][0][0])
}
