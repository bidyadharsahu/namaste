import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Mock data for development
const mockJobs = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    location: 'Bangalore, India',
    job_type: 'Full-time',
    description: 'Join our engineering team to build scalable platforms that power millions of rides. We are looking for experienced engineers passionate about solving complex problems.',
    apply_url: 'https://careers.namasterides.com/apply/senior-software-engineer',
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Product Manager',
    location: 'Mumbai, India',
    job_type: 'Full-time',
    description: 'Lead product strategy and development for our rider experience. Work cross-functionally to deliver features that delight our customers.',
    apply_url: 'https://careers.namasterides.com/apply/product-manager',
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Data Scientist',
    location: 'Bangalore, India',
    job_type: 'Full-time',
    description: 'Leverage data to drive business insights and optimize our matching algorithms. Build ML models to improve rider and driver experiences.',
    apply_url: 'https://careers.namasterides.com/apply/data-scientist',
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'City Operations Manager',
    location: 'Delhi, India',
    job_type: 'Full-time',
    description: 'Manage day-to-day operations in your city, build driver partnerships, and ensure excellent service quality for our riders.',
    apply_url: 'https://careers.namasterides.com/apply/operations-manager',
    created_at: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'Marketing Specialist',
    location: 'Mumbai, India',
    job_type: 'Full-time',
    description: 'Drive marketing campaigns and user acquisition. Create compelling content and manage our social media presence.',
    apply_url: 'https://careers.namasterides.com/apply/marketing-specialist',
    created_at: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'UX Designer',
    location: 'Bangalore, India',
    job_type: 'Full-time',
    description: 'Design intuitive and delightful user experiences for our mobile and web applications. Work closely with product and engineering teams.',
    apply_url: 'https://careers.namasterides.com/apply/ux-designer',
    created_at: new Date().toISOString(),
  },
];

export async function GET() {
  try {
    // Try to fetch from Supabase first
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.log('Supabase error, using mock data:', error.message);
      return NextResponse.json(mockJobs);
    }

    // If no data in database, return mock data
    if (!data || data.length === 0) {
      return NextResponse.json(mockJobs);
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    // Return mock data on any error
    return NextResponse.json(mockJobs);
  }
}
