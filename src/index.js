module.exports = function isPointsOnLine(points) { 
  return points.every(([x, y]) => (x - points[0][0]) / (points[1][0] - points[0][0]) === (y - points[0][1]) / (points[1][1] - points[0][1]));
}