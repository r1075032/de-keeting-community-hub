import { useState } from "react";
import { Send, Clock, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  { q: "Wie kan terecht bij De Keeting?", a: "Iedereen die hulp nodig heeft is welkom. Je hoeft geen afspraak te maken — kom gewoon langs tijdens de openingsuren." },
  { q: "Zijn jullie diensten gratis?", a: "De meeste diensten zijn gratis of tegen een symbolische bijdrage. Kledij is beschikbaar tegen een kleine vergoeding." },
  { q: "Kan ik spullen doneren?", a: "Ja! We aanvaarden graag kledij, voeding en andere goederen in goede staat. Breng ze langs tijdens de openingsuren." },
  { q: "Hoe word ik vrijwilliger?", a: "Neem contact met ons op via het formulier of kom langs. We zoeken altijd enthousiaste mensen die willen helpen." },
  { q: "Geven jullie een fiscaal attest?", a: "Ja, via onze koepelorganisatie het Vlaams Netwerk Tegen Armoede. Giften vanaf €40 per kalenderjaar komen in aanmerking. Stort op rekeningnummer BE86 8939 4407 0450 met vermelding 'project 204 - De Keeting'." },
  { q: "Waar zijn jullie gevestigd?", a: "We zijn gevestigd in de Kroonstraat 64-66 te 2800 Mechelen. Kom gerust langs!" },
];

const openingsuren = [
  { dag: "Maandag", uren: "9:00 – 12:00 / 13:00 – 17:00" },
  { dag: "Dinsdag", uren: "9:00 – 12:00 / 13:00 – 17:00" },
  { dag: "Woensdag", uren: "9:00 – 12:00" },
  { dag: "Donderdag", uren: "9:00 – 12:00 / 13:00 – 17:00" },
  { dag: "Vrijdag", uren: "9:00 – 12:00 / 13:00 – 17:00" },
  { dag: "Za & Zo", uren: "Gesloten" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Bericht verzonden!", description: "We nemen zo snel mogelijk contact met je op." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">Contact & FAQ</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Heb je een vraag of wil je meer weten? Neem contact met ons op of bekijk onze veelgestelde vragen.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Stuur ons een bericht</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Naam</label>
                  <Input
                    placeholder="Jouw naam"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">E-mail</label>
                  <Input
                    type="email"
                    placeholder="jouw@email.be"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Bericht</label>
                  <Textarea
                    placeholder="Schrijf je bericht hier..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Verstuur <Send size={16} />
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Contactgegevens</h2>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="text-primary mt-0.5 shrink-0" size={18} />
                    <span>Kroonstraat 64-66, 2800 Mechelen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="text-primary mt-0.5 shrink-0" size={18} />
                    <span>015 27 09 25</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="text-primary mt-0.5 shrink-0" size={18} />
                    <span>info@dekeeting.be</span>
                  </li>
                </ul>
              </div>

              {/* Opening hours */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="text-primary" size={18} />
                  <h3 className="font-display font-semibold text-lg">Openingsuren</h3>
                </div>
                <div className="rounded-lg border border-border overflow-hidden">
                  {openingsuren.map((item, i) => (
                    <div
                      key={item.dag}
                      className={`flex justify-between px-4 py-2 text-sm ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
                    >
                      <span className="font-medium">{item.dag}</span>
                      <span className="text-muted-foreground">{item.uren}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-lg border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1246.8!2d4.4720786!3d51.025208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3e5c5cf682049%3A0xdbe52e405e18bd8e!2sKroonstraat%2066%2C%202800%20Mechelen!5e0!3m2!1snl!2sbe!4v1700000000000!5m2!1snl!2sbe"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locatie De Keeting - Kroonstraat 64-66, 2800 Mechelen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card section-padding">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-center mb-10">Veelgestelde Vragen</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
