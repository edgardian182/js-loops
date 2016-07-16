// Print the numbers from 1-100 but change the number for "Fizz" if it is divisible by 3, for "Buzz" if divisible by 5 and for "FizzBuzz" if divisible by 3 and 5

for (var i = 1; i <= 100; i++) {
  var r = "";
  if (i % 3 == 0)
    r += "Fizz";
  if (i % 5 == 0)
    r += "Buzz";
  console.log(r || i);
}