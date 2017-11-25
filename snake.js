function Snake(maxRows, maxColumns) {
  this.direction = 'right';
  this.body = [
    { row: 1, column: 5 },
    { row: 1, column: 4 },
    { row: 1, column: 3 },
    { row: 1, column: 2 },
    { row: 1, column: 1 },
  ];
  this.intervalId = undefined;
  this.maxRows = maxRows;
  this.maxColumns = maxColumns;
  
}

Snake.prototype.move = function () {
  if (!this.intervalId) {
    this.intervalId = setInterval(this._moveForward.bind(this), 100);
  }
}

Snake.prototype.goUp = function () {
  if (this.direction === 'left' || this.direction === 'right') {
    this.direction = 'up';
  }
}

Snake.prototype.goDown = function () {
  if (this.direction === 'left' || this.direction === 'right') {
    this.direction = 'down';
  }
};

Snake.prototype.goLeft = function () {
  if (this.direction === 'up' || this.direction === 'down') {
    this.direction = 'left';
  }
};

Snake.prototype.goRight = function () {
  if (this.direction === 'up' || this.direction === 'down') {
    this.direction = 'right';
  }
};

Snake.prototype._moveForward = function () {
  var head = this.body[0];
  switch (this.direction) {
    case 'up':
      this.body.unshift({
        row: ( (head.row - 1) + this.maxRows ) % this.maxRows,
        column: head.column,
      })
      break;
    case 'down':
      this.body.unshift({
        row: (head.row + 1) % this.maxRows,
        column: head.column,
      })
      break;
    case 'left':
      this.body.unshift({
        row: head.row,
        column: ( (head.column - 1) + this.maxColumns) % this.maxColumns,
      })
      break;
    case 'right':
      this.body.unshift({
        row: head.row,
        column: (head.column + 1) % this.maxColumns,
      });
      break;
  }
  this.previousTail = this.body.pop();

}