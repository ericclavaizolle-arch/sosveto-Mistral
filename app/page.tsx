'use client';
import { useState } from 'react';

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    { name: 'SOS Instant', price: '2,99€', desc: 'Achat unique. Accès protocole.' },
    { name: 'SOS Localisation', price: '4,99€', desc: 'Achat unique. Protocole + GPS.' },
    { name: 'Mensuel', price: '9,99€/mois', desc: 'Accès illimité.' },
    { name: 'Annuel', price: '59€/an', desc: 'Accès illimité.' }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-xl mx-auto space-y-8">
        
        {/* Logo */}
        <div className="text-center text-4xl">❤️</div>

        {/* Disclaimer aux couleurs demandées */}
        <div className="p-4 bg-green-100 border border-green-800 text-green-900 rounded-lg text-sm">
          <strong>Avertissement :</strong> SOS Véto+ vous guide immédiatement. Cette application est une aide à l'évaluation de l'urgence basée sur une IA. Elle ne fournit aucun acte médical et ne remplace aucunement une consultation vétérinaire.
        </div>

        {/* Titre */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Votre animal ne va pas bien ?</h1>
          <p className="text-gray-600">Décrivez les symptômes, notre IA vous guide.</p>
        </div>

        {/* Formulaire */}
        <div className="space-y-4">
          <div className="flex justify-center gap-2">
            {['Chien', 'Chat', 'NAC'].map((type) => (
              <button key={type} className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100">{type}</button>
            ))}
          </div>
          <textarea className="w-full p-4 border border-gray-300 rounded-lg h-32" placeholder="Décrivez les symptômes..."></textarea>
          <button className="w-full py-4 bg-stone-800 text-white font-bold rounded-lg hover:bg-stone-900">Analyser les symptômes</button>
        </div>

        {/* Tarifs */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-center">Nos formules</h2>
          <div className="grid grid-cols-1 gap-4">
            {plans.map((plan) => (
              <div key={plan.name} className={`p-6 border rounded-xl transition-all ${selectedPlan === plan.name ? 'border-green-600 bg-white shadow-md' : 'border-gray-200 bg-white'}`}>
                <h3 className="font-bold text-lg">{plan.name}</h3>
                <p className="text-2xl font-bold my-1">{plan.price}</p>
                <p className="text-sm text-gray-600 mb-4">{plan.desc}</p>
                <button 
                  onClick={() => setSelectedPlan(plan.name)}
                  className="w-full py-2 border border-stone-800 rounded-lg hover:bg-stone-800 hover:text-white"
                >
                  Choisir
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
