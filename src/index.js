module.exports = function reverse(n) {
    n = Math.abs(n);
    parse = parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
    return (parse);
}