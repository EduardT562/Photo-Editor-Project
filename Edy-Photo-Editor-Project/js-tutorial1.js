// console.log("hi");

// let x = 7;
// let y = 3;
// let z = x + y;
// console.log("Answer: " + z);

// let arr = [
//   [x - 1, y - 1],
//   [x - 1, y],
//   [x - 1, y + 1],
//   [x, y - 1],
//   [x, y],
//   [x, y + 1],
//   [x + 1, y - 1],
//   [x + 1, y],
//   [x + 1, y + 1],
// ];
let result = [];
for (let i = x; i >= x - 2; i--) {
  result[x - i] = [];
  for (let j = y; j >= y - 2; j--) {
    result[x - i][y - j] = parseInt("" + i + j);
    console.warn(result[x - i][y - j]);
  }
}
return result;

function testStep1() {
  console.log(
    `
  <------------------------>
   Running tests for Step 1 
  <------------------------>`
  );

  const pixelData = new PixelData(4, 5);
  for (let i = 0; i < 4 * 5; i++) {
    pixelData.addPixel(new Pixel(i, 20 + i, 40 + i));
  }
  console.log("Pixel data for this test:");
  console.log(pixelData);

  function checkPixels() {
    let testRes = true;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (
          !assert(
            message,
            expected[i][j].equals(actual?.[i]?.[j]),
            `Incorrect pixel at (${i}, ${j})
  Expected: (r: ${expected[i][j].red}, g: ${expected[i][j].green}, b: ${expected[i][j].blue})
  Actual: (r: ${actual?.[i]?.[j]?.red}, g: ${actual?.[i]?.[j]?.green}, b: ${actual?.[i]?.[j]?.blue})`
          )
        ) {
          testRes = false;
          break;
        }
      }
      if (!testRes) break;
    }
    if (testRes) logTestResult(message, true);
  }

  let message, actual, expected;

  // Test 1
  message = "Check neighbours of CENTER pixel";
  logTestCase(1, message);
  actual = pixelData.getNeighbours(1, 1);
  //console.error("actual =" + actual);
  expected = [
    [new Pixel(0, 20, 40), new Pixel(1, 21, 41), new Pixel(2, 22, 42)],
    [new Pixel(5, 25, 45), new Pixel(6, 26, 46), new Pixel(7, 27, 47)],
    [new Pixel(10, 30, 50), new Pixel(11, 31, 51), new Pixel(12, 32, 52)],
  ];
  checkPixels();
  // Test 2
  message = "Check neighbours of TOP-EDGE pixel";
  logTestCase(2, message);
  actual = pixelData.getNeighbours(0, 1);
  expected = [
    [new Pixel(0, 0, 0), new Pixel(0, 0, 0), new Pixel(0, 0, 0)],
    [new Pixel(0, 20, 40), new Pixel(1, 21, 41), new Pixel(2, 22, 42)],
    [new Pixel(5, 25, 45), new Pixel(6, 26, 46), new Pixel(7, 27, 47)],
  ];
  checkPixels();

  // Test 3
  message = "Check neighbours of RIGHT-EDGE pixel";
  logTestCase(3, message);
  actual = pixelData.getNeighbours(1, 4);
  expected = [
    [new Pixel(3, 23, 43), new Pixel(4, 24, 44), new Pixel(0, 0, 0)],
    [new Pixel(8, 28, 48), new Pixel(9, 29, 49), new Pixel(0, 0, 0)],
    [new Pixel(13, 33, 53), new Pixel(14, 34, 54), new Pixel(0, 0, 0)],
  ];
  checkPixels();

  // Test 4
  message = "Check neighbours of BOTTOM-EDGE pixel";
  logTestCase(4, message);
  actual = pixelData.getNeighbours(3, 3);
  expected = [
    [new Pixel(12, 32, 52), new Pixel(13, 33, 53), new Pixel(14, 34, 54)],
    [new Pixel(17, 37, 57), new Pixel(18, 38, 58), new Pixel(19, 39, 59)],
    [new Pixel(0, 0, 0), new Pixel(0, 0, 0), new Pixel(0, 0, 0)],
  ];
  checkPixels();

  // Test 5
  message = "Check neighbours of LEFT-EDGE pixel";
  logTestCase(5, message);
  actual = pixelData.getNeighbours(2, 0);
  expected = [
    [new Pixel(0, 0, 0), new Pixel(5, 25, 45), new Pixel(6, 26, 46)],
    [new Pixel(0, 0, 0), new Pixel(10, 30, 50), new Pixel(11, 31, 51)],
    [new Pixel(0, 0, 0), new Pixel(15, 35, 55), new Pixel(16, 36, 56)],
  ];
  checkPixels();

  // Test 6
  message = "Check neighbours of TOP-LEFT-CORNER pixel";
  logTestCase(6, message);
  actual = pixelData.getNeighbours(0, 0);
  expected = [
    [new Pixel(0, 0, 0), new Pixel(0, 0, 0), new Pixel(0, 0, 0)],
    [new Pixel(0, 0, 0), new Pixel(0, 20, 40), new Pixel(1, 21, 41)],
    [new Pixel(0, 0, 0), new Pixel(5, 25, 45), new Pixel(6, 26, 46)],
  ];
  checkPixels();

  // Test 7
  message = "Check neighbours of TOP-RIGHT-CORNER pixel";
  logTestCase(7, message);
  actual = pixelData.getNeighbours(0, 4);
  expected = [
    [new Pixel(0, 0, 0), new Pixel(0, 0, 0), new Pixel(0, 0, 0)],
    [new Pixel(3, 23, 43), new Pixel(4, 24, 44), new Pixel(0, 0, 0)],
    [new Pixel(8, 28, 48), new Pixel(9, 29, 49), new Pixel(0, 0, 0)],
  ];
  checkPixels();

  // Test 8
  message = "Check neighbours of BOTTOM-RIGHT-CORNER pixel";
  logTestCase(8, message);
  actual = pixelData.getNeighbours(3, 4);
  expected = [
    [new Pixel(13, 33, 53), new Pixel(14, 34, 54), new Pixel(0, 0, 0)],
    [new Pixel(18, 38, 58), new Pixel(19, 39, 59), new Pixel(0, 0, 0)],
    [new Pixel(0, 0, 0), new Pixel(0, 0, 0), new Pixel(0, 0, 0)],
  ];
  checkPixels();

  // Test 9
  message = "Check neighbours of BOTTOM-LEFT-CORNER pixel";
  logTestCase(9, message);
  actual = pixelData.getNeighbours(3, 0);
  expected = [
    [new Pixel(0, 0, 0), new Pixel(10, 30, 50), new Pixel(11, 31, 51)],
    [new Pixel(0, 0, 0), new Pixel(15, 35, 55), new Pixel(16, 36, 56)],
    [new Pixel(0, 0, 0), new Pixel(0, 0, 0), new Pixel(0, 0, 0)],
  ];
  checkPixels();
}
