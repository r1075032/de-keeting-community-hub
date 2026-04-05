import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, CreditCard, FileText, ArrowRight, QrCode } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";

const presetAmounts = [10, 25, 50];

const generateEpcQr = (amount: number): string => {
  // EPC QR code format (European Payments Council)
  const lines = [
    "BCD",           // Service Tag
    "002",           // Version
    "1",             // Character set (UTF-8)
    "SCT",           // Identification
    "",              // BIC (optional)
    "De Keeting vzw", // Beneficiary name
    "BE86001256125950", // IBAN (no spaces)
    `EUR${amount.toFixed(2)}`, // Amount
    "",              // Purpose
    "",              // Remittance (structured)
    "Gift De Keeting", // Remittance (unstructured)
    "",              // Information
  ];
  return lines.join("\n");
};

const Doneren = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState("");
  const [showQr, setShowQr] = useState(false);

  const activeAmount = selectedAmount ?? (customAmount ? parseFloat(customAmount) : 0);
  const isValidAmount = activeAmount > 0 && activeAmount <= 10000;

  const handlePreset = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
    setShowQr(false);
  };

  const handleCustomChange = (value: string) => {
    const cleaned = value.replace(/[^0-9.,]/g, "").replace(",", ".");
    setCustomAmount(cleaned);
    setSelectedAmount(null);
    setShowQr(false);
  };

  return (
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

      {/* Interactive Donation */}
      <section className="section-padding">
        <div className="container-narrow max-w-2xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <QrCode className="text-primary" size={28} />
            <h2 className="text-3xl font-display font-bold">Kies een bedrag</h2>
          </div>

          {/* Amount selection */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => handlePreset(amount)}
                className={`rounded-lg border-2 p-6 text-center transition-all font-display font-bold text-2xl ${
                  selectedAmount === amount
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-card text-foreground hover:border-primary/50"
                }`}
              >
                €{amount}
              </button>
            ))}
          </div>

          {/* Custom amount */}
          <div className="mb-8">
            <label className="text-sm font-medium text-foreground mb-2 block">Of kies zelf een bedrag</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">€</span>
              <Input
                type="text"
                inputMode="decimal"
                placeholder="Ander bedrag"
                value={customAmount}
                onChange={(e) => handleCustomChange(e.target.value)}
                className="pl-9 text-lg h-12"
              />
            </div>
          </div>

          {/* Generate QR button */}
          <Button
            size="lg"
            className="w-full mb-8"
            disabled={!isValidAmount}
            onClick={() => setShowQr(true)}
          >
            Genereer QR-code voor €{isValidAmount ? activeAmount.toFixed(2) : "0.00"}
          </Button>

          {/* QR Code display */}
          {showQr && isValidAmount && (
            <div className="bg-card rounded-lg border border-border p-8 text-center animate-fade-in-up">
              <p className="text-muted-foreground text-sm mb-4">
                Scan deze QR-code met je bank-app om <strong className="text-foreground">€{activeAmount.toFixed(2)}</strong> over te schrijven
              </p>
              <div className="inline-block bg-white p-4 rounded-lg">
                <QRCodeSVG
                  value={generateEpcQr(activeAmount)}
                  size={220}
                  level="M"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                EPC QR-code — werkt met de meeste Belgische bank-apps (KBC, BNP Paribas Fortis, Belfius, ING, ...)
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Rekeningnummer */}
      <section className="bg-card section-padding">
        <div className="container-narrow max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <CreditCard className="text-primary" size={28} />
            <h2 className="text-3xl font-display font-bold">Overschrijving</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Je kan ook rechtstreeks een gift storten op ons rekeningnummer. Vermeld "Gift De Keeting" als mededeling.
          </p>
          <div className="bg-background rounded-lg border border-border p-8 mb-8">
            <p className="text-sm text-muted-foreground mb-2">Rekeningnummer vzw</p>
            <p className="font-mono font-bold text-foreground text-2xl mb-4">BE86 0012 5612 5950</p>
            <p className="text-sm text-muted-foreground">Op naam van: De Keeting vzw</p>
          </div>
        </div>
      </section>

      {/* Trooper */}
      <section className="section-padding">
        <div className="container-narrow max-w-2xl">
          <h2 className="text-2xl font-display font-bold mb-4 text-center">Steun via Trooper</h2>
          <div className="bg-card rounded-lg border border-border p-8 text-center">
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
      <section className="bg-card section-padding">
        <div className="container-narrow max-w-2xl">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <FileText className="text-primary" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold mb-4">Fiscaal Attest</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Indien gewenst kan via onze koepelorganisatie, het <strong className="text-foreground">Vlaams Netwerk Tegen Armoede</strong>,
                een fiscaal attest (vanaf €40) worden uitgereikt.
              </p>
              <div className="bg-background rounded-lg border border-border p-6 mb-4">
                <p className="text-sm text-muted-foreground mb-1">Stort hiervoor op rekeningnummer:</p>
                <p className="font-mono font-bold text-foreground text-lg mb-2">BE86 8939 4407 0450</p>
                <p className="text-sm text-muted-foreground">
                  Met vermelding: <strong className="text-foreground">"project 204 - De Keeting"</strong>
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Dit geeft je recht op een belastingvermindering van 45% op het gedoneerde bedrag.
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
};

export default Doneren;
