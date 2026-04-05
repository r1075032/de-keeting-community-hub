import { Link } from "react-router-dom";
import { Shirt, Wrench, Apple, Facebook, ArrowRight, Clock, Heart, Coffee, Wifi, Users, WashingMachine, Monitor, Phone as PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-community.jpg";

const diensten = [
  { icon: Shirt, title: "Kledinghoek", desc: "Open op maandag, donderdag en vrijdag van 10u tot 12u. Elke dag mag je 5 gratis kledingstukken voor volwassenen en kinderen meenemen." },
  { icon: Apple, title: "Maaltijden", desc: "Maandag: brood met beleg (€1). Donderdag: brood, beleg en soep (€1). Vrijdag: warme maaltijd (€2,50). Inschrijven voor de warme maaltijd ten laatste donderdag voor 13.30u." },
  { icon: Coffee, title: "Ontmoetingsruimte", desc: "Kledij, een tas koffie of thee, een krant, gratis wifi en een gezellige babbel. Een luisterend oor voor iedereen." },
];

const extraDiensten = [
  { icon: WashingMachine, title: "Wasmachine & droogkast", desc: "Wasmachine (€1,50), droogkast (€1) en wasmiddel beschikbaar. Werken met inschrijvingslijst." },
  { icon: Users, title: "Badkamer", desc: "Bad en douche beschikbaar waar je je gratis kan opfrissen. Handdoeken en toiletgerief aanwezig." },
  { icon: Monitor, title: "Pc-hoek", desc: "Computers in de ontmoetingsruimte voor ontspanning of informatie opzoeken. Hulpvragen hebben voorrang." },
  { icon: PhoneIcon, title: "Telefonie", desc: "Gratis telefoon voor hulpvragen. Voor persoonlijke gesprekken vragen we €0,25 per gesprek." },
];

const stories = [
  { name: "Maria", quote: "Dankzij De Keeting voelde ik me niet meer alleen. Ze hielpen me met alles.", excerpt: "Maria kwam twee jaar geleden voor het eerst langs bij De Keeting..." },
  { name: "Ahmed", quote: "De vrijwilligers gaven me hoop en een nieuw begin in België.", excerpt: "Ahmed vond bij De Keeting niet alleen kleding, maar ook een gemeenschap..." },
  { name: "Sofie", quote: "Mijn kinderen kijken uit naar de activiteiten. Het is ons tweede thuis.", excerpt: "Sofie ontdekte De Keeting via een vriendin en komt nu elke week..." },
];

const openingsuren = [
  { dag: "Maandag", uren: "10:00 – 12:00 / Broodmaaltijd (€1)" },
  { dag: "Dinsdag", uren: "Gesloten" },
  { dag: "Woensdag", uren: "Gesloten" },
  { dag: "Donderdag", uren: "10:00 – 12:00 / Brood + soep (€1)" },
  { dag: "Vrijdag", uren: "10:00 – 12:00 / Warme maaltijd (€2,50)" },
  { dag: "Zaterdag", uren: "Gesloten" },
  { dag: "Zondag", uren: "Gesloten" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <img src={heroImage} alt="Gemeenschap De Keeting - Recht op menswaardig inkomen" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight">
          vzw De Keeting
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
          Een erkende vereniging waar armen het woord nemen en basisschakelwerking
          in de Kroonstraat 64-66 te 2800 Mechelen. Een warme ontmoetingsplaats waar iedereen welkom is.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/vrijwilligers">
            <Button variant="hero" size="lg">Word vrijwilliger</Button>
          </Link>
          <Link to="/doneren">
            <Button variant="hero-outline" size="lg" className="border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground/10">Doneer nu</Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Wat bieden wij */}
    <section className="section-padding bg-primary/5">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">Bij De Keeting vind je...</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Een plek waar je terecht kan voor heel wat zaken.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Kledij",
            "Een tas koffie/thee, een krant",
            "Gratis wifi",
            "Een gezellige babbel, een luisterend oor",
            "Leuke groepsactiviteiten en feesten",
            "Warme maaltijden en broodmaaltijden",
            "Wasmachine, droogkast en douche",
            "Informatie, vorming, warme doorverwijzing",
          ].map((item) => (
            <div key={item} className="bg-card rounded-lg p-4 border border-border text-center">
              <p className="text-sm font-medium text-foreground">{item}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/hulp-diensten">
            <Button variant="outline">Bekijk al onze diensten <ArrowRight size={16} /></Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Diensten */}
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">Onze Diensten</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Wij ondersteunen mensen op verschillende manieren.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {diensten.map((s) => (
            <div key={s.title} className="bg-card rounded-lg p-8 text-center border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <s.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{s.desc}</p>
              <Link to="/hulp-diensten">
                <Button variant="outline" size="sm">Meer info <ArrowRight size={14} /></Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Facebook */}
    <section className="bg-primary/5 py-12">
      <div className="container-narrow text-center px-4">
        <a
          href="https://www.facebook.com/dekeeting"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-card border border-border rounded-lg px-8 py-4 hover:shadow-md transition-shadow"
        >
          <Facebook className="text-primary" size={28} />
          <div className="text-left">
            <p className="font-semibold text-foreground">Volg ons op Facebook</p>
            <p className="text-sm text-muted-foreground">Blijf op de hoogte van onze activiteiten</p>
          </div>
          <ArrowRight className="text-muted-foreground" size={20} />
        </a>
      </div>
    </section>

    {/* Werking / Missie */}
    <section className="section-padding">
      <div className="container-narrow max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Onze Werking</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          De Keeting vzw is een erkende vereniging waar armen het woord nemen en
          basisschakelwerking. Onze werking rust op drie pijlers: <strong className="text-foreground">diensten</strong>,
          <strong className="text-foreground"> schakelen</strong> en <strong className="text-foreground">structureel werken</strong>.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          De medewerkers van De Keeting staan altijd klaar om een luisterend oor te bieden.
          We bieden zelf geen hulpverlening aan maar helpen je op weg naar de juiste dienst of organisatie.
          We vormen een draaischijf tussen mensen in armoede en het bestaande hulpverleningsaanbod.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Door contact met de doelgroep worden knelpunten bovengehaald die zich in onze samenleving
          voordoen. Deze worden voorgelegd op het KansArmoedeNetwerk (KAN), waarvan De Keeting
          voorzitter en trekker is.
        </p>
      </div>
    </section>

    {/* Openingsuren */}
    <section className="bg-card section-padding">
      <div className="container-narrow max-w-lg">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Clock className="text-primary" size={28} />
          <h2 className="text-3xl font-display font-bold">Openingsuren</h2>
        </div>
        <div className="rounded-lg border border-border overflow-hidden">
          {openingsuren.map((item, i) => (
            <div
              key={item.dag}
              className={`flex justify-between px-6 py-3 text-sm ${
                i % 2 === 0 ? "bg-background" : "bg-card"
              } ${item.uren === "Gesloten" ? "text-muted-foreground" : "text-foreground"}`}
            >
              <span className="font-medium">{item.dag}</span>
              <span>{item.uren}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-4">
          Kledinghoek open op maandag, donderdag en vrijdag van 10u tot 12u
        </p>
      </div>
    </section>

    {/* CTA Contact */}
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container-narrow text-center px-4">
        <h2 className="text-3xl font-display font-bold mb-4">Heb je een vraag?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Bel ons op <strong>015 27 09 25</strong> of mail naar <strong>info@dekeeting.be</strong>.
          Je kan ook gewoon langskomen in de Kroonstraat 64-66 te 2800 Mechelen.
        </p>
        <Link to="/contact">
          <Button variant="hero" size="lg">Contacteer ons</Button>
        </Link>
      </div>
    </section>

    {/* Verhalen */}
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">Verhalen uit de gemeenschap</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((s) => (
            <div key={s.name} className="bg-card rounded-lg p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <span className="font-display font-bold text-secondary text-lg">{s.name[0]}</span>
              </div>
              <blockquote className="text-foreground font-medium italic mb-3">"{s.quote}"</blockquote>
              <p className="text-muted-foreground text-sm mb-4">{s.excerpt}</p>
              <span className="text-sm font-semibold text-primary">— {s.name}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/verhalen">
            <Button variant="outline">Meer verhalen <ArrowRight size={16} /></Button>
          </Link>
        </div>
      </div>
    </section>

    {/* CTA Doneren */}
    <section className="bg-secondary text-secondary-foreground py-20">
      <div className="container-narrow text-center px-4">
        <Heart className="mx-auto mb-6" size={48} />
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Steun De Keeting</h2>
        <p className="text-secondary-foreground/90 max-w-xl mx-auto mb-4 text-lg">
          Giften aan onze organisatie kan steeds op het rekeningnummer van de vzw.
        </p>
        <p className="text-secondary-foreground/70 mb-8 text-sm">
          Rekeningnummer: <strong className="text-secondary-foreground">BE86 0012 5612 5950</strong>
        </p>
        <Link to="/doneren">
          <Button variant="default" size="lg">Doneer nu</Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
