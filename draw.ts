import { Shape } from './shape';

const circle = Shape.circle(5);
console.log(`Circle area: ${circle.area}`);
console.log(`Circle perimeter: ${circle.perimeter}`);

const rectangle = Shape.rectangle(10, 6);
console.log(`Rectangle area: ${rectangle.area}`);
console.log(`Rectangle perimeter: ${rectangle.perimeter}`);

const square = Shape.square(7);
console.log(`Square area: ${square.area}`);
console.log(`Square perimeter: ${square.perimeter}`);
