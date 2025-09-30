import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

// E3

// let maand = await userInput.question("Geef een maand in? ");
// let dagen = 0;

// switch (maand) {
//   case "januari":
//     dagen = 31;
//     break;
//   case "februari":
//     dagen = 28;
//     break;
//   case "maart":
//     dagen = 30;
//     break;
//   case "april":
//     dagen = 31;
//     break;
//   case "mei":
//     dagen = 31;
//     break;
//   case "juni":
//     dagen = 30;
//     break;
//   case "juli":
//     dagen = 31;
//     break;
//   case "augustus":
//     dagen = 31;
//     break;
//   case "september":
//     dagen = 30;
//     break;
//   case "oktober":
//     dagen = 31;
//     break;
//   case "november":
//     dagen = 30;
//     break;
//   case "december":
//     dagen = 31;
//     break;
//   default:
//     console.log("Deze maand ken ik niet");
// }

// if (dagen > 1) console.log(maand + " bevat " + dagen + " dagen");

// M1

// let artist = parseFloat(
//   userInput.question(
//     "Kies een artiest:1. Red Hot Chili Peppers 2. AC/DC 3. Netsky 4. De Strangers"
//   )
// );

// switch (artist) {
//   case 1:
//     console.log("je kies voor Red Hot Chili Peppers");
//     break;
//   case 2:
//     console.log("AC/DC");
//     break;
//   case 3:
//     console.log("Netsky");
//     break;
//   case 4:
//     console.log("De Strangers");
//     break;
//   default:
//     console.log("onbekend");
//     break;
// }

// M2: Simpele rekenmachine

// Vraag twee getallen aan de gebruiker. Vraag vervolgens aan de gebruiker of hij deze wilt optellen, aftrekken, vermenigvuldigen of delen.

// Voor die operatie uit en geef het resultaat terug.

// let getal1 = parseFloat(await userInput.question("getal 1 ?"));
// let getal2 = parseFloat(await userInput.question("getal 2 ?"));
// let operator = await userInput.question(
//   "wil je deze optellen, aftrekken, vermenigvuldigen of delen ? "
// );

// switch (operator) {
//   case "+":
//     console.log(
//       getal1 + " " + operator + " " + getal2 + " = " + (getal1 + getal2)
//     );
//     break;
//   case "-":
//     console.log(
//       getal1 + " " + operator + " " + getal2 + " = " + (getal1 - getal2)
//     );
//     break;
//   case "*":
//     console.log(
//       getal1 + " " + operator + " " + getal2 + " = " + getal1 * getal2
//     );
//     break;
//   case "/":
//     console.log(
//       getal1 + " " + operator + " " + getal2 + " = " + getal1 / getal2
//     );
//     break;
//   default:
//     console.log("onbekend");
// }

// M3: Quiz

// Bouw een quizspel waarbij de gebruiker 5 vragen moet beantwoorden. Toon of hij de vraag juist of fout heeft en toon achteraf de score van de gebruiker. De vragen mag je zelf kiezen. Een voorbeeld van de input en output ziet er als volgt uit:

// Welkom bij de quiz! Beantwoord de volgende 5 vragen:
// Vraag 1: Wat is de hoofdstad van Frankrijk?
// Jouw antwoord: Parijs
// Goed antwoord!

// Vraag 2: Hoeveel planeten zijn er in ons zonnestelsel?
// Jouw antwoord: 9
// Fout antwoord. Het juiste antwoord is: 8

// Vraag 3: Wat is het grootste zoogdier ter wereld?
// Jouw antwoord: Blauwe vinvis
// Goed antwoord!

// Vraag 4: Wie schreef het toneelstuk 'Romeo en Julia'?
// Jouw antwoord: Shakespeare
// Goed antwoord!

// Vraag 5: Hoeveel poten heeft een spin?
// Jouw antwoord: 6
// Fout antwoord. Het juiste antwoord is: 8

// Je hebt 3 van de 5 vragen juist beantwoord.

let antwoord = userInput.question("Welkom bij de quiz! Beantwoord de volgende 5 vragen:Vraag 1: Wat is de hoofdstad van Frankrijk?")

let score = 0  


process.exit();
