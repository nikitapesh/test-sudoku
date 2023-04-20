let grid = [
	[5, 3, 0, 0, 7, 0, 0, 0, 0],
	[6, 0, 0, 1, 9, 5, 0, 0, 0],
	[0, 9, 8, 0, 0, 0, 0, 6, 0],
	[8, 0, 0, 0, 6, 0, 0, 0, 3],
	[4, 0, 0, 8, 0, 3, 0, 0, 1],
	[7, 0, 0, 0, 2, 0, 0, 0, 6],
	[0, 6, 0, 0, 0, 0, 2, 8, 0],
	[0, 0, 0, 4, 1, 9, 0, 0, 5],
	[0, 0, 0, 0, 8, 0, 0, 7, 9],
];
  
function isPossible(grid, row, col, k) {
	const m = 3 * Math.floor(row / 3);
	const n = 3 * Math.floor(col / 3);
	for (let i = 0; i < 9; i++) {
		if (grid[row][i] == k || grid[i][col] == k || grid[m + Math.floor(i / 3)][n + (i % 3)] == k) {
			return false;
		}
	}
	return true;
}
  
function solveSudoku(grid, row = 0, col = 0) {
	const nextRow = col === 8 ? row + 1 : row;
	const nextCol = col === 8 ? 0 : col + 1;
	if (row === 9) {
		return true;
	}
	if (grid[row][col] !== 0) {
		return solveSudoku(grid, nextRow, nextCol);
	}
	for (let k = 1; k <= 9; k++) {
		if (isPossible(grid, row, col, k)) {
			grid[row][col] = k;
			if (solveSudoku(grid, nextRow, nextCol)) {
				return true;
			}
		}
	}
	grid[row][col] = 0;
	return false;
}
  
if (solveSudoku(grid)) {
	console.log(grid);
} else {
	console.log("Решения не существует");
}