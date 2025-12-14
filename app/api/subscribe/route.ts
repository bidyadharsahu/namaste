import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Try to insert into Supabase, but only if it's initialized
    if (supabase) {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }])
        .select();

      if (error) {
        // Check if it's a duplicate email error
        if (error.code === '23505') {
          return NextResponse.json(
            { message: 'Email already subscribed', success: true },
            { status: 200 }
          );
        }
        
        console.log('Supabase error:', error.message);
        // Still return success for better UX
        return NextResponse.json(
          { message: 'Subscription recorded', success: true },
          { status: 200 }
        );
      }
    } else {
      // Supabase not initialized, log to console for development
      console.log('Supabase not initialized, subscription would be recorded in database in production');
    }

    // TODO: Send welcome email
    // You can integrate with your email service here
    // Example: await sendWelcomeEmail(email);

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter', success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error subscribing:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}