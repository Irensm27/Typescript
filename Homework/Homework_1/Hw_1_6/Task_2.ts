// – Перевести до великого регістру наступні стрінгові значення
//
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’

let s1:string = 'hello world';
let s2:string = 'lorem ipsum';
let s3:string = 'javascript is cool';
const string:string[] = [s1, s2, s3];
for (const s of string) {
    console.log(s.toUpperCase());
}