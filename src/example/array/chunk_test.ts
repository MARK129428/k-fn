import { chunk } from "../../array/chunk.js";

// 测试：符合预期
console.log(chunk(['a', 'b', 'c', 'd'], 2)); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(chunk(['a', 'b', 'c', 'd', 'e'], 2)); // [ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e' ] ]
console.log(chunk(null, 2)); // []（容错）
console.log(chunk([1,2,3], 0)); // []（容错）