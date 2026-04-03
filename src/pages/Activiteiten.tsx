import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import cookingImg from "@/assets/activity-cooking.jpg";
import meetingImg from "@/assets/activity-meeting.jpg";
import repairImg from "@/assets/activity-repair.jpg";
import volunteersImg from "@/assets/volunteers.jpg";

const activities = [
  {
    title: "Kookgroep",
    desc: "Elke dinsdag koken we samen een heerlijke maaltijd. Iedereen is welkom om mee te helpen of gewoon te komen eten. Een moment van warmte en verbinding.",
    image: cookingImg,
  },
  {
    title: "Ontmoetingsruimte",
    desc: "Onze huiskamer staat altijd open. Kom langs voor een kopje koffie, een babbel of gewoon wat gezelschap. Hier is niemand alleen.",
    image: meetingImg,
  },
  {
    title: "Repair Café",
    desc: "Elke eerste zaterdag van de maand repareren we samen kapotte spullen. Van fietsen tot elektronica — onze handige vrijwilligers helpen je graag.",
    image: repairImg,
  },
  {
    title: "Kledinghoek",
    desc: "Tweemaal per week openen we onze kledinghoek met kwalitatieve tweedehands kledij voor het hele gezin.",
    image: volunteersImg,
  },
  {
    title: "Themawerking",
    desc: "Regelmatig organiseren we workshops en infosessies rond thema's als gezondheid, budgetbeheer, digitale vaardigheden en meer.",
    image: meetingImg,
  },
];

const calendarEvents = [
  { date: "7 apr", title: "Kookgroep", time: "10:00 – 14:00" },
  { date: "9 apr", title: "Ontmoetingsruimte", time: "13:00 – 17:00" },
  { date: "12 apr", title: "Repair Café", time: "10:00 – 16:00" },
  { date: "14 apr", title: "Kookgroep", time: "10:00 – 14:00" },
  { date: "16 apr", title: "Kledinghoek", time: "9:00 – 12:00" },
  { date: "21 apr", title: "Themawerking: Budgetbeheer", time: "14:00 – 16:00" },
];

const Activiteiten = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">Activiteiten</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Bij De Keeting is er altijd iets te doen. Van samen koken tot spullen repareren — doe mee!
        </p>

        {/* Calendar */}
        <div className="bg-card rounded-lg border border-border p-6 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="text-primary" size={24} />
            <h2 className="text-2xl font-display font-semibold">Kalender – April 2026</h2>
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

        {/* Activities grid */}
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
