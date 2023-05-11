
import { NextResponse } from 'next/server';

const mock = [
  {
    id: 'aiba98ybkasf',
    name: 'Momo',
    type: 'cat',
    age: 2,
    image: 'https://images.unsplash.com/photo-1612837017391-4b6b7b0b2b0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwY29sb3JmdWwlMjBjYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    attacks: [
      'scratch', 'bite', 'purr'
    ]
  }
]

export async function GET() {
  return NextResponse.json(mock);
}