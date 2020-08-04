export class Review {
   ocena: number
   komentar: string
   korisnik: string
   ean: string

   constructor(ocena, komentar, korisnik, ean) {
      this.ocena = ocena
      this.komentar = komentar
      this.korisnik = korisnik
      this.ean = ean
   }
}