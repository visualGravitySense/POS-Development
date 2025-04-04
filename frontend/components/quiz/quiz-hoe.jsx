import React, { useState } from 'react';
import { User, Award, Home, Settings, ChevronRight, Gift, Star, ArrowRight } from 'lucide-react';

const QuizApp = () => {
  const [currentLevel, setCurrentLevel] = useState(7);
  const [bonusPoints, setBonusPoints] = useState(2750);
  const [userName, setUserName] = useState("Player123");
  
  return (
    <div className="flex flex-col h-screen bg-slate-100">
      {/* Navigation Bar */}
      <nav className="bg-indigo-600 text-white p-4 flex justify-between items-center shadow-lg">
        <div className="text-xl font-bold">Quiz Master</div>
        <div className="flex space-x-4">
          <button className="flex items-center space-x-1 p-2 bg-indigo-700 rounded-lg">
            <Home size={20} />
            <span>Home</span>
          </button>
          <button className="flex items-center space-x-1 p-2">
            <Award size={20} />
            <span>Rating</span>
          </button>
          <button className="flex items-center space-x-1 p-2">
            <User size={20} />
            <span>Profile</span>
          </button>
          <button className="flex items-center space-x-1 p-2">
            <Settings size={20} />
            <span>Settings</span>
          </button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {userName}!</h1>
        <div className="bg-yellow-500 text-indigo-900 p-3 rounded-lg mb-6 flex items-center mt-2">
          <Gift size={24} className="mr-2" />
          <span className="font-bold">Special Offer: Win 2x bonus points this weekend!</span>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white py-4 px-8 rounded-xl font-bold text-xl flex items-center transition-all transform hover:scale-105">
          START GAME
          <ArrowRight size={24} className="ml-2" />
        </button>
      </div>
      
      {/* Player Statistics */}
      <div className="flex-1 p-6">
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Your Progress</h2>
          
          {/* Level Display */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Current Level</span>
              <span className="font-bold text-indigo-600">Level {currentLevel}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-indigo-600 h-4 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Level {currentLevel}</span>
              <span>Level {currentLevel + 1}</span>
            </div>
          </div>
          
          {/* Bonus Points */}
          <div className="flex items-center p-4 bg-indigo-50 rounded-lg">
            <div className="bg-yellow-400 p-3 rounded-full mr-4">
              <Star size={24} className="text-yellow-800" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Earned Bonuses</h3>
              <p className="text-2xl font-bold text-indigo-600">{bonusPoints} points</p>
            </div>
            <button className="ml-auto bg-indigo-100 hover:bg-indigo-200 text-indigo-700 py-2 px-4 rounded-lg flex items-center">
              Redeem
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        
        {/* Quick Categories */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Play</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-red-100 hover:bg-red-200 text-red-800 p-4 rounded-lg font-medium flex justify-between items-center">
              History
              <ChevronRight size={16} />
            </button>
            <button className="bg-blue-100 hover:bg-blue-200 text-blue-800 p-4 rounded-lg font-medium flex justify-between items-center">
              Science
              <ChevronRight size={16} />
            </button>
            <button className="bg-green-100 hover:bg-green-200 text-green-800 p-4 rounded-lg font-medium flex justify-between items-center">
              Geography
              <ChevronRight size={16} />
            </button>
            <button className="bg-purple-100 hover:bg-purple-200 text-purple-800 p-4 rounded-lg font-medium flex justify-between items-center">
              Entertainment
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;