import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const verhalen = [
  {
    name: "Maria",
    quote: "Dankzij De Keeting voelde ik me niet meer alleen.",
    text: "Maria kwam twee jaar geleden voor het eerst langs bij De Keeting. Na een moeilijke scheiding stond ze er plots alleen voor met twee kinderen. De vrijwilligers hielpen haar met kledij, voeding en een warm onthaal.",
  },
  {
    name: "Ahmed",
    quote: "De vrijwilligers gaven me hoop en een nieuw begin.",
    text: "Ahmed vluchtte uit Syrië en kwam terecht in België zonder netwerk. Bij De Keeting vond hij niet alleen kleding en praktische hulp, maar ook een gemeenschap die hem opving.",
  },
  {
    name: "Sofie",
    quote: "Het is ons tweede thuis geworden.",
    text: "Sofie ontdekte De Keeting via een vriendin. Haar kinderen kijken uit naar de wekelijkse activiteiten en zij geniet van de koffie en een babbel met andere ouders.",
  },
  {
    name: "Patrick",
    quote: "Ze behandelden me met respect, dat was ik niet gewend.",
    text: "Patrick leefde jarenlang op straat. Bij De Keeting vond hij warme kleding, een maaltijd en mensen die naar hem luisterden. Vandaag komt hij nog steeds langs als vrijwilliger.",
  },
  {
    name: "Lina",
    quote: "Eindelijk een plek waar ik mezelf kan zijn.",
    text: "Lina worstelde met eenzaamheid na haar pensionering. De ontmoetingsruimte werd haar vaste afspraak. Ze maakte er nieuwe vrienden en voelt zich weer deel van iets.",
  },
  {
    name: "Youssef",
    quote: "Mijn kinderen leerden hier Nederlands op een speelse manier.",
    text: "Youssef en zijn gezin kwamen als nieuwkomers in België aan. Via De Keeting kwamen ze in contact met de buurt en leerden ze de taal kennen dankzij de themaworkshops.",
  },
];

const Verhalen = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">Verhalen</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Echte verhalen van mensen die bij De Keeting terecht konden. Hun woorden spreken voor zich.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verhalen.map((v) => (
            <div key={v.name} className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <span className="font-display font-bold text-secondary text-lg">{v.name[0]}</span>
              </div>
              <blockquote className="text-foreground font-medium italic mb-3 text-lg leading-snug">
                "{v.quote}"
              </blockquote>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{v.text}</p>
              <p className="text-sm font-semibold text-primary">— {v.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Verhalen;
