export class Review {
   ocena: number
   komentar: string
   korisnik_username: string
   ean: string

   constructor(ocena, komentar, korisnik_username, ean) {
      this.ocena = ocena
      this.komentar = komentar
      this.korisnik_username = korisnik_username
      this.ean = ean
   }
}