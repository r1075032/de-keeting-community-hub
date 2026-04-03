import { Link } from "react-router-dom";
import { Shirt, Wrench, Apple, Facebook, ArrowRight, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-community.jpg";

const services = [
  { icon: Shirt, title: "Kledij", desc: "Kwalitatieve tweedehands kledij voor het hele gezin, beschikbaar tegen een kleine bijdrage." },
  { icon: Wrench, title: "Praktische hulp", desc: "Ondersteuning bij administratie, verhuizen, kleine herstellingen en meer." },
  { icon: Apple, title: "Voeding", desc: "Wekelijks voedselpakketten en warme maaltijden voor wie het nodig heeft." },
];

const stories = [
  { name: "Maria", quote: "Dankzij De Keeting voelde ik me niet meer alleen. Ze hielpen me met alles.", excerpt: "Maria kwam twee jaar geleden voor het eerst langs bij De Keeting..." },
  { name: "Ahmed", quote: "De vrijwilligers gaven me hoop en een nieuw begin in België.", excerpt: "Ahmed vond bij De Keeting niet alleen kleding, maar ook een gemeenschap..." },
  { name: "Sofie", quote: "Mijn kinderen kijken uit naar de activiteiten. Het is ons tweede thuis.", excerpt: "Sofie ontdekte De Keeting via een vriendin en komt nu elke week..." },
];

const openingsuren = [
  { dag: "Maandag", uren: "9:00 – 12:00 / 13:00 – 17:00" },
  { dag: "Dinsdag", uren: "9:00 – 12:00 / 13:00 – 17:00" },
  { dag: "Woensdag", uren: "9:00 – 12:00" },
  { dag: "Donderdag", uren: "9:00 – 12:00 / 13:00 – 17:00" },
  { dag: "Vrijdag", uren: "9:00 – 12:00 / 13:00 – 17:00" },
  { dag: "Zaterdag", uren: "Gesloten" },
  { dag: "Zondag", uren: "Gesloten" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <img src={heroImage} alt="Gemeenschap De Keeting" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight">
          Samen maken we het verschil
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
          De Keeting is een warme ontmoetingsplaats waar iedereen welkom is.
          Wij bieden hulp, verbinding en hoop aan wie het nodig heeft.
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

    {/* Diensten */}
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">Onze Diensten</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Wij ondersteunen mensen in nood op verschillende manieren.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-lg p-8 text-center border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <s.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{s.desc}</p>
              <Link to="/doneren">
                <Button variant="default" size="sm">Doneer <Heart size={14} /></Button>
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
          href="https://facebook.com"
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

    {/* Missie */}
    <section className="section-padding">
      <div className="container-narrow max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Onze Missie</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          De Keeting vzw is een sociale organisatie die mensen in armoede en kwetsbare situaties
          ondersteunt. Wij geloven in de kracht van gemeenschap en solidariteit. Door het aanbieden
          van kledij, voeding, praktische hulp en een luisterend oor willen wij iedereen de kans geven
          op een waardig bestaan. Samen bouwen we aan een warmere samenleving.
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
      </div>
    </section>

    {/* CTA Contact */}
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container-narrow text-center px-4">
        <h2 className="text-3xl font-display font-bold mb-4">Heb je een vraag?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Neem gerust contact met ons op. We helpen je graag verder.
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
        <p className="text-secondary-foreground/90 max-w-xl mx-auto mb-8 text-lg">
          Elke bijdrage telt. Met jouw donatie kunnen wij meer mensen helpen
          en onze werking verder uitbouwen.
        </p>
        <Link to="/doneren">
          <Button variant="default" size="lg">Doneer nu</Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
