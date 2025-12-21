import React, { useState } from 'react';

// Icons as simple SVG components
const Fish = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.46-3.44 6-7 6-3.56 0-7.56-2.54-8.5-6Z"/>
    <path d="M18 12v.5"/>
    <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/>
    <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5 .23 6.5C6.58 18.03 7 16 7 13.33"/>
    <path d="M10.46 7.26C10.6 5.88 12.13 5 13.5 5c1.06 0 2.02.56 2.54 1.42"/>
  </svg>
);

const Droplets = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/>
    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>
  </svg>
);

const BarChart3 = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>
  </svg>
);

const Smartphone = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
  </svg>
);

const Clock = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const ShoppingCart = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
  </svg>
);

const ThermometerSun = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 9a4 4 0 0 0-2 7.5"/><path d="M12 3v2"/><path d="m6.6 18.4-1.4 1.4"/><path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>
  </svg>
);

const TrendingUp = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
);

const Check = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const ChevronDown = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const Phone = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const Mail = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const Send = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
  </svg>
);

const Menu = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);

const X = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
);

const Waves = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
  </svg>
);

const AlertTriangle = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
    <path d="M12 9v4"/><path d="M12 17h.01"/>
  </svg>
);

const ArrowLeft = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
  </svg>
);

export default function AquaValureLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', farmName: '', ponds: '', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });
      setIsSubmitted(true);
    } catch (error) {
      alert('שגיאה בשליחת הטופס. אנא נסה שוב.');
    }
    setIsSubmitting(false);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-slate-50 to-cyan-50/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap');
        * { font-family: 'Heebo', sans-serif; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes wave { 0%, 100% { transform: translateX(0) translateY(0); } 50% { transform: translateY(-5px); } }
        .float-animation { animation: float 4s ease-in-out infinite; }
        .wave-animation { animation: wave 3s ease-in-out infinite; }
        .gradient-text { background: linear-gradient(135deg, #0D7377 0%, #14919B 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .water-gradient { background: linear-gradient(180deg, #0D7377 0%, #14919B 100%); }
        .glass-card { background: rgba(255,255,255,0.8); backdrop-filter: blur(10px); }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 glass-card shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 water-gradient rounded-xl flex items-center justify-center shadow-lg">
                <Fish className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">AquaValure</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-600 hover:text-teal-700 transition">יתרונות</a>
              <a href="#how" className="text-slate-600 hover:text-teal-700 transition">איך זה עובד</a>
              <a href="#faq" className="text-slate-600 hover:text-teal-700 transition">שאלות נפוצות</a>
              <a href="#contact" className="px-5 py-2.5 water-gradient text-white rounded-xl font-medium shadow-lg shadow-teal-500/25">בקש הדגמה</a>
            </div>
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t flex flex-col gap-4">
              <a href="#features" className="py-2">יתרונות</a>
              <a href="#how" className="py-2">איך זה עובד</a>
              <a href="#faq" className="py-2">שאלות נפוצות</a>
              <a href="#contact" className="px-5 py-2.5 water-gradient text-white rounded-xl text-center">בקש הדגמה</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full text-teal-700 text-sm font-medium mb-6">
                <Waves className="w-4 h-4" />
                <span>מערכת ניהול מדגה חכמה</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                נהל את המדגה שלך
                <span className="block gradient-text">בקלות ובחכמה</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
                המערכת המלאה בעברית לניהול חוות דגים - בריכות, מדידות מים, מלאי ומכירות במקום אחד
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact" className="group px-8 py-4 water-gradient text-white rounded-2xl font-semibold text-lg shadow-xl shadow-teal-500/30 flex items-center justify-center gap-2">
                  <span>בקש הדגמה חינם</span>
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </a>
                <a href="#features" className="px-8 py-4 bg-white text-slate-700 rounded-2xl font-semibold text-lg border-2 border-slate-200 hover:border-teal-300 transition flex items-center justify-center">
                  גלה עוד
                </a>
              </div>
              <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-sm text-slate-500">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" /><span>14 יום ניסיון חינם</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" /><span>ללא התחייבות</span></div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative float-animation">
              <div className="bg-white rounded-3xl shadow-2xl shadow-teal-500/20 p-6 border border-slate-100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-xs text-slate-400 mr-2">dashboard.aquavalure.co.il</span>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    {[{ label: 'בריכות פעילות', value: '12', c: 'text-teal-600' },
                      { label: 'מדידות היום', value: '24', c: 'text-blue-600' },
                      { label: 'מכירות החודש', value: '₪45K', c: 'text-emerald-600' }
                    ].map((s, i) => (
                      <div key={i} className="bg-slate-50 rounded-xl p-3 text-center">
                        <div className={`text-2xl font-bold ${s.c}`}>{s.value}</div>
                        <div className="text-xs text-slate-500">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-teal-50/50 rounded-xl p-4 h-28 flex items-end justify-around">
                    {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                      <div key={i} className="w-5 water-gradient rounded-t-lg" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl p-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    <div className="text-sm"><span className="font-medium text-amber-700">התראה:</span><span className="text-amber-600"> חמצן נמוך בבריכה 3</span></div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 wave-animation"><Fish className="w-8 h-8 text-teal-500" /></div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 wave-animation" style={{ animationDelay: '1s' }}><Droplets className="w-8 h-8 text-blue-500" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">למה מנהלים בוחרים ב-AquaValure?</h2>
            <p className="text-lg text-slate-600">חסכו זמן, הגבירו דיוק, וקבלו תמונה מלאה של הפעילות</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Clock className="w-8 h-8" />, title: 'חיסכון של שעות בשבוע', desc: 'במקום אקסלים ומחברות - מערכת אחת שמעדכנת הכל אוטומטית', color: 'from-teal-500 to-cyan-500' },
              { icon: <BarChart3 className="w-8 h-8" />, title: 'תמונה מלאה בזמן אמת', desc: 'דשבורד אחד עם כל הנתונים - מדידות, מלאי, התראות על חריגות', color: 'from-blue-500 to-indigo-500' },
              { icon: <Smartphone className="w-8 h-8" />, title: 'נגיש מכל מקום', desc: 'מהשטח, מהבית, מהנייד - תמיד יודע מה קורה בבריכות', color: 'from-emerald-500 to-teal-500' }
            ].map((b, i) => (
              <div key={i} className="group bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${b.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>{b.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{b.title}</h3>
                <p className="text-slate-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">הכל במערכת אחת פשוטה</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Droplets className="w-6 h-6" />, title: 'ניהול בריכות', desc: 'מעקב סטטוס, היסטוריה, הערות' },
              { icon: <ThermometerSun className="w-6 h-6" />, title: 'מדידות איכות מים', desc: 'חמצן, pH, טמפרטורה + התראות' },
              { icon: <Fish className="w-6 h-6" />, title: 'מלאי דגים', desc: 'כמויות, העברות, חישוב אוטומטי' },
              { icon: <ShoppingCart className="w-6 h-6" />, title: 'מכירות וסוחרים', desc: 'עסקאות, מחירונים, דוחות' },
              { icon: <Users className="w-6 h-6" />, title: 'שעות עבודה', desc: 'מעקב עובדים, ייצוא לאקסל' },
              { icon: <TrendingUp className="w-6 h-6" />, title: 'דוחות וגרפים', desc: 'מגמות, השוואות, ניתוח' }
            ].map((f, i) => (
              <div key={i} className="group flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition">
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500 group-hover:text-white transition">{f.icon}</div>
                <div><h3 className="font-semibold text-slate-900 mb-1">{f.title}</h3><p className="text-sm text-slate-600">{f.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">בנוי למגדלי דגים</h2>
          <p className="text-lg text-slate-600 mb-12">מתאים לכל סוגי החוות והמדגות</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'מים מתוקים',
              'חוות דגי ים',
              'בריכות שרימפסים',
              'מערכות אקווה-פוניקה',
              'מדגות נוי ואקווריום'
            ].map((type, i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md border border-slate-100">
                <Check className="w-5 h-5 text-teal-500" />
                <span className="font-medium text-slate-700">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">פשוט להתחיל</h2>
            <p className="text-lg text-slate-600">שלושה צעדים ואתם בפנים</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'שיחת הכרות', desc: 'נבין את הצרכים הייחודיים שלך' },
              { num: '02', title: 'הדגמה חיה', desc: 'נראה את המערכת בפעולה' },
              { num: '03', title: 'מתחילים לעבוד', desc: 'הקמה מהירה וליווי צמוד' }
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full water-gradient flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-teal-500/30">{s.num}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">שאלות נפוצות</h2>
          <div className="space-y-4">
            {[
              { q: 'האם צריך להתקין תוכנה?', a: 'לא. המערכת עובדת בדפדפן - נכנסים ומתחילים. עובד על כל מכשיר.' },
              { q: 'כמה זמן לוקח ללמוד?', a: 'רוב המשתמשים עצמאיים תוך יום-יומיים. המערכת פשוטה ואינטואיטיבית.' },
              { q: 'האם הנתונים מאובטחים?', a: 'בהחלט. שרתי ענן מאובטחים עם הצפנה וגיבוי יומי.' },
              { q: 'אפשר לייבא נתונים קיימים?', a: 'כן. נעזור להעביר מאקסל או ממערכות אחרות.' },
              { q: 'מה אם צריך עזרה?', a: 'אנחנו זמינים בטלפון, מייל ווואטסאפ. תמיכה בעברית.' }
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <button className="w-full flex items-center justify-between p-6 text-right" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-slate-900">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="px-6 pb-6 text-slate-600">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="water-gradient rounded-3xl p-8 md:p-12 shadow-2xl shadow-teal-500/30">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">רוצה לראות איך זה עובד?</h2>
              <p className="text-teal-100 text-lg">השאר פרטים ונחזור אליך לתיאום הדגמה</p>
            </div>
            {isSubmitted ? (
              <div className="bg-white/20 backdrop-blur rounded-2xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center"><Check className="w-8 h-8 text-teal-600" /></div>
                <h3 className="text-2xl font-bold text-white mb-2">תודה רבה!</h3>
                <p className="text-teal-100">קיבלנו את הפרטים ונחזור אליך בהקדם</p>
              </div>
            ) : (
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="grid md:grid-cols-2 gap-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div>
                  <label className="block text-teal-100 text-sm mb-2">שם מלא *</label>
                  <input type="text" name="name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-teal-200 focus:outline-none focus:border-white/50" placeholder="ישראל ישראלי" />
                </div>
                <div>
                  <label className="block text-teal-100 text-sm mb-2">טלפון *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-teal-200 focus:outline-none focus:border-white/50" placeholder="050-1234567" />
                </div>
                <div>
                  <label className="block text-teal-100 text-sm mb-2">אימייל *</label>
                  <input type="email" name="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-teal-200 focus:outline-none focus:border-white/50" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-teal-100 text-sm mb-2">שם המדגה</label>
                  <input type="text" name="farmName" value={formData.farmName} onChange={(e) => setFormData({...formData, farmName: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-teal-200 focus:outline-none focus:border-white/50" placeholder="מדגת השרון" />
                </div>
                <div>
                  <label className="block text-teal-100 text-sm mb-2">כמה בריכות?</label>
                  <select name="ponds" value={formData.ponds} onChange={(e) => setFormData({...formData, ponds: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none">
                    <option value="" className="text-slate-800">בחר...</option>
                    <option value="1-5" className="text-slate-800">1-5</option>
                    <option value="6-15" className="text-slate-800">6-15</option>
                    <option value="16-30" className="text-slate-800">16-30</option>
                    <option value="30+" className="text-slate-800">30+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-teal-100 text-sm mb-2">הערות</label>
                  <input type="text" name="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-teal-200 focus:outline-none" placeholder="משהו שחשוב לך?" />
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-white text-teal-700 rounded-xl font-bold text-lg hover:bg-teal-50 transition flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>שולח...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" /><span>שלח בקשה להדגמה</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
            <div className="flex flex-wrap justify-center gap-8 mt-10 text-teal-100">
              <a href="tel:+972526944087" className="flex items-center gap-2 hover:text-white"><Phone className="w-5 h-5" /><span>052-694-4087</span></a>
              <a href="mailto:aquavalure@outlook.com" className="flex items-center gap-2 hover:text-white"><Mail className="w-5 h-5" /><span>aquavalure@outlook.com</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 water-gradient rounded-xl flex items-center justify-center"><Fish className="w-6 h-6 text-white" /></div>
            <span className="text-xl font-bold text-white">AquaValure</span>
          </div>
          <div className="text-center">
            <p>מערכת לניהול חוות דגים</p>
            <p className="text-sm mt-1">© 2025 AquaValure | כל הזכויות שמורות</p>
          </div>
          <div className="flex gap-6">
            <a href="mailto:aquavalure@outlook.com" className="hover:text-teal-400"><Mail className="w-5 h-5" /></a>
            <a href="tel:+972526944087" className="hover:text-teal-400"><Phone className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
