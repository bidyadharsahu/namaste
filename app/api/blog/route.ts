import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Mock data for development
const mockBlogPosts = [
  {
    id: '1',
    title: 'The Future of Urban Mobility in India',
    date: '2025-12-05',
    excerpt: 'Exploring how technology and innovation are reshaping transportation in Indian cities.',
    image: '/images/blog/urban-mobility.jpg',
    category: 'Industry Insights',
    author: 'Ravi Kumar',
    content_url: '/blog/future-urban-mobility',
    created_at: new Date('2025-12-05').toISOString(),
  },
  {
    id: '2',
    title: '10 Tips for Safe Ride Sharing',
    date: '2025-11-28',
    excerpt: 'Essential safety guidelines for both riders and drivers in the sharing economy.',
    image: '/images/blog/safety-tips.jpg',
    category: 'Safety',
    author: 'Sneha Patel',
    content_url: '/blog/safety-tips',
    created_at: new Date('2025-11-28').toISOString(),
  },
  {
    id: '3',
    title: 'How We Built a Scalable Ride Platform',
    date: '2025-11-22',
    excerpt: 'Technical deep-dive into the architecture powering Namaste Rides.',
    image: '/images/blog/tech-platform.jpg',
    category: 'Technology',
    author: 'Priya Sharma',
    content_url: '/blog/scalable-platform',
    created_at: new Date('2025-11-22').toISOString(),
  },
  {
    id: '4',
    title: 'Corporate Transportation Solutions: A Guide',
    date: '2025-11-15',
    excerpt: 'How businesses can optimize employee commutes and reduce transportation costs.',
    image: '/images/blog/corporate-guide.jpg',
    category: 'Business',
    author: 'Arjun Mehta',
    content_url: '/blog/corporate-solutions',
    created_at: new Date('2025-11-15').toISOString(),
  },
  {
    id: '5',
    title: 'Driver Stories: Meet Our Partners',
    date: '2025-11-08',
    excerpt: 'Inspiring stories from the driver-partners who make Namaste Rides possible.',
    image: '/images/blog/driver-stories.jpg',
    category: 'Community',
    author: 'Sneha Patel',
    content_url: '/blog/driver-stories',
    created_at: new Date('2025-11-08').toISOString(),
  },
  {
    id: '6',
    title: 'Sustainability in Transportation: Our Commitment',
    date: '2025-11-01',
    excerpt: 'Our journey towards building a more sustainable and eco-friendly transportation network.',
    image: '/images/blog/sustainability.jpg',
    category: 'Sustainability',
    author: 'Ravi Kumar',
    content_url: '/blog/sustainability-commitment',
    created_at: new Date('2025-11-01').toISOString(),
  },
];

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = parseInt(searchParams.get('limit') || '10');
    const page = parseInt(searchParams.get('page') || '1');
    const offset = (page - 1) * limit;

    // Try to fetch from Supabase first
    const { data, error, count } = await supabase
      .from('blog')
      .select('*', { count: 'exact' })
      .order('date', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      console.log('Supabase error, using mock data:', error.message);
      const paginatedMock = mockBlogPosts.slice(offset, offset + limit);
      return NextResponse.json({
        data: paginatedMock,
        total: mockBlogPosts.length,
        page,
        limit,
      });
    }

    // If no data in database, return mock data
    if (!data || data.length === 0) {
      const paginatedMock = mockBlogPosts.slice(offset, offset + limit);
      return NextResponse.json({
        data: paginatedMock,
        total: mockBlogPosts.length,
        page,
        limit,
      });
    }

    return NextResponse.json({
      data,
      total: count || 0,
      page,
      limit,
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    // Return mock data on any error
    const paginatedMock = mockBlogPosts.slice(0, 10);
    return NextResponse.json({
      data: paginatedMock,
      total: mockBlogPosts.length,
      page: 1,
      limit: 10,
    });
  }
}
