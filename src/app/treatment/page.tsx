import { treatments } from '@/data/medicalData';

export default function TreatmentPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-amber-800 to-amber-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">治疗项目</h1>
          <p className="text-amber-100 text-lg max-w-2xl">
            传统中医外治法与内治法，为您提供全方位的健康保障
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <div key={treatment.id} className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-8 flex items-center justify-center">
                <span className="text-6xl">
                  {treatment.icon === 'needle' ? '🪡' : 
                   treatment.icon === 'hands' ? '👐' : 
                   treatment.icon === 'cup' ? '🏺' : 
                   treatment.icon === 'herb' ? '🌿' : 
                   treatment.icon === 'patch' ? '💊' : '✅'}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-stone-900">{treatment.name}</h3>
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                    {treatment.category}
                  </span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  {treatment.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-stone-900 mb-2">主要功效</h4>
                  <div className="flex flex-wrap gap-2">
                    {treatment.benefits.map((b, i) => (
                      <span key={i} className="px-2 py-1 bg-stone-100 text-stone-700 text-xs rounded">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-stone-900 mb-2">适用症状</h4>
                  <div className="flex flex-wrap gap-2">
                    {treatment.conditions.map((c, i) => (
                      <span key={i} className="px-2 py-1 bg-stone-100 text-stone-700 text-xs rounded">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-stone-200 pt-4 mt-4">
                  <div className="flex justify-between text-sm text-stone-600 mb-2">
                    <span>疗程</span>
                    <span className="font-medium">{treatment.sessions}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-600">费用</span>
                    <span className="text-xl font-bold text-amber-700">{treatment.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-16 bg-amber-50 border border-amber-200 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-amber-900 mb-4">温馨提示</h3>
          <ul className="space-y-2 text-amber-800">
            <li>• 以上治疗项目需在专业医师指导下进行</li>
            <li>• 具体治疗方案请根据个人体质和病情制定</li>
            <li>• 如有特殊身体状况，请提前告知医师</li>
            <li>• 治疗期间请遵医嘱，定期复诊</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
