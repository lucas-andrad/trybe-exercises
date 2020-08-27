"use strict";

// XADREZ
var piece = "Knight".toLowerCase();

if (piece == "bishop") {
  console.log("One square in any direction");
} else if (piece == "queen") {
  console.log("Diagonally, horizontally, or vertically any number of squares.");
} else if (piece == "rook") {
  console.log("Horizontally or vertically any number of squares.");
} else if (piece === "knight") {
  console.log("In a L shape");
} else if (piece === "pawn") {
  console.log("Vertically forward one square, with the option to move two squares if they have not yet moved.");
}