// Ejercicios de la Master Class "Afina tu voz" (Riccardo Robledo, 28-OCT-26), transcritos de las partituras del PDF.
// Notación: sílaba solfeo [, = octava abajo | ' = octava arriba] [:N = pulsos, por defecto 1].
export const EJERCICIOS = [
  ['00-escala-mayor', 'Escala mayor (intervalos)', "Do Re Mi Fa Sol La Ti Do' Do' Ti La Sol Fa Mi Re Do:2"],
  ['01-tendency-tones', 'Tendency tones', "Do:2 Re:2 Do:4 Do:2 Ti,:2 Do:4 Do:2 Fa:2 Mi:4 Do:2 La:2 Sol:4 Do:2 Sol:2 Do':4"],
  ['02-segundas', 'Segundas', "Do Re Mi Re Mi Fa Mi Fa Sol Fa Sol La Sol La Ti La Ti Do' Ti Do' Re' Do':3 Do' Ti La Ti La Sol La Sol Fa Sol Fa Mi Fa Mi Re Mi Re Do Re Do Ti, Do:3"],
  ['03-terceras', 'Terceras', "Do Mi Re Fa Mi Sol Fa La Sol Ti La Do' Ti Re' Do':2 Do' La Ti Sol La Fa Sol Mi Fa Re Mi Do Re Ti, Do:2"],
  ['04-alternando-do', 'Alternando Do', "Do Re Do Mi Do Fa Do Sol Do La Do Ti Do':3 Do' Ti Do' La Do' Sol Do' Fa Do' Mi Do' Re Do' Do:3"],
  ['05-escala-con-arpegio', 'Escala con arpegio', "Do Re Mi Fa Sol La Ti Do' Do' Ti La Sol Fa Mi Re Do Mi Sol Do' Sol Mi Do:3"],
  ['06-menor-natural', 'Escala menor natural', "Do Re Mei Fa Sol Lei Tei Do' Do' Tei Lei Sol Fa Mei Re Do:2"],
  ['07-paralela-menor', 'Escala paralela menor (mayor y luego menor)', "Do Re Mi Fa Sol La Ti Do':2 Do Re Mei Fa Sol Lei Tei Do':2"],
  ['08-pentatonica-mayor', 'Pentatónica mayor', "Do Re Mi Sol La Do':2 La Sol Mi Re Do:2"],
  ['09-pentatonica-menor', 'Pentatónica menor', "Do Mei Fa Sol Tei Do':2 Tei Sol Fa Mei Do:2"],
  ['10-blues', 'Escala de blues', "Do Mei Fa Fi Sol Tei Do':2 Do' Tei Sol Sei Fa Mei Do:2"],
  ['11-cromatica', 'Cromática', "Do Di Re Ri Mi Fa Fi Sol Si La Li Ti Do':2 Do' Ti Tei La Lei Sol Sei Fa Mi Mei Re Ra Do:2"],
];
const SEMI = { Do:0, Di:1, Ra:1, Re:2, Ri:3, Mei:3, Mi:4, Fa:5, Fi:6, Sei:6, Sol:7, Si:8, Lei:8, La:9, Li:10, Tei:10, Ti:11 };
// Para el pentagrama: letra (0 Do..6 Si), alteración (+1 sostenido, -1 bemol) y octava relativa a Do4.
const GRADO = { Do:[0,0], Di:[0,1], Ra:[1,-1], Re:[1,0], Ri:[1,1], Mei:[2,-1], Mi:[2,0], Fa:[3,0], Fi:[3,1], Sei:[4,-1], Sol:[4,0], Si:[4,1], Lei:[5,-1], La:[5,0], Li:[5,1], Tei:[6,-1], Ti:[6,0] };
export function parsear(txt) {
  return txt.trim().split(/\s+/).map(t => {
    const m = /^([A-Za-z]+)([,']*)(?::(\d+))?$/.exec(t);
    if (!m || !(m[1] in SEMI)) throw new Error('sílaba desconocida: ' + t);
    const oct = [...m[2]].reduce((a, c) => a + (c === "'" ? 12 : -12), 0);
    const [letra, alt] = GRADO[m[1]];
    return { silaba: m[1], semis: SEMI[m[1]] + oct, pulsos: m[3] ? +m[3] : 1, pos: letra + 7 * (oct / 12), alt };
  });
}
