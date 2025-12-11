-- Namaste Rides Database Schema for Supabase

-- Team Members Table
CREATE TABLE IF NOT EXISTS team (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  photo TEXT NOT NULL,
  bio_short TEXT NOT NULL,
  bio_long TEXT NOT NULL,
  linkedin TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Newsroom Posts Table
CREATE TABLE IF NOT EXISTS newsroom (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  excerpt TEXT NOT NULL,
  content TEXT,
  content_url TEXT,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Blog Posts Table
CREATE TABLE IF NOT EXISTS blog (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  excerpt TEXT NOT NULL,
  content TEXT,
  content_url TEXT,
  image TEXT NOT NULL,
  category TEXT NOT NULL,
  author TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Jobs Table
CREATE TABLE IF NOT EXISTS jobs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  job_type TEXT NOT NULL,
  description TEXT NOT NULL,
  apply_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_team_order ON team(order_index);
CREATE INDEX IF NOT EXISTS idx_newsroom_date ON newsroom(date DESC);
CREATE INDEX IF NOT EXISTS idx_blog_date ON blog(date DESC);
CREATE INDEX IF NOT EXISTS idx_blog_category ON blog(category);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_jobs_created ON jobs(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE team ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsroom ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on team"
  ON team FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access on newsroom"
  ON newsroom FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access on blog"
  ON blog FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access on jobs"
  ON jobs FOR SELECT
  USING (true);

-- Allow public insert for newsletter subscribers
CREATE POLICY "Allow public insert on newsletter_subscribers"
  ON newsletter_subscribers FOR INSERT
  WITH CHECK (true);

-- Sample data for team (optional)
INSERT INTO team (name, title, photo, bio_short, bio_long, linkedin, order_index) VALUES
('Ravi Kumar', 'Founder & CEO', '/images/team/ravi.jpg', 
 'Founder with 8 years in mobility and transportation innovation.',
 'Ravi Kumar is the visionary founder and CEO of Namaste Rides. With over 8 years of experience in the mobility sector, Ravi has been at the forefront of transforming urban transportation in India.

Before founding Namaste Rides, Ravi worked with leading tech companies where he led product teams focused on solving complex logistics and transportation challenges. His passion for creating safe, accessible, and sustainable transportation solutions drove him to start Namaste Rides.

Ravi holds an MBA from IIM Bangalore and a B.Tech in Computer Science. He is passionate about leveraging technology to improve people''s daily lives and believes in building businesses that create positive social impact.',
 'https://linkedin.com/in/ravikumar', 1),

('Priya Sharma', 'Chief Technology Officer', '/images/team/priya.jpg',
 'Tech leader with expertise in scalable platform architecture.',
 'Priya Sharma serves as the Chief Technology Officer at Namaste Rides, bringing over 10 years of experience in building scalable technology platforms. She leads our engineering teams and drives technical innovation.

Prior to joining Namaste, Priya was a senior engineering manager at a leading e-commerce platform, where she built systems handling millions of transactions daily. Her expertise in distributed systems and cloud architecture has been instrumental in building Namaste''s robust technology infrastructure.

Priya is an advocate for diversity in tech and mentors aspiring women engineers. She holds a Master''s in Computer Science from Stanford University.',
 'https://linkedin.com/in/priyasharma', 2);
