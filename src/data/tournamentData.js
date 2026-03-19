// Tournament data - Biennio
export const biennioData = {
  squadre: [
    {
      id: 1,
      nome: "ASA-A",
      color: "#1e90ff",
      logo: "",
      giocatori: [
        { nome: "Mohamed Amlal", capitano: true },
        { nome: "Luca Allegretti", capitano: false, jolly: true },
        { nome: "Pierpaolo Anguilano", capitano: false },
        { nome: "Lorenzo Bonavoglia", capitano: false },
        { nome: "Francesco Di Biase", capitano: false },
        { nome: "Ibrahima Diouf", capitano: false },
        { nome: "Vito Levantaci", capitano: false },
        { nome: "Marco Pipoli", capitano: false },
        { nome: "Federico Sala", capitano: false },
        { nome: "Angelo Solimine", capitano: false },
        { nome: "Vito Turchiarelli", capitano: false }
      ]
    },
    {
      id: 2,
      nome: "E-B",
      color: "#e63946",
      logo: "",
      giocatori: [
        { nome: "Marco Delli Carri", capitano: false },
        { nome: "Edoardo Di Leo", capitano: false },
        { nome: "Daniele D'Atri", capitano: false },
        { nome: "Alberto Finizio", capitano: true },
        { nome: "Francesco Inchigoli", capitano: false },
        { nome: "Gabriele Lanotte", capitano: false },
        { nome: "Emanuele Lanza", capitano: false },
        { nome: "Simone Lavanga", capitano: false },
        { nome: "Lorenzo Menduni", capitano: false },
        { nome: "Michele Milano", capitano: false },
        { nome: "Rodolfo Rosania", capitano: false },
        { nome: "Emanuele Schiavulli", capitano: false }
      ]
    },
    {
      id: 3,
      nome: "BSA",
      color: "#e63946",
      logo: "",
      giocatori: [
        { nome: "Luca Abbruzzese", capitano: false },
        { nome: "Emanuele Mercaldi", capitano: false },
        { nome: "Marco Puopolo", capitano: false },
        { nome: "Emanuele Piserchia", capitano: true },
        { nome: "Mattia Rinaldi", capitano: false },
        { nome: "Nicolas Spedicato", capitano: false },
        { nome: "Christian Stango", capitano: false },
        { nome: "Giuseppe Tanzi", capitano: false },
        { nome: "Salvatore Vinciguerra", capitano: false }
      ]
    },
    {
      id: 4,
      nome: "CSA",
      color: "#2a9d8f",
      logo: "",
      giocatori: [
        { nome: "Gabriele Frisoli", capitano: false },
        { nome: "Davide Corcelli", capitano: false },
        { nome: "Giacomo Castellabate", capitano: true },
        { nome: "Emanuele De Laurentis", capitano: false },
        { nome: "Mattia La Torre", capitano: false },
        { nome: "Antonio Di Tuccio", capitano: false },
        { nome: "Antonio Gisoldo", capitano: false },
        { nome: "Cesare Esposito", capitano: false },
        { nome: "Gabriele Clemente", capitano: false },
        { nome: "Rocco Caprarella", capitano: false },
        { nome: "Gabriel Ippolito", capitano: false },
        { nome: "Antonio Rinaldi", capitano: false },
        { nome: "Simone D'Alessandro", capitano: false },
        { nome: "Fahhim Ali", capitano: false }
      ]
    },
    {
      id: 5,
      nome: "DSA-F",
      color: "#f4a261",
      logo: "",
      giocatori: [
        { nome: "Salvatore Cateniello", capitano: false },
        { nome: "Andrea Grossano", capitano: false },
        { nome: "Vito Carrillo", capitano: false },
        { nome: "Carlo Pipoli", capitano: false },
        { nome: "Gianluca Catalano", capitano: true },
        { nome: "Giovanni Di Giorgio", capitano: false },
        { nome: "Diego Mancano", capitano: false },
        { nome: "Gerardo Del Viscovo", capitano: false },
        { nome: "Luigi La Manna", capitano: false }
      ]
    },
    {
      id: 6,
      nome: "C",
      color: "#8338ec",
      logo: "",
      giocatori: [
        { nome: "Ciro Acampa", capitano: false },
        { nome: "Giovanni Clemente", capitano: true },
        { nome: "Giuseppe Cives", capitano: false },
        { nome: "Nicola Di Gennaro", capitano: false },
        { nome: "Francesco Lacerenza", capitano: false },
        { nome: "Armando Pappani", capitano: false },
        { nome: "Gianpaolo Valenzano", capitano: false },
        { nome: "Alessandro Vetuschi", capitano: false }
      ]
    },
    {
      id: 7,
      nome: "D",
      color: "#3b82f6",
      logo: "",
      giocatori: [
        { nome: "Giovanni Campanale", capitano: false },
        { nome: "Giuseppe Cecafosso", capitano: false },
        { nome: "Franceco De Lorenzo", capitano: false },
        { nome: "Daniele Leccese", capitano: false },
        { nome: "Lorenzo Landi", capitano: false },
        { nome: "Daniele Mazzi", capitano: false },
        { nome: "Matteo Notarangelo", capitano: false },
        { nome: "Antonio Figurelli", capitano: false },
        { nome: "Giuseppe Rubino", capitano: false },
        { nome: "Mattia Vecchini", capitano: true },
        { nome: "Jacob Tonti", capitano: false }
      ]
    }
  ],

  classifica: [
    { pos: 1, squadre: "ASA-A", p: 0, g: 0, v: 0, n: 0, p: 0, dr: 0 },
    { pos: 2, squadre: "E-B", p: 0, g: 0, v: 0, n: 0, p: 0, dr: 0 },
    { pos: 3, squadre: "BSA", p: 0, g: 0, v: 0, n: 0, p: 0, dr: 0 },
    { pos: 4, squadre: "CSA", p: 0, g: 0, v: 0, n: 0, p: 0, dr: 0 },
    { pos: 5, squadre: "DSA-F", p: 0, g: 0, v: 0, n: 0, p: 0, dr: 0 },
    { pos: 6, squadre: "C", p: 0, g: 0, v: 0, n: 0, p: 0, dr: 0 },
    { pos: 7, squadre: "D", p: 0, g: 0, v: 0, n: 0, p: 0, dr: 0 }
  ],
  partite: [],
  statistiche: {
    migliorMarcatore: [],
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
          { nome: "Lorenzo Addivinello", capitano: true },
          { nome: "Alberto Biasco", capitano: false },
          { nome: "Francesco Filaseta", capitano: false },
          { nome: "Leonardo Caserta", capitano: false },
          { nome: "Gabriele Galiano", capitano: false },
          { nome: "Francesco Rignanese", capitano: false },
          { nome: "Manuel Scopece", capitano: false },
          { nome: "Francesco Ciavarella", capitano: false },
          { nome: "Corrado Guadagno", capitano: false },
          { nome: "Francesco Lo Vasto", capitano: false }
        ]
      },
      {
        id: 2,
        nome: "ESA-DSA",
        color: "#ef4444",
        logo: "",
        giocatori: [
          { nome: "Gabriele Coccinelli", capitano: true },
          { nome: "Giorgio Penna", capitano: false },
          { nome: "Giovanni Padalino", capitano: false },
          { nome: "Manuel Rainone", capitano: false },
          { nome: "Domenico Anzivino", capitano: false },
          { nome: "Fabio Conte", capitano: false },
          { nome: "Francesco Pasqua", capitano: false },
          { nome: "Alessio Schena", capitano: false },
          { nome: "Giuseppe Gesualdi", capitano: false },
          { nome: "Sabino Vitrani", capitano: false },
          { nome: "Mario Rubano", capitano: false },
{ nome: "Andrea Sabbetti", capitano: false },
          { nome: "Leonardo Cavaliere", capitano: false }
        ]
      },
      {
        id: 3,
        nome: "FSA-B",
        color: "#10b981",
        logo: "",
        giocatori: [
          { nome: "Sergio Barbato", capitano: true },
          { nome: "Giovanni Pallia", capitano: false },
          { nome: "Antonio Di Vito", capitano: false },
          { nome: "Christian Petruccelli", capitano: false },
          { nome: "Vittorio Capozzi", capitano: false },
          { nome: "Gabriel Minese", capitano: false },
          { nome: "Alessandro Clemente", capitano: false },
          { nome: "Maksym Kurysh", capitano: false },
          { nome: "Rocco Pasquariello", capitano: false },
          { nome: "Francesco Antenozio", capitano: false },
          { nome: "Leonardo Rollo", capitano: false },
          { nome: "Francesco Colapietro", capitano: false },
          { nome: "Marco Iazzetti", capitano: false },
          { nome: "Domenico Iascone", capitano: false },
          { nome: "Federico Mariella", capitano: false },
          { nome: "Luciano Colangelo", capitano: false }
        ]
      },
      {
        id: 4,
        nome: "ASA-C",
        color: "#8b5cf6",
        logo: "",
        giocatori: [
          { nome: "Mattia Giordano", capitano: false },
          { nome: "Giuseppe Guadagno", capitano: true },
          { nome: "Simone Petrillo", capitano: false },
          { nome: "Alessandro Kasa", capitano: false },
          { nome: "Alessandro Di Gioia", capitano: false },
          { nome: "Paolo La Marca", capitano: false },
          { nome: "Andrea Maddalena", capitano: false },
          { nome: "Raffaele Curato", capitano: false },
          { nome: "Gianluca Abbruzzese", capitano: false },
          { nome: "Davide Cibelli", capitano: false },
          { nome: "Vulgo Minervini", capitano: false },
          { nome: "Nicolo Giannese", capitano: false },
          { nome: "Gerardo Bonassisa", capitano: false },
          { nome: "Armando Sica", capitano: false },
          { nome: "Salvatore Triventi", capitano: false },
          { nome: "Michele Macchiarella", capitano: false },
          { nome: "Angelo Capuano", capitano: false }
        ]
      },
      {
        id: 5,
        nome: "CSA",
        color: "#f59e0b",
        logo: "",
        giocatori: [
          { nome: "Alfonso Berlangieri", capitano: false },
          { nome: "Domenico Russo", capitano: false },
          { nome: "Giovanni Seirano", capitano: false },
          { nome: "Samuele Saponaro", capitano: false },
          { nome: "Vincenzo D'Alessandro", capitano: false },
          { nome: "Gaetano Melillo", capitano: false },
          { nome: "Massimiliano Di Fonsa", capitano: false },
          { nome: "Filippo Ciarambino", capitano: false },
          { nome: "Emanuele Lorusso", capitano: false },
          { nome: "Di Girolama Abubakar", capitano: false },
          { nome: "Gabriele Santamaria", capitano: true },
          { nome: "Alessio Nomarone", capitano: false }
        ]
      },
      {
        id: 6,
        nome: "E-BSA",
        color: "#06b6d4",
        logo: "",
        giocatori: [
          { nome: "Gabriele Accarino", capitano: false },
          { nome: "Andrea Annese", capitano: false },
          { nome: "Antonio D'amore", capitano: false },
          { nome: "Nicola D'andrea", capitano: false },
          { nome: "Domenico Casanelli", capitano: false },
          { nome: "Davide Grasso", capitano: false },
          { nome: "Daniele Guarino", capitano: false },
          { nome: "Enrico Gervasio", capitano: false },
          { nome: "Samuele Leccese", capitano: false },
          { nome: "Giuseppe Perla", capitano: false },
          { nome: "Raffaele Rainone", capitano: false },
          { nome: "Mario Saracino", capitano: true },
          { nome: "Alessandro Tisi", capitano: false }
        ]
      },
      {
        id: 7,
        nome: "A",
        color: "#ff6b6b",
        logo: "",
        giocatori: [
        { nome: "Matteo Ambrosino", capitano: false },
        { nome: "Simone Castrucci", capitano: false },
        { nome: "Carlo Di Gioia", capitano: true },
        { nome: "Aldo De Michele", capitano: false },
        { nome: "Michele De Leonardis", capitano: false },
        { nome: "Davide D'Onofrio", capitano: false },
        { nome: "Christian Di Sibbio", capitano: false },
        { nome: "Alfonso Lombardi", capitano: false },
        { nome: "Raffaele Natale", capitano: false },
        { nome: "Flavio Rutica", capitano: false },
        { nome: "Marco Soragnese", capitano: false }
        ]
      }
    ],
    classifica: [
      { pos: 1, squadre: "D", p: 0, g: 0, v: 0, n: 0, p: 0, dr: 0 },
      { pos: 2, squadre: "ESA-DSA", p: 0, g: 0, v: 0, n: 0, p: 0, dr: 0 },
      { pos: 3, squadre: "FSA-B", p: 0, g: 0, v: 0, n: 0, p: 0, dr: 0 },
      { pos: 4, squadre: "ASA-C", p: 0, g: 0, v: 0, n: 0, p: 0, dr: 0 },
      { pos: 5, squadre: "CSA", p: 0, g: 0, v: 0, n: 0, p: 0, dr: 0 },
      { pos: 6, squadre: "E-BSA", p: 0, g: 0, v: 0, n: 0, p: 0, dr: 0 },
      { pos: 7, squadre: "A", p: 0, g: 0, v: 0, n: 0, p: 0, dr: 0 }
    ],
    partite: [],
    statistiche: {
      migliorMarcatore: [],
      cleanSheets: []
    }
  }


