import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Mock data for development
const mockNewsroomPosts = [
  {
    id: '1',
    title: 'Namaste Rides Expands to 15 New Cities',
    date: '2025-12-01',
    excerpt: 'We are excited to announce our expansion into 15 new cities across India, bringing safe and reliable transportation to more communities.',
    content_url: '/newsroom/expansion-announcement',
    image: '/images/news/expansion.jpg',
    created_at: new Date('2025-12-01').toISOString(),
  },
  {
    id: '2',
    title: 'Partnership with Major Corporate Clients',
    date: '2025-11-20',
    excerpt: 'Namaste Rides announces strategic partnerships with Fortune 500 companies to provide employee commute solutions.',
    content_url: '/newsroom/corporate-partnerships',
    image: '/images/news/partnership.jpg',
    created_at: new Date('2025-11-20').toISOString(),
  },
  {
    id: '3',
    title: 'Series B Funding Round Completed',
    date: '2025-11-10',
    excerpt: 'Successfully raised $50M in Series B funding to accelerate growth and enhance our technology platform.',
    content_url: '/newsroom/funding-announcement',
    image: '/images/news/funding.jpg',
    created_at: new Date('2025-11-10').toISOString(),
  },
  {
    id: '4',
    title: 'New Safety Features Launched',
    date: '2025-10-25',
    excerpt: 'Introducing enhanced safety features including real-time ride monitoring and emergency assistance.',
    content_url: '/newsroom/safety-features',
    image: '/images/news/safety.jpg',
    created_at: new Date('2025-10-25').toISOString(),
  },
  {
    id: '5',
    title: 'Driver Partner Program Reaches 10,000 Members',
    date: '2025-10-15',
    excerpt: 'Celebrating a major milestone as our driver partner community grows to 10,000 members.',
    content_url: '/newsroom/driver-milestone',
    image: '/images/news/drivers.jpg',
    created_at: new Date('2025-10-15').toISOString(),
  },
  {
    id: '6',
    title: 'Sustainability Initiative: Electric Fleet Program',
    date: '2025-10-01',
    excerpt: 'Launching our electric vehicle program to reduce carbon emissions and promote sustainable transportation.',
    content_url: '/newsroom/ev-program',
    image: '/images/news/ev.jpg',
    created_at: new Date('2025-10-01').toISOString(),
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
      .from('newsroom')
      .select('*', { count: 'exact' })
      .order('date', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      console.log('Supabase error, using mock data:', error.message);
      const paginatedMock = mockNewsroomPosts.slice(offset, offset + limit);
      return NextResponse.json({
        data: paginatedMock,
        total: mockNewsroomPosts.length,
        page,
        limit,
      });
    }

    // If no data in database, return mock data
    if (!data || data.length === 0) {
      const paginatedMock = mockNewsroomPosts.slice(offset, offset + limit);
      return NextResponse.json({
        data: paginatedMock,
        total: mockNewsroomPosts.length,
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
    console.error('Error fetching newsroom:', error);
    // Return mock data on any error
    const paginatedMock = mockNewsroomPosts.slice(0, 10);
    return NextResponse.json({
      data: paginatedMock,
      total: mockNewsroomPosts.length,
      page: 1,
      limit: 10,
    });
  }
}
