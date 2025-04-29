
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const flashcards = [
  { question: "Столица Франции", answer: "Париж" },
  { question: "Столица Казахстана", answer: "Астана" },
  { question: "Столица Японии", answer: "Токио" },
  { question: "Столица Канады", answer: "Оттава" },
  { question: "Столица Бразилии", answer: "Бразилиа" },
  { question: "Столица Германии", answer: "Берлин" },
  { question: "Столица Австралии", answer: "Канберра" },
  { question: "Столица Индии", answer: "Нью-Дели" },
  { question: "Столица Китая", answer: "Пекин" },
  { question: "Столица Италии", answer: "Рим" },
  { question: "Флаг Франции 🇫🇷", answer: "Франция" },
  { question: "Флаг Казахстана 🇰🇿", answer: "Казахстан" },
  { question: "Флаг Японии 🇯🇵", answer: "Япония" },
  { question: "Флаг Канады 🇨🇦", answer: "Канада" },
  { question: "Флаг Бразилии 🇧🇷", answer: "Бразилия" },
  { question: "Флаг Германии 🇩🇪", answer: "Германия" },
  { question: "Флаг Австралии 🇦🇺", answer: "Австралия" },
  { question: "Флаг Индии 🇮🇳", answer: "Индия" },
  { question: "Флаг Китая 🇨🇳", answer: "Китай" },
  { question: "Флаг Италии 🇮🇹", answer: "Италия" },
];

export default function FlashcardsApp() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const nextCard = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % flashcards.length);
  };

  const prevCard = () => {
    setFlipped(false);
    setIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  const currentCard = flashcards[index];

  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-100 p-4">
      <div className="max-w-md w-full text-center space-y-4">
        <h1 className="text-3xl font-bold">География: Страны, столицы и флаги</h1>
        <Card
          onClick={() => setFlipped(!flipped)}
          className="cursor-pointer transition-transform duration-300 hover:scale-105 bg-white shadow-xl rounded-2xl p-6"
        >
          <CardContent className="text-xl font-medium">
            {flipped ? currentCard.answer : currentCard.question}
          </CardContent>
        </Card>
        <div className="flex justify-between">
          <Button onClick={prevCard}>Назад</Button>
          <Button onClick={nextCard}>Вперед</Button>
        </div>
        <p className="text-sm text-gray-600">Нажмите на карточку, чтобы перевернуть</p>
      </div>
    </main>
  );
}
