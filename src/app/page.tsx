import Link from 'next/link';
import { treatments } from '@/data/medicalData';

const features = [
  { icon: '🌿', title: '道地药材', desc: '精选地道药材，严格把控质量，确保药效纯正' },
  { icon: '👨‍⚕️', title: '名老中医', desc: '资深中医专家亲诊，辨证施治，个性化方案' },
  { icon: '🏥', title: '百年传承', desc: '秉承传统中医理念，融合现代诊疗技术' },
  { icon: '🎯', title: '精准调理', desc: '辨证论治，因人制宜，标本兼治' },
];

const stats = [
  { value: '30+', label: '年临床经验' },
  { value: '10000+', label: '服务患者' },
  { value: '500+', label: '中药品种' },
  { value: '98%', label: '患者满意度' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-950 to-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-800/50 rounded-full text-amber-200 text-sm mb-6">
                <span>☯</span> 传承千年中医智慧
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                岐黄堂<br />
                <span className="text-amber-400">中医诊所</span>
              </h1>
              <p className="text-lg md:text-xl text-amber-100/80 mb-8 leading-relaxed">
                秉承&quot;大医精诚&quot;理念，以精湛医术服务患者。<br />
                中西医结合，辨证施治，为您的健康保驾护航。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/treatment" className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-amber-950 font-semibold rounded-lg transition-colors">
                  了解治疗项目
                </Link>
                <Link href="/about" className="px-8 py-3 border border-amber-500/50 hover:border-amber-400 text-amber-100 font-semibold rounded-lg transition-colors">
                  了解更多
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-amber-500/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-amber-600/30 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-9xl">☯</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-1">{stat.value}</div>
                <div className="text-stone-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">我们的特色</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-stone-100">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2">{feature.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">治疗项目</h2>
              <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
            </div>
            <Link href="/treatment" className="mt-4 md:mt-0 text-amber-700 hover:text-amber-600 font-medium flex items-center gap-1">
              查看全部
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.slice(0, 3).map((t) => (
              <Link key={t.id} href="/treatment" className="group block bg-stone-50 p-6 rounded-xl border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{t.icon === 'needle' ? '🪡' : t.icon === 'hands' ? '👐' : t.icon === 'cup' ? '🏺' : t.icon === 'herb' ? '🌿' : t.icon === 'patch' ? '💊' : '✅'}</span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">{t.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">{t.name}</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">{t.description}</p>
                <div className="text-amber-700 font-medium text-sm">{t.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-800 to-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">预约问诊</h2>
          <p className="text-amber-100 text-lg mb-8">欢迎预约前来就诊，让我们为您的健康保驾护航</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:010-8888-6666" className="px-8 py-4 bg-white text-amber-900 font-semibold rounded-lg hover:bg-amber-50 transition-colors">
              📞 立即预约
            </a>
            <Link href="/about" className="px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-lg transition-colors">
              了解更多
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
