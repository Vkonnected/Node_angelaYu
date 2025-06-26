// export default (a, b) => {
//     return a + b;
// }

const add = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}
export default {
    add: add,
    sub     // when key value same , only mentioning key will also work
}

