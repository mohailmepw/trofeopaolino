// Tournament data - Biennio
export const biennioData = {
  squadre: [
    {
      id: 1,
      nome: "ASA-A",
      color: "#1e90ff",
      logo: "",
      giocatori: [
        { nome: "Mohamed Amlal", capitano: true, esterno: false },
        { nome: "Nounke Traore", capitano: false, esterno: true },
        { nome: "Pierpaolo Anguilano", capitano: false, esterno: false },
        { nome: "Lorenzo Bonavoglia", capitano: false, esterno: false },
        { nome: "Francesco Di Biase", capitano: false, esterno: false },
        { nome: "Ibrahima Diouf", capitano: false, esterno: false },
        { nome: "Vito Levantaci", capitano: false, esterno: false },
        { nome: "Marco Pipoli", capitano: false, esterno: false },
        { nome: "Federico Sala", capitano: false, esterno: false },
        { nome: "Angelo Solimine", capitano: false, esterno: false },
        { nome: "Vito Turchiarelli", capitano: false, esterno: false },
        { nome: "Filippo Totaro", capitano: false, esterno: false },
        { nome: "Gerardo Longo", capitano: false, esterno: false }
      ]
    },
    {
      id: 2,
      nome: "E-B",
      color: "#e63946",
      logo: "",
      giocatori: [
        { nome: "Marco Delli Carri", capitano: false, esterno: true },
        { nome: "Edoardo Di Leo", capitano: false, esterno: false },
        { nome: "Daniele D'Atri", capitano: false, esterno: false },
        { nome: "Alberto Finizio", capitano: true, esterno: false },
        { nome: "Saverio Inchingoli", capitano: false, esterno: false },
        { nome: "Gabriele Lanotte", capitano: false, esterno: false },
        { nome: "Emanuele Lanza", capitano: false, esterno: false },
        { nome: "Simone Lavanga", capitano: false, esterno: false },
        { nome: "Lorenzo Menduni", capitano: false, esterno: false },
        { nome: "Michele Milano", capitano: false, esterno: false },
        { nome: "Rodolfo Rosania", capitano: false, esterno: false },
        { nome: "Emanuele Schiavulli", capitano: false, esterno: false }
      ]
    },
    {
      id: 3,
      nome: "BSA",
      color: "#e63946",
      logo: "",
      giocatori: [
        { nome: "Luca Abbruzzese", capitano: false, esterno: false },
        { nome: "Emanuele Mercaldi", capitano: false, esterno: false },
        { nome: "Marco Puopolo", capitano: false, esterno: false },
        { nome: "Emanuele Piserchia", capitano: true, esterno: false },
        { nome: "Mattia Rinaldi", capitano: false, esterno: false },
        { nome: "Nicolas Spedicato", capitano: false, esterno: false },
        { nome: "Christian Stango", capitano: false, esterno: false },
        { nome: "Giuseppe Tanzi", capitano: false, esterno: false },
        { nome: "Salvatore Vinciguerra", capitano: false, esterno: false }
      ]
    },
    {
      id: 4,
      nome: "DSA-F",
      color: "#f4a261",
      logo: "",
      giocatori: [
        { nome: "Salvatore Cateniello", capitano: false, esterno: false },
        { nome: "Adriano Ciliberti", capitano: false, esterno: false },
        { nome: "Davide Lucera", capitano: false, esterno: false },
        { nome: "Carlo Pipoli", capitano: false, esterno: false },
        { nome: "Gianluca Catalano", capitano: true, esterno: false },
        { nome: "Giovanni Di Giorgio", capitano: false, esterno: false },
        { nome: "Diego Mancano", capitano: false, esterno: true },
        { nome: "Gerardo Del Viscovo", capitano: false, esterno: false },
        { nome: "Francesco Mogosan", capitano: false, esterno: false },
        { nome: "Andrea Grossano", capitano: false, esterno: false },
      ]
    },
    {
      id: 5,
      nome: "C",
      color: "#8338ec",
      logo: "",
      giocatori: [
        { nome: "Ciro Acampa", capitano: false, esterno: false },
        { nome: "Giovanni Clemente", capitano: true, esterno: false },
        { nome: "Giuseppe Cives", capitano: false, esterno: true },
        { nome: "Nicola Di Gennaro", capitano: false, esterno: false },
        { nome: "Francesco Lacerenza", capitano: false, esterno: false },
        { nome: "Armando Pappani", capitano: false, esterno: false },
        { nome: "Gianpaolo Valenzano", capitano: false, esterno: false },
        { nome: "Alessandro Vetuschi", capitano: false, esterno: false },
        { nome: "Rocco Di Tullio", capitano: false, esterno: false ,}
      ]
    },
    {
      id: 6,
      nome: "D",
      color: "#3b82f6",
      logo: "",
      giocatori: [
        { nome: "Giovanni Campanale", capitano: false, esterno: false },
        { nome: "Giuseppe Cecafosso", capitano: false, esterno: false },
        { nome: "Franceco De Lorenzo", capitano: false, esterno: false },
        { nome: "Daniele Leccese", capitano: false, esterno: false },
        { nome: "Lorenzo Landi", capitano: false, esterno: true },
        { nome: "Matteo Notarangelo", capitano: false, esterno: false },
        { nome: "Antonio Figurelli", capitano: false, esterno: false },
        { nome: "Giuseppe Rubino", capitano: false, esterno: false },
        { nome: "Mattia Vecchini", capitano: true, esterno: false },
        { nome: "Daniele Mazzi", capitano: false, esterno: false},
        { nome: "Jacob Tonti", capitano: false, esterno: false }
      ]
    }
  ],

  classifica: [
    { pos: 1, squadre: "D", punti: 9, g: 3, v: 3, n: 0, s: 0, dr: 10 },
    { pos: 2, squadre: "BSA", punti: 6, g: 3, v: 2, n: 0, s: 1, dr: 5 },
    { pos: 3, squadre: "DSA-F", punti: 6, g: 3, v: 2, n: 0, s: 1, dr: -2 },
    { pos: 4, squadre: "E-B", punti: 3, g: 3, v: 1, n: 0, s: 2, dr: 7 },
    { pos: 5, squadre: "C", punti: 3, g: 3, v: 1, n: 0, s: 2, dr: -4 },
    { pos: 6, squadre: "ASA-A", punti: 0, g: 3, v: 0, n: 0, s: 3, dr: -16 }
  ],
  partite: [
    {
      giornata: 1,
      casa: "DSA-F",
      ospite: "ASA-A",
      giorno: "martedi' 24 marzo",
      risultato: "7-4",
      orario: "16:00",
      marcatori: [
        { nome: "Catalano", squadra: "DSA-F", gol: 2 },
        { nome: "Pipoli", squadra: "DSA-F", gol: 2 },
        { nome: "Mancano", squadra: "DSA-F", gol: 3 },
        { nome: "Allegretti", squadra: "ASA-A", gol: 2 },
        { nome: "Diouf", squadra: "ASA-A", gol: 1 },
        { nome: "Sala", squadra: "ASA-A", gol: 1 },
      ]
    },
    {
      giornata: 1,
      casa: "D",
      ospite: "E-B",
      giorno: "mercoledi' 25 marzo",
      risultato: "5-4",
      orario: "16:00",
      marcatori: [
        { nome: "Leccese", squadra: "D", gol: 2 },
        { nome: "Tonti", squadra: "D", gol: 1 },
        { nome: "Vecchini", squadra: "D", gol: 1 },
        { nome: "Finizio(AG)"},
        { nome: "Lanza", squadra: "E-B", gol: 3 },
        { nome: "Finizio", squadra: "E-B", gol: 1}
      ]
    },
    {
      giornata: 1,
      casa: "C",
      ospite: "BSA",
      giorno: "venerdi' 27 marzo",
      risultato: "2-4",
      orario: "19:00",
      marcatori: [
        { nome: "Piserchia", squadra: "BSA", gol: 3 },
        { nome: "Abbruzzese", squadra: "BSA", gol: 1 },
        { nome: "Clemente", squadra: "C", gol: 1 },
        { nome: "Di Gennaro", squadra: "C", gol: 1 }
      ]
    },
    {
      giornata: 2,
      casa: "D",
      ospite: "C",
      giorno: "lunedi' 30 marzo",
      risultato: "6-1",
      orario: "16:00",
      marcatori: [
        { nome: "Vecchini", squadra: "D", gol: 1 },
        { nome: "Landi", squadra: "D", gol: 3 },
        { nome: "Tonti", squadra: "D", gol: 1 },
        { nome: "Cecafosso", squadra: "D", gol: 1 },
        { nome: "Pappani", squadra: "C", gol: 1 }
      ]
    },
    {
      giornata: 2,
      casa: "ASA-A",
      ospite: "E-B",
      giorno: "lunedi' 30 marzo",
      risultato: "0-11",
      orario: "17:00",
      marcatori: [
        { nome: "Lanza", squadra: "E-B", gol: 6 },
        { nome: "Schiavulli", squadra: "E-B", gol: 2 },
        { nome: "Lavanga", squadra: "E-B", gol: 1 },
        { nome: "Rosania", squadra: "E-B", gol: 1 },
        { nome: "D'Atri", squadra: "E-B", gol: 1 }
      ]
    },
    {
      giornata: 2,
      casa: "BSA",
      ospite: "DSA-F",
      giorno: "martedi' 31 marzo",
      risultato: "9-1",
      orario: "16:00",
      marcatori: [
        { nome: "Piserchia", squadra: "BSA", gol: 4 },
        { nome: "Vinciguerra", squadra: "BSA", gol: 2 },
        { nome: "Stango", squadra: "BSA", gol: 3 },
        { nome: "Catalano", squadra: "DSA-F", gol: 1 }
      ]
    },
     {
      giornata: 3,
      casa: "E-B",
      ospite: "DSA-F",
      giorno: "martedi' 7 aprile",
      risultato: "0-3 (tav.)",
      orario: "16:00",
      marcatori: []
    },
    {
      giornata: 3,
      casa: "C",
      ospite: "ASA-A",
      giorno: "venerdi' 10 aprile",
      risultato: "4-2",
      orario: "18:00",
      marcatori: [
        { nome: "Pappani", squadra: "C", gol: 2 },
        { nome: "Di Gennaro", squadra: "C", gol: 2 },
        { nome: "Pipoli", squadra: "ASA-A", gol: 2 }
      ]
    },
    {
      giornata: 3,
      casa: "D",
      ospite: "BSA",
      giorno: "martedi' 7 aprile",
      risultato: "7-2",
      orario: "18:00",
      marcatori: [
        { nome: "Landi", squadra: "D", gol: 4 },
        { nome: "Tonti", squadra: "D", gol: 1 },
        { nome: "Cecafosso", squadra: "D", gol: 1 },
        { nome: "Leccese", squadra: "D", gol: 1 },
        { nome: "Stango", squadra: "BSA", gol: 2 }
      ]
    },
  {
    giornata: 4,
    casa: "ASA-A",
    ospite: "D",
    giorno: "lunedi' 13 aprile",
    risultato: "",
    orario: "17:00",
    marcatori: []
  },
  {
    giornata: 4,
    casa: "DSA-F",
    ospite: "C",
    giorno: "posticipata a giovedi' 16 aprile",
    risultato: "",
    orario: "18:00",
    marcatori: []
  },
  {
    giornata: 4,
    casa: "E-B",
    ospite: "BSA",
    giorno: "posticipata a sabato 18 aprile",
    risultato: "",
    orario: "19:00",
    marcatori: []
  },
  {
    giornata: 5,
    casa: "E-B",
    ospite: "C",
    giorno: "lunedi' 20 aprile",
    risultato: "",
    orario: "16:00",
    marcatori: []
  },
  {
    giornata: 5,
    casa: "DSA-F",
    ospite: "D",
    giorno: "lunedi' 20 aprile",
    risultato: "",
    orario: "17:00",
    marcatori: []
  },
  {
    giornata: 5,
    casa: "ASA-A",
    ospite: "BSA",
    giorno: "lunedi' 20 aprile",
    risultato: "",
    orario: "18:00",
    marcatori: []
  }
],
  statistiche: {
    migliorMarcatore: [
      { nome: "Emanuele Lanza", squadra: "E-B", gol: 8 },
      { nome: "Emanuele Piserchia", squadra: "BSA", gol: 7 },
      { nome: "Lorenzo Landi", squadra: "D", gol: 7 },
      { nome: "Christian Stango", squadra: "BSA", gol: 5 },
      { nome: "Gianluca Catalano", squadra: "DSA-F", gol: 3 },
      { nome: "Diego Mancano", squadra: "DSA-F", gol: 3 },
      { nome: "Jacob Tonti", squadra: "D", gol: 3 },
      { nome: "Daniele Leccese", squadra: "D", gol: 3 },
      { nome: "Armando Pappani", squadra: "C", gol: 3 },
      { nome: "Nicola Di Gennaro", squadra: "C", gol: 3 },
      { nome: "Mattia Vecchini", squadra: "D", gol: 2 },
      { nome: "Carlo Pipoli", squadra: "DSA-F", gol: 2 },
      { nome: "Marco Pipoli", squadra: "ASA-A", gol: 2 },
      { nome: "Luca Allegretti", squadra: "ASA-A", gol: 2 },
      { nome: "Emanuele Schiavulli", squadra: "E-B", gol: 2 },
      { nome: "Giuseppe Cecafosso", squadra: "D", gol: 2 },
      { nome: "Federico Sala", squadra: "ASA-A", gol: 1 },
      { nome: "Luca Abbruzzese", squadra: "BSA", gol: 1 },
      { nome: "Ibrahima Diouf", squadra: "ASA-A", gol: 1 },
      { nome: "Alberto Finizio", squadra: "E-B", gol: 1 },
      { nome: "Giovanni Clemente", squadra: "C", gol: 1 },
      { nome: "Rodolfo Rosania", squadra: "E-B", gol: 1 },
      { nome: "Simone Lavanga", squadra: "E-B", gol: 1 },
      { nome: "Daniele D'Atri", squadra: "E-B", gol: 1 },
    ],
    cleanSheets: []
  }
}

// Tournament data - Triennio
export const triennioData = {
  squadre: [
    {
      id: 1,
      nome: "D",
      color: "#3b82f6",
      logo: "",
      giocatori: [
        { nome: "Lorenzo Addivinello", capitano: true, esterno: false },
        { nome: "Alberto Biasco", capitano: false, esterno: false },
        { nome: "Francesco Filaseta", capitano: false, esterno: false },
        { nome: "Leonardo Caserta", capitano: false, esterno: false },
        { nome: "Gabriele Galiano", capitano: false, esterno: false },
        { nome: "Francesco Rignanese", capitano: false, esterno: true },
        { nome: "Manuel Scopece", capitano: false, esterno: false },
        { nome: "Francesco Ciavarella", capitano: false, esterno: false },
        { nome: "Corrado Guadagno", capitano: false, esterno: false },
        { nome: "Francesco Lo Vasto", capitano: false, esterno: false }
      ]
    },
    {
      id: 2,
      nome: "ESA-DSA",
      color: "#ef4444",
      logo: "",
      giocatori: [
        { nome: "Gabriele Cocinelli", capitano: true, esterno: false },
        { nome: "Giorgio Penna", capitano: false, esterno: false },
        { nome: "Giovanni Padalino", capitano: false, esterno: false },
        { nome: "Manuel Rainone", capitano: false, esterno: false },
        { nome: "Domenico Anzivino", capitano: false, esterno: false },
        { nome: "Fabio Conte", capitano: false, esterno: false },
        { nome: "Francesco Pasqua", capitano: false, esterno: false },
        { nome: "Alessio Schena", capitano: false, esterno: false },
        { nome: "Giuseppe Gesualdi", capitano: false, esterno: false },
        { nome: "Sabino Vitrani", capitano: false, esterno: false },
        { nome: "Mario Rubano", capitano: false, esterno: false },
        { nome: "Andrea Sabbetti", capitano: false, esterno: true },
        { nome: "Leonardo Cavaliere", capitano: false, esterno: false }
      ]
    },
    {
      id: 3,
      nome: "FSA-B",
      color: "#10b981",
      logo: "data:image/png;base64,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ZrjPRzDvjdjPqOhU26Z4lLnS2x0N8skVbVtbiOaF3sw4j9ofuVf0UHL4bi5n8aCf+fxJFGVdR/Dlo33X27OsNYSOZVV3udGelNS5Y3Hmep+a0I8zkoikUY9VEOSqKS+BqssnZLmm9sIiLcYBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/2Q==",
      giocatori: [
        { nome: "Sergio Barbato", capitano: true, esterno: false },
        { nome: "Giovanni Pallia", capitano: false, esterno: false },
        { nome: "Antonio Di Vito", capitano: false, esterno: false },
        { nome: "Christian Petruccelli", capitano: false, esterno: false },
        { nome: "Vittorio Capozzi", capitano: false, esterno: false },
        { nome: "Gabriel Minese", capitano: false, esterno: false },
        { nome: "Alessandro Clemente", capitano: false, esterno: false },
        { nome: "Maksym Kurysh", capitano: false, esterno: false },
        { nome: "Rocco Pasquariello", capitano: false, esterno: false },
        { nome: "Francesco Antenozio", capitano: false, esterno: false },
        { nome: "Leonardo Rollo", capitano: false, esterno: false },
        { nome: "Francesco Colapietro", capitano: false, esterno: false },
        { nome: "Marco Iazzetti", capitano: false, esterno: false },
        { nome: "Domenico Iascone", capitano: false, esterno: false },
        { nome: "Federico Mariella", capitano: false, esterno: false },
        { nome: "Luciano Colangelo", capitano: false, esterno: true }
      ]
    },
    {
      id: 4,
      nome: "ASA-C",
      color: "#8b5cf6",
      logo: "",
      giocatori: [
        { nome: "Mattia Giordano", capitano: false, esterno: false },
        { nome: "Giuseppe Guadagno", capitano: true, esterno: false },
        { nome: "Simone Petrillo", capitano: false, esterno: false },
        { nome: "Alessandro Kasa", capitano: false, esterno: false },
        { nome: "Alessandro Di Gioia", capitano: false, esterno: false },
        { nome: "Paolo La Marca", capitano: false, esterno: false },
        { nome: "Andrea Maddalena", capitano: false, esterno: false },
        { nome: "Raffaele Curato", capitano: false, esterno: false },
        { nome: "Gianluca Abbruzzese", capitano: false, esterno: false },
        { nome: "Davide Cibelli", capitano: false, esterno: false },
        { nome: "Vulgo Minervini", capitano: false, esterno: false },
        { nome: "Nicolo Giannese", capitano: false, esterno: false },
        { nome: "Gerardo Bonassisa", capitano: false, esterno: false },
        { nome: "Armando Sica", capitano: false, esterno: false },
        { nome: "Salvatore Triventi", capitano: false, esterno: false },
        { nome: "Michele Macchiarella", capitano: false, esterno: false },
        { nome: "Angelo Capuano", capitano: false, esterno: true }
      ]
    },
    {
      id: 5,
      nome: "CSA",
      color: "#f59e0b",
      logo: "",
      giocatori: [
        { nome: "Alfonso Berlangeri", capitano: false, esterno: false },
        { nome: "Domenico Russo", capitano: false, esterno: false },
        { nome: "Giovanni Scirano", capitano: false, esterno: false },
        { nome: "Samuele Saponaro", capitano: false, esterno: false },
        { nome: "Vincenzo D'Alessandro", capitano: false, esterno: false },
        { nome: "Gaetano Melillo", capitano: false, esterno: false },
        { nome: "Massimiliano Di Fonso", capitano: false, esterno: true },
        { nome: "Filippo Ciarambino", capitano: false, esterno: false },
        { nome: "Emanuele Lorusso", capitano: false, esterno: false },
        { nome: "Di Girolama Abubakar", capitano: false, esterno: false },
        { nome: "Gabriele Santamaria", capitano: true, esterno: false },
        { nome: "Angelo La Porta", capitano: false, esterno: false }
      ]
    },
    {
      id: 6,
      nome: "E-BSA",
      color: "#06b6d4",
      logo: "",
      giocatori: [
        { nome: "Gabriele Accarino", capitano: false, esterno: false },
        { nome: "Andrea Annese", capitano: false, esterno: false },
        { nome: "Antonio D'amore", capitano: false, esterno: true },
        { nome: "Nicola D'andrea", capitano: false, esterno: false },
        { nome: "Domenico Casanelli", capitano: false, esterno: false },
        { nome: "Davide Grasso", capitano: false, esterno: false },
        { nome: "Daniele Guarino", capitano: false, esterno: false },
        { nome: "Enrico Gervasio", capitano: false, esterno: false },
        { nome: "Samuele Leccese", capitano: false, esterno: false },
        { nome: "Giuseppe Perla", capitano: false, esterno: false },
        { nome: "Raffaele Rainone", capitano: false, esterno: false },
        { nome: "Mario Saracino", capitano: true, esterno: false },
        { nome: "Alessandro Tisi", capitano: false, esterno: false }
      ]
    },
    {
      id: 7,
      nome: "A",
      color: "#ff6b6b",
      logo: "",
      giocatori: [
        { nome: "Matteo Ambrosino", capitano: false, esterno: false },
        { nome: "Simone Castrucci", capitano: false, esterno: false },
        { nome: "Carlo Di Gioia", capitano: true, esterno: false },
        { nome: "Aldo De Michele", capitano: false, esterno: false },
        { nome: "Michele De Leonardis", capitano: false, esterno: false },
        { nome: "Davide D'Onofrio", capitano: false, esterno: false },
        { nome: "Christian Di Sibbio", capitano: false, esterno: true },
        { nome: "Alfonso Lombardi", capitano: false, esterno: false },
        { nome: "Raffaele Natale", capitano: false, esterno: false },
        { nome: "Flavio Rutica", capitano: false, esterno: false },
        { nome: "Marco Soragnese", capitano: false, esterno: false }
      ]
    }
  ],
  classifica: [
    { pos: 1, squadre: "CSA", punti: 6, g: 2, v: 2, n: 0, s: 0, dr: 8 },
    { pos: 2, squadre: "E-BSA", punti: 6, g: 3, v: 2, n: 0, s: 1, dr: 5 },
    { pos: 3, squadre: "FSA-B", punti: 5, g: 3, v: 1, n: 2, s: 0, dr: 7 },
    { pos: 4, squadre: "D", punti: 3, g: 2, v: 1, n: 0, s: 1, dr: -3 },
    { pos: 5, squadre: "ASA-C", punti: 3, g: 2, v: 1, n: 0, s: 1, dr: -5 },
    { pos: 6, squadre: "ESA-DSA", punti: 1, g: 3, v: 0, n: 1, s: 2, dr: -7 },
    { pos: 7, squadre: "A", punti: 1, g: 3, v: 0, n: 1, s: 2, dr: -5 }
  ],
  partite: [
    {
      giornata: 1,
      casa: "Riposa",
      ospite: "D",
      giorno: "",
      risultato: "",
      marcatori: []
    },
    {
      giornata: 1,
      casa: "E-BSA",
      ospite: "CSA",
      giorno: "giovedi' 26 marzo",
      orario: "18:00",
      risultato: "2-4",
      marcatori: [
        { nome: "D'Andrea", squadra: "E-BSA", gol: 1 },
        { nome: "Annese", squadra: "E-BSA", gol: 1 },
        { nome: "Saponaro", squadra: "CSA", gol: 3 },
        { nome: "Berlangeri", squadra: "CSA", gol: 1 }
      ]
    },
    {
      giornata: 1,
      casa: "FSA-B",
      ospite: "ESA-DSA",
      giorno: "venerdi' 27 marzo",
      orario: "16:00",
      risultato: "3-3",
      marcatori: [
        { nome: "Di Vito", squadra: "FSA-B", gol: 1 },
        { nome: "Barbato", squadra: "FSA-B", gol: 1 },
        { nome: "Iascone", squadra: "FSA-B", gol: 1 },
        { nome: "Sabbetti", squadra: "ESA-DSA", gol: 2 },
        { nome: "Gesualdi", squadra: "ESA-DSA", gol: 1 },
      ]
    },
    {
      giornata: 1,
      casa: "ASA-C",
      ospite: "A",
      giorno: "venerdi' 27 marzo",
      orario: "17:00",
      risultato: "3-1",
      marcatori: [
        { nome: "Maddalena", squadra: "ASA-C", gol: 1 },
        { nome: "Di Gioia", squadra: "ASA-C", gol: 1 },
        { nome: "Guadagno", squadra: "ASA-C", gol: 1 },
        { nome: "Ambrosino", squadra: "A", gol: 1 }
      ]
    },
    {
      giornata: 2,
      casa: "A",
      ospite: "FSA-B",
      giorno: "mercoledi' 1 aprile",
      orario: "16:00",
      risultato: "4-4",
      marcatori: [
        { nome: "Barbato", squadra: "FSA-B", gol: 1 },
        { nome: "Rollo", squadra: "FSA-B", gol: 1 },
        { nome: "Capozzi", squadra: "FSA-B", gol: 1 },
        { nome: "Colapietro", squadra: "FSA-B", gol: 1 },
        { nome: "Ambrosino", squadra: "A", gol: 3 },
        { nome: "Soragnese", squadra: "A", gol: 1 }
      ]
    },
    {
      giornata: 2,
      casa: "CSA",
      ospite: "D",
      giorno: "mercoledi' 8 aprile",
      orario: "19:00",
      risultato: "6-0",
      marcatori: [
        { nome: "Saponaro", squadra: "CSA", gol: 4 },
        { nome: "Santamaria", squadra: "CSA", gol: 1 },
        { nome: "Scirano", squadra: "CSA", gol: 1 }
      ]
    },
    {
      giornata: 2,
      casa: "E-BSA",
      ospite: "ESA-DSA",
      giorno: "venerdi' 3 aprile",
      orario: "17:00",
      risultato: "5-1",
      marcatori: [
        { nome: "Leccese", squadra: "E-BSA", gol: 2 },
        { nome: "Accarino", squadra: "E-BSA", gol: 1 },
        { nome: "Perla", squadra: "E-BSA", gol: 1 },
        { nome: "Saracino", squadra: "E-BSA", gol: 1 },
        { nome: "Gesualdi", squadra: "ESA-DSA", gol: 1 }
      ]
    },
    {
      giornata: 3,
      casa: "ASA-C",
      ospite: "FSA-B",
      giorno: "mercoledi' 8 aprile",
      orario: "18:00",
      risultato: "1-8",
      marcatori: [
        { nome: "Barbato", squadra: "FSA-B", gol: 2 },
        { nome: "Rollo", squadra: "FSA-B", gol: 2 },
        { nome: "Colapietro", squadra: "FSA-B", gol: 1 },
        { nome: "Colangelo", squadra: "FSA-B", gol: 1 },
        { nome: "Capozzi", squadra: "FSA-B", gol: 1 },
        { nome: "Di Vito", squadra: "FSA-B", gol: 1 },
        { nome: "Minervini", squadra: "ASA-C", gol: 1 }
      ]
    },
    {
      giornata: 3,
      casa: "E-BSA",
      ospite: "A",
      giorno: "venerdi' 10 aprile",
      orario: "16:00",
      risultato: "3-0 (tav.)",
      marcatori: []
    },
    {
      giornata: 3,
      casa: "D",
      ospite: "ESA-DSA",
      giorno: "venerdi' 10 aprile",
      orario: "17:00",
      risultato: "8-5",
      marcatori: [
        { nome: "Addivinello", squadra: "D", gol: 4 },
        { nome: "Guadagno", squadra: "D", gol: 2 },
        { nome: "Caserta", squadra: "D", gol: 1 },
        { nome: "Rignanese", squadra: "D", gol: 1 },
        { nome: "Gesualdi", squadra: "ESA-DSA", gol: 3 },
        { nome: "Sabbetti", squadra: "ESA-DSA", gol: 1 },
        { nome: "Rubano", squadra: "ESA-DSA", gol: 1 }
      ]
    },
  {
    giornata: 4,
    casa: "Riposa",
    ospite: "FSA-B",
    giorno: "",
    risultato: "",
    marcatori: []
  },
  {
    giornata: 4,
    casa: "ASA-C",
    ospite: "E-BSA",
    giorno: "mercoledi' 15 aprile",
    orario: "16:00",
    risultato: "",
    marcatori: []
  },
  {
    giornata: 4,
    casa: "CSA",
    ospite: "ESA-DSA",
    giorno: "mercoledi' 15 aprile",
    orario: "18:00",
    risultato: "",
    marcatori: []
  },
  {
    giornata: 4,
    casa: "A",
    ospite: "D",
    giorno: "anticipata a lunedi' 13 aprile",
    orario: "16:00",
    risultato: "",
    marcatori: []
  },
  {
    giornata: 5,
    casa: "Riposa",
    ospite: "ESA-DSA",
    giorno: "",
    risultato: "",
    marcatori: []
  },
  {
    giornata: 5,
    casa: "ASA-C",
    ospite: "D",
    giorno: "mercoledi' 22 aprile",
    orario: "16:00",
    risultato: "",
    marcatori: []
  },
  {
    giornata: 5,
    casa: "E-BSA",
    ospite: "FSA-B",
    giorno: "mercoledi' 22 aprile",
    orario: "16:00",
    risultato: "",
    marcatori: []
  },
  {
    giornata: 5,
    casa: "CSA",
    ospite: "A",
    giorno: "venerdi' 24 aprile",
    orario: "17:00",
    risultato: "",
    marcatori: []
  },
  {
    giornata: 6,
    casa: "Riposa",
    ospite: "E-BSA",
    giorno: "",
    risultato: "",
    marcatori: []
  },
  {
    giornata: 6,
    casa: "A",
    ospite: "ESA-DSA",
    giorno: "lunedi' 27 aprile",
    orario: "16:00",
    risultato: "",
    marcatori: []
  },
  {
    giornata: 6,
    casa: "ASA-C",
    ospite: "CSA",
    giorno: "lunedi' 27 aprile",
    orario: "17:00",
    risultato: "",
    marcatori: []
  },
  {
    giornata: 6,
    casa: "FSA-B",
    ospite: "D",
    giorno: "lunedi' 27 aprile",
    orario: "18:00",
    risultato: "",
    marcatori: []
  },
  {
    giornata: 7,
    casa: "Riposa",
    ospite: "A",
    giorno: "",
    risultato: "",
    marcatori: []
  },
  {
    giornata: 7,
    casa: "ASA-C",
    ospite: "ESA-DSA",
    giorno: "mercoledi' 29 aprile",
    orario: "16:00",
    risultato: "",
    marcatori: []
  },
  {
    giornata: 7,
    casa: "D",
    ospite: "E-BSA",
    giorno: "mercoledi' 29 aprile",
    orario: "18:00",
    risultato: "",
    marcatori: []
  },
  {
    giornata: 7,
    casa: "CSA",
    ospite: "FSA-B",
    giorno: "giovedi' 30 aprile",
    orario: "18:00",
    risultato: "",
    marcatori: []
  }
  ],
  statistiche: {
    migliorMarcatore: [
      { nome: "Samuele Saponaro", squadra: "CSA", gol: 7 },
      { nome: "Giuseppe Gesualdi", squadra: "ESA-DSA", gol: 5 },
      { nome: "Matteo Ambrosino", squadra: "A", gol: 4 },
      { nome: "Lorenzo Addivinello", squadra: "D", gol: 4 },
      { nome: "Sergio Barbato", squadra: "FSA-B", gol: 4 },
      { nome: "Leonardo Rollo", squadra: "FSA-B", gol: 3 },
      { nome: "Andrea Sabbetti", squadra: "ESA-DSA", gol: 3 },
      { nome: "Antonio Di Vito", squadra: "FSA-B", gol: 2 },
      { nome: "Vittorio Capozzi", squadra: "FSA-B", gol: 2 },
      { nome: "Francesco Colapietro", squadra: "FSA-B", gol: 2 },
      { nome: "Samuele Leccese", squadra: "E-BSA", gol: 2 },
      { nome: "Corrado Guadagno", squadra: "D", gol: 2 },
      { nome: "Alfonso Berlangeri", squadra: "CSA", gol: 1 },
      { nome: "Nicola D'Andrea", squadra: "E-BSA", gol: 1 },
      { nome: "Giuseppe Perla", squadra: "E-BSA", gol: 1 },
      { nome: "Mario Saracino", squadra: "E-BSA", gol: 1 },
      { nome: "Alessandro Di Gioia", squadra: "ASA-C", gol: 1 },
      { nome: "Domenico Iascone", squadra: "FSA-B", gol: 1 },
      { nome: "Gabriele Accarino", squadra: "E-BSA", gol: 1 },
      { nome: "Andrea Annese", squadra: "E-BSA", gol: 1 },
      { nome: "Andrea Maddalena", squadra: "ASA-C", gol: 1 },
      { nome: "Giuseppe Guadagno", squadra: "ASA-C", gol: 1 },
      { nome: "Marco Soragnese", squadra: "A", gol: 1 },
      { nome: "Luciano Colangelo", squadra: "FSA-B", gol: 1 },
      { nome: "Vulgo Minervini", squadra: "ASA-C", gol: 1 },
      { nome: "Gabriele Santamaria", squadra: "CSA", gol: 1 },
      { nome: "Giovanni Scirano", squadra: "CSA", gol: 1 },
      { nome: "Leonardo Caserta", squadra: "D", gol: 1 },
      { nome: "Francesco Rignanese", squadra: "D", gol: 1 },
      { nome: "Mario Rubano", squadra: "ESA-DSA", gol: 1 },
    ],
    cleanSheets: [
      { nome: "Emanuele Lorusso", squadra: "CSA", cleanSheets: 1 }
    ]
  }
}
