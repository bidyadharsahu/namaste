import Navbar from '@/components/Navbar';
import AboutHero from '@/components/AboutHero';
import FounderLetter from '@/components/FounderLetter';
import FeatureBullets from '@/components/FeatureBullets';
import TeamGrid from '@/components/TeamGrid';
import OfferingsGrid from '@/components/OfferingsGrid';
import HowItWorks from '@/components/HowItWorks';
import NewsList from '@/components/NewsList';
import BlogList from '@/components/BlogList';
import Footer from '@/components/Footer';
import { FiShield, FiMapPin, FiDollarSign, FiUsers, FiCalendar, FiCode } from 'react-icons/fi';

async function getTeamMembers() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/team`, {
      cache: 'no-store'
    });
    return await res.json();
  } catch (error) {
    console.error('Error fetching team:', error);
    return [];
  }
}

async function getNewsroom() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/newsroom?limit=3`, {
      cache: 'no-store'
    });
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching newsroom:', error);
    return [];
  }
}

async function getBlog() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blog?limit=3`, {
      cache: 'no-store'
    });
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching blog:', error);
    return [];
  }
}

export default async function Home() {
  const [teamMembers, newsItems, blogItems] = await Promise.all([
    getTeamMembers(),
    getNewsroom(),
    getBlog(),
  ]);

  const heroData = {
    title: 'Namaste',
    subtitle: '',
    ctas: [
      { label: 'Join Waitlist', href: '#contact', primary: false },
    ],
    media: {
      type: 'video' as const,
      src: '/videos/hero-bg.mp4',
      poster: '/images/hero-poster.jpg',
    },
  };

  const founderData = {
    photo: '/images/team/harry.jpg',
    name: 'Harry',
    title: 'Founder & CEO',
    paragraphs: [
      '',
      '',
      '',
    ],
    signatureSvg: '/images/signature.svg',
  };

  const featureItems = [
    {
      icon: <FiShield size={32} />,
      title: 'Safety First',
      description: 'Peace of mind is designed into every experience. Real-time tracking, verified drivers, and 24/7 support ensure your safety.',
    },
    {
      icon: <FiMapPin size={32} />,
      title: 'Local Drivers',
      description: 'Supporting local communities by providing earning opportunities to driver-partners who know your city best.',
    },
    {
      icon: <FiDollarSign size={32} />,
      title: 'Transparent Fares',
      description: 'No surge pricing surprises. Upfront fare estimates and transparent pricing you can trust.',
    },
  ];

  const testimonial = {
    quote: 'Namaste Rides has transformed how our company handles employee transportation. The reliability and service quality are outstanding.',
    author: '',
    role: '',
  };

  const offerings = [
    {
      icon: <FiShield size={28} />,
      title: 'Safety',
      description: 'Peace of mind built into every ride with advanced safety features and verified drivers.',
      href: '/#offerings',
    },
    {
      icon: <FiMapPin size={28} />,
      title: 'Cities',
      description: 'Available in 50+ cities across India and growing.',
      href: '/#offerings',
    },
    {
      icon: <FiMapPin size={28} />,
      title: 'Airports',
      description: 'Reliable rides to and from major airports nationwide.',
      href: '/#offerings',
    },
    {
      icon: <FiUsers size={28} />,
      title: 'Employee Commute',
      description: 'Streamlined commute solutions for your workforce.',
      href: '/#offerings',
    },
    {
      icon: <FiCalendar size={28} />,
      title: 'Event Transport',
      description: 'Large-scale event transportation management.',
      href: '/#offerings',
    },
    {
      icon: <FiCode size={28} />,
      title: 'APIs & Integrations',
      description: 'Integrate Namaste Rides into your business applications.',
      href: '/#offerings',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Sign Up Company',
      description: 'Create your business account in minutes with simple onboarding.',
      icon: <FiUsers size={48} />,
    },
    {
      number: 2,
      title: 'Invite Employees',
      description: 'Add team members and set up ride policies and budgets.',
      icon: <FiMapPin size={48} />,
    },
    {
      number: 3,
      title: 'Book & Manage',
      description: 'Employees book rides easily through our app or your system.',
      icon: <FiCalendar size={48} />,
    },
    {
      number: 4,
      title: 'Centralized Billing',
      description: 'Get detailed reports and consolidated billing for all rides.',
      icon: <FiDollarSign size={48} />,
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <AboutHero {...heroData} />
        <FounderLetter {...founderData} />
        <FeatureBullets items={featureItems} testimonial={testimonial} />
        <TeamGrid members={teamMembers} />
        <OfferingsGrid offerings={offerings} />
        <HowItWorks steps={steps} />
        <NewsList items={newsItems} preview={true} />
        <BlogList items={blogItems} preview={true} />
      </main>
      <Footer />
    </>
  );
}
