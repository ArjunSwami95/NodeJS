var rect=require("./rectangle.js");
function solveRect(l,b)
{
    console.log("solving for rectangle with l="+l+"and b="+b);
    if(l<=0||b<=0)
        {
            console.log("rectangle dimension should be greater than 0");
        }
    else
        {
            console.log("the area of rectangle is "+rect.area(l,b));
               console.log("the area of rectangle is "+rect.perimeter(l,b));
        }
}
solveRect(2,5);
solveRect(9,5);
solveRect(0,2);
solveRect(1,3);