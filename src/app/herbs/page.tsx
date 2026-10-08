"use client";

import { useState } from 'react';
import Link from 'next/link';
import { herbs, categories } from '@/data/medicalData';

export default function HerbsPage() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedHerb, setSelectedHerb] = useState<typeof herbs[0] | null>(null);

  const filteredHerbs = selectedCategory === '全部' 
    ? herbs 
    : herbs.filter(h => h.category === selectedCategory);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-amber-800 to-amber-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">中药库</h1>
          <p className="text-amber-100 text-lg max-w-2xl">
            汇集道地药材，传承千年药学智慧
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 sticky top-24">
              <h3 className="font-semibold text-stone-900 mb-4">药材分类</h3>
              <button
                onClick={() => setSelectedCategory('全部')}
                className={`w-full text-left px-4 py-2 rounded-lg mb-1 transition-colors ${
                  selectedCategory === '全部'
                    ? 'bg-amber-100 text-amber-800'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                全部药材
              </button>
              {categories.herbCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-4 py-2 rounded-lg mb-1 transition-colors ${
                    selectedCategory === cat
                      ? 'bg-amber-100 text-amber-800'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {selectedHerb ? (
              <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
                <button
                  onClick={() => setSelectedHerb(null)}
                  className="text-amber-700 hover:text-amber-600 mb-6 inline-flex items-center gap-1 text-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  返回列表
                </button>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-stone-100 rounded-lg h-64 flex items-center justify-center mb-4">
                      <span className="text-6xl">🌿</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-3xl font-bold text-stone-900">{selectedHerb.name}</h2>
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">{selectedHerb.category}</span>
                    </div>
                    <p className="text-stone-500 italic mb-4">{selectedHerb.scientificName}</p>
                    <p className="text-stone-700 leading-relaxed mb-6">{selectedHerb.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-stone-50 p-4 rounded-lg">
                        <span className="text-stone-500 text-sm">性味</span>
                        <p className="font-medium text-stone-900">{selectedHerb.properties}</p>
                      </div>
                      <div className="bg-stone-50 p-4 rounded-lg">
                        <span className="text-stone-500 text-sm">归经</span>
                        <p className="font-medium text-stone-900">{selectedHerb.meridian}</p>
                      </div>
                      <div className="bg-stone-50 p-4 rounded-lg">
                        <span className="text-stone-500 text-sm">用量</span>
                        <p className="font-medium text-stone-900">{selectedHerb.dosage}</p>
                      </div>
                      <div className="bg-stone-50 p-4 rounded-lg">
                        <span className="text-stone-500 text-sm">用法</span>
                        <p className="font-medium text-stone-900">{selectedHerb.usage}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-stone-900 mb-2">功效</h4>
                      <ul className="list-disc list-inside text-stone-700 space-y-1">
                        {selectedHerb.functions.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-stone-900 mb-2">主治</h4>
                      <ul className="list-disc list-inside text-stone-700 space-y-1">
                        {selectedHerb.indications.map((ind, i) => (
                          <li key={i}>{ind}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 mb-2">禁忌</h4>
                      <ul className="list-disc list-inside text-red-700 space-y-1">
                        {selectedHerb.contraindications.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-6 text-stone-600">
                  共 {filteredHerbs.length} 味药材
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredHerbs.map((herb) => (
                    <button
                      key={herb.id}
                      onClick={() => setSelectedHerb(herb)}
                      className="bg-white p-6 rounded-xl border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all text-left"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-3xl">🌿</span>
                        <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                          {herb.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-stone-900 mb-1">{herb.name}</h3>
                      <p className="text-stone-500 text-sm italic mb-2">{herb.scientificName}</p>
                      <p className="text-stone-600 text-sm line-clamp-2">{herb.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {herb.functions.slice(0, 3).map((f, i) => (
                          <span key={i} className="px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded">
                            {f}
                          </span>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
