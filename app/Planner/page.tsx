'use client';

import React, { useState, useEffect } from 'react';
import { Noto_Sans_JP } from 'next/font/google';
import Link from 'next/link';

// Noto Sans JP Font
const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

// Task interface
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function Planner() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 0, text: '朝食を楽しむ (Enjoy Breakfast)', completed: false },
    { id: 1, text: '寺院を訪れる (Visit Temple)', completed: false },
    { id: 2, text: '抹茶を飲む (Drink Matcha)', completed: false }
  ]);
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');
  const [sakuraPositions, setSakuraPositions] = useState<{left: number, top: number}[]>([]);

  // Sakura petal animation
  useEffect(() => {
    const generateSakuraPetals = () => {
      const petals = Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: -10
      }));
      setSakuraPositions(petals);
    };

    generateSakuraPetals();
    const interval = setInterval(generateSakuraPetals, 5000);
    return () => clearInterval(interval);
  }, []);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      const newTask = { 
        id: tasks.length, 
        text: task, 
        completed: false 
      };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const toggleTaskStatus = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const pendingTasks = tasks.filter(task => !task.completed).length;

  const filteredTasks = tasks.filter(task => {
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div 
      className={`${notoSansJP.className} relative min-h-screen bg-cover bg-center bg-no-repeat`} 
      style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url("https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1992&q=80")',
        backgroundBlendMode: 'overlay'
      }}
    >
    {/* Back Button */}
    <Link
        href="/EtiquettePage"
        className="absolute top-4 left-4 px-4 py-2 bg-pink-500 text-white font-bold rounded-lg shadow hover:bg-pink-600 transition-colors"
      >
        ← Back
      </Link>

      {/* Sakura Petal Animation */}
      {sakuraPositions.map((petal, index) => (
        <div 
          key={index} 
          className="absolute w-2 h-4 bg-pink-200 rounded-full animate-fall opacity-70"
          style={{
            left: `${petal.left}%`,
            top: `${petal.top}%`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}

      <div className="relative z-10 max-w-xl mx-auto bg-white/90 p-8 rounded-xl shadow-2xl min-h-screen flex flex-col">
        <h1 className="text-3xl text-gray-800 font-bold mb-6 text-center">
          日程プランナー
          <br />
          <span className="text-base text-gray-600">Daily Itinerary</span>
        </h1>
        
        {/* Task Input Form */}
        <form onSubmit={addTask} className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="新しいタスク... (New task...)"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-grow p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
          />
          <button 
            type="submit" 
            className="bg-red-400 text-white px-5 py-3 rounded-md hover:bg-red-500 transition duration-300 ease-in-out"
          >
            追加 (Submit)
          </button>
        </form>

        {/* Pending Tasks Counter */}
        <h2 className="text-gray-700 mb-4 text-center text-lg">
          残りのタスク: {pendingTasks} 
          <span className="text-sm ml-2">(Remaining Tasks)</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-6">
          {(['all', 'pending', 'completed'] as const).map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-4 py-2 rounded-md transition duration-300 ${
                filter === filterType 
                  ? 'bg-red-400 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {{
                'all': 'すべて (All)',
                'pending': '未完了 (Pending)',
                'completed': '完了 (Completed)'
              }[filterType]}
            </button>
          ))}
        </div>

        {/* Task List */}
        <div className="flex-grow text-gray-800 space-y-3">
          {filteredTasks.map(task => (
            <div 
              key={task.id} 
              className={`flex items-center justify-between p-3 border rounded-md shadow-md transform transition duration-300 hover:scale-[1.02] ${
                task.completed 
                  ? 'bg-gray-100 opacity-60' 
                  : 'bg-white hover:shadow-lg'
              }`}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskStatus(task.id)}
                className="mr-3 w-5 h-5 text-red-400 focus:ring-red-300 border-gray-300 rounded"
                disabled={task.completed}
              />
              <span 
                className={`flex-grow text-lg ${
                  task.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {task.text}
              </span>
              <button 
                onClick={() => deleteTask(task.id)} 
                className="bg-red-400 text-white px-3 py-2 rounded-md hover:bg-red-500 transition duration-300 ease-in-out ml-3"
              >
                削除 (Remove)
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {tasks.length === 0 && (
          <p className="text-center text-gray-500 mt-4 text-lg">
            タスクがありません。新しいタスクを追加してください。
            <br />
            (No tasks. Add a new task to get started!)
          </p>
        )}
      </div>
      {/* Footer */}
      <footer className="py-12 text-center relative">
          <div className="relative w-64 h-48 mx-auto">
            {/* Torii Gate */}
            <div className="absolute top-0 left-0 w-full h-6 bg-red-600 rounded-t-lg"></div>
            <div className="absolute top-6 left-6 w-4 h-36 bg-red-700"></div>
            <div className="absolute top-6 right-6 w-4 h-36 bg-red-700"></div>
            <div className="absolute top-14 left-8 w-48 h-4 bg-red-500"></div>
  
            {/* Kitsune Fox */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <img
                src="https://i.ibb.co/mSxc6Qb/fox.png"
                alt="Kitsune Fox"
                className="w-50 h-40"
              />
            </div>
          </div>
          <p className="text-gray-200 mt-6 text-sm">&copy; VT JapanFest 2024, All Rights Reserved.</p>

          {/* FAQ Section */}
          <div className="mt-6">
            <p className="text-white">Have more questions? Visit our FAQ page</p>
            <button
              onClick={() => window.location.href = '/FAQPage'}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              FAQ Page
            </button>
          </div>
        </footer>
    </div>
  );
}