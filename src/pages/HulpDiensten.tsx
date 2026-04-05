import { Link } from "react-router-dom";
import { Shirt, Apple, Heart, ArrowRight, Scale, ShowerHead, WashingMachine, Monitor, Phone as PhoneIcon, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import hulpImage from "@/assets/hulp-diensten.jpg";

const diensten = [
  {
    icon: Shirt,
    title: "Kledinghoek",
    desc: "Open op maandag, donderdag en vrijdag van 10u tot 12u. Elke dag mag je 5 gratis kledingstukken voor volwassenen en kinderen meenemen.",
  },
  {
    icon: Apple,
    title: "Maaltijden",
    desc: "Op maandag serveren we brood met beleg (€1), op donderdag brood, beleg en soep (€1) en op vrijdag een warme maaltijd (€2,50). Voor de warme maaltijd dien je je ten laatste in te schrijven op donderdag voor 13.30u.",
  },
  {
    icon: ShowerHead,
    title: "Badkamer",
    desc: "Er is een bad en douche beschikbaar, waar je je gratis kan komen opfrissen. Handdoeken en toiletgerief zijn hier aanwezig.",
  },
  {
    icon: WashingMachine,
    title: "Wasmachine & droogkast",
    desc: "Er is een wasmachine (€1,50), droogkast (€1) en wasmiddel beschikbaar. We werken met een inschrijvingslijst, waar je naar kan informeren op de bureau.",
  },
  {
    icon: Monitor,
    title: "Pc-hoek",
    desc: "Van de computers in de ontmoetingsruimte kan je gebruik maken voor ontspanning, informatie op te zoeken, ... Hulpvragen hebben altijd voorrang.",
  },
  {
    icon: PhoneIcon,
    title: "Telefonie",
    desc: "In de bureau is er een telefoon beschikbaar waar je gratis mee mag bellen indien je een hulpvraag hebt. Voor persoonlijke gesprekken vragen we €0,25 per gesprek.",
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
              Of het nu gaat om kledij, voeding, een douche of praktische hulp — wij staan voor je klaar.
              Iedereen is welkom, zonder oordeel.
            </p>
            <Link to="/contact">
              <Button>Neem contact op <ArrowRight size={16} /></Button>
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={hulpImage} alt="Hulp en diensten bij De Keeting" className="w-full h-80 object-cover" loading="lazy" width={800} height={600} />
          </div>
        </div>
      </div>
    </section>

    {/* Diensten */}
    <section className="bg-card section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl font-display font-bold text-center mb-10">Onze Diensten</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {diensten.map((s) => (
            <div key={s.title} className="bg-background rounded-lg p-6 border border-border flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <s.icon className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Schakelen */}
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Coffee className="text-primary" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold mb-4">Schakelen</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              De werknemers van De Keeting staan altijd klaar om een luisterend oor te bieden.
              Indien nodig, helpt De Keeting je dan verder op weg naar de juiste diensten, organisaties, etc.
              Een belangrijke taak van De Keeting is dus <strong className="text-foreground">'schakelen' = verbinden met</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              De medewerkers hanteren de empowermentvisie om de personen die leven in armoede
              de schakels (terug) te laten vinden met zichzelf. Er wordt tijd gemaakt voor alle
              verhalen van alle bezoekers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              De Keeting vormt een draaischijf tussen de mensen in armoede en het bestaande
              voorzieningen– en hulpverleningsaanbod. <strong className="text-foreground">We bieden zelf geen hulpverlening aan
              maar we helpen je op weg naar de juiste dienst/organisatie.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Steun */}
    <section className="bg-secondary text-secondary-foreground py-16">
      <div className="container-narrow text-center px-4">
        <Heart className="mx-auto mb-4" size={40} />
        <h2 className="text-3xl font-display font-bold mb-4">Steun De Keeting</h2>
        <p className="text-secondary-foreground/90 max-w-xl mx-auto mb-4">
          Giften aan onze organisatie kan steeds op het rekeningnummer van de vzw.
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
            <h2 className="text-2xl font-display font-bold mb-4">Recht o(e)p?!</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Iedereen heeft recht op een menswaardig bestaan. Een belangrijke taak van De Keeting
              is samen je rechten verkennen. We helpen je om je rechten te kennen en te laten gelden.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We werken samen met OCMW, CAW en andere sociale diensten om je door te verwijzen
              wanneer je specifieke hulp nodig hebt.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Aarzel niet om langs te komen in de Kroonstraat 64-66, 2800 Mechelen of bel ons op 015 27 09 25.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Structureel werken */}
    <section className="bg-card section-padding">
      <div className="container-narrow max-w-3xl text-center">
        <h2 className="text-2xl font-display font-bold mb-6">Structureel Werken</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Door het contact met de doelgroep worden knelpunten bovengehaald die zich in onze
          samenleving voordoen. Deze knelpunten worden o.a. voorgelegd op het
          <strong className="text-foreground"> KansArmoedeNetwerk (KAN)</strong>.
          De Keeting is voorzitter en trekker van het KAN.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Een aantal keer per jaar zetelt de Schepen van Welzijn mee in het armoedeoverleg.
          Op deze manier kunnen we geformuleerde beleidsaanbevelingen voorleggen en aftoetsen bij het beleid zelf.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Daarnaast gaat er tweejaarlijks een themawerking van start in samenspraak met de bezoekers.
          Knelpunten worden besproken en er wordt naar beleidsmatige alternatieven gezocht.
        </p>
      </div>
    </section>
  </Layout>
);

export default HulpDiensten;
