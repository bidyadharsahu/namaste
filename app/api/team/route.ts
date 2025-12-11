import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Mock data for development
const mockTeamMembers = [
  {
    id: '1',
    name: 'Ravi Kumar',
    title: 'Founder & CEO',
    photo: '/images/team/ravi.jpg',
    bio_short: 'Founder with 8 years in mobility and transportation innovation.',
    bio_long: `Ravi Kumar is the visionary founder and CEO of Namaste Rides. With over 8 years of experience in the mobility sector, Ravi has been at the forefront of transforming urban transportation in India.

Before founding Namaste Rides, Ravi worked with leading tech companies where he led product teams focused on solving complex logistics and transportation challenges. His passion for creating safe, accessible, and sustainable transportation solutions drove him to start Namaste Rides.

Ravi holds an MBA from IIM Bangalore and a B.Tech in Computer Science. He is passionate about leveraging technology to improve people's daily lives and believes in building businesses that create positive social impact.`,
    linkedin: 'https://linkedin.com/in/ravikumar',
    order_index: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Priya Sharma',
    title: 'Chief Technology Officer',
    photo: '/images/team/priya.jpg',
    bio_short: 'Tech leader with expertise in scalable platform architecture.',
    bio_long: `Priya Sharma serves as the Chief Technology Officer at Namaste Rides, bringing over 10 years of experience in building scalable technology platforms. She leads our engineering teams and drives technical innovation.

Prior to joining Namaste, Priya was a senior engineering manager at a leading e-commerce platform, where she built systems handling millions of transactions daily. Her expertise in distributed systems and cloud architecture has been instrumental in building Namaste's robust technology infrastructure.

Priya is an advocate for diversity in tech and mentors aspiring women engineers. She holds a Master's in Computer Science from Stanford University.`,
    linkedin: 'https://linkedin.com/in/priyasharma',
    order_index: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Arjun Mehta',
    title: 'Chief Operating Officer',
    photo: '/images/team/arjun.jpg',
    bio_short: 'Operations expert focused on scaling city-level partnerships.',
    bio_long: `Arjun Mehta is the Chief Operating Officer at Namaste Rides, responsible for all operational aspects of the business including city expansions, driver partnerships, and service quality.

With 12 years of experience in operations and logistics, Arjun has a proven track record of scaling businesses across multiple markets. Before Namaste, he led operations for a major food delivery platform across 50+ cities in India.

Arjun is passionate about building efficient systems and creating opportunities for driver-partners. He holds an MBA from ISB Hyderabad and a degree in Industrial Engineering.`,
    linkedin: 'https://linkedin.com/in/arjunmehta',
    order_index: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'Sneha Patel',
    title: 'Chief Marketing Officer',
    photo: '/images/team/sneha.jpg',
    bio_short: 'Brand strategist driving customer engagement and growth.',
    bio_long: `Sneha Patel leads marketing and brand strategy at Namaste Rides. With her creative vision and data-driven approach, she has been instrumental in building Namaste's brand identity and customer base.

Sneha brings 9 years of marketing experience from consumer tech and mobility sectors. She has led successful marketing campaigns that have driven user acquisition and engagement across digital and traditional channels.

She is passionate about storytelling and building brands that resonate with local communities. Sneha holds a degree in Marketing from MICA Ahmedabad.`,
    linkedin: 'https://linkedin.com/in/snehapatel',
    order_index: 4,
    created_at: new Date().toISOString(),
  },
];

export async function GET() {
  try {
    // Try to fetch from Supabase first
    const { data, error } = await supabase
      .from('team')
      .select('*')
      .order('order_index', { ascending: true });

    if (error) {
      console.log('Supabase error, using mock data:', error.message);
      return NextResponse.json(mockTeamMembers);
    }

    // If no data in database, return mock data
    if (!data || data.length === 0) {
      return NextResponse.json(mockTeamMembers);
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching team:', error);
    // Return mock data on any error
    return NextResponse.json(mockTeamMembers);
  }
}
