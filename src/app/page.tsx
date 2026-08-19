'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { createOrder } from './actions'
import { ShoppingBag, Star, Check, Phone, Truck, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react'

const TelegramIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M1.164 10.97l19.5-7.5c1-.37 1.84.23 1.51 1.25l-3.33 15.68c-.28 1.24-1.02 1.54-2.07.95l-5.74-4.23-2.77 2.66c-.3.3-.56.56-1.15.56l.41-5.83 10.6-9.56c.46-.42-.1-.65-.72-.24l-13.1 8.24-5.65-1.77c-1.22-.38-1.24-1.22.25-1.8z" />
  </svg>
)

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.52 3.48A11.96 11.96 0 0012 0C5.38 0 0 5.38 0 12c0 2.12.55 4.19 1.6 6.01L.02 24l6.14-1.61A11.97 11.97 0 0012 24c6.62 0 12-5.38 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22.02c-1.79 0-3.54-.48-5.08-1.39l-.36-.21-3.77.99 1.01-3.68-.24-.38A9.97 9.97 0 011.98 12c0-5.52 4.49-10 10.02-10 2.68 0 5.19 1.04 7.08 2.93a9.98 9.98 0 012.93 7.08c0 5.52-4.5 10.01-10.01 10.01zm5.51-7.53c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.23-.66.08-1.6-.76-2.76-1.5-3.84-3.34-.11-.2-.01-.3.14-.45.14-.14.3-.3.45-.45.15-.15.2-.25.3-.41.1-.15.05-.28-.02-.43-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.53.08-.8.38-.28.3-1.03 1.01-1.03 2.46s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49 1.95.84 2.76.92 3.73.77 1.04-.16 2.05-.72 2.33-1.42.28-.7.28-1.3.2-1.42-.08-.13-.28-.2-.58-.35z" />
  </svg>
)

const ViberIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 512 512" fill="currentColor" className={className}>
    <path d="M444 49.9C431.3 38.2 379.9 .9 265.3 .4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.5 68 11.4 108.2 29.9 132.3 22.4 29.2 59.8 44.8 59.8 44.8l20 68.4c2.8 9.5 13.5 13.6 21.6 8.5l68.7-44.5c27.1 8 57.6 11.7 89.2 11.7 131.5 0 171.5-62.9 184.2-96.8 19-50.6 19.3-120.7-14.7-227.1l-28.2-56.9zm-46 200.7c-3.1 9-8.3 14.2-15 15.6-5.8 .9-12.2-.4-19.1-3.6-9.1-4.2-22.3-12.7-38.3-25.5-23-18.4-48-43.1-66.2-64.6-25-29.6-32.9-46.7-36.7-56.6-3.8-9.9-1.9-19.9 4-25.7 3.6-3.6 8.1-6.7 12.8-9.4 6-3.5 11.5-6.3 14.6-9.2 3.8-3.6 4.9-8.4 2.6-13.6-1.5-3.3-8.8-19.1-16.1-34.9-7.1-15.4-13.7-29.1-17-33-3.6-4.3-8.2-6-13-4.5-5 .1-11.3 2-18 4.7-14 5.7-26.6 13.9-36.1 23.3-13.1 12.9-19.9 28.1-18.7 41.5 3 32.7 20 74 61.3 130 45.4 61.6 102.2 104.9 156.4 121.2 18.2 5.5 33.6 6.8 46.1 4 10.3-2.3 20-8.6 28.3-18.2 9.2-10.7 17.5-24 23.3-38.5 2.1-5.1 1.6-10-1.8-14.2-3.8-4.7-22.8-14.1-44.5-24.9-18.8-9.3-28.4-14.1-32.6-13.2-3.4 .7-7.4 3.7-11.2 8.3-5.2 6.3-11.2 14.7-14.8 18.6-3.7 4-8 5.7-12 5.1zm-86.8-54c-11.8-12.7-25-23.7-39.7-32.9l-2.4-1.5 2-2c6-5.8 15.3-9.1 27.6-9.8 9.3-.5 18.9 2.5 28.2 8.7 9.8 6.5 17.4 16.5 21.6 28.4 1.5 4.3 1.9 9 1 13.8-.7 4.1-2.9 7.9-6.5 11l-2.8 2.4-2.7-2.3c-7-5.9-15.6-10.9-25.5-15l-1-4.9c-.3-1.4-1.4-2.5-2.8-2.7-1.4-.2-2.8 .5-3.5 1.7l-4.1 7.2zm49.9-57.9c-29.1 25.2-64.9 42.9-104 51.4-42.3-43.2-96.1-61.9-158.4-55.1l-5.6 .6 3.1 4.7c7 10.7 10.3 23.5 9.4 36.5-.8 11.2-4.9 22.1-11.9 31l-3 3.8-3.4-3.5c-8-8.1-17.6-15.1-28.4-20.5l4-8c1.3-2.6 1-5.7-1-7.9-1.9-2.2-5.1-2.8-7.7-1.4l-11.7 6.4c-35.3 19.3-65.7 48.6-88.8 85.5-5.6 9-10.3 18.4-14 28.2l-1.9 5.1 4.7-2.6c11.6-6.5 24.3-9.8 37.1-9.7 10.9 0 21.6 2.6 31.4 7.6l3.8 1.9 2.2-3.6c5.8-9.4 12.8-18 20.9-25.7l1.7-1.6 1.7 1.6c43.9 41.5 95.8 61 153.2 57.5 13.6-.8 27-4.6 39.4-11l5-2.6-2.5-4.9c-8.9-17.4-12.7-36.9-11-56.9 1.6-18.7 7.7-36.6 17.6-52.4l3.1-4.9-5-2.7c-40.4-22.1-85-33.1-131-32.3l-5.5 .1 2.8 4.7c6.2 10.4 9.1 22.5 8.3 35.1-.7 10.8-4.3 21.1-10.5 29.8l-3 4.2-3.8-3.5c-11.2-10.4-24.1-19.1-38.2-25.6l5-8c1.5-2.4 1.3-5.5-.5-7.7-1.8-2.2-4.9-2.9-7.5-1.5l-11.6 6c-31 16.1-57.8 40.2-78.2 70.3l-2.9 4.3 3.9-3.4z"/>
  </svg>
)

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
        
        {/* TOP CONTACT BAR */}
        <div className="bg-stone-100 border-b border-stone-200 px-5 py-3 space-y-3">
          <div className="flex items-center justify-between">
            <a href="tel:+380987194210" className="font-bold text-lg hover:text-amber-600 transition flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-500" />
              +38 098 719 42 10
            </a>
            <div className="flex gap-2">
              <a href="viber://chat?number=%2B380987194210" className="bg-[#7360f2] text-white w-7 h-7 rounded-full flex items-center justify-center shadow-sm" title="Viber"><ViberIcon className="w-4 h-4" /></a>
              <a href="tg://resolve?domain=380987194210" className="bg-[#2AABEE] text-white w-7 h-7 rounded-full flex items-center justify-center shadow-sm" title="Telegram"><TelegramIcon className="w-4 h-4" /></a>
              <a href="https://wa.me/380987194210" className="bg-[#25D366] text-white w-7 h-7 rounded-full flex items-center justify-center shadow-sm" title="WhatsApp"><WhatsAppIcon className="w-4 h-4" /></a>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <a href="tel:+380987194245" className="font-bold text-lg hover:text-amber-600 transition flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-500" />
              +38 098 719 42 45
            </a>
            <div className="flex gap-2">
              <a href="viber://chat?number=%2B380987194245" className="bg-[#7360f2] text-white w-7 h-7 rounded-full flex items-center justify-center shadow-sm" title="Viber"><ViberIcon className="w-4 h-4" /></a>
              <a href="tg://resolve?domain=380987194245" className="bg-[#2AABEE] text-white w-7 h-7 rounded-full flex items-center justify-center shadow-sm" title="Telegram"><TelegramIcon className="w-4 h-4" /></a>
              <a href="https://wa.me/380987194245" className="bg-[#25D366] text-white w-7 h-7 rounded-full flex items-center justify-center shadow-sm" title="WhatsApp"><WhatsAppIcon className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <header className="px-5 py-6">
          <h1 className="text-center font-black text-2xl mb-4 leading-tight">
            НАЙТЕПЛІШІ ДОМАШНІ УГИ ДЛЯ ВАШОГО ДОМУ
          </h1>
          
          <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6 aspect-square bg-stone-100">
            <img 
              src="/images/slipper-5.jpg" 
              alt="Стильні домашні уги" 
              className="w-full h-full object-cover"
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
            М&apos;ЯКІСТЬ, ЯКУ ВИ ВІДЧУЄТЕ З ПЕРШОГО КРОКУ
          </h2>

          <div className="space-y-10">
            <div>
              <img 
                src="/images/slipper-4.jpg" 
                alt="Якісні матеріали" 
                className="w-full rounded-2xl shadow-md mb-4 bg-stone-200 aspect-[4/3] object-cover"
              />
              <h3 className="font-bold text-xl mb-2">Надзвичайна теплота</h3>
              <p className="text-stone-600 leading-relaxed">
                Наші уги виготовлені з високоякісних матеріалів, які чудово зберігають тепло. Ваші ноги завжди будуть у затишку, навіть у найхолодніші дні.
              </p>
            </div>

            <div>
              <img 
                src="/images/slipper-6.jpg" 
                alt="Зручна підошва" 
                className="w-full rounded-2xl shadow-md mb-4 bg-stone-200 aspect-[4/3] object-cover"
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

        {/* GALLERY SECTION */}
        <section className="bg-white px-5 py-10">
          <h2 className="text-center font-black text-2xl mb-8">
            ГАЛЕРЕЯ
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <img src="/images/slipper-3.jpg" alt="Фото 1" className="w-full rounded-xl shadow-sm aspect-square object-cover bg-stone-100" />
            <img src="/images/slipper-4.jpg" alt="Фото 2" className="w-full rounded-xl shadow-sm aspect-square object-cover bg-stone-100" />
            <img src="/images/slipper-5.jpg" alt="Фото 3" className="w-full rounded-xl shadow-sm aspect-square object-cover bg-stone-100" />
            <img src="/images/slipper-6.jpg" alt="Фото 4" className="w-full rounded-xl shadow-sm aspect-square object-cover bg-stone-100" />
            <img src="/images/slipper-7.jpg" alt="Фото 5" className="w-full rounded-xl shadow-sm aspect-[2/1] object-cover bg-stone-100 col-span-2" />
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
                &quot;Дуже зручні уги! Замовила коричневі, розмір підійшов ідеально. Ноги завжди в теплі, а підошва справді не ковзає. Рекомендую!&quot;
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
                &quot;Брав на подарунок дружині. Вона дуже задоволена, каже, що м&apos;якших угів у неї ще не було. Дякую за швидку доставку!&quot;
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
                &quot;Якість на висоті. Прала вже два рази в машинці — як нові! Однозначно вартують своїх грошей.&quot;
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
              src="/images/slipper-5.jpg" 
              className="w-24 h-24 rounded-xl object-cover bg-stone-100" 
              alt="Стильні домашні уги" 
            />
            <div className="flex flex-col justify-center">
              <p className="font-bold text-stone-800 leading-tight mb-1">Домашні уги NOME</p>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-amber-600 font-black text-xl">850 ₴</span>
                <span className="text-stone-400 line-through text-sm">1200 ₴</span>
              </div>
              <p className="text-xs font-medium text-stone-500 flex items-center gap-1.5 mt-1">
                <span className="flex"><span className="w-3 h-3 rounded-full bg-[#8b5a2b] border border-stone-200 block"></span><span className="w-3 h-3 rounded-full bg-black border border-stone-200 block -ml-1"></span></span>
                В наявності коричневі та чорні
              </p>
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
        <footer className="text-center py-8 text-stone-400 text-sm bg-stone-900 border-t border-stone-800">
          <div className="flex flex-col gap-4 px-5 mb-6 text-stone-300">
            <div className="flex items-center justify-between">
              <a href="tel:+380987194210" className="font-bold hover:text-white transition flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500" />
                +38 098 719 42 10
              </a>
              <div className="flex gap-2">
                <a href="viber://chat?number=%2B380987194210" className="bg-[#7360f2] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition" title="Viber"><ViberIcon className="w-5 h-5" /></a>
                <a href="tg://resolve?domain=380987194210" className="bg-[#2AABEE] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition" title="Telegram"><TelegramIcon className="w-5 h-5" /></a>
                <a href="https://wa.me/380987194210" className="bg-[#25D366] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition" title="WhatsApp"><WhatsAppIcon className="w-5 h-5" /></a>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <a href="tel:+380987194245" className="font-bold hover:text-white transition flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500" />
                +38 098 719 42 45
              </a>
              <div className="flex gap-2">
                <a href="viber://chat?number=%2B380987194245" className="bg-[#7360f2] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition" title="Viber"><ViberIcon className="w-5 h-5" /></a>
                <a href="tg://resolve?domain=380987194245" className="bg-[#2AABEE] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition" title="Telegram"><TelegramIcon className="w-5 h-5" /></a>
                <a href="https://wa.me/380987194245" className="bg-[#25D366] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition" title="WhatsApp"><WhatsAppIcon className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
          <p>NOME Slippers © 2026</p>
          <p className="mt-2"><Link href="/privacy" className="underline hover:text-white transition">Політика конфіденційності</Link></p>
        </footer>
      </div>
    </main>
  )
}
