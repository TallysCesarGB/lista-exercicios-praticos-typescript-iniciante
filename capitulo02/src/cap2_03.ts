let oplinguagem: number = Math.floor(Math.random() * 3 + 1);
let linguaguens: string = "";
switch (oplinguagem) {
  case 1:
    linguaguens = "TypeScript";
    break;
  case 2:
    linguaguens = "JavaScript";
    break;
  case 3:
    linguaguens = "Python";
    break;
  default:
    linguaguens = "Linguagem não encontrada";
    break;
}
console.log(linguaguens);
