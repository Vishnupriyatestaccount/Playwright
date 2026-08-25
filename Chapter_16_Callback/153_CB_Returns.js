function calculate(a, b, operation) {
 return operation(a,b);
}

let sum =calculate(0, 5, function(x,y)
{
    return x, y;
});
console.log(sum);