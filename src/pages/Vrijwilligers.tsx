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
  { title: "Kookgroep begeleider", desc: "Help mee bij het bereiden van wekelijkse maaltijden. Kookervaring is welkom maar niet verplicht." },
  { title: "Kledinghoek medewerker", desc: "Sorteer en presenteer gedoneerde kledij. Oog voor kwaliteit en organisatie is een plus." },
  { title: "Administratieve ondersteuning", desc: "Help bezoekers met het invullen van formulieren en administratieve taken." },
];

const Vrijwilligers = () => (
  <Layout>
    {/* Intro */}
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img src={volunteersImg} alt="Vrijwilligers" className="w-full h-80 object-cover" loading="lazy" width={800} height={600} />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Word Vrijwilliger</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Onze vrijwilligers zijn het kloppend hart van De Keeting. Of je nu veel of weinig
              tijd hebt, er is altijd een plek voor jou. Samen maken we het verschil.
            </p>
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
              Je kan ook rechtstreeks storten op ons rekeningnummer:
            </p>
            <p className="font-mono font-bold text-foreground text-lg mb-2">BE12 3456 7890 1234</p>
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
            <p className="text-muted-foreground leading-relaxed">
              Giften vanaf €40 per jaar komen in aanmerking voor een fiscaal attest.
              Dit betekent dat je een belastingvermindering van 45% kan genieten op je gift.
              Het attest wordt automatisch aan je bezorgd in het begin van het volgende jaar.
            </p>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
