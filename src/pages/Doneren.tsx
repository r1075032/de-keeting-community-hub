import { Link } from "react-router-dom";
import { Heart, CreditCard, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Doneren = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-secondary text-secondary-foreground py-20">
      <div className="container-narrow text-center px-4">
        <Heart className="mx-auto mb-6" size={48} />
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Doneer aan De Keeting</h1>
        <p className="text-secondary-foreground/90 max-w-xl mx-auto text-lg">
          Jouw bijdrage maakt een wereld van verschil voor mensen in nood.
        </p>
      </div>
    </section>

    {/* Rekeningnummer */}
    <section className="section-padding">
      <div className="container-narrow max-w-2xl text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <CreditCard className="text-primary" size={28} />
          <h2 className="text-3xl font-display font-bold">Overschrijving</h2>
        </div>
        <p className="text-muted-foreground mb-6">
          Je kan een gift storten op ons rekeningnummer. Vermeld "Gift De Keeting" als mededeling.
        </p>
        <div className="bg-card rounded-lg border border-border p-8 mb-8">
          <p className="text-sm text-muted-foreground mb-2">Rekeningnummer</p>
          <p className="font-mono font-bold text-foreground text-2xl mb-2">BE12 3456 7890 1234</p>
          <p className="text-sm text-muted-foreground">BIC: GEBABEBB</p>
          <p className="text-sm text-muted-foreground">Op naam van: De Keeting vzw</p>
        </div>
      </div>
    </section>

    {/* Trooper */}
    <section className="bg-card section-padding">
      <div className="container-narrow max-w-2xl">
        <h2 className="text-2xl font-display font-bold mb-4 text-center">Steun via Trooper</h2>
        <div className="bg-background rounded-lg border border-border p-8 text-center">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Via Trooper kan je De Keeting gratis steunen bij je online aankopen bij meer dan 500 webshops.
            Een percentage van je aankoop gaat automatisch naar onze werking, zonder extra kosten voor jou.
          </p>
          <Button variant="default">
            Bezoek onze Trooper-pagina <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>

    {/* Fiscaal */}
    <section className="section-padding">
      <div className="container-narrow max-w-2xl">
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <FileText className="text-primary" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold mb-4">Fiscaal Attest</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Giften vanaf €40 per kalenderjaar komen in aanmerking voor een fiscaal attest.
              Dit geeft je recht op een belastingvermindering van 45%.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Het fiscaal attest wordt automatisch opgestuurd in het begin van het volgende jaar.
              Zorg ervoor dat je bij de overschrijving je volledige naam en adres vermeldt.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container-narrow text-center px-4">
        <h2 className="text-3xl font-display font-bold mb-4">Bedankt voor je steun!</h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
          Elke bijdrage, groot of klein, helpt ons om meer mensen te bereiken en te ondersteunen.
        </p>
        <Link to="/contact">
          <Button variant="hero" size="lg">Contacteer ons</Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Doneren;
