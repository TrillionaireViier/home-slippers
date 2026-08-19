'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createOrder(formData: FormData) {
  const name = formData.get('name') as string
  const phone = formData.get('phone') as string
  const size = formData.get('size') as string
  const color = formData.get('color') as string
  const address = formData.get('address') as string

  if (!name || !phone || !size || !color || !address) {
    return { error: 'Усі поля обовʼязкові' }
  }

  try {
    await prisma.order.create({
      data: { name, phone, size, color, address }
    })
    return { success: true }
  } catch (error) {
    console.error('Failed to create order', error)
    return { error: 'Помилка при створенні замовлення' }
  }
}

export async function updateOrderStatus(id: string, status: string) {
  try {
    await prisma.order.update({
      where: { id },
      data: { status }
    })
    revalidatePath('/admin')
    return { success: true }
  } catch (error) {
    return { error: 'Failed to update' }
  }
}

export async function getOrders() {
  try {
    return await prisma.order.findMany({
      orderBy: { createdAt: 'desc' }
    })
  } catch (error) {
    return []
  }
}
