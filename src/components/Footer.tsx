import { Link } from "react-router-dom";
import { Heart, Facebook, Mail, MapPin, Clock } from "lucide-react";
import vlaanderenLogo from "@/assets/vlaanderen-verbeelding-werkt.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-narrow section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-4">De Keeting</h3>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            Een warme plek waar iedereen welkom is. Wij helpen mensen in nood met
            kledij, voeding, praktische hulp en een luisterend oor.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="mailto:info@dekeeting.be"
              className="hover:text-secondary transition-colors"
              aria-label="E-mail"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Navigatie</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
            <li><Link to="/hulp-diensten" className="hover:text-secondary transition-colors">Hulp & Diensten</Link></li>
            <li><Link to="/activiteiten" className="hover:text-secondary transition-colors">Activiteiten</Link></li>
            <li><Link to="/vrijwilligers" className="hover:text-secondary transition-colors">Vrijwilligers</Link></li>
            <li><Link to="/doneren" className="hover:text-secondary transition-colors">Doneren</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Keetingstraat 12, 9000 Gent</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <span>info@dekeeting.be</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 shrink-0" />
              <span>Ma–Vr: 9:00 – 17:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
        <p>© {new Date().getFullYear()} De Keeting vzw. Alle rechten voorbehouden.</p>
        <p className="flex items-center gap-1">
          Gemaakt met <Heart size={12} className="text-secondary" /> voor de gemeenschap
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
