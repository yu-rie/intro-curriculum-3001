'use strict';
/**
 * 与えられた自然数の階乗を返す
 * 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
 * @param {Number} n
 * @returns {Number}
 */
function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {  // 変数 i が 1 から引数の数になるまで繰り返すよ。

        result = result * i;        /* result に変数 i　を掛け合わせたものを result に代入。　
                                     " result *= i " とか書けるみたいだけど分かり難いや。 */

//   console.log(result);             // 心配なので途中経過を表示してみる。 なんか， assert のテストが 2回ずつ行われてるっぽい。

   }                               // for 文ここまで。 1 行ならカッコ要らなかったかも？

    return result;                  // factorial を呼んだトコヘ result の値を返す。
}

const assert = require('assert');
assert.equal(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1)}でした`);
assert.equal(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2)}でした`);
assert.equal(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3)}でした`);
assert.equal(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10)}でした`);
console.log('すべてのテストを通過しました');
