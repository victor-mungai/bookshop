// app/api/admin/login/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    if (username === 'admin' && password === 'admin123') {
      return NextResponse.json(
        { message: 'Login successful', redirectTo: '/admin' },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }
  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
