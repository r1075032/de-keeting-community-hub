import { Link } from "react-router-dom";
import { Shirt, Wrench, Apple, Heart, ArrowRight, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import hulpImage from "@/assets/hulp-diensten.jpg";

const services = [
  {
    icon: Shirt,
    title: "Kledij",
    desc: "In onze kledinghoek vind je kwalitatieve tweedehands kledij voor het hele gezin. We zorgen ervoor dat iedereen er verzorgd uitziet, ongeacht hun financiële situatie. Elke week wordt ons aanbod aangevuld met nieuwe donaties.",
  },
  {
    icon: Wrench,
    title: "Praktische hulp",
    desc: "Onze vrijwilligers helpen je graag met administratieve taken, het invullen van formulieren, kleine verhuizingen en herstellingen. Samen zoeken we naar oplossingen voor alledaagse problemen.",
  },
  {
    icon: Apple,
    title: "Voeding",
    desc: "Wekelijks bieden wij voedselpakketten aan met verse en houdbare producten. Daarnaast organiseren we regelmatig warme maaltijden waar iedereen welkom is aan tafel.",
  },
];

const HulpDiensten = () => (
  <Layout>
    {/* Intro */}
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Hulp & Diensten</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Bij De Keeting kan je terecht voor verschillende vormen van ondersteuning.
              Of het nu gaat om kledij, voeding of praktische hulp — wij staan voor je klaar.
              Iedereen is welkom, zonder oordeel.
            </p>
            <Link to="/contact">
              <Button>Neem contact op <ArrowRight size={16} /></Button>
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={hulpImage} alt="Hulp en diensten" className="w-full h-80 object-cover" loading="lazy" width={800} height={600} />
          </div>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="bg-card section-padding">
      <div className="container-narrow">
        <div className="space-y-8">
          {services.map((s) => (
            <div key={s.title} className="bg-background rounded-lg p-8 border border-border flex flex-col md:flex-row gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <s.icon className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Steun */}
    <section className="bg-secondary text-secondary-foreground py-16">
      <div className="container-narrow text-center px-4">
        <Heart className="mx-auto mb-4" size={40} />
        <h2 className="text-3xl font-display font-bold mb-4">Steun De Keeting</h2>
        <p className="text-secondary-foreground/90 max-w-xl mx-auto mb-4">
          Met jouw steun kunnen wij nog meer mensen helpen. Elke donatie, groot of klein, maakt een verschil.
        </p>
        <p className="text-secondary-foreground/80 mb-8 text-sm">
          Rekeningnummer: <strong className="text-secondary-foreground">BE86 0012 5612 5950</strong>
        </p>
        <Link to="/doneren">
          <Button variant="default" size="lg">Doneer nu</Button>
        </Link>
      </div>
    </section>

    {/* Recht op */}
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Scale className="text-primary" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold mb-4">Recht op ondersteuning</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Iedereen heeft recht op een menswaardig bestaan. Als je het moeilijk hebt, hoef je niet
              alleen te staan. Er bestaan tal van rechten en voorzieningen waar je aanspraak op kan maken.
              Onze medewerkers helpen je graag om je rechten te kennen en te laten gelden.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We werken samen met OCMW, CAW en andere sociale diensten om je door te verwijzen
              wanneer je specifieke hulp nodig hebt. Aarzel niet om langs te komen in de
              Kroonstraat 64-66, 2800 Mechelen of bel ons op 015 27 09 25.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default HulpDiensten;
