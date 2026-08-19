'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { createOrder } from './actions'
import { ShoppingBag, Star, Check, Phone, Truck, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react'

const TelegramIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.892-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
)

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

const ViberIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21.571 2.43H2.43C1.09 2.43 0 3.52 0 4.859v14.282C0 20.48 1.09 21.571 2.43 21.571h19.142c1.34 0 2.43-1.09 2.43-2.43V4.859c0-1.34-1.09-2.43-2.43-2.43zM18.887 13.422c-.23-.23-.623-.393-.895-.494a32.062 32.062 0 0 0-2.315-.658 2.502 2.502 0 0 0-2.45.698l-.497.493a14.243 14.243 0 0 1-4.733-4.733l.493-.497a2.502 2.502 0 0 0 .698-2.45 32.06 32.06 0 0 0-.658-2.316c-.101-.272-.264-.665-.494-.895-.36-.36-.962-.387-1.503-.306-1.127.169-2.336 1.09-2.617 2.25-.138.56-.251 1.764.12 3.522 1.045 4.954 4.542 8.451 9.496 9.496 1.758.371 2.962.258 3.522.12 1.16-.281 2.081-1.49 2.25-2.617.081-.541.054-1.143-.306-1.503z"/>
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
            <div className="flex gap-3">
              <a href="viber://chat?number=+380987194210" className="text-[#7360f2] hover:scale-110 transition shadow-sm rounded-lg" title="Viber"><ViberIcon className="w-7 h-7" /></a>
              <a href="https://t.me/+380987194210" className="text-[#2AABEE] hover:scale-110 transition shadow-sm rounded-full" title="Telegram"><TelegramIcon className="w-7 h-7" /></a>
              <a href="https://wa.me/380987194210" className="text-[#25D366] hover:scale-110 transition shadow-sm rounded-full" title="WhatsApp"><WhatsAppIcon className="w-7 h-7" /></a>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <a href="tel:+380987194245" className="font-bold text-lg hover:text-amber-600 transition flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-500" />
              +38 098 719 42 45
            </a>
            <div className="flex gap-3">
              <a href="viber://chat?number=+380987194245" className="text-[#7360f2] hover:scale-110 transition shadow-sm rounded-lg" title="Viber"><ViberIcon className="w-7 h-7" /></a>
              <a href="https://t.me/+380987194245" className="text-[#2AABEE] hover:scale-110 transition shadow-sm rounded-full" title="Telegram"><TelegramIcon className="w-7 h-7" /></a>
              <a href="https://wa.me/380987194245" className="text-[#25D366] hover:scale-110 transition shadow-sm rounded-full" title="WhatsApp"><WhatsAppIcon className="w-7 h-7" /></a>
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
              <div className="flex gap-3">
                <a href="viber://chat?number=+380987194210" className="text-[#7360f2] hover:scale-110 transition" title="Viber"><ViberIcon className="w-8 h-8" /></a>
                <a href="https://t.me/+380987194210" className="text-[#2AABEE] hover:scale-110 transition" title="Telegram"><TelegramIcon className="w-8 h-8" /></a>
                <a href="https://wa.me/380987194210" className="text-[#25D366] hover:scale-110 transition" title="WhatsApp"><WhatsAppIcon className="w-8 h-8" /></a>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <a href="tel:+380987194245" className="font-bold hover:text-white transition flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500" />
                +38 098 719 42 45
              </a>
              <div className="flex gap-3">
                <a href="viber://chat?number=+380987194245" className="text-[#7360f2] hover:scale-110 transition" title="Viber"><ViberIcon className="w-8 h-8" /></a>
                <a href="https://t.me/+380987194245" className="text-[#2AABEE] hover:scale-110 transition" title="Telegram"><TelegramIcon className="w-8 h-8" /></a>
                <a href="https://wa.me/380987194245" className="text-[#25D366] hover:scale-110 transition" title="WhatsApp"><WhatsAppIcon className="w-8 h-8" /></a>
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
