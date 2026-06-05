"use client";
import { useState } from 'react';
import Head from 'next/head';

// Logo SVG (stéthoscope + cœur + empreinte de patte)
const Logo = () => (
  <svg width="150" height="100" viewBox="0 0 150 100" className="mx-auto mb-6">
    {/* Cœur */}
    <path d="M75 25 C60 10, 35 5, 35 25 C35 40, 75 65, 75 65 C75 65, 115 40, 115 25 C115 5, 90 10, 75 25 Z" fill="#801A1A" stroke="#801A1A" strokeWidth="2"/>
    {/* Empreinte de patte dans le cœur */}
    <path d="M65 40 C63 42, 60 45, 60 47 C60 50, 63 52, 65 52 C67 52, 70 50, 70 47 C70 45, 67 42, 65 40 Z" fill="white"/>
    <circle cx="62" cy="45" r="2.5" fill="white"/>
    <circle cx="68" cy="45" r="2.5" fill="white"/>
    <circle cx="65" cy="49" r="2.5" fill="white"/>
    {/* Tube du stéthoscope */}
    <path d="M75 25 C75 15, 70 10, 65 10" stroke="#801A1A" strokeWidth="3" strokeLinecap="round"/>
    <path d="M65 10 C60 10, 55 15, 55 25" stroke="#801A1A" strokeWidth="3" strokeLinecap="round"/>
    {/* Tête du stéthoscope */}
    <circle cx="55" cy="25" r="6" fill="#801A1A"/>
    <circle cx="55" cy="25" r="4" fill="white"/>
  </svg>
);

// Disclaimer (encadré rouge/orange clair)
const Disclaimer = () => (
  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8">
    <p className="text-sm text-gray-700 font-medium">
      SOS Véto+ vous guide immédiatement. Cette application est une aide à l'évaluation de l'urgence basée sur une intelligence artificielle.
      <strong> Elle ne fournit aucun acte médical et ne remplace aucunement une consultation chez un professionnel de santé vétérinaire.</strong>
    </p>
  </div>
);

// Boutons pour choisir l'animal
const AnimalSelector = ({ selected, onSelect }: { selected: string; onSelect: (animal: string) => void }) => {
  const animals = ["Chien", "Chat", "NAC"];
  return (
    <div className="flex justify-center gap-4 mb-8">
      {animals.map((animal) => (
        <button
          key={animal}
          onClick={() => onSelect(animal)}
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            selected === animal
              ? "bg-[#801A1A] text-white shadow-md"
              : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
          }`}
        >
          {animal}
        </button>
      ))}
    </div>
  );
};

// Zone de texte pour les symptômes
const SymptomInput = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => (
  <textarea
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="Décrivez les symptômes de votre animal (ex: vomissements, léthargie, boiterie)..."
    className="w-full p-4 border border-gray-200 rounded-lg mb-8 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#801A1A]"
  />
);

// Bouton d'analyse
const ActionButton = () => (
  <button className="w-full bg-[#801A1A] text-white py-4 rounded-lg font-bold text-lg hover:bg-red-800 transition-all mb-12">
    Analyser les symptômes
  </button>
);

// Carte de tarif
const PricingCard = ({ title, price, description, isRecommended }: { title: string; price: string; description: string; isRecommended: boolean }) => (
  <div className={`border-2 rounded-xl p-6 flex flex-col ${isRecommended ? 'border-[#801A1A] bg-white shadow-lg' : 'border-gray-200'}`}>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-3xl font-bold text-[#801A1A] mb-2">{price}</p>
    <p className="text-gray-600 mb-4 flex-grow">{description}</p>
    <button className={`w-full py-3 rounded-lg font-bold ${isRecommended ? 'bg-[#801A1A] text-white' : 'bg-gray-100 text-gray-700'}`}>
      Choisir
    </button>
  </div>
);

export default function Home() {
  const [animal, setAnimal] = useState("Chien");
  const [symptoms, setSymptoms] = useState("");

  const pricingPlans = [
    {
      title: "SOS Instant",
      price: "2,99€",
      description: "Achat unique. Donne accès au protocole de diagnostic + gestes d'urgence.",
      isRecommended: false,
    },
    {
      title: "SOS Localisation",
      price: "4,99€",
      description: "Recommandé. Achat unique. Donne accès au protocole + carte des vétérinaires GPS.",
      isRecommended: true,
    },
    {
      title: "Mensuel",
      price: "9,99€/mois",
      description: "Abonnement. Accès illimité à tous les diagnostics + carte des vétérinaires GPS.",
      isRecommended: false,
    },
    {
      title: "Annuel",
      price: "59€/an",
      description: "Abonnement. Accès illimité à tous les diagnostics + carte des vétérinaires GPS.",
      isRecommended: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SOS Véto+ | Diagnostic vétérinaire urgent</title>
        <meta name="description" content="Décrivez les symptômes de votre animal, notre IA vous guide immédiatement." />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Logo */}
        <Logo />

        {/* Disclaimer */}
        <Disclaimer />

        {/* Titre et sous-titre */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Votre animal ne va pas bien ?</h1>
          <p className="text-lg text-gray-600">
            Décrivez les symptômes en quelques mots. Notre IA analyse et vous guide immédiatement.
          </p>
        </div>

        {/* Sélecteur d'animal */}
        <AnimalSelector selected={animal} onSelect={setAnimal} />

        {/* Zone de texte */}
        <SymptomInput value={symptoms} onChange={setSymptoms} />

        {/* Bouton d'analyse */}
        <ActionButton />

        {/* Tarifs */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Nos formules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </main>
    </div>
  );
}
