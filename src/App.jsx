import React, { useState } from "react";

// Icons as simple SVG components
const Fish = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.46-3.44 6-7 6-3.56 0-7.56-2.54-8.5-6Z" />
    <path d="M18 12v.5" />
    <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
    <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5 .23 6.5C6.58 18.03 7 16 7 13.33" />
    <path d="M10.46 7.26C10.6 5.88 12.13 5 13.5 5c1.06 0 2.02.56 2.54 1.42" />
  </svg>
);

const Droplets = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
  </svg>
);

const Smartphone = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

const Users = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ShoppingCart = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

const ThermometerSun = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 9a4 4 0 0 0-2 7.5" />
    <path d="M12 3v2" />
    <path d="m6.6 18.4-1.4 1.4" />
    <path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
  </svg>
);

const TrendingUp = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const Check = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ChevronDown = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const Phone = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const Mail = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const Send = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const Menu = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const X = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const Waves = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
  </svg>
);

const ArrowLeft = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const MessageCircle = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

const Globe = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

export default function AquaValureLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    farmName: "",
    ponds: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      setIsSubmitted(true);
    } catch (error) {
      alert("שגיאה בשליחת הטופס. אנא נסה שוב.");
    }
    setIsSubmitting(false);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-slate-50 to-cyan-50/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap');
        * { font-family: 'Heebo', sans-serif; }
        .gradient-text { background: linear-gradient(135deg, #0D7377 0%, #14919B 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .water-gradient { background: linear-gradient(180deg, #0D7377 0%, #14919B 100%); }
        .glass-card { background: rgba(255,255,255,0.82); backdrop-filter: blur(10px); }
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
              <a href="#about" className="text-slate-600 hover:text-teal-700 transition">
                איך זה עובד
              </a>
              <a href="#value" className="text-slate-600 hover:text-teal-700 transition">
                הערך שלנו
              </a>
              <a href="#features" className="text-slate-600 hover:text-teal-700 transition">
                יכולות
              </a>
              <a href="#faq" className="text-slate-600 hover:text-teal-700 transition">
                שאלות נפוצות
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 water-gradient text-white rounded-xl font-medium shadow-lg shadow-teal-500/25"
              >
                לתיאום הדגמה
              </a>
            </div>

            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="תפריט">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t flex flex-col gap-4">
              <a href="#about" className="py-2" onClick={() => setIsMenuOpen(false)}>
                איך זה עובד
              </a>
              <a href="#value" className="py-2" onClick={() => setIsMenuOpen(false)}>
                הערך שלנו
              </a>
              <a href="#features" className="py-2" onClick={() => setIsMenuOpen(false)}>
                יכולות
              </a>
              <a href="#faq" className="py-2" onClick={() => setIsMenuOpen(false)}>
                שאלות נפוצות
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 water-gradient text-white rounded-xl text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                לתיאום הדגמה
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero with Background Image */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-image.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-slate-900/85 via-slate-900/70 to-slate-900/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-2xl mr-0 ml-auto text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-teal-200 text-sm font-medium mb-6 border border-white/20">
              <Waves className="w-4 h-4" />
              <span>מערכת ניהול לחוות גידול דגים</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              לראות הכל.
              <span className="block text-teal-300">להחליט נכון.</span>
            </h1>

            <p className="text-xl text-slate-200 mb-8">
              אתה מכיר את המדגה הכי טוב, והמערכת מרכזת מדידות, מלאי ותנועות כדי שתראה תמונה מלאה בכל רגע.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group px-8 py-4 water-gradient text-white rounded-2xl font-semibold text-lg shadow-xl shadow-teal-500/30 flex items-center justify-center gap-2"
              >
                <span>לתיאום הדגמה</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-2xl font-semibold text-lg border border-white/30 hover:bg-white/20 transition flex items-center justify-center"
              >
                איך זה עובד
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-8 text-sm text-slate-300">
              {[
                "מסך אחד לכל הנתונים",
                "היסטוריה לכל בריכה",
                "התראות על חריגות",
                "עובד מהנייד",
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-3 py-1.5">
                  <Check className="w-4 h-4 text-teal-400" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-14 h-14 water-gradient rounded-2xl flex items-center justify-center flex-shrink-0">
                <Waves className="w-7 h-7 text-white" />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  סדר במידע, שליטה בשטח
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  הידע שלך הוא מה שעושה את ההבדל. המערכת מציגה את הנתונים בצורה ברורה: מה נמדד, מה השתנה, ומה דורש תשומת לב. ההחלטות נשארות שלך.
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { title: "תמונה מלאה", desc: "כל הנתונים במסך אחד, בזמן אמת" },
                    { title: "היסטוריה מסודרת", desc: "מה נמדד ומה השתנה לאורך זמן" },
                    { title: "נגיש מהשטח", desc: "עובד מהנייד, פשוט ומהיר" },
                  ].map((x, i) => (
                    <div key={i} className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                      <div className="font-bold text-slate-900">{x.title}</div>
                      <div className="text-sm text-slate-600 mt-1">{x.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section - Compact on Mobile */}
      <section id="value" className="py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3">מה המערכת נותנת לך</h2>
            <p className="text-base sm:text-lg text-slate-600">
              פתרונות לאתגרים של ניהול מדגה יום-יומי
            </p>
          </div>

          {/* Mobile: Horizontal compact cards / Desktop: Vertical cards */}
          <div className="space-y-4 md:hidden">
            {[
              {
                icon: <Droplets className="w-6 h-6" />,
                title: "מה המצב עכשיו בבריכות?",
                desc: "תמונה עדכנית של כל הפרמטרים, עם התראות על חריגות.",
                color: "from-teal-500 to-cyan-500",
              },
              {
                icon: <ShoppingCart className="w-6 h-6" />,
                title: "כמה יצא החודש?",
                desc: "תיעוד מסודר של תנועות ומכירות. שקיפות מלאה.",
                color: "from-blue-500 to-indigo-500",
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "איפה רשום מה שעשינו?",
                desc: "מסך אחד עם היסטוריה והערות לכל בריכה.",
                color: "from-amber-500 to-orange-500",
              },
            ].map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-md border border-slate-100"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${b.color} flex items-center justify-center text-white flex-shrink-0`}
                >
                  {b.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-900 mb-1">{b.title}</h3>
                  <p className="text-sm text-slate-600 leading-snug">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Original vertical cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplets className="w-8 h-8" />,
                title: "מה המצב עכשיו בבריכות?",
                desc: "תמונה עדכנית של כל הפרמטרים, עם התראות אוטומטיות על חריגות.",
                color: "from-teal-500 to-cyan-500",
              },
              {
                icon: <ShoppingCart className="w-8 h-8" />,
                title: "כמה יצא החודש?",
                desc: "תיעוד מסודר של תנועות ומכירות. שקיפות מלאה בלי לחפש.",
                color: "from-blue-500 to-indigo-500",
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "איפה רשום מה שעשינו?",
                desc: "מסך אחד שמרכז את המידע לכל בריכה, עם היסטוריה והערות.",
                color: "from-amber-500 to-orange-500",
              },
            ].map((b, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${b.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
                >
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{b.title}</h3>
                <p className="text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 sm:py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3">יכולות המערכת</h2>
            <p className="text-base sm:text-lg text-slate-600">כלים שנבנו לעבודה יום-יומית בשטח</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
              {
                icon: <Droplets className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "ניהול בריכות",
                desc: "סטטוס, היסטוריה והערות לכל בריכה",
              },
              {
                icon: <ThermometerSun className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "מדידות מים",
                desc: "מדידות, מגמות והתראות על חריגות",
              },
              {
                icon: <Fish className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "מלאי דגים",
                desc: "העברות, עדכונים וחישוב אוטומטי",
              },
              {
                icon: <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "תנועות ומכירות",
                desc: "תיעוד מכירות ותנועות מסודר",
              },
              {
                icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "שעות עבודה",
                desc: "מעקב משמרות וייצוא לאקסל",
              },
              {
                icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "דוחות וגרפים",
                desc: "מגמות והשוואות לאורך זמן",
              },
              {
                icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "עוזר חכם",
                desc: "שאלות ותשובות על הנתונים שלך",
              },
              {
                icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "תרגום לתאילנדית",
                desc: "הודעות לעובדים בשפתם",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center p-3 sm:p-6 bg-white rounded-2xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500 group-hover:text-white transition mb-2 sm:mb-3">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1">{f.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4">פשוט להתחיל</h2>
            <p className="text-base sm:text-lg text-slate-600">שלושה שלבים לתמונת מצב ברורה</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { num: "01", title: "שיחת היכרות", desc: "מבינים את הצרכים שלך ואיך אתה עובד היום" },
              { num: "02", title: "הדגמה מותאמת", desc: "רואים את המערכת עם הנתונים שרלוונטיים לך" },
              { num: "03", title: "הקמה ותמיכה", desc: "מגדירים את המערכת ומלווים אותך בהתחלה" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full water-gradient flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg shadow-teal-500/30">
                  {s.num}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm sm:text-base text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 sm:mb-12 text-center">שאלות נפוצות</h2>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                q: "האם צריך להתקין תוכנה?",
                a: "לא. המערכת עובדת בדפדפן ובנייד, נכנסים ומתחילים.",
              },
              {
                q: "זה מתאים למי שנמצא רוב הזמן בשטח?",
                a: "כן. המערכת בנויה לעבודה מהנייד: עדכון מהיר, צפייה קלה, והיסטוריה מסודרת.",
              },
              {
                q: "איך אדע אם משהו השתנה מהמדידה הקודמת?",
                a: "המערכת מציגה מגמות ומציפה חריגות אוטומטית, כך שתראה מיד מה דורש תשומת לב.",
              },
              {
                q: "איך זה משתלב עם קבצי אקסל שיש לנו היום?",
                a: "אפשר לייבא את קבצי האקסל הקיימים שלכם למערכת.",
              },
              {
                q: "האם הנתונים מאובטחים?",
                a: "כן. המערכת משתמשת בתשתיות ענן מאובטחות עם הצפנה וגיבוי שוטף.",
              },
              {
                q: "מה עם עובדים שלא מדברים עברית?",
                a: "יש תרגום לתאילנדית להודעות והנחיות בתוך המערכת.",
              },
              {
                q: "מה אם צריך עזרה?",
                a: "אנחנו זמינים בטלפון, מייל ווואטסאפ. תמיכה בעברית.",
              },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-right"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 mr-3 sm:mr-4 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="water-gradient rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl shadow-teal-500/30">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">בואו נדבר</h2>
              <p className="text-teal-100 text-base sm:text-lg">
                השאירו פרטים ונתאם הדגמה שמותאמת לחווה שלכם
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-white/20 backdrop-blur rounded-2xl p-6 sm:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                  <Check className="w-7 h-7 sm:w-8 sm:h-8 text-teal-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">תודה רבה!</h3>
                <p className="text-teal-100">קיבלנו את הפרטים ונחזור אליך בהקדם</p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="grid md:grid-cols-2 gap-4 sm:gap-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label className="block text-teal-100 text-sm mb-2">שם מלא *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-teal-200 focus:outline-none focus:border-white/50"
                    placeholder="ישראל ישראלי"
                  />
                </div>

                <div>
                  <label className="block text-teal-100 text-sm mb-2">טלפון *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-teal-200 focus:outline-none focus:border-white/50"
                    placeholder="050-1234567"
                  />
                </div>

                <div>
                  <label className="block text-teal-100 text-sm mb-2">אימייל *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-teal-200 focus:outline-none focus:border-white/50"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-teal-100 text-sm mb-2">שם החווה</label>
                  <input
                    type="text"
                    name="farmName"
                    value={formData.farmName}
                    onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-teal-200 focus:outline-none focus:border-white/50"
                  />
                </div>

                <div>
                  <label className="block text-teal-100 text-sm mb-2">כמה בריכות?</label>
                  <select
                    name="ponds"
                    value={formData.ponds}
                    onChange={(e) => setFormData({ ...formData, ponds: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none"
                  >
                    <option value="" className="text-slate-800">
                      בחר...
                    </option>
                    <option value="1-5" className="text-slate-800">
                      1-5
                    </option>
                    <option value="6-15" className="text-slate-800">
                      6-15
                    </option>
                    <option value="16-30" className="text-slate-800">
                      16-30
                    </option>
                    <option value="30+" className="text-slate-800">
                      30+
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-teal-100 text-sm mb-2">הערות</label>
                  <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-teal-200 focus:outline-none"
                    placeholder="משהו שחשוב לך שנדע?"
                  />
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
                        <Send className="w-5 h-5" />
                        <span>שליחה</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8 sm:mt-10 text-teal-100">
              <a href="tel:+972526944087" className="flex items-center gap-2 hover:text-white">
                <Phone className="w-5 h-5" />
                <span>052-694-4087</span>
              </a>
              <a href="mailto:aquavalure@outlook.com" className="flex items-center gap-2 hover:text-white">
                <Mail className="w-5 h-5" />
                <span>aquavalure@outlook.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 sm:py-12 px-4 bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 water-gradient rounded-xl flex items-center justify-center">
              <Fish className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">AquaValure</span>
          </div>

          <div className="text-center">
            <p>מערכת לניהול חוות לגידול דגים</p>
            <p className="text-sm mt-1">© 2025 AquaValure | כל הזכויות שמורות</p>
          </div>

          <div className="flex gap-6">
            <a href="mailto:aquavalure@outlook.com" className="hover:text-teal-400" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href="tel:+972526944087" className="hover:text-teal-400" aria-label="Phone">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
