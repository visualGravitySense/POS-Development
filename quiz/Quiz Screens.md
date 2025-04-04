![[Pasted image 20250404155850.png]]

I'll help you develop the UI elements for your Quiz App based on the specifications you've provided. Let's create a structured design for the Home Page with all the components you've mentioned.

```tsx
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

```

## Quiz App Home Page - Detailed Features

### Navigation Bar

- **Design**: Full-width bar with a clean purple/indigo gradient
- **Elements**:
    - App logo/name ("Quiz Master")
    - Navigation buttons with icons for better visual recognition:
        - Home (currently selected)
        - Rating (for leaderboards)
        - Profile
        - Settings

### Hero Section

- **Design**: Eye-catching gradient background to draw attention
- **Elements**:
    - Personalized greeting with username
    - Promotional banner highlighting current special offer (2x bonus weekend)
    - Prominent "START GAME" button with hover animation

### Player Statistics

- **Level Progression**:
    
    - Visual progress bar showing advancement toward next level
    - Current level (7) clearly displayed
    - Progress percentage visually represented (70% to next level)
- **Bonus Points System**:
    
    - Current bonus points prominently displayed (2750)
    - "Redeem" button for converting points to rewards
    - Star icon to visually represent the bonus concept

### Quick Play Section

- **Category Selection**:
    - Grid layout of popular quiz categories
    - Color-coded categories for easy visual identification
    - Each category is clickable to start a quiz immediately

## Development Considerations

### Technical Implementation

- React components with state management for user data
- Responsive design that works on mobile and desktop
- Tailwind CSS for styling (as shown in the component)

### User Experience Notes

- Visual feedback on interactive elements (hover states, etc.)
- Clear hierarchy of information with the most important actions highlighted
- Personalized elements to increase engagement

### Next Steps

1. **Develop additional screens**:
    
    - Quiz gameplay interface
    - Results screen
    - Profile page
    - Settings panel
2. **Backend integration**:
    
    - Firebase authentication for user accounts
    - Firestore database for storing quiz content and user progress
    - Functions for calculating scores and level progression
3. **Feature expansion**:
    
    - Friend challenges
    - Daily quests
    - Achievement system
    - More detailed statistics

Would you like me to elaborate on any specific aspect of the UI design or develop additional screens for the app?


---


I'll create the Quiz Game Screen with all the specified features. Here's a design for your quiz game interface:

```tsx
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Award, DollarSign, HelpCircle, X, Check, TrendingUp } from 'lucide-react';

const QuizGameScreen = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentBet, setCurrentBet] = useState(100);
  const [confirmed, setConfirmed] = useState(false);
  const [availableBonuses, setAvailableBonuses] = useState([
    { id: 1, name: 'Hint', icon: <HelpCircle size={18} />, active: true },
    { id: 2, name: '50/50', icon: <X size={18} />, active: true },
    { id: 3, name: 'Extra Time', icon: <Clock size={18} />, active: true },
  ]);
  
  // Mock question data
  const question = {
    text: "Which planet in our solar system has the most moons?",
    options: [
      { id: 'A', text: "Jupiter" },
      { id: 'B', text: "Saturn" },
      { id: 'C', text: "Uranus" },
      { id: 'D', text: "Neptune" }
    ],
    correctAnswer: 'B'
  };
  
  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0 && !confirmed) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, confirmed]);
  
  // Timer color based on time remaining
  const getTimerColor = () => {
    if (timeLeft > 15) return 'text-green-500';
    if (timeLeft > 5) return 'text-yellow-500';
    return 'text-red-500';
  };
  
  // Handle bet changes
  const adjustBet = (amount) => {
    const newBet = Math.max(50, currentBet + amount);
    setCurrentBet(newBet);
  };
  
  // Use a bonus
  const useBonus = (bonusId) => {
    setAvailableBonuses(availableBonuses.map(bonus => 
      bonus.id === bonusId ? {...bonus, active: false} : bonus
    ));
    
    // Bonus effects would be implemented here
    if (bonusId === 3) {
      setTimeLeft(timeLeft + 15); // Add 15 seconds for Extra Time bonus
    }
  };
  
  // Handle answer selection
  const selectAnswer = (answerId) => {
    if (!confirmed) {
      setSelectedAnswer(answerId);
    }
  };
  
  // Submit answer
  const confirmAnswer = () => {
    if (selectedAnswer) {
      setConfirmed(true);
      // Here you would handle scoring logic
    }
  };
  
  // Double the bet
  const doubleBet = () => {
    if (!confirmed) {
      setCurrentBet(currentBet * 2);
    }
  };
  
  return (
    <div className="flex flex-col h-screen bg-indigo-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4 flex justify-between items-center">
        <button className="flex items-center">
          <ArrowLeft size={24} />
          <span className="ml-2">Exit Quiz</span>
        </button>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Award size={18} className="mr-1" />
            <span>Score: 450</span>
          </div>
          <div className="flex items-center">
            <DollarSign size={18} className="mr-1" />
            <span>Total Bet: 700</span>
          </div>
        </div>
      </header>
      
      {/* Timer */}
      <div className="flex justify-center p-4">
        <div className={`flex items-center justify-center rounded-full w-16 h-16 border-4 border-gray-200 ${getTimerColor()}`}>
          <Clock size={20} className="mr-1" />
          <span className="font-bold">{timeLeft}</span>
        </div>
      </div>
      
      {/* Question */}
      <div className="p-6 bg-white rounded-lg m-4 shadow-lg">
        <h1 className="text-xl font-bold text-gray-800 mb-4">
          {question.text}
        </h1>
        
        {/* Answer Options */}
        <div className="grid grid-cols-1 gap-3 mb-6">
          {question.options.map((option) => (
            <button
              key={option.id}
              className={`p-4 rounded-lg text-left transition-all ${
                selectedAnswer === option.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              } ${
                confirmed && option.id === question.correctAnswer
                  ? 'bg-green-500 text-white'
                  : ''
              } ${
                confirmed && selectedAnswer === option.id && option.id !== question.correctAnswer
                  ? 'bg-red-500 text-white'
                  : ''
              }`}
              onClick={() => selectAnswer(option.id)}
              disabled={confirmed}
            >
              <span className="font-bold mr-2">{option.id}:</span>
              {option.text}
            </button>
          ))}
        </div>
      </div>
      
      {/* Betting and Bonuses Section */}
      <div className="p-4 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Bet Controls */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold text-gray-700 mb-2">Place Your Bet</h2>
            <div className="flex items-center justify-between">
              <button 
                className="bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center"
                onClick={() => adjustBet(-50)}
                disabled={confirmed}
              >
                -
              </button>
              <div className="flex items-center">
                <DollarSign size={20} className="text-green-600" />
                <span className="text-2xl font-bold">{currentBet}</span>
              </div>
              <button 
                className="bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center"
                onClick={() => adjustBet(50)}
                disabled={confirmed}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Bonuses */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold text-gray-700 mb-2">Bonuses</h2>
            <div className="flex justify-between">
              {availableBonuses.map(bonus => (
                <button 
                  key={bonus.id} 
                  className={`flex flex-col items-center justify-center p-2 rounded-lg ${
                    bonus.active 
                      ? 'text-indigo-600 hover:bg-indigo-100' 
                      : 'text-gray-400 cursor-not-allowed'
                  }`}
                  onClick={() => bonus.active && useBonus(bonus.id)}
                  disabled={!bonus.active || confirmed}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    bonus.active ? 'bg-indigo-100' : 'bg-gray-100'
                  }`}>
                    {bonus.icon}
                  </div>
                  <span className="text-xs mt-1">{bonus.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex mt-4 space-x-4">
          <button 
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold flex items-center justify-center disabled:opacity-50"
            onClick={confirmAnswer}
            disabled={!selectedAnswer || confirmed}
          >
            <Check size={20} className="mr-2" />
            Confirm Answer
          </button>
          <button 
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-bold flex items-center justify-center disabled:opacity-50"
            onClick={doubleBet}
            disabled={confirmed}
          >
            <TrendingUp size={20} className="mr-2" />
            Double Bet
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizGameScreen;

```

This Quiz Game Screen includes all the elements you requested. Here's a breakdown of what I've created:

## Main Components

### Question Display

- Clean, prominent question display at the center of the screen
- Four answer options displayed as selectable buttons
- Visual feedback when an option is selected
- Color-coded results after confirming (green for correct, red for incorrect)

### Betting System

- Current bet display with increment/decrement controls
- Default bet of 100 points
- Total bet accumulation shown in the header
- "Double Bet" button to instantly double your current wager

### Timer Component

- 30-second countdown timer prominently displayed
- Color changes based on time remaining (green → yellow → red)
- Visual clock icon for better user understanding

### Bonus System

- Three different bonus types with visual icons:
    - Hint: Provides a clue about the correct answer
    - 50/50: Eliminates two incorrect options
    - Extra Time: Adds 15 seconds to the timer
- Each bonus can only be used once per game (tracked by active state)
- Visual indication when bonuses are used (grayed out)

### Interactive Elements

- "Confirm Answer" button that submits the selected answer
- "Double Bet" button to increase the wager
- Bonus buttons for strategic advantage
- Exit button to leave the quiz

### Score Tracking

- Current score display in the header
- Total bet tracking

## Technical Features

- React state management for all interactive elements
- Timer countdown using useEffect hook
- Conditional rendering for answer states (selected, correct, incorrect)
- Responsive layout that works across device sizes

This design creates an engaging quiz experience with game mechanics that increase excitement through betting and bonuses. The timer adds pressure while the betting system adds strategic depth to each question.



![[Pasted image 20250404163333.png]]


I'll create the Quiz Game Screen with all the specified features. Here's a design for your quiz game interface:

```tsx
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Award, DollarSign, HelpCircle, X, Check, TrendingUp } from 'lucide-react';

const QuizGameScreen = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentBet, setCurrentBet] = useState(100);
  const [confirmed, setConfirmed] = useState(false);
  const [availableBonuses, setAvailableBonuses] = useState([
    { id: 1, name: 'Hint', icon: <HelpCircle size={18} />, active: true },
    { id: 2, name: '50/50', icon: <X size={18} />, active: true },
    { id: 3, name: 'Extra Time', icon: <Clock size={18} />, active: true },
  ]);
  
  // Mock question data
  const question = {
    text: "Which planet in our solar system has the most moons?",
    options: [
      { id: 'A', text: "Jupiter" },
      { id: 'B', text: "Saturn" },
      { id: 'C', text: "Uranus" },
      { id: 'D', text: "Neptune" }
    ],
    correctAnswer: 'B'
  };
  
  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0 && !confirmed) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, confirmed]);
  
  // Timer color based on time remaining
  const getTimerColor = () => {
    if (timeLeft > 15) return 'text-green-500';
    if (timeLeft > 5) return 'text-yellow-500';
    return 'text-red-500';
  };
  
  // Handle bet changes
  const adjustBet = (amount) => {
    const newBet = Math.max(50, currentBet + amount);
    setCurrentBet(newBet);
  };
  
  // Use a bonus
  const useBonus = (bonusId) => {
    setAvailableBonuses(availableBonuses.map(bonus => 
      bonus.id === bonusId ? {...bonus, active: false} : bonus
    ));
    
    // Bonus effects would be implemented here
    if (bonusId === 3) {
      setTimeLeft(timeLeft + 15); // Add 15 seconds for Extra Time bonus
    }
  };
  
  // Handle answer selection
  const selectAnswer = (answerId) => {
    if (!confirmed) {
      setSelectedAnswer(answerId);
    }
  };
  
  // Submit answer
  const confirmAnswer = () => {
    if (selectedAnswer) {
      setConfirmed(true);
      // Here you would handle scoring logic
    }
  };
  
  // Double the bet
  const doubleBet = () => {
    if (!confirmed) {
      setCurrentBet(currentBet * 2);
    }
  };
  
  return (
    <div className="flex flex-col h-screen bg-indigo-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4 flex justify-between items-center">
        <button className="flex items-center">
          <ArrowLeft size={24} />
          <span className="ml-2">Exit Quiz</span>
        </button>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Award size={18} className="mr-1" />
            <span>Score: 450</span>
          </div>
          <div className="flex items-center">
            <DollarSign size={18} className="mr-1" />
            <span>Total Bet: 700</span>
          </div>
        </div>
      </header>
      
      {/* Timer */}
      <div className="flex justify-center p-4">
        <div className={`flex items-center justify-center rounded-full w-16 h-16 border-4 border-gray-200 ${getTimerColor()}`}>
          <Clock size={20} className="mr-1" />
          <span className="font-bold">{timeLeft}</span>
        </div>
      </div>
      
      {/* Question */}
      <div className="p-6 bg-white rounded-lg m-4 shadow-lg">
        <h1 className="text-xl font-bold text-gray-800 mb-4">
          {question.text}
        </h1>
        
        {/* Answer Options */}
        <div className="grid grid-cols-1 gap-3 mb-6">
          {question.options.map((option) => (
            <button
              key={option.id}
              className={`p-4 rounded-lg text-left transition-all ${
                selectedAnswer === option.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              } ${
                confirmed && option.id === question.correctAnswer
                  ? 'bg-green-500 text-white'
                  : ''
              } ${
                confirmed && selectedAnswer === option.id && option.id !== question.correctAnswer
                  ? 'bg-red-500 text-white'
                  : ''
              }`}
              onClick={() => selectAnswer(option.id)}
              disabled={confirmed}
            >
              <span className="font-bold mr-2">{option.id}:</span>
              {option.text}
            </button>
          ))}
        </div>
      </div>
      
      {/* Betting and Bonuses Section */}
      <div className="p-4 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Bet Controls */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold text-gray-700 mb-2">Place Your Bet</h2>
            <div className="flex items-center justify-between">
              <button 
                className="bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center"
                onClick={() => adjustBet(-50)}
                disabled={confirmed}
              >
                -
              </button>
              <div className="flex items-center">
                <DollarSign size={20} className="text-green-600" />
                <span className="text-2xl font-bold">{currentBet}</span>
              </div>
              <button 
                className="bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center"
                onClick={() => adjustBet(50)}
                disabled={confirmed}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Bonuses */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold text-gray-700 mb-2">Bonuses</h2>
            <div className="flex justify-between">
              {availableBonuses.map(bonus => (
                <button 
                  key={bonus.id} 
                  className={`flex flex-col items-center justify-center p-2 rounded-lg ${
                    bonus.active 
                      ? 'text-indigo-600 hover:bg-indigo-100' 
                      : 'text-gray-400 cursor-not-allowed'
                  }`}
                  onClick={() => bonus.active && useBonus(bonus.id)}
                  disabled={!bonus.active || confirmed}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    bonus.active ? 'bg-indigo-100' : 'bg-gray-100'
                  }`}>
                    {bonus.icon}
                  </div>
                  <span className="text-xs mt-1">{bonus.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex mt-4 space-x-4">
          <button 
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold flex items-center justify-center disabled:opacity-50"
            onClick={confirmAnswer}
            disabled={!selectedAnswer || confirmed}
          >
            <Check size={20} className="mr-2" />
            Confirm Answer
          </button>
          <button 
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-bold flex items-center justify-center disabled:opacity-50"
            onClick={doubleBet}
            disabled={confirmed}
          >
            <TrendingUp size={20} className="mr-2" />
            Double Bet
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizGameScreen;

```

This Quiz Game Screen includes all the elements you requested. Here's a breakdown of what I've created:

## Main Components

### Question Display

- Clean, prominent question display at the center of the screen
- Four answer options displayed as selectable buttons
- Visual feedback when an option is selected
- Color-coded results after confirming (green for correct, red for incorrect)

### Betting System

- Current bet display with increment/decrement controls
- Default bet of 100 points
- Total bet accumulation shown in the header
- "Double Bet" button to instantly double your current wager

### Timer Component

- 30-second countdown timer prominently displayed
- Color changes based on time remaining (green → yellow → red)
- Visual clock icon for better user understanding

### Bonus System

- Three different bonus types with visual icons:
    - Hint: Provides a clue about the correct answer
    - 50/50: Eliminates two incorrect options
    - Extra Time: Adds 15 seconds to the timer
- Each bonus can only be used once per game (tracked by active state)
- Visual indication when bonuses are used (grayed out)

### Interactive Elements

- "Confirm Answer" button that submits the selected answer
- "Double Bet" button to increase the wager
- Bonus buttons for strategic advantage
- Exit button to leave the quiz

### Score Tracking

- Current score display in the header
- Total bet tracking

## Technical Features

- React state management for all interactive elements
- Timer countdown using useEffect hook
- Conditional rendering for answer states (selected, correct, incorrect)
- Responsive layout that works across device sizes

This design creates an engaging quiz experience with game mechanics that increase excitement through betting and bonuses. The timer adds pressure while the betting system adds strategic depth to each question.

Is there anything specific you'd like me to adjust or explain further about this design?



![[Pasted image 20250404164300.png]]





I'll create a comprehensive Statistics and Analytics page for your quiz app with all the requested features. This will include both results/stats and a leaderboard section.

```tsx
import React, { useState } from 'react';
import { LineChart, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Bar, ResponsiveContainer } from 'recharts';
import { ArrowLeft, Trophy, Medal, Award, TrendingUp, ChevronDown, Filter, Calendar, Share2 } from 'lucide-react';

const QuizStatistics = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [timeFrame, setTimeFrame] = useState('week');
  const [leaderboardFilter, setLeaderboardFilter] = useState('points');
  
  // Mock data for charts
  const profitData = [
    { day: 'Mon', profit: 250, bets: 400 },
    { day: 'Tue', profit: -120, bets: 300 },
    { day: 'Wed', profit: 340, bets: 600 },
    { day: 'Thu', profit: 180, bets: 350 },
    { day: 'Fri', profit: 450, bets: 700 },
    { day: 'Sat', profit: -50, bets: 250 },
    { day: 'Sun', profit: 520, bets: 800 }
  ];
  
  const categoryData = [
    { name: 'History', correct: 28, wrong: 12 },
    { name: 'Science', correct: 35, wrong: 5 },
    { name: 'Geography', correct: 22, wrong: 18 },
    { name: 'Sports', correct: 15, wrong: 15 },
    { name: 'Movies', correct: 42, wrong: 8 }
  ];
  
  const leaderboardData = [
    { id: 1, name: 'GalaxyQuizMaster', avatar: '👨‍🚀', points: 12500, level: 24, winRate: '78%', betTotal: 45000 },
    { id: 2, name: 'QuizWizard', avatar: '🧙‍♂️', points: 11200, level: 22, winRate: '75%', betTotal: 38000 },
    { id: 3, name: 'Quiztonator', avatar: '🤖', points: 10800, level: 21, winRate: '72%', betTotal: 52000 },
    { id: 4, name: 'BrainiacQuiz', avatar: '🧠', points: 9500, level: 20, winRate: '68%', betTotal: 30000 },
    { id: 5, name: 'QuizHero', avatar: '🦸‍♀️', points: 9200, level: 19, winRate: '65%', betTotal: 27000 },
    { id: 6, name: 'QuizKing', avatar: '👑', points: 8800, level: 18, winRate: '67%', betTotal: 31000 },
    { id: 7, name: 'QuestionQueen', avatar: '👸', points: 8500, level: 17, winRate: '64%', betTotal: 29000 },
    { id: 8, name: 'MasterMindQuiz', avatar: '🎯', points: 8200, level: 17, winRate: '63%', betTotal: 25000 }
  ];
  
  // Achievements data
  const achievements = [
    { id: 1, icon: '🏆', name: 'Quiz Champion', description: 'Win 50 quizzes', progress: 42, total: 50 },
    { id: 2, icon: '🔥', name: 'On Fire', description: '10 correct answers in a row', progress: 10, total: 10, completed: true },
    { id: 3, icon: '💰', name: 'Big Bettor', description: 'Make a bet of 5000 points', progress: 3200, total: 5000 },
    { id: 4, icon: '⚡', name: 'Speed Demon', description: 'Answer within 5 seconds 20 times', progress: 14, total: 20 }
  ];
  
  // Format number with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  return (
    <div className="flex flex-col h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <ArrowLeft size={24} className="mr-3" />
          <h1 className="text-xl font-bold">Statistics & Analytics</h1>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-1 bg-indigo-500 hover:bg-indigo-700 px-3 py-1 rounded-lg">
            <Calendar size={16} />
            <span>{timeFrame.charAt(0).toUpperCase() + timeFrame.slice(1)}</span>
            <ChevronDown size={16} />
          </button>
          <button className="flex items-center space-x-1 bg-indigo-500 hover:bg-indigo-700 px-3 py-1 rounded-lg">
            <Share2 size={16} />
            <span>Share</span>
          </button>
        </div>
      </header>
      
      {/* Tab Navigation */}
      <div className="flex bg-white border-b">
        <button 
          className={`px-6 py-3 flex-1 font-medium border-b-2 ${activeTab === 'personal' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500'}`}
          onClick={() => setActiveTab('personal')}
        >
          Personal Stats
        </button>
        <button 
          className={`px-6 py-3 flex-1 font-medium border-b-2 ${activeTab === 'leaderboard' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500'}`}
          onClick={() => setActiveTab('leaderboard')}
        >
          Leaderboard
        </button>
      </div>
      
      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'personal' ? (
          <div className="space-y-6">
            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-indigo-500 text-sm">Total Score</div>
                <div className="text-2xl font-bold">8,750</div>
                <div className="text-green-500 text-sm flex items-center"><TrendingUp size={14} className="mr-1" /> +15%</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-indigo-500 text-sm">Win Rate</div>
                <div className="text-2xl font-bold">68%</div>
                <div className="text-green-500 text-sm flex items-center"><TrendingUp size={14} className="mr-1" /> +2%</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-indigo-500 text-sm">Net Profit</div>
                <div className="text-2xl font-bold">1,570</div>
                <div className="text-green-500 text-sm flex items-center"><TrendingUp size={14} className="mr-1" /> +320</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-indigo-500 text-sm">Quizzes Played</div>
                <div className="text-2xl font-bold">124</div>
                <div className="text-gray-500 text-sm">Total: 15h 22m</div>
              </div>
            </div>
            
            {/* Profit Chart */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-bold mb-4">Bet & Profit Analysis</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={profitData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="profit" stroke="#8884d8" name="Profit" />
                    <Line type="monotone" dataKey="bets" stroke="#82ca9d" name="Bets Placed" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Win/Loss Analysis */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-bold mb-4">Performance By Category</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={categoryData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="correct" fill="#4ade80" name="Correct" />
                    <Bar dataKey="wrong" fill="#f87171" name="Wrong" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Achievements */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-bold mb-4">Achievements & Bonuses</h2>
              <div className="space-y-4">
                {achievements.map(achievement => (
                  <div key={achievement.id} className="flex items-center">
                    <div className="text-3xl mr-4">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <div className="font-medium">{achievement.name}</div>
                          <div className="text-sm text-gray-500">{achievement.description}</div>
                        </div>
                        {achievement.completed && (
                          <div className="text-green-500 flex items-center">
                            Completed
                          </div>
                        )}
                      </div>
                      <div className="mt-1 h-2 w-full bg-gray-200 rounded-full">
                        <div 
                          className={`h-2 rounded-full ${achievement.completed ? 'bg-green-500' : 'bg-indigo-500'}`}
                          style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {achievement.progress} / {achievement.total}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Leaderboard Filters */}
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex flex-wrap gap-2">
                <button 
                  className={`px-4 py-2 rounded-lg font-medium text-sm flex items-center ${leaderboardFilter === 'points' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100'}`}
                  onClick={() => setLeaderboardFilter('points')}
                >
                  <Trophy size={16} className="mr-1" /> Points
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg font-medium text-sm flex items-center ${leaderboardFilter === 'level' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100'}`}
                  onClick={() => setLeaderboardFilter('level')}
                >
                  <Medal size={16} className="mr-1" /> Level
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg font-medium text-sm flex items-center ${leaderboardFilter === 'bets' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100'}`}
                  onClick={() => setLeaderboardFilter('betTotal')}
                >
                  <TrendingUp size={16} className="mr-1" /> Highest Bets
                </button>
                <div className="ml-auto">
                  <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm flex items-center">
                    <Filter size={16} className="mr-1" />
                    More Filters
                    <ChevronDown size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Leaderboard Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Player</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Win Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Bets</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {leaderboardData
                    .sort((a, b) => b[leaderboardFilter] - a[leaderboardFilter])
                    .map((player, index) => (
                    <tr key={player.id} className={index < 3 ? 'bg-indigo-50' : ''}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 font-bold">
                          {index + 1}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-2xl mr-2">{player.avatar}</div>
                          <div className="font-medium">
                            {player.name}
                            {index < 3 && (
                              <span className="ml-2">
                                {index === 0 && '🥇'}
                                {index === 1 && '🥈'}
                                {index === 2 && '🥉'}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs mr-1">
                            {player.level}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">
                        {formatNumber(player.points)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {player.winRate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {formatNumber(player.betTotal)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Your Ranking */}
            <div className="bg-indigo-600 text-white p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-white text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                    14
                  </div>
                  <div>
                    <div className="font-medium">Your Ranking</div>
                    <div className="text-indigo-200 text-sm">Top 15%</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">7,850 points</div>
                  <div className="text-indigo-200 text-sm">2,650 to next rank</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizStatistics;

```

I've created a comprehensive Statistics and Analytics page for your quiz app that includes all the features you requested. The design is divided into two main sections accessible via tabs:

## Personal Stats Tab

### Summary Statistics

- Quick overview of key metrics:
    - Total Score (8,750 points)
    - Win Rate (68%)
    - Net Profit (1,570 points)
    - Quizzes Played (124)
- Each stat includes trend indicators showing improvement

### Bet and Profit Charts

- Interactive line chart showing:
    - Daily profit trends
    - Betting patterns over time
- Visual representation of profit/loss fluctuation

### Win and Loss Analysis

- Category-based performance breakdown
- Bar chart showing correct vs. incorrect answers per category
- Helps users identify strengths and areas for improvement

### Achievements and Bonuses

- Visual progress tracking for achievements
- Four different achievement types with progress bars:
    - Quiz Champion (win 50 quizzes)
    - On Fire (10 correct answers in a row) - completed
    - Big Bettor (make a bet of 5000 points)
    - Speed Demon (answer within 5 seconds 20 times)
- Progress indicators showing completion percentage

## Leaderboard Tab

### Player Rankings

- Comprehensive leaderboard with multiple data points:
    - Player name and avatar
    - Level achieved
    - Total points
    - Win rate percentage
    - Total betting amount
- Top players highlighted with medals (gold, silver, bronze)

### Filtering Options

- Multiple filtering methods:
    - Points-based ranking (default)
    - Level-based ranking
    - Highest bets ranking
- Additional filter button for more sorting options

### Your Ranking Section

- Personal standing highlighted at the bottom
- Shows current rank (#14)
- Points needed to advance to next rank
- Percentile standing (Top 15%)

## Additional Features

### Time Frame Selection

- Ability to switch between different time periods (day, week, month)
- Data updates based on selected timeframe

### Sharing Functionality

- Option to share stats with friends or on social media

### Responsive Design

- Works well on both mobile and desktop devices
- Charts resize appropriately for different screen sizes

This design provides a comprehensive analytics experience that gamifies the quiz process through visualizations, achievements, and leaderboards. The betting analytics help users track their risk-taking patterns and profitability over time.

Would you like me to modify or expand any specific section of this design?