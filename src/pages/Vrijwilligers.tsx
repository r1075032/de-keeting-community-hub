import { Link } from "react-router-dom";
import { Heart, ArrowRight, Briefcase, FileText, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import volunteersImg from "@/assets/volunteers.jpg";

const volunteers = [
  { name: "Els", quote: "Vrijwilligerswerk bij De Keeting geeft mijn leven zin. Je krijgt zoveel terug.", initial: "E" },
  { name: "Jan", quote: "De warmte hier is ongelooflijk. Ik kom elke week met plezier helpen.", initial: "J" },
  { name: "Fatima", quote: "Ik voel me hier thuis. Samen helpen we mensen écht vooruit.", initial: "F" },
];

const vacatures = [
  { title: "Kookgroep begeleider", desc: "Help mee bij het bereiden van de wekelijkse warme maaltijd op vrijdag. Kookervaring is welkom maar niet verplicht." },
  { title: "Kledinghoek medewerker", desc: "Sorteer en presenteer gedoneerde kledij op maandag, donderdag en vrijdag van 10u tot 12u." },
  { title: "Repair Café vrijwilliger", desc: "Help bezoekers met het herstellen van kledij, fietsen of klein elektro tijdens het Repair Café." },
  { title: "Administratieve ondersteuning", desc: "Help bezoekers met het invullen van formulieren en administratieve taken. Schakelen naar de juiste diensten." },
];

const werkgroepen = [
  "Kookgroep",
  "Kledinghoek",
  "Repair Café",
  "Ontmoetingsruimte",
  "Themawerking",
];

const Vrijwilligers = () => (
  <Layout>
    {/* Intro */}
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img src={volunteersImg} alt="Vrijwilligers bij De Keeting" className="w-full h-80 object-cover" loading="lazy" width={800} height={600} />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Word Vrijwilliger</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              De Keeting werkt met een aantal vaste krachten om onze drie pijlers te realiseren,
              maar steunt ook op vrijwilligers. Er zijn verschillende werkgroepen waar vrijwilligers
              zich kunnen aansluiten.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {werkgroepen.map((w) => (
                <span key={w} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">{w}</span>
              ))}
            </div>
            <Link to="/contact">
              <Button size="lg">Meld je aan <ArrowRight size={16} /></Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Trooper & Rekening */}
    <section className="bg-card section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background rounded-lg p-8 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="text-primary" size={24} />
              <h3 className="text-xl font-display font-semibold">Steun via Trooper</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Via Trooper kan je De Keeting steunen bij je online aankopen, zonder extra kosten.
              Een percentage van je aankoop gaat automatisch naar onze werking.
            </p>
            <Button variant="outline" size="sm">Meer info over Trooper</Button>
          </div>
          <div className="bg-background rounded-lg p-8 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="text-primary" size={24} />
              <h3 className="text-xl font-display font-semibold">Rekeningnummer</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">
              Giften aan onze organisatie kan steeds op het rekeningnummer van de vzw:
            </p>
            <p className="font-mono font-bold text-foreground text-lg mb-2">BE86 0012 5612 5950</p>
            <p className="text-muted-foreground text-xs">Met vermelding: "Gift De Keeting"</p>
          </div>
        </div>
      </div>
    </section>

    {/* Fiscaal attest */}
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <FileText className="text-primary" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold mb-4">Fiscaal Attest</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Indien gewenst kan via onze koepelorganisatie, het <strong className="text-foreground">Vlaams Netwerk Tegen Armoede</strong>,
              een fiscaal attest (vanaf €40) worden uitgereikt.
            </p>
            <div className="bg-card rounded-lg border border-border p-4">
              <p className="text-sm text-muted-foreground mb-1">Stort op rekeningnummer:</p>
              <p className="font-mono font-bold text-foreground">BE86 8939 4407 0450</p>
              <p className="text-xs text-muted-foreground mt-1">Met vermelding: <strong className="text-foreground">"project 204 - De Keeting"</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Vacatures */}
    <section className="bg-card section-padding">
      <div className="container-narrow">
        <div className="flex items-center justify-center gap-3 mb-10">
          <Briefcase className="text-primary" size={28} />
          <h2 className="text-3xl font-display font-bold">Vacatures</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vacatures.map((v) => (
            <div key={v.title} className="bg-background rounded-lg p-6 border border-border">
              <h3 className="font-display font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{v.desc}</p>
              <Link to="/contact">
                <Button size="sm" variant="default">Solliciteer <ArrowRight size={14} /></Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Volunteer profiles */}
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl font-display font-bold text-center mb-12">Onze Vrijwilligers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {volunteers.map((v) => (
            <div key={v.name} className="text-center">
              <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <span className="font-display font-bold text-secondary text-2xl">{v.initial}</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{v.name}</h3>
              <p className="text-muted-foreground text-sm italic">"{v.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Vrijwilligers;
