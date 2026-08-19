import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 p-4 md:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-10 space-y-6">
        <Link href="/" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium mb-4">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Повернутися на головну
        </Link>
        
        <h1 className="text-3xl font-black mb-6">Політика конфіденційності</h1>
        
        <div className="space-y-4 text-stone-600 leading-relaxed">
          <p>Ця Політика конфіденційності описує, як ми збираємо, використовуємо та обробляємо ваші особисті дані, коли ви відвідуєте наш сайт та здійснюєте покупки.</p>
          
          <h2 className="text-xl font-bold text-stone-800 mt-6">1. Збір інформації</h2>
          <p>Ми збираємо інформацію, яку ви надаєте нам під час оформлення замовлення, зокрема: ім'я, номер телефону, адресу доставки (відділення Нової Пошти). Ця інформація необхідна виключно для обробки та доставки вашого замовлення.</p>
          
          <h2 className="text-xl font-bold text-stone-800 mt-6">2. Використання інформації</h2>
          <p>Ваші дані використовуються для:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Зв'язку з вами для підтвердження замовлення;</li>
            <li>Відправки товару за вказаною адресою;</li>
            <li>Надання клієнтської підтримки.</li>
          </ul>
          
          <h2 className="text-xl font-bold text-stone-800 mt-6">3. Захист даних</h2>
          <p>Ми вживаємо всіх необхідних заходів для захисту ваших персональних даних від несанкціонованого доступу, зміни, розкриття чи знищення. Ми не передаємо ваші дані третім особам, за винятком кур'єрської служби (Нова Пошта) для здійснення доставки.</p>
          
          <h2 className="text-xl font-bold text-stone-800 mt-6">4. Зміни до політики конфіденційності</h2>
          <p>Ми залишаємо за собою право вносити зміни до цієї Політики конфіденційності. Будь-які зміни будуть опубліковані на цій сторінці.</p>
          
          <h2 className="text-xl font-bold text-stone-800 mt-6">5. Контакти</h2>
          <p>Якщо у вас виникли запитання щодо цієї Політики конфіденційності, будь ласка, зв'яжіться з нами за номерами, вказаними на сайті.</p>
        </div>
      </div>
    </div>
  )
}
