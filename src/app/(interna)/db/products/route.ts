import { NextResponse } from 'next/server'

export async function GET (){
  return NextResponse.json([
    {id: 1, name: 'Product 1', price: 100, date: new Date()},
    {id: 2, name: 'Product 2', price: 100.50, date: new Date()},
    {id: 3, name: 'Product 3', price: 200, date: new Date()},
    {id: 4, name: 'Product 4', price: 300, date: new Date()},
    {id: 5, name: 'Product 5', price: 400, date: new Date()},
    {id: 6, name: 'Product 6', price: 5200, date: new Date()},
    {id: 7, name: 'Product 7', price: 90, date: new Date()},
    {id: 8, name: 'Product 8', price: 110.35, date: new Date()}
  ])
}