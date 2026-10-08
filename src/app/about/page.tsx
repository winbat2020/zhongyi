import { doctors } from '@/data/medicalData';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-amber-800 to-amber-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">关于岐黄堂</h1>
          <p className="text-amber-100 text-lg max-w-2xl">
            传承岐黄精髓，弘扬中医文化
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6">诊所介绍</h2>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  岐黄堂中医诊所成立于2000年，由出身中医世家的张明远医师创办。"岐黄"一词源于《黄帝内经》，
                  代表着中医的正统传承。
                </p>
                <p>
                  二十余年来，我们秉承"大医精诚"的传统医德，以精湛的医术和热忱的服务，
                  为成千上万的患者解除了病痛。诊所融合了传统中医理论与现代诊疗技术，
                  形成了独具特色的诊疗体系。
                </p>
                <p>
                  我们的医疗团队由经验丰富的中医师组成，擅长运用中药、针灸、推拿等多种治疗方法，
                  为各类慢性病、亚健康状态及疑难杂症提供个性化的诊疗方案。
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-12 flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl mb-4 block">☯</span>
                <p className="text-amber-800 font-serif text-xl">大医精诚</p>
                <p className="text-amber-700 text-sm mt-2">精于医术，诚于品德</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 text-center mb-12">我们的理念</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">传承创新</h3>
              <p className="text-stone-600 text-sm">
                坚守传统中医理论精髓，同时吸收现代医学成果，传承不泥古，创新不离宗。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">以患为本</h3>
              <p className="text-stone-600 text-sm">
                始终将患者健康放在首位，耐心倾听，细致辨证，提供个性化的诊疗服务。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">精益求精</h3>
              <p className="text-stone-600 text-sm">
                持续学习提升，严谨施治，对每一味药材、每一个穴位都追求最佳效果。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 text-center mb-12">医师团队</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-stone-50 rounded-xl overflow-hidden border border-stone-200 hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-amber-200 to-amber-100 h-48 flex items-center justify-center">
                  <span className="text-7xl">👨‍⚕️</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stone-900">{doctor.name}</h3>
                  <p className="text-amber-700 font-medium mb-1">{doctor.title}</p>
                  <p className="text-stone-500 text-sm mb-1">专长：{doctor.specialty}</p>
                  <p className="text-stone-500 text-sm mb-4">从业：{doctor.experience}</p>
                  <p className="text-stone-700 text-sm leading-relaxed">{doctor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gradient-to-br from-amber-800 to-amber-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">联系我们</h2>
              <div className="space-y-4 text-amber-100">
                <p className="flex items-center gap-3">
                  <span>📍</span>
                  北京市朝阳区中医街88号
                </p>
                <p className="flex items-center gap-3">
                  <span>📞</span>
                  010-8888-6666
                </p>
                <p className="flex items-center gap-3">
                  <span>✉️</span>
                  contact@qihuangtang.com
                </p>
                <p className="flex items-center gap-3">
                  <span>🕐</span>
                  周一至周日 9:00-18:00
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">就诊须知</h3>
              <ul className="space-y-2 text-amber-100/80">
                <li>• 建议提前预约，避免长时间等候</li>
                <li>• 初次就诊请携带身份证及既往病历</li>
                <li>• 针灸治疗前请避免空腹或过饱</li>
                <li>• 女性经期请提前告知医师</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
