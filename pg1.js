var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "NorthEast";
    CardinalDirections["East"] = "East";
    CardinalDirections["South"] = "South";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
var Cars;
(function (Cars) {
    Cars["Color"] = "Green";
    Cars["Type"] = "Sedan";
})(Cars || (Cars = {}));
;
console.log(Cars);
console.log(CardinalDirections);
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);
