import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const data = await request.json();
    
    if (data.pin === '4025') {
      cookies.set('garden-access', '4025', {
        path: '/',
        maxAge: 60 * 60 * 24, // 24 hours
        httpOnly: true,
        sameSite: 'lax'
      });

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Invalid PIN' 
    }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Server error' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};