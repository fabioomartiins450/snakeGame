function Game(options) {
  this.snake = options.snake;
  this.food = undefined;
  this.rows = options.rows;
  this.columns = options.columns;
  this.ctx = options.ctx;
}

Game.prototype._drawBoard = function () {
  for (var columnIndex = 0; columnIndex < this.columns; columnIndex++) {
    for (var rowIndex = 0; rowIndex < this.rows; rowIndex++) {
      this.ctx.fillStyle = '#E3D4AB';
      this.ctx.fillRect(columnIndex * 10, rowIndex * 10, 10, 10);
    }
  }
}

Game.prototype._drawSnake = function () {
  this.snake.body.forEach(function (position, index) {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(position.column * 10, position.row * 10, 8, 8);
  }.bind(this));
}

Game.prototype.start = function() {
  this._assignControlsToKeys();
  this.snake.move();
  window.requestAnimationFrame(this._update.bind(this));
}

Game.prototype._update = function () {
  this._drawBoard();
  this._drawSnake();
  window.requestAnimationFrame(this._update.bind(this));
}

Game.prototype._assignControlsToKeys = function () {
  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 38: //arrow up
        this.snake.goUp();
        break;
      case 40: //arror down
        this.snake.goDown();
        break;
      case 37: //arror left
        this.snake.goLeft();
        break;
      case 39: //arrow right
        this.snake.goRight();
        break; 
    }
  }.bind(this);
}
