for (var i = 1; i <= 100; i++)
{
    var f = "Fizz"
    var b = "Buzz"
    if (i % 3 == 0 && i % 5 == 0 )
    {
        console.log(f + b)
    }
    else if (i % 3 == 0)
    {
        console.log(f)
    }
    else if (i % 5 == 0)
    {
        console.log(b)
    }
    else
    {
        console.log(i)
    }
}
