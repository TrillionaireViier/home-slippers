'use client'

import { useState, useEffect } from 'react'
import { createOrder } from './actions'
import { ShoppingBag, Star, Check, Phone, Truck, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  
  // Timer state
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 35, seconds: 12 })
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    const res = await createOrder(formData)
    setLoading(false)
    if (res.success) {
      setSuccess(true)
    } else {
      alert(res.error)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center space-y-4">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-stone-800">Дякуємо за замовлення!</h2>
          <p className="text-stone-600">Наш менеджер зателефонує вам найближчим часом для підтвердження замовлення.</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#f3f4f6]">
      {/* Mobile-centric wrapper */}
      <div className="max-w-[480px] mx-auto bg-white min-h-screen shadow-2xl relative overflow-hidden text-stone-900 pb-20">
        
        {/* HERO SECTION */}
        <header className="px-5 py-6">
          <h1 className="text-center font-black text-2xl mb-4 leading-tight">
            НАЙТЕПЛІШІ ДОМАШНІ УГИ ДЛЯ ВАШОГО ДОМУ
          </h1>
          
          <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6 aspect-square bg-stone-100">
            <img 
              src="/images/slipper-main.jpg" 
              alt="Стильні домашні уги" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop'
              }}
            />
            {/* Sale badge */}
            <div className="absolute top-4 right-4 bg-red-600 text-white font-black px-4 py-2 rounded-xl text-xl rotate-12 shadow-lg">
              -30%
            </div>
          </div>

          <div className="flex justify-between items-stretch bg-stone-50 rounded-2xl p-2 border border-stone-200 mb-6">
            <div className="w-1/2 p-3 text-center border-r border-stone-200 flex flex-col justify-center">
              <p className="text-sm text-stone-500 font-medium mb-1">Звичайна ціна:</p>
              <p className="text-xl text-stone-400 line-through font-bold">1200 грн</p>
            </div>
            <div className="w-1/2 p-3 text-center bg-amber-50 rounded-xl flex flex-col justify-center">
              <p className="text-sm text-amber-700 font-bold mb-1">Ціна зі знижкою:</p>
              <p className="text-3xl text-amber-600 font-black">850 грн</p>
            </div>
          </div>

          <a href="#order_form" className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-black text-xl py-5 rounded-2xl shadow-[0_6px_0_#d97706] active:shadow-none active:translate-y-2 transition-all">
            ЗАМОВИТИ ЗІ ЗНИЖКОЮ
          </a>

          <div className="text-center mt-6 text-stone-500 font-medium">
            <p>До кінця акції залишилось:</p>
            <div className="flex justify-center gap-2 mt-2 text-stone-800">
              <div className="bg-stone-100 px-3 py-1 rounded-lg"><span className="font-bold text-lg">{String(timeLeft.days).padStart(2, '0')}</span><br/><span className="text-[10px] uppercase">днів</span></div>
              <div className="font-bold text-xl py-1">:</div>
              <div className="bg-stone-100 px-3 py-1 rounded-lg"><span className="font-bold text-lg">{String(timeLeft.hours).padStart(2, '0')}</span><br/><span className="text-[10px] uppercase">год</span></div>
              <div className="font-bold text-xl py-1">:</div>
              <div className="bg-stone-100 px-3 py-1 rounded-lg"><span className="font-bold text-lg">{String(timeLeft.minutes).padStart(2, '0')}</span><br/><span className="text-[10px] uppercase">хв</span></div>
              <div className="font-bold text-xl py-1">:</div>
              <div className="bg-stone-100 px-3 py-1 rounded-lg"><span className="font-bold text-lg">{String(timeLeft.seconds).padStart(2, '0')}</span><br/><span className="text-[10px] uppercase">сек</span></div>
            </div>
          </div>
        </header>

        {/* DESCRIPTION SECTION */}
        <section className="bg-stone-100 px-5 py-10">
          <h2 className="text-center font-black text-2xl mb-8">
            М'ЯКІСТЬ, ЯКУ ВИ ВІДЧУЄТЕ З ПЕРШОГО КРОКУ
          </h2>

          <div className="space-y-10">
            <div>
              <img 
                src="/images/slipper-1.jpg" 
                alt="Якісні матеріали" 
                className="w-full rounded-2xl shadow-md mb-4 bg-stone-200 aspect-[4/3] object-cover"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop' }}
              />
              <h3 className="font-bold text-xl mb-2">Надзвичайна теплота</h3>
              <p className="text-stone-600 leading-relaxed">
                Наші уги виготовлені з високоякісних матеріалів, які чудово зберігають тепло. Ваші ноги завжди будуть у затишку, навіть у найхолодніші дні.
              </p>
            </div>

            <div>
              <img 
                src="/images/slipper-2.jpg" 
                alt="Зручна підошва" 
                className="w-full rounded-2xl shadow-md mb-4 bg-stone-200 aspect-[4/3] object-cover"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop' }}
              />
              <h3 className="font-bold text-xl mb-2">Антиковзка підошва</h3>
              <p className="text-stone-600 leading-relaxed">
                Безпека понад усе. Спеціальна гумова підошва гарантує надійне зчеплення з будь-якою поверхнею: ламінат, плитка чи паркет.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="font-bold text-xl mb-4 text-center">Чому обирають наші уги?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full"><Check className="w-5 h-5 text-green-600" /></div>
                  <span className="font-medium">Ідеально тримають форму</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full"><Check className="w-5 h-5 text-green-600" /></div>
                  <span className="font-medium">Можна прати у машинці</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full"><Check className="w-5 h-5 text-green-600" /></div>
                  <span className="font-medium">Стильний універсальний дизайн</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full"><Check className="w-5 h-5 text-green-600" /></div>
                  <span className="font-medium">Довговічні матеріали</span>
                </li>
              </ul>
            </div>
            
            <a href="#order_form" className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-black text-xl py-5 rounded-2xl shadow-[0_6px_0_#d97706] active:shadow-none active:translate-y-2 transition-all">
              ЗАМОВИТИ ЗАРАЗ
            </a>
          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section className="px-5 py-10">
          <h2 className="text-center font-black text-2xl mb-2">
            ВІДГУКИ ПОКУПЦІВ
          </h2>
          
          <div className="flex flex-col items-center mb-8">
            <div className="flex gap-1 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />)}
            </div>
            <p className="font-bold text-lg">Рейтинг: 4.8/5</p>
            <p className="text-stone-500 text-sm">98% покупців рекомендують нас</p>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 text-amber-700 font-bold rounded-full flex items-center justify-center">О</div>
                <div>
                  <p className="font-bold">Олена, Київ</p>
                  <div className="flex"><Star className="w-3 h-3 fill-amber-400 text-amber-400" /><Star className="w-3 h-3 fill-amber-400 text-amber-400" /><Star className="w-3 h-3 fill-amber-400 text-amber-400" /><Star className="w-3 h-3 fill-amber-400 text-amber-400" /><Star className="w-3 h-3 fill-amber-400 text-amber-400" /></div>
                </div>
              </div>
              <p className="text-stone-600 italic">
                "Дуже зручні уги! Замовила коричневі, розмір підійшов ідеально. Ноги завжди в теплі, а підошва справді не ковзає. Рекомендую!"
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 text-amber-700 font-bold rounded-full flex items-center justify-center">М</div>
                <div>
                  <p className="font-bold">Максим, Львів</p>
                  <div className="flex"><Star className="w-3 h-3 fill-amber-400 text-amber-400" /><Star className="w-3 h-3 fill-amber-400 text-amber-400" /><Star className="w-3 h-3 fill-amber-400 text-amber-400" /><Star className="w-3 h-3 fill-amber-400 text-amber-400" /><Star className="w-3 h-3 fill-amber-400 text-amber-400" /></div>
                </div>
              </div>
              <p className="text-stone-600 italic">
                "Брав на подарунок дружині. Вона дуже задоволена, каже, що м'якших угів у неї ще не було. Дякую за швидку доставку!"
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 text-amber-700 font-bold rounded-full flex items-center justify-center">І</div>
                <div>
                  <p className="font-bold">Ірина, Дніпро</p>
                  <div className="flex"><Star className="w-3 h-3 fill-amber-400 text-amber-400" /><Star className="w-3 h-3 fill-amber-400 text-amber-400" /><Star className="w-3 h-3 fill-amber-400 text-amber-400" /><Star className="w-3 h-3 fill-amber-400 text-amber-400" /><Star className="w-3 h-3 fill-amber-400 text-amber-400" /></div>
                </div>
              </div>
              <p className="text-stone-600 italic">
                "Якість на висоті. Прала вже два рази в машинці — як нові! Однозначно вартують своїх грошей."
              </p>
            </div>
          </div>
        </section>

        {/* HOW TO ORDER */}
        <section className="bg-stone-900 text-white px-5 py-10">
          <h2 className="text-center font-black text-2xl mb-8">
            ЯК ЗАМОВИТИ?
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-stone-800 p-4 rounded-2xl">
              <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center shrink-0">
                <ShoppingBag className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg text-amber-400">1. Заявка</p>
                <p className="text-stone-300 text-sm">Заповніть форму замовлення внизу сторінки</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-stone-800 p-4 rounded-2xl">
              <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg text-amber-400">2. Дзвінок</p>
                <p className="text-stone-300 text-sm">Наш менеджер передзвонить для підтвердження</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-stone-800 p-4 rounded-2xl">
              <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center shrink-0">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg text-amber-400">3. Відправка</p>
                <p className="text-stone-300 text-sm">Доставляємо Новою Поштою протягом 1-3 днів</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-stone-800 p-4 rounded-2xl">
              <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg text-amber-400">4. Отримання</p>
                <p className="text-stone-300 text-sm">Оплачуєте товар при отриманні на пошті</p>
              </div>
            </div>
          </div>
        </section>

        {/* ORDER FORM SECTION */}
        <section id="order_form" className="px-5 py-10 bg-amber-50">
          <h2 className="text-center font-black text-2xl mb-6">
            ОФОРМИТИ ЗАМОВЛЕННЯ
          </h2>
          
          {/* Miniature product summary */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200 mb-6 flex gap-4">
            <img 
              src="/images/slipper-main.jpg" 
              className="w-24 h-24 rounded-xl object-cover bg-stone-100" 
              alt="Стильні домашні уги" 
              onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop' }}
            />
            <div className="flex flex-col justify-center">
              <p className="font-bold text-stone-800 leading-tight mb-1">Домашні уги NOME</p>
              <div className="flex items-center gap-2">
                <span className="text-amber-600 font-black text-xl">850 ₴</span>
                <span className="text-stone-400 line-through text-sm">1200 ₴</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input name="name" required placeholder="Введіть Ваше ім'я" className="w-full px-5 py-4 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-lg font-medium bg-white" />
            </div>
            
            <div>
              <input name="phone" type="tel" required placeholder="Введіть Ваш телефон" className="w-full px-5 py-4 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-lg font-medium bg-white" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <select name="size" className="w-full px-5 py-4 rounded-xl border border-stone-300 focus:border-amber-500 outline-none bg-white text-stone-700 font-medium">
                  <option value="" disabled selected>Розмір</option>
                  {[36, 37, 38, 39, 40, 41, 42, 43, 44, 45].map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <select name="color" className="w-full px-5 py-4 rounded-xl border border-stone-300 focus:border-amber-500 outline-none bg-white text-stone-700 font-medium">
                  <option value="" disabled selected>Колір</option>
                  <option value="Коричневі">Коричневі</option>
                  <option value="Чорні">Чорні</option>
                </select>
              </div>
            </div>

            <div>
              <input name="address" required placeholder="Місто та відділення НП" className="w-full px-5 py-4 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-lg font-medium bg-white" />
            </div>

            <button disabled={loading} className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-70 text-white font-black text-xl py-5 mt-2 rounded-2xl shadow-[0_6px_0_#d97706] active:shadow-none active:translate-y-2 transition-all flex justify-center items-center">
              {loading ? 'ВІДПРАВКА...' : 'ЗАМОВИТИ ЗІ ЗНИЖКОЮ'}
            </button>
            <p className="text-center text-stone-500 text-xs mt-3 flex items-center justify-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Ваші дані надійно захищені
            </p>
          </form>
        </section>

        {/* FOOTER */}
        <footer className="text-center py-6 text-stone-400 text-xs">
          <p>NOME Slippers © 2026</p>
          <p className="mt-1"><a href="#" className="underline">Політика конфіденційності</a></p>
        </footer>
      </div>
    </main>
  )
}
