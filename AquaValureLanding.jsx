import React, { useState, useEffect } from 'react';
import { Fish, Droplets, BarChart3, Smartphone, Clock, Users, ShoppingCart, FileSpreadsheet, ChevronDown, Check, Phone, Mail, Send, Menu, X, Waves, ThermometerSun, FlaskConical, AlertTriangle, TrendingUp, ArrowLeft } from 'lucide-react';

// Hebrew Landing Page for AquaValure
export default function AquaValureLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    farmName: '',
    ponds: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would send the form data to your backend
    console.log('Form submitted:', formData);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-slate-50 to-cyan-50/30 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Heebo', sans-serif;
        }
        
        @keyframes wave {
          0%, 100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(-5px) translateY(-3px); }
          50% { transform: translateX(0) translateY(-5px); }
          75% { transform: translateX(5px) translateY(-3px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes bubble {
          0% { transform: translateY(100%) scale(0); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(1); opacity: 0; }
        }
        
        .wave-animation {
          animation: wave 3s ease-in-out infinite;
        }
        
        .float-animation {
          animation: float 4s ease-in-out infinite;
        }
        
        .shimmer-bg {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .bubble {
          position: absolute;
          background: rgba(13, 115, 119, 0.1);
          border-radius: 50%;
          animation: bubble 8s infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #0D7377 0%, #14919B 50%, #0D7377 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }
        
        .water-gradient {
          background: linear-gradient(180deg, #0D7377 0%, #14919B 50%, #1E9BA4 100%);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 glass-card shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 water-gradient rounded-xl flex items-center justify-center shadow-lg">
                <Fish className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">AquaValure</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-600 hover:text-teal-700 transition-colors">יתרונות</a>
              <a href="#how" className="text-slate-600 hover:text-teal-700 transition-colors">איך זה עובד</a>
              <a href="#pricing" className="text-slate-600 hover:text-teal-700 transition-colors">מחירים</a>
              <a href="#faq" className="text-slate-600 hover:text-teal-700 transition-colors">שאלות נפוצות</a>
              <a href="#contact" className="px-5 py-2.5 water-gradient text-white rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg shadow-teal-500/25">
                בקש הדגמה
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200/50">
              <div className="flex flex-col gap-4">
                <a href="#features" className="text-slate-600 hover:text-teal-700 py-2">יתרונות</a>
                <a href="#how" className="text-slate-600 hover:text-teal-700 py-2">איך זה עובד</a>
                <a href="#pricing" className="text-slate-600 hover:text-teal-700 py-2">מחירים</a>
                <a href="#faq" className="text-slate-600 hover:text-teal-700 py-2">שאלות נפוצות</a>
                <a href="#contact" className="px-5 py-2.5 water-gradient text-white rounded-xl font-medium text-center">
                  בקש הדגמה
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Bubbles Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                width: `${20 + i * 15}px`,
                height: `${20 + i * 15}px`,
                right: `${10 + i * 15}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${6 + i * 2}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
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
                <a 
                  href="#contact" 
                  className="group px-8 py-4 water-gradient text-white rounded-2xl font-semibold text-lg hover:opacity-90 transition-all shadow-xl shadow-teal-500/30 flex items-center justify-center gap-2"
                >
                  <span>בקש הדגמה חינם</span>
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#features" 
                  className="px-8 py-4 bg-white text-slate-700 rounded-2xl font-semibold text-lg border-2 border-slate-200 hover:border-teal-300 hover:bg-teal-50 transition-all flex items-center justify-center gap-2"
                >
                  <span>גלה עוד</span>
                </a>
              </div>
              
              <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span>14 יום ניסיון חינם</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span>ללא התחייבות</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative float-animation">
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-teal-500/20 p-6 border border-slate-100">
                {/* Mock Dashboard */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-xs text-slate-400 mr-2">dashboard.aquavalure.co.il</span>
                </div>
                
                <div className="space-y-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'בריכות פעילות', value: '12', color: 'bg-teal-500' },
                      { label: 'מדידות היום', value: '24', color: 'bg-blue-500' },
                      { label: 'מכירות החודש', value: '₪45K', color: 'bg-emerald-500' }
                    ].map((stat, i) => (
                      <div key={i} className="bg-slate-50 rounded-xl p-3 text-center">
                        <div className={`text-2xl font-bold ${stat.color === 'bg-teal-500' ? 'text-teal-600' : stat.color === 'bg-blue-500' ? 'text-blue-600' : 'text-emerald-600'}`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Chart Area */}
                  <div className="bg-gradient-to-br from-slate-50 to-teal-50/50 rounded-xl p-4 h-32 flex items-end justify-around">
                    {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                      <div 
                        key={i} 
                        className="w-6 water-gradient rounded-t-lg transition-all hover:opacity-80"
                        style={{ height: `${h}%` }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Alert */}
                  <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl p-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    <div className="text-sm">
                      <span className="font-medium text-amber-700">התראה:</span>
                      <span className="text-amber-600"> חמצן נמוך בבריכה 3</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 wave-animation">
                <Fish className="w-8 h-8 text-teal-500" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4" style={{ animationDelay: '1s', animation: 'wave 3s ease-in-out infinite' }}>
                <Droplets className="w-8 h-8 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              למה מנהלי מדגות בוחרים ב-AquaValure?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              חסכו זמן, הגבירו דיוק, וקבלו תמונה מלאה של הפעילות
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'חיסכון של שעות בשבוע',
                description: 'במקום אקסלים ומחברות - מערכת אחת שמעדכנת הכל אוטומטית. מנהלים מדווחים על חיסכון של 5-10 שעות שבועיות.',
                color: 'from-teal-500 to-cyan-500'
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: 'תמונה מלאה בזמן אמת',
                description: 'דשבורד אחד עם כל הנתונים - מדידות מים, מלאי דגים, מכירות, והתראות מיידיות על חריגות.',
                color: 'from-blue-500 to-indigo-500'
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: 'נגיש מכל מקום',
                description: 'מהשטח, מהבית, מהנייד - תמיד יודע מה קורה בבריכות. עובד על כל מכשיר, בלי התקנות.',
                color: 'from-emerald-500 to-teal-500'
              }
            ].map((benefit, i) => (
              <div 
                key={i} 
                className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              הכל במערכת אחת פשוטה
            </h2>
            <p className="text-lg text-slate-600">
              כל מה שצריך לניהול מדגה מודרני
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Droplets />, title: 'ניהול בריכות', desc: 'מעקב אחרי כל הבריכות - סטטוס, היסטוריה, הערות' },
              { icon: <ThermometerSun />, title: 'מדידות איכות מים', desc: 'חמצן, pH, טמפרטורה, אמוניה - עם התראות אוטומטיות' },
              { icon: <Fish />, title: 'מלאי דגים', desc: 'כמויות בכל בריכה, העברות, חישוב אוטומטי' },
              { icon: <ShoppingCart />, title: 'מכירות וסוחרים', desc: 'ניהול עסקאות, מחירונים, דוחות הכנסות' },
              { icon: <Users />, title: 'שעות עבודה', desc: 'מעקב עובדים, שיוך לבריכות, ייצוא לאקסל' },
              { icon: <TrendingUp />, title: 'דוחות וגרפים', desc: 'מגמות לאורך זמן, השוואות, ניתוח ביצועים' }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="group flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            בנוי למגדלי דגים
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            מתאים לכל סוגי החוות והמדגות
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'מדגות מים מתוקים',
              'חוות דגי ים',
              'בריכות שרימפסים',
              'מערכות אקווה-פוניקה',
              'מדגות נוי ואקווריום'
            ].map((type, i) => (
              <div 
                key={i}
                className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md border border-slate-100"
              >
                <Check className="w-5 h-5 text-teal-500" />
                <span className="font-medium text-slate-700">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              פשוט להתחיל
            </h2>
            <p className="text-lg text-slate-600">
              שלושה צעדים ואתם בפנים
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'שיחת הכרות',
                desc: 'נבין את הצרכים והאתגרים הייחודיים שלך'
              },
              {
                num: '02',
                title: 'הדגמה חיה',
                desc: 'נראה לך את המערכת בפעולה עם דוגמאות רלוונטיות'
              },
              {
                num: '03',
                title: 'מתחילים לעבוד',
                desc: 'הקמה מהירה וליווי צמוד עד שאתה עצמאי לגמרי'
              }
            ].map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full water-gradient flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-teal-500/30">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
                
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-l from-teal-300 to-transparent -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              תכניות ומחירים
            </h2>
            <p className="text-lg text-slate-600">
              בחר את התכנית המתאימה לך
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'מתחילים',
                price: '199',
                features: ['עד 5 בריכות', '2 משתמשים', 'תמיכה במייל', 'גיבוי יומי'],
                popular: false
              },
              {
                name: 'מקצועי',
                price: '449',
                features: ['עד 20 בריכות', '5 משתמשים', 'תמיכה בטלפון', 'דוחות מתקדמים', 'ייצוא לאקסל'],
                popular: true
              },
              {
                name: 'עסקי',
                price: '899',
                features: ['בריכות ללא הגבלה', 'משתמשים ללא הגבלה', 'תמיכה מועדפת', 'API והתאמות', 'הדרכה אישית'],
                popular: false
              }
            ].map((plan, i) => (
              <div 
                key={i}
                className={`relative rounded-3xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-teal-600 to-teal-700 text-white shadow-xl shadow-teal-500/30 scale-105' 
                    : 'bg-white border border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 right-1/2 translate-x-1/2 px-4 py-1 bg-amber-400 text-amber-900 text-sm font-bold rounded-full">
                    הכי פופולרי
                  </div>
                )}
                
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                
                <div className="mb-6">
                  <span className={`text-4xl font-extrabold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                    ₪{plan.price}
                  </span>
                  <span className={plan.popular ? 'text-teal-100' : 'text-slate-500'}>/חודש</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${plan.popular ? 'text-teal-200' : 'text-teal-500'}`} />
                      <span className={plan.popular ? 'text-teal-50' : 'text-slate-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact"
                  className={`block w-full py-3 rounded-xl font-semibold text-center transition-all ${
                    plan.popular
                      ? 'bg-white text-teal-700 hover:bg-teal-50'
                      : 'bg-slate-100 text-slate-700 hover:bg-teal-500 hover:text-white'
                  }`}
                >
                  {plan.name === 'עסקי' ? 'צור קשר' : 'להתחיל'}
                </a>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-500" />
              <span>14 יום ניסיון חינם</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-500" />
              <span>ללא התחייבות</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-500" />
              <span>ביטול בכל עת</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              שאלות נפוצות
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'האם צריך להתקין תוכנה?',
                a: 'לא. המערכת עובדת בדפדפן - נכנסים ומתחילים. עובד על מחשב, טאבלט ונייד ללא שום התקנה.'
              },
              {
                q: 'כמה זמן לוקח ללמוד את המערכת?',
                a: 'רוב המשתמשים מתחילים לעבוד באופן עצמאי תוך יום-יומיים. המערכת פשוטה ואינטואיטיבית, ואנחנו מלווים אתכם בהתחלה.'
              },
              {
                q: 'האם הנתונים שלי מאובטחים?',
                a: 'בהחלט. המערכת מאוחסנת בשרתי ענן מאובטחים עם הצפנה מלאה וגיבוי יומי אוטומטי. הנתונים שלך בטוחים.'
              },
              {
                q: 'אפשר לייבא נתונים קיימים?',
                a: 'כן. נעזור לך להעביר נתונים מאקסל או ממערכות אחרות שאתה משתמש בהן היום.'
              },
              {
                q: 'מה אם אני צריך עזרה?',
                a: 'אנחנו זמינים בטלפון, במייל ובוואטסאפ. תמיכה בעברית, בשעות העבודה. לקוחות עסקיים מקבלים תמיכה מועדפת.'
              }
            ].map((faq, i) => (
              <div 
                key={i}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-right"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-600">
                    {faq.a}
                  </div>
                )}
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                רוצה לראות איך זה עובד?
              </h2>
              <p className="text-teal-100 text-lg">
                השאר פרטים ונחזור אליך לתיאום הדגמה אישית
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-white/20 backdrop-blur rounded-2xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">תודה רבה!</h3>
                <p className="text-teal-100">קיבלנו את הפרטים שלך ונחזור אליך בהקדם</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-teal-100 text-sm mb-2">שם מלא *</label>
                  <input
                    type="text"
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
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-teal-200 focus:outline-none focus:border-white/50"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-teal-100 text-sm mb-2">שם המדגה / החווה</label>
                  <input
                    type="text"
                    value={formData.farmName}
                    onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-teal-200 focus:outline-none focus:border-white/50"
                    placeholder="מדגת השרון"
                  />
                </div>
                
                <div>
                  <label className="block text-teal-100 text-sm mb-2">כמה בריכות יש לך?</label>
                  <select
                    value={formData.ponds}
                    onChange={(e) => setFormData({ ...formData, ponds: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/50"
                  >
                    <option value="" className="text-slate-800">בחר...</option>
                    <option value="1-5" className="text-slate-800">1-5 בריכות</option>
                    <option value="6-15" className="text-slate-800">6-15 בריכות</option>
                    <option value="16-30" className="text-slate-800">16-30 בריכות</option>
                    <option value="30+" className="text-slate-800">מעל 30 בריכות</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-teal-100 text-sm mb-2">הערות</label>
                  <input
                    type="text"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-teal-200 focus:outline-none focus:border-white/50"
                    placeholder="משהו שחשוב לך שנדע?"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-white text-teal-700 rounded-xl font-bold text-lg hover:bg-teal-50 transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    <span>שלח בקשה להדגמה</span>
                  </button>
                </div>
              </form>
            )}

            <div className="flex flex-wrap justify-center gap-8 mt-10 text-teal-100">
              <a href="tel:+972501234567" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>050-123-4567</span>
              </a>
              <a href="mailto:info@aquavalure.co.il" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@aquavalure.co.il</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 water-gradient rounded-xl flex items-center justify-center">
                <Fish className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AquaValure</span>
            </div>
            
            <div className="text-center md:text-right">
              <p>מערכת לניהול חוות דגים</p>
              <p className="text-sm mt-1">© 2025 AquaValure | כל הזכויות שמורות</p>
            </div>
            
            <div className="flex gap-6">
              <a href="mailto:info@aquavalure.co.il" className="hover:text-teal-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+972501234567" className="hover:text-teal-400 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
