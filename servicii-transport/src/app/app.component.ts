import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';

interface Item {
  icon: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatChipsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly document = inject(DOCUMENT);

  readonly title = 'servicii-transport';
  readonly contactName = 'Popa Viorel';
  readonly phoneDisplay = '0756 937 227';
  readonly phoneLink = 'tel:+40756937227';
  readonly whatsappLink = 'https://wa.me/40756937227';
  readonly year = new Date().getFullYear();

  readonly navLinks = [
    { id: 'servicii', label: 'Servicii' },
    { id: 'lucrari', label: 'Lucrări' },
    { id: 'avantaje', label: 'De ce noi' },
    { id: 'proces', label: 'Cum lucrăm' },
    { id: 'zone', label: 'Zone deservite' },
    { id: 'intrebari', label: 'Întrebări' },
    { id: 'contact', label: 'Contact' },
  ];

  readonly services: Item[] = [
    {
      icon: 'local_shipping',
      title: 'Transport moloz și deșeuri',
      text: 'Preluăm și transportăm molozul și deșeurile rezultate din renovări, demolări sau lucrări de construcții, direct de la adresa dumneavoastră.',
    },
    {
      icon: 'cleaning_services',
      title: 'Curățenie și debarasare',
      text: 'Eliberăm complet apartamente, case, magazine, hale, garaje, poduri și beciuri de tot ce nu mai este necesar.',
    },
    {
      icon: 'delete_sweep',
      title: 'Colectare deșeuri de orice tip',
      text: 'Colectăm deșeuri menajere, din construcții, voluminoase sau vegetale și le predăm, pe cât posibil, spre reciclare.',
    },
    {
      icon: 'weekend',
      title: 'Debarasare mobilier și electrocasnice',
      text: 'Preluăm mobila veche, electrocasnicele și obiectele voluminoase din locuință, inclusiv de la etaj.',
    },
    {
      icon: 'move_up',
      title: 'Mutări locuințe',
      text: 'Mutăm mobilierul, electrocasnicele și bunurile dumneavoastră cu grijă, în siguranță, la noua adresă.',
    },
    {
      icon: 'handyman',
      title: 'Montaj și demontaj mobilă',
      text: 'Demontăm mobila înainte de transport și o montăm la noua locație, pentru ca mutarea să decurgă fără griji.',
    },
    {
      icon: 'grass',
      title: 'Curățenie curți și grădini',
      text: 'Igienizăm curți și grădini și transportăm crengi, frunze, iarbă și alte resturi vegetale.',
    },
    {
      icon: 'pan_tool',
      title: 'Manipulare și încărcare',
      text: 'Ne ocupăm de manipularea, încărcarea și descărcarea obiectelor grele sau voluminoase.',
    },
  ];

  readonly locations = [
    'Apartamente',
    'Case',
    'Magazine',
    'Hale',
    'Curți',
    'Garaje',
    'Grădini',
    'Poduri',
    'Beciuri',
  ];

  readonly gallery = [
    {
      src: 'images/1.jpg',
      width: 880,
      height: 1168,
      caption: 'Debarasare mobilier și materiale',
      alt: 'Autoutilitară încărcată cu mobilier demontat, plăci de PAL și resturi de materiale',
    },
    {
      src: 'images/2.jpg',
      width: 864,
      height: 1200,
      caption: 'Debarasare locuință și mutări',
      alt: 'Autoutilitară încărcată cu bunuri dintr-o locuință: comodă, saci și cutii',
    },
    {
      src: 'images/3.jpg',
      width: 832,
      height: 1248,
      caption: 'Transport deșeuri din construcții',
      alt: 'Autoutilitară albă cu ușile deschise, încărcată cu găleți și saci cu deșeuri din construcții',
    },
    {
      src: 'images/4.jpg',
      width: 800,
      height: 1280,
      caption: 'Ridicare moloz de la domiciliu',
      alt: 'Saci cu moloz pregătiți pentru ridicare în fața unei case',
    },
  ];

  readonly advantages: Item[] = [
    { icon: 'apps', title: 'Totul într-un singur loc', text: 'Curățenie, debarasare, manipulare și transport – ne ocupăm de toate.' },
    { icon: 'handshake', title: 'Preț negociabil', text: 'Prețul se stabilește în funcție de lucrare, corect pentru ambele părți.' },
    { icon: 'local_shipping', title: 'Autoutilitară 3,5 t', text: 'Dispunem de autoutilitară de 3,5 tone, potrivită și pentru volume mari.' },
    { icon: 'recycling', title: 'Grijă pentru mediu', text: 'Deșeurile ajung, pe cât posibil, la colectare selectivă, pentru reciclare.' },
  ];

  readonly steps: Item[] = [
    { icon: 'call', title: 'Ne contactați', text: 'Ne spuneți ce lucrare aveți, ce trebuie transportat și adresa.' },
    { icon: 'handshake', title: 'Stabilim prețul', text: 'Agreăm împreună prețul, în funcție de lucrare, și data la care venim.' },
    { icon: 'local_shipping', title: 'Executăm lucrarea', text: 'Venim la adresă, curățăm, încărcăm și transportăm totul la destinație.' },
    { icon: 'check_circle', title: 'Spațiu curat', text: 'Plecăm lăsând locul eliberat și pregătit de folosire.' },
  ];

  readonly areas = [
    'Oradea – toate cartierele',
    'Sânmartin',
    'Băile Felix',
    'Băile 1 Mai',
    'Oșorhei',
    'Paleu',
    'Sântandrei',
    'Nojorid',
    'Episcopia Bihor',
    'Borș',
    'Biharia',
    'Cihei',
  ];

  readonly faqs = [
    {
      q: 'Cât costă serviciile?',
      a: 'Prețul este negociabil și se stabilește în funcție de lucrare: tipul și cantitatea deșeurilor, distanța și volumul de muncă. Sunați-ne pentru o ofertă.',
    },
    {
      q: 'Ce tipuri de deșeuri colectați?',
      a: 'Colectăm deșeuri de orice tip: moloz și resturi din construcții, mobilier vechi, electrocasnice, deșeuri voluminoase și deșeuri vegetale.',
    },
    {
      q: 'Unde ajung deșeurile colectate?',
      a: 'În măsura posibilităților, deșeurile sunt depozitate la groapa de gunoi cu colectare selectivă, pentru a fi reciclate, astfel încât impactul asupra mediului să fie minim.',
    },
    {
      q: 'Vă ocupați și de mutări?',
      a: 'Da. Mutăm mobilier, electrocasnice și alte bunuri și ne ocupăm inclusiv de demontarea și montarea mobilei.',
    },
    {
      q: 'Ce capacitate are autoutilitara?',
      a: 'Lucrăm cu o autoutilitară de 3,5 tone. Pentru cantități mai mari, efectuăm mai multe transporturi.',
    },
    {
      q: 'Lucrați și în afara Oradei?',
      a: 'Da, deservim și localitățile din jurul Oradei. Pentru alte zone din județul Bihor, sunați-ne și discutăm.',
    },
  ];

  scrollTo(id: string): void {
    this.document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
