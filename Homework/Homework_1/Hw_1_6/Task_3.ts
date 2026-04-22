// – Перевести до нижнього регістру наступні стрінгові значення
//
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’

let s1:string = 'HELLO WORLD';
let s2:string = 'LOREM IPSUM';
let s3:string = 'JAVASCRIPT IS COOL';
const string:string[] = [s1, s2, s3];
for (const s of string) {
    console.log(s.toLowerCase());
}