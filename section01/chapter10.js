for (let idx = 0; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue;
  }
  console.log("반복! " + idx);

  if (idx >= 5) {
    break;
  }
}
