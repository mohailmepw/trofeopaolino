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
        { nome: "Francesco Inchigoli", capitano: false, esterno: false },
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
        { nome: "Daniele Mazzi", capitano: false, esterno: false },
        { nome: "Matteo Notarangelo", capitano: false, esterno: false },
        { nome: "Antonio Figurelli", capitano: false, esterno: false },
        { nome: "Giuseppe Rubino", capitano: false, esterno: false },
        { nome: "Mattia Vecchini", capitano: true, esterno: false },
        { nome: "Jacob Tonti", capitano: false, esterno: false }
      ]
    }
  ],

  classifica: [
    { pos: 1, squadre: "BSA", punti: 6, g: 2, v: 2, n: 0, s: 0, dr: 10 },
    { pos: 2, squadre: "D",   punti: 6, g: 2, v: 2, n: 0, s: 0, dr: 5 },
    { pos: 3, squadre: "E-B",   punti: 3, g: 2, v: 1, n: 0, s: 1, dr: 10 },
    { pos: 4, squadre: "DSA-F",   punti: 3, g: 2, v: 1, n: 0, s: 1, dr: -5 },
    { pos: 5, squadre: "C",   punti: 0, g: 2, v: 0, n: 0, s: 2, dr: -6 },
    { pos: 6, squadre: "ASA-A",     punti: 0, g: 2, v: 0, n: 0, s: 2, dr: -14 }
  ],
  partite: [
    {
      giornata: 1,
      casa: "DSA",
      ospite: "ASA-A",
      giorno: "martedi' 24 marzo",
      risultato: "7-4",
      orario: "16:00",
      marcatori: [
        { nome: "Catalano", squadra: "DSA", gol: 2 },
        { nome: "Pipoli", squadra: "DSA", gol: 2 },
        { nome: "Mancano", squadra: "DSA", gol: 3 },
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
        { nome: "Catalano", squadra: "DSA", gol: 1 }
      ]
    },
     {
      giornata: 3,
      casa: "E-B",
      ospite: "DSA-F",
      giorno: "martedi' 7 aprile",
      risultato: "",
      orario: "16:00",
      marcatori: []
    },
    {
      giornata: 3,
      casa: "C",
      ospite: "ASA-A",
      giorno: "rinviata a data da destinarsi",
      risultato: "",
      orario: "17:00",
      marcatori: []
    },
    {
      giornata: 3,
      casa: "D",
      ospite: "BSA",
      giorno: "martedi' 7 aprile",
      risultato: "",
      orario: "18:00",
      marcatori: []
    },
    {
      giornata: 4,
      casa: "ASA-A",
      ospite: "D",
      giorno: "lunedi' 13 aprile",
      risultato: "",
      orario: "16:00",
      marcatori: []
    },
    {
      giornata: 4,
      casa: "DSA-F",
      ospite: "C",
      giorno: "lunedi' 13 aprile",
      risultato: "",
      orario: "17:00",
      marcatori: []
    },
    {
      giornata: 4,
      casa: "E-B",
      ospite: "BSA",
      giorno: "lunedi' 13 aprile",
      risultato: "",
      orario: "18:00",
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
    },
  ],
  statistiche: {
    migliorMarcatore: [
      { nome: "Emanuele Lanza", squadra: "E-B", gol: 9 },
      { nome: "Emanuele Piserchia", squadra: "BSA", gol: 7 },
      { nome: "Christian Stango", squadra: "BSA", gol: 3 },
      { nome: "Diego Mancano", squadra: "DSA", gol: 3 },
      { nome: "Gianluca Catalano", squadra: "DSA-F", gol: 3 },
      { nome: "Lorenzo Landi", squadra: "D", gol: 3 },
      { nome: "Luca Allegretti", squadra: "ASA-A.", gol: 2 },
      { nome: "Emanuele Schiavulli", squadra: "E-B", gol: 2 },
      { nome: "Carlo Pipoli", squadra: "DSA-F", gol: 2 },
      { nome: "Daniele Leccese", squadra: "D", gol: 2 },
      { nome: "Jacob Tonti", squadra: "D", gol: 2 },
      { nome: "Mattia Vecchini", squadra: "D", gol: 2 },
      {nome: "Federico Sala", squadra: "ASA-A", gol: 1 },
      { nome: "Luca Abbruzzese", squadra: "BSA", gol: 1 },
      { nome: "Ibrahima Diouf", squadra: "ASA-A", gol: 1 },
      { nome: "Alberto Finizio", squadra: "E-B", gol: 1 },
      { nome: "Giovanni Clemente", squadra: "C", gol: 1 },
      { nome: "Nicola Di Gennaro", squadra: "C", gol: 1 },
      { nome: "Rodolfo Rosania", squadra: "E-B", gol: 1 },
      { nome: "Armando Pappani", squadra: "C", gol: 1 },
      { nome: "Emanuele Schiavulli", squadra: "E-B", gol: 1 },
      { nome: "Giuseppe Cecafosso", squadra: "D", gol: 1 },
      { nome: "Simone Lavanga", squadra: "E-B", gol: 1 },
      { nome: "Daniele D'Atri", squadra: "E-B", gol: 1 },
      ],
    cleanSheets: [
      { nome: "Gabriele Lanotte", squadra: "E-B", partite: 1 },
    ]
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
      logo: "",
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
    { pos: 1, squadre: "E-BSA",       punti: 3, g: 2, v: 1, n: 0, s: 0, dr: 2 },
    { pos: 2, squadre: "CSA", punti: 3, g: 1, v: 1, n: 0, s: 0, dr: 2 },
    { pos: 3, squadre: "ASA-C",   punti: 3, g: 1, v: 1, n: 0, s: 1, dr: 2 },
    { pos: 4, squadre: "FSA-B",   punti: 2, g: 2, v: 0, n: 2, s: 0, dr: 0 },
    { pos: 5, squadre: "A",     punti: 1, g: 2, v: 0, n: 1, s: 1, dr: -2 },
    { pos: 6, squadre: "ESA-DSA",   punti: 1, g: 2, v: 0, n: 1, s: 1, dr: -4 },
    { pos: 7, squadre: "D",       punti: 0, g: 0, v: 0, n: 0, s: 0, dr: 0 }
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
      casa: "Riposa",
      ospite: "ASA-C",
      giorno: "",
      risultato: "",
      marcatori: []
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
      giorno: "Rinviata a mercoledi' 8 aprile",
      orario: "18:00",
      risultato: "",
      marcatori: []
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
      casa: "Riposa",
      ospite: "CSA",
      giorno: "",
      risultato: "",
      marcatori: []
    },
    {
      giornata: 3,
      casa: "ASA-C",
      ospite: "FSA-B",
      giorno: "mercoledi' 8 aprile",
      orario: "18:00",
      risultato: "",
      marcatori: []
    },
    {
      giornata: 3,
      casa: "E-BSA",
      ospite: "A",
      giorno: "venerdi' 10 aprile",
      orario: "16:00",
      risultato: "",
      marcatori: []
    },
    {
      giornata: 3,
      casa: "D",
      ospite: "ESA-DSA",
      giorno: "venerdi' 10 aprile",
      orario: "17:00",
      risultato: "",
      marcatori: []
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
      giorno: "venerdi' 17 aprile",
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
      { nome: "Matteo Ambrosino", squadra: "A", gol: 4 },
      { nome: "Samuele Saponaro", squadra: "CSA", gol: 3 },
      { nome: "Andrea Sabbetti", squadra: "ESA-DSA", gol: 2 },
      { nome: "Sergio Barbato", squadra: "FSA-B", gol: 2 },
      { nome: "Giuseppe Gesualdi", squadra: "ESA-DSA", gol: 2 },
      { nome: "Samuele Leccese", squadra: "ESA-DSA", gol: 2 },
      { nome: "Alfonso Berlangeri", squadra: "CSA", gol: 1 },
      { nome: "Nicola D'Andrea", squadra: "E-BSA", gol: 1 },
      { nome: "Antonio Di Vito", squadra: "FSA-B", gol: 1 },
      { nome: "Nicola D'Andrea", squadra: "E-BSA", gol: 1 },
      { nome: "Giuseppe Perla", squadra: "E-BSA", gol: 1 },
      { nome: "Mario Saracino", squadra: "E-BSA", gol: 1 },
      { nome: "Alessandro Di Gioia", squadra: "ASA-C", gol: 1 },
      { nome: "Domenico Iascone", squadra: "FSA-B", gol: 1 },
      { nome: "Vittorio Capozzi", squadra: "FSA-B", gol: 1 },
      { nome: "Gabriele Accarino", squadra: "E-BSA", gol: 1 },
      { nome: "Leonardo Rollo", squadra: "FSA-B", gol: 1 },
      { nome: "Francesco Colapietro", squadra: "FSA-B", gol: 1 },
      { nome: "Andrea Annese", squadra: "E-BSA", gol: 1 },
      { nome: "Andrea Maddalena", squadra: "ASA-C", gol: 1 },
      { nome: "Giuseppe Guadagno", squadra: "ASA-C", gol: 1 },
  
    ],
    cleanSheets: []
  }
}
