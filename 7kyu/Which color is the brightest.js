/* DESCRIPTION: 
One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.

One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:

V = max(R,G,B)
You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!

For example,

brightest(["#001000", "#000000"]) == "#001000"
brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
If there are multiple brightest colors, return the first one:

brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"
*/

function brightest(colors){
  const value = colors.map((item) => {
    let red = parseInt(item.slice(1,3), 16);
    let green = parseInt(item.slice(3,5), 16);
    let blue = parseInt(item.slice(5), 16);
    return Math.max(red, blue, green)
  })
   let maxValue = Math.max(...value);
   let maxValueIndex = value.indexOf(maxValue);
   return colors[maxValueIndex]
}