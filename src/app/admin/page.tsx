'use client'

import { useState, useEffect } from 'react'
import { getOrders, updateOrderStatus } from '../actions'
import { LogOut, Package, RefreshCw } from 'lucide-react'

export default function AdminPage() {
  const [auth, setAuth] = useState(false)
  const [password, setPassword] = useState('')
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  // Simple client-side auth for demonstration
  useEffect(() => {
    if (localStorage.getItem('nome_admin') === 'true') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAuth(true)
      fetchOrders()
    }
  }, [])

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (password === 'admin2026') { // Hardcoded password for simplicity
      localStorage.setItem('nome_admin', 'true')
      setAuth(true)
      fetchOrders()
    } else {
      alert('Невірний пароль')
    }
  }

  function handleLogout() {
    localStorage.removeItem('nome_admin')
    setAuth(false)
    setOrders([])
  }

  async function fetchOrders() {
    setLoading(true)
    const data = await getOrders()
    setOrders(data)
    setLoading(false)
  }

  async function changeStatus(id: string, newStatus: string) {
    await updateOrderStatus(id, newStatus)
    fetchOrders() // refresh
  }

  if (!auth) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full space-y-4">
          <h1 className="text-2xl font-bold text-center text-stone-800 mb-6">Вхід в Адмінку</h1>
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-1">Пароль</label>
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <button className="w-full bg-stone-900 text-white font-bold py-2.5 rounded-lg hover:bg-stone-800 transition">
            Увійти
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-100 font-sans text-stone-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <Package className="w-8 h-8 text-amber-600" />
            <h1 className="text-2xl font-black">NOME Admin</h1>
          </div>
          <div className="flex gap-4">
            <button onClick={fetchOrders} className="flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 rounded-lg text-sm font-medium transition">
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Оновити
            </button>
            <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-sm font-medium transition">
              <LogOut className="w-4 h-4" />
              Вийти
            </button>
          </div>
        </header>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-500 text-sm">
                  <th className="p-4 font-semibold">Дата</th>
                  <th className="p-4 font-semibold">Клієнт</th>
                  <th className="p-4 font-semibold">Товар</th>
                  <th className="p-4 font-semibold">Адреса</th>
                  <th className="p-4 font-semibold">Статус</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-stone-500">Немає замовлень</td>
                  </tr>
                ) : (
                  orders.map(order => (
                    <tr key={order.id} className="hover:bg-stone-50/50 transition">
                      <td className="p-4 text-sm text-stone-500 whitespace-nowrap">
                        {new Date(order.createdAt).toLocaleDateString('uk-UA')} <br/>
                        <span className="text-xs">{new Date(order.createdAt).toLocaleTimeString('uk-UA')}</span>
                      </td>
                      <td className="p-4">
                        <div className="font-bold">{order.name}</div>
                        <div className="text-sm text-stone-500">{order.phone}</div>
                      </td>
                      <td className="p-4">
                        <div className="text-sm">Розмір: <b>{order.size}</b></div>
                        <div className="text-sm">Колір: <b>{order.color}</b></div>
                      </td>
                      <td className="p-4 text-sm max-w-xs">{order.address}</td>
                      <td className="p-4">
                        <select 
                          value={order.status}
                          onChange={(e) => changeStatus(order.id, e.target.value)}
                          className={`text-sm font-bold border rounded-lg px-3 py-1.5 outline-none cursor-pointer
                            ${order.status === 'Нове' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                              order.status === 'Обробляється' ? 'bg-amber-50 text-amber-700 border-amber-200' : 
                              order.status === 'Відправлено' ? 'bg-purple-50 text-purple-700 border-purple-200' : 
                              'bg-green-50 text-green-700 border-green-200'}`}
                        >
                          <option value="Нове">Нове</option>
                          <option value="Обробляється">Обробляється</option>
                          <option value="Відправлено">Відправлено</option>
                          <option value="Виконано">Виконано</option>
                        </select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
