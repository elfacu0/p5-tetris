class Tetromino {
  constructor({ shapeId, rotationId = 0, coords = [4, 2] , colour}) {
    this.shapeId = shapeId;
    this.colours = ["#0341AE", "#72CB3B", "#FFD500", "#FF971C", "#FF3213"];
    this.shapeCoords = [];
    this.coords = coords;
    this.colour = colour || this.colours[Math.floor(Math.random() * 4)];
    this.rotationId = rotationId;
    this.create();
  }

  create() {
    switch (this.shapeId) {
      case 0: // line
        if (this.rotationId % 2 == 0) {
          this.shapeCoords = [
            [0, 0],
            [0, -1],
            [0, 1],
            [0, 2],
          ];
        }
        if (this.rotationId % 2 == 1) {
          this.shapeCoords = [
            [0, 0],
            [1, 0],
            [2, 0],
            [-1, 0],
          ];
        }
        break;
      case 1: // rect
        this.shapeCoords = [
          [0, 0],
          [0, -1],
          [-1, 0],
          [-1, -1],
        ];
        break;
      case 2: // L shape
        if (this.rotationId == 0) {
          this.shapeCoords = [
            [0, 0],
            [0, 1],
            [1, 0],
            [2, 0],
          ];
        }
        if (this.rotationId == 1) {
          this.shapeCoords = [
            [0, 0],
            [-1, 0],
            [0, 1],
            [0, 2],
          ];
        }
        if (this.rotationId == 2) {
          this.shapeCoords = [
            [0, 0],
            [-1, 0],
            [1, 0],
            [1, -1],
          ];
        }
        if (this.rotationId == 3) {
          this.shapeCoords = [
            [0, 0],
            [0, -1],
            [0, -2],
            [1, 0],
          ];
        }
        break;
      case 3: // Z shape
        if (this.rotationId % 2 == 0) {
          this.shapeCoords = [
            [0, 0],
            [1, 0],
            [0, 1],
            [-1, 1],
          ];
        }
        if (this.rotationId % 2 == 1) {
          this.shapeCoords = [
            [0, 0],
            [0, 1],
            [-1, -1],
            [-1, 0],
          ];
        }
        break;
      case 4: // T shape
        if (this.rotationId == 0) {
          this.shapeCoords = [
            [0, 0],
            [-1, 0],
            [0, 1],
            [1, 0],
          ];
        }
        if (this.rotationId == 1) {
          this.shapeCoords = [
            [0, 0],
            [1, 0],
            [1, -1],
            [1, 1],
          ];
        }
        if (this.rotationId == 2) {
          this.shapeCoords = [
            [0, 0],
            [0, -1],
            [-1, 0],
            [1, 0],
          ];
        }
        if (this.rotationId == 3) {
          this.shapeCoords = [
            [0, 0],
            [0, 1],
            [0, -1],
            [1, 0],
          ];
        }
        break;
      default:
        break;
    }
  }

  fall() {
    this.coords[1] += 1;
  }

  move(action) {
    if (action == "left") {
      this.coords[0] -= 1;
    }
    if (action == "right") {
      this.coords[0] += 1;
    }
    if (action == "rotate") {
      this.rotationId = (this.rotationId + 1) % 4;
      this.create();
    }
  }
}
