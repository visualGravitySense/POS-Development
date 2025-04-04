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