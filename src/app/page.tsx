'use client'

import { useState } from 'react'
import { createOrder } from './actions'
import { ShoppingBag, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

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
      <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl text-center space-y-4">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-stone-800">Дякуємо за замовлення!</h2>
          <p className="text-stone-600">Ми отримали вашу заявку і незабаром зв'яжемося з вами для уточнення деталей доставки.</p>
          <button onClick={() => setSuccess(false)} className="mt-8 px-6 py-3 bg-stone-900 text-white rounded-xl font-medium w-full hover:bg-stone-800 transition">
            На головну
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-stone-50 font-sans text-stone-800">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-stone-900">NOME.</div>
          <a href="#order" className="bg-stone-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition shadow-lg shadow-stone-900/20">
            Замовити
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold uppercase tracking-wider">
            Хіт сезону
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight text-stone-900 tracking-tight">
            Тепло, яке <br/><span className="text-amber-700">ви відчуваєте.</span>
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-md">
            Преміальні кімнатні капці NOME. Неймовірно м'які, теплі та зручні. Ідеальний вибір для холодних вечорів вдома.
          </p>
          <div className="flex gap-4 items-center">
            <span className="text-4xl font-black text-stone-900">850 ₴</span>
            <span className="text-lg text-stone-400 line-through">1200 ₴</span>
          </div>
          <div className="pt-4 flex gap-4">
            <a href="#order" className="flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-amber-700 transition w-full md:w-auto shadow-xl shadow-amber-600/30">
              <ShoppingBag className="w-5 h-5" />
              Придбати зараз
            </a>
          </div>
        </div>
        <div className="relative">
          {/* Placeholder for Slippers Image */}
          <div className="aspect-square bg-stone-200 rounded-[3rem] shadow-2xl overflow-hidden flex items-center justify-center relative">
            <img src="/images/slipper-main.jpg" alt="NOME Slippers" className="w-full h-full object-cover" onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop'
            }} />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-stone-900 text-stone-50 py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-stone-800 rounded-xl flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Висока якість</h3>
              <p className="text-stone-400 text-sm">Міцні матеріали та надійна підошва</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-stone-800 rounded-xl flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Швидка доставка</h3>
              <p className="text-stone-400 text-sm">Відправка Новою Поштою щодня</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-stone-800 rounded-xl flex items-center justify-center shrink-0">
              <ShoppingBag className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Оплата при отриманні</h3>
              <p className="text-stone-400 text-sm">Жодних передоплат, оглядаєте на пошті</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="py-24 bg-white relative">
        <div className="max-w-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-stone-900 mb-4">Оформити замовлення</h2>
            <p className="text-stone-600">Заповніть форму нижче, і ми відправимо ваші капці найближчим часом.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 bg-stone-50 p-8 rounded-3xl shadow-xl border border-stone-100">
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-1.5">ПІБ отримувача</label>
              <input name="name" required placeholder="Іваненко Іван Іванович" className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition" />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-1.5">Номер телефону</label>
              <input name="phone" type="tel" required placeholder="+38 (000) 000-00-00" className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-1.5">Розмір</label>
                <select name="size" className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-500 outline-none bg-white">
                  <option value="36">36</option>
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                  <option value="45">45</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-1.5">Колір</label>
                <select name="color" className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-500 outline-none bg-white">
                  <option value="Коричневі (Світлі)">Коричневі (Світлі)</option>
                  <option value="Чорні">Чорні</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-stone-700 mb-1.5">Місто та відділення Нової Пошти</label>
              <input name="address" required placeholder="м. Київ, відділення №1" className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition" />
            </div>

            <div className="pt-4">
              <button disabled={loading} className="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-70 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-amber-600/30 transition flex justify-center items-center">
                {loading ? 'Обробка...' : 'Підтвердити замовлення'}
              </button>
            </div>
          </form>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-8 text-center text-sm">
        <p>© 2026 NOME Slippers. Всі права захищені.</p>
      </footer>
    </main>
  )
}
