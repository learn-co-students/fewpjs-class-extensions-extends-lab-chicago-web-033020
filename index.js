// Your code here

class Polygon {
  constructor(sides){
    this.sides = sides
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((acc, num) => acc + num)
  }
}

class Triangle extends Polygon {

  get isValid(){
    let sorted = this.sides.sort((a, b) => b - a)
    return (sorted[0] < (sorted[1] + sorted[2]))
  }
}

class Square extends Polygon {
  
  get isValid(){
    return this.sides.every(side => side === this.sides[0])
  }

  get area(){
    return this.sides[0] ** 2
  }
}