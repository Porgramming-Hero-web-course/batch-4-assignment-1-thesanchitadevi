/* 
Problem 4:
Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// Sample Output 2:
24; 
*/

// Define the Circle type
type Circle = {
    shape: "circle";
    radius: number;
};

// Define the Rectangle type
type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
};

// Define the Shape type
type Shape = Circle | Rectangle;

// Define the calculateShapeArea function
function calculateShapeArea(shape: Shape): number {
    if (shape.shape === "circle") {
        return parseFloat((Math.PI * shape.radius ** 2).toFixed(2));
    } else if (shape.shape === "rectangle") {
        return parseFloat((shape.width * shape.height).toFixed(2));
    }
    else {
        return 0;
    }
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// console.log(circleArea); // Output: 78.54

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
// console.log(rectangleArea); // Output: 24







