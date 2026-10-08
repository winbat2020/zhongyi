import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-amber-950 border-t border-amber-800/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">☯</span>
              <span className="text-xl font-bold text-amber-100">岐黄堂</span>
            </div>
            <p className="text-amber-200/70 text-sm">
              传承岐黄精髓，弘扬中医文化。<br />
              我们以传统中医理论为基础，结合现代医学技术，<br />
              为每一位患者提供个性化的诊疗服务。
            </p>
          </div>
          <div>
            <h3 className="text-amber-100 font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/herbs" className="text-amber-200/70 hover:text-amber-400">中药库</Link></li>
              <li><Link href="/treatment" className="text-amber-200/70 hover:text-amber-400">治疗方案</Link></li>
              <li><Link href="/about" className="text-amber-200/70 hover:text-amber-400">关于岐黄堂</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-amber-100 font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm text-amber-200/70">
              <li>📍 北京市朝阳区中医街88号</li>
              <li>📞 010-8888-6666</li>
              <li>🕐 周一至周日 9:00-18:00</li>
              <li>✉️ contact@qihuangtang.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-amber-800/50 mt-8 pt-8 text-center text-sm text-amber-200/50">
          <p>© 2026 岐黄堂中医诊所 版权所有 | 京ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  );
}
