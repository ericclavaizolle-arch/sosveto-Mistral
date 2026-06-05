'use client';
import { useState } from 'react';

export default function Home() {
  const [symptoms, setSymptoms] = useState('');
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const [animal, setAnimal] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string>('SOS Localisation');

  const handleAnalyze = () => {
    if (symptoms.trim().length > 5) {
      setIsAnalyzed(true);
    } else {
      alert("Merci de décrire un peu plus les symptômes de votre animal.");
    }
  };

  return (
    <main className="min-h-screen bg-white py-8 px-4 font-sans text-gray-900">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center">
          <div className="text-5xl mb-2">🐾</div>
          <h1 className="text-3xl font-bold">SOS Véto+</h1>
          <div className="inline-block bg-red-50 text-red-900 px-3 py-1 rounded-full text-sm font-semibold mt-2">
            Urgences animales 24h/24
          </div>
        </div>

        {!isAnalyzed ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center">Votre animal ne va pas bien ?</h2>
            <textarea 
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-xl h-32 focus:ring-2 focus:ring-red-900 outline-none" 
              placeholder="Décrivez les symptômes (ex: vomissements, léthargie...)"
            ></textarea>
            <button 
              onClick={handleAnalyze}
              className="w-full py-4 bg-red-900 text-white font-bold rounded-xl shadow-lg hover:bg-red-800 transition-colors"
            >
              Analyser les symptômes →
            </button>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="text-center font-bold text-lg">Quel est votre animal ?</div>
            <div className="flex justify-center gap-2">
              {['Chien', 'Chat', 'NAC'].map((type) => (
                <button 
                  key={type} 
                  onClick={() => setAnimal(type)}
                  className={`px-8 py-3 border-2 rounded-full font-bold transition-all ${animal === type ? 'bg-red-900 text-white border-red-900' : 'bg-white border-gray-300'}`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="p-4 bg-green-50 border border-green-800 text-green-900 rounded-lg text-sm text-center">
              <strong>Protocoles vérifiés par des vétérinaires.</strong><br/>
              SOS Véto+ vous guide immédiatement. Ne remplace pas une consultation professionnelle.
            </div>

            <div>
              <h3 className="font-bold text-gray-500 mb-3 text-center">NOS FORMULES</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'SOS Instant', price: '2,99€', desc: 'Protocole + gestes' },
                  { name: 'SOS Localisation', price: '4,99€', desc: 'TOUT + Vétérinaires GPS', rec: true },
                  { name: 'Mensuel', price: '9,99€', desc: 'Illimité' },
                  { name: 'Annuel', price: '59€', desc: '-50% • Tout illimité' }
                ].map((plan) => (
                  <div 
                    key={plan.name} 
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${selectedPlan === plan.name ? 'border-red-900 shadow-md bg-red-50/20' : 'border-gray-200'}`}
                  >
                    {plan.rec && <span className="text-[10px] bg-red-900 text-white px-2 py-0.5 rounded uppercase font-bold">Recommandé</span>}
                    <h4 className="font-bold mt-1">{plan.name}</h4>
                    <p className="text-xl font-bold">{plan.price}</p>
                    <p className="text-[10px] text-gray-500">{plan.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
