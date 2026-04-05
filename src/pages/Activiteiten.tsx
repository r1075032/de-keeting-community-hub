import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import cookingImg from "@/assets/activity-cooking.jpg";
import meetingImg from "@/assets/activity-meeting.jpg";
import repairImg from "@/assets/activity-repair.jpg";
import volunteersImg from "@/assets/volunteers.jpg";

const activities = [
  {
    title: "Kookgroep",
    desc: "Elke vrijdag koken we samen een heerlijke warme maaltijd (€2,50). Iedereen is welkom om mee te helpen of gewoon te komen eten. Inschrijven ten laatste op donderdag voor 13.30u.",
    image: cookingImg,
  },
  {
    title: "Ontmoetingsruimte",
    desc: "Onze huiskamer staat altijd open op maandag, donderdag en vrijdag. Kom langs voor een kopje koffie of thee, een krant, gratis wifi of gewoon een gezellige babbel. Hier is niemand alleen.",
    image: meetingImg,
  },
  {
    title: "Repair Café Mechelen",
    desc: "Een gratis bijeenkomst waarbij vrijwilligers en bezoekers elkaar helpen bij het herstellen van allerhande voorwerpen. Drie categorieën: kledij, fietsen en klein elektro. Max 1 herstelling per categorie, binnenbrengen tot 12u.",
    image: repairImg,
  },
  {
    title: "Kledinghoek",
    desc: "Open op maandag, donderdag en vrijdag van 10u tot 12u. Elke dag mag je 5 gratis kledingstukken voor volwassenen en kinderen meenemen.",
    image: volunteersImg,
  },
  {
    title: "Themawerking",
    desc: "Tweejaarlijks gaat een themawerking van start in samenspraak met de bezoekers. Knelpunten worden besproken en er wordt naar beleidsmatige alternatieven gezocht.",
    image: meetingImg,
  },
];

const calendarEvents = [
  { date: "7 apr", title: "Ontmoetingsruimte + Kledinghoek", time: "10:00 – 12:00" },
  { date: "10 apr", title: "Ontmoetingsruimte + Broodmaaltijd + Kledinghoek", time: "10:00 – 12:00" },
  { date: "11 apr", title: "Warme maaltijd + Kookgroep + Kledinghoek", time: "10:00 – 14:00" },
  { date: "14 apr", title: "Ontmoetingsruimte + Kledinghoek", time: "10:00 – 12:00" },
  { date: "17 apr", title: "Ontmoetingsruimte + Broodmaaltijd + Kledinghoek", time: "10:00 – 12:00" },
  { date: "18 apr", title: "Warme maaltijd + Kookgroep + Kledinghoek", time: "10:00 – 14:00" },
];

const repairCafeRules = [
  "Slechts 1 herstelling per categorie",
  "Herstellingen kunnen binnengebracht worden tot 12.00u",
  "Breng indien mogelijk een wisselstuk mee. Sommige wisselstukken zijn verkrijgbaar tegen aankoopprijs",
  "We kunnen helaas niet alle herstellingen garanderen",
];

const Activiteiten = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">Activiteiten & Projecten</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Bij De Keeting is er altijd iets te doen. Van samen koken tot spullen repareren — doe mee!
        </p>

        {/* Calendar */}
        <div className="bg-card rounded-lg border border-border p-6 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="text-primary" size={24} />
            <h2 className="text-2xl font-display font-semibold">Activiteitenkalender – April 2026</h2>
          </div>
          <div className="space-y-3">
            {calendarEvents.map((e, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-md bg-background border border-border">
                <div className="w-16 text-center shrink-0">
                  <span className="text-sm font-bold text-primary">{e.date}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{e.title}</p>
                  <p className="text-xs text-muted-foreground">{e.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Repair Café highlight */}
        <div className="bg-card rounded-lg border border-border p-8 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="text-primary" size={24} />
            <h2 className="text-2xl font-display font-semibold">Repair Café Mechelen</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Repair Café Mechelen is een <strong className="text-foreground">gratis bijeenkomst</strong>, waarbij vrijwilligers
            en bezoekers elkaar helpen bij het herstellen van allerhande voorwerpen. Bezoekers kunnen
            hun kapotte spullen meebrengen en samen met de deskundige vrijwilligers herstellen.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Er zijn drie categorieën: <strong className="text-foreground">kledij, fietsen en klein elektro</strong>.
          </p>
          <ul className="space-y-2">
            {repairCafeRules.map((rule, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary font-bold mt-0.5">•</span>
                {rule}
              </li>
            ))}
          </ul>
        </div>

        {/* Activities grid */}
        <h2 className="text-2xl font-display font-bold text-center mb-8">Onze Werkgroepen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((a) => (
            <div key={a.title} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <img src={a.image} alt={a.title} className="w-full h-48 object-cover" loading="lazy" width={800} height={600} />
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">{a.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact">
            <Button size="lg">Meer weten? Contacteer ons <ArrowRight size={16} /></Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Activiteiten;
