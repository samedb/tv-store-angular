export class TV {

   ean: string
   cena: number
   cena_na_popustu: number
   dostupno: boolean
   proizvodjac: string
   model: string
   dijagonala: number
   rezolucija?: string
   smart?: string
   ekran?: string
   tip_tunera?: string
   energetski_razred?: string
   wireless?: string
   povezivanje?: string
   vesa?: string
   boja?: string
   dvb_c?: string
   dvb_s2?: string
   dvb_t2?: string
   zvucnici?: string
   masa?: string
   dimenzije?: string
   dodatne_prednosti?: string
   slike?: string[]
   ostalo?: string
   napomena?: string


   // ean = models.CharField(max_length=20, primary_key=True)
   //  cena = models.IntegerField(default=0)
   //  cena_na_popustu = models.IntegerField(default=0)
   //  dostupno = models.BooleanField(default=True)
   //  proizvodjac = models.CharField(max_length=50)
   //  model = models.CharField(max_length=50)
   //  dijagonala = models.IntegerField()
   //  rezolucija = models.CharField(max_length=30, blank=True)
   //  smart = models.CharField(max_length=5, blank=True)
   //  ekran = models.CharField(max_length=20, blank=True)
   //  tip_tunera = models.CharField(max_length=20, blank=True)
   //  energetski_razred = models.CharField(max_length=5, blank=True)
   //  wireless = models.CharField(max_length=10, blank=True)
   //  povezivanje = models.CharField(max_length=500, blank=True)
   //  vesa = models.CharField(max_length=20, blank=True)
   //  boja = models.CharField(max_length=20, blank=True)
   //  dvb_c = models.CharField(max_length=5, default="Ne", blank=True)
   //  dvb_s2 = models.CharField(max_length=5, default="Ne", blank=True)
   //  dvb_t2 = models.CharField(max_length=5, default="Ne", blank=True)
   //  zvucnici = models.CharField(max_length=20, blank=True)
   //  masa = models.CharField(max_length=20, blank=True)
   //  dimenzije = models.CharField(max_length=200, blank=True)
   //  dodatne_prednosti = models.CharField(max_length=500, blank=True)
   //  slike = models.CharField(max_length=1000, blank=True)
   //  ostalo = models.CharField(max_length=500, null=True, blank=True)
   //  napomena = models.CharField(max_length=500, null=True, blank=True)

}