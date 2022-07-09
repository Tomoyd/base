// @ts-nocheck

console.log(
  NaN + 1,
  Infinity - Infinity,
  Infinity + Infinity,
  -0 + 0,
  +0 + +0,
  -0 + -0
);

console.log('' + NaN, '' + -0, '' + {}, '' + []);

console.log(1 + true, 1 + false, 1 + {}, [111] + 1);

console.log(
  [999] + {},
  [] +
    function a() {
      return 9;
    }
);
