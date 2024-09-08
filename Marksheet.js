let per=prompt("Enter Percentage")
if (per<60)
{
    document.write("You are fail")
}
else if (per>=60 && per<=70)
{
    document.write("You got D grade")
}
else if (per>=70 && per<=80)
{
    document.write("You got C grade")
}
else if (per>=80 && per<=100)
{
    document.write("You got A grade")
}
else{
    document.write("You Entered the wrong number")
}
