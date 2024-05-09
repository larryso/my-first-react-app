function ShapeFactory(){}

var factory = new ShapeFactory();
var circle = factory.createShape('circle');
var rectangle = factory.createShape('rectangle');
var triangle = factory.createShape('triangle');

console.log(circle.type);
console.log(rectangle.type);
console.log(triangle.type);