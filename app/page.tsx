"use client";import { useState } from 'react';
import Head from 'next/head';

const Logo = () => (
  <svg width="120" height="80" viewBox="0 0 120 80" className="mx-auto mb-4">
    <path d="M60 20C50 10 30 5 30 20C30 35 60 55 60 55C60 55 90 35 90 20C90 5 70 10 60 20Z" fill="#801A1A" stroke="#801A1A" strokeWidth="2"/>
    <path d="M50 35C48 37 45 40 45 42C45 45 48 47 50 47C52 47 55 45 55 42C55 40 52 37 50 35Z" fill="white"/>
    <circle cx="47" cy="40" r="2" fill="white"/>
    <circle cx="53" cy="40" r="2" fill="white"/>
    <circle cx="50" cy="44" r="2" fill="white"/>
    <path d="M60 20C60 15 55 10 50 10" stroke="#801A1A" strokeWidth="2" strokeLinecap="round"/>
    <path d="M50 10C45 10 40 15 40 20" stroke="#801A1A" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="40" cy="20" r="5" fill="#801A1A"/>
    <circle cx="40" cy="20" r="3" fill="white"/>
  </svg>
);

const Disclaimer = () => (
  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-sm text-gray-700">
    <p className="font-medium">
      SOS Véto+ vous guide immédiatement. Cette application est une aide à l'évaluation de l'urgence basée sur une intelligence artificielle. Elle ne fournit aucun acte médical et ne remplace aucunement une consultation chez un professionnel de santé vétérinaire.
    </p>
  </div>
);

export default function Home() {
  const [animal, setAnimal] = useState("Chien");
  const [symptoms, setSymptoms] = useState("");
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SOS Véto+</title>
      </Head>
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <Logo />
        <Disclaimer />
        <h1 className="text-3xl font-bold text-center mb-2">Votre animal ne va pas bien ?</h1>
        <p className="text-center text-gray-600 mb-6">
          Décrivez les symptômes en quelques mots. Notre IA analyse et vous guide immédiatement.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          {["Chien", "Chat", "NAC"].map((a) => (
            <button
              key={a}
              onClick={() => setAnimal(a)}
              className={`px-6 py-2 rounded-full font-medium ${
                animal === a ? "bg-[#801A1A] text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {a}
            </button>
          ))}
        </div>
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Décrivez les symptômes..."
          className="w-full p-4 border rounded-lg mb-6 h-32"
        />
        <button className="w-full bg-[#801A1A] text-white py-4 rounded-lg font-bold">
          Analyser les symptômes
        </button>
      </main>
    </div>
  );
}
