-- Migration: 0001_initial.sql
-- Description: Initialize database tables for Henderson Solar App

-- Create solar_requests table
CREATE TABLE IF NOT EXISTS solar_requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  home_size TEXT NOT NULL,
  electric_bill TEXT NOT NULL,
  roof_type TEXT NOT NULL,
  roof_age TEXT NOT NULL,
  shading TEXT NOT NULL,
  additional_info TEXT,
  contact_preference TEXT NOT NULL,
  created_at DATETIME NOT NULL,
  processed BOOLEAN DEFAULT FALSE,
  processed_at DATETIME
);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS idx_solar_requests_email ON solar_requests(email);
CREATE INDEX IF NOT EXISTS idx_solar_requests_zip_code ON solar_requests(zip_code);
CREATE INDEX IF NOT EXISTS idx_solar_requests_created_at ON solar_requests(created_at);
CREATE INDEX IF NOT EXISTS idx_solar_requests_processed ON solar_requests(processed);

-- Insert sample data for testing
INSERT INTO solar_requests (
  full_name, 
  email, 
  phone, 
  address, 
  city, 
  zip_code, 
  home_size, 
  electric_bill, 
  roof_type, 
  roof_age, 
  shading, 
  additional_info, 
  contact_preference, 
  created_at,
  processed,
  processed_at
) VALUES 
(
  'John Smith',
  'john.smith@example.com',
  '7021234567',
  '123 Desert Sun Dr',
  'Henderson',
  '89012',
  '2001-2500',
  '201-250',
  'tile',
  '6-10',
  'none',
  'Interested in battery storage options as well.',
  'email',
  datetime('now', '-2 days'),
  TRUE,
  datetime('now', '-1 day')
),
(
  'Maria Rodriguez',
  'maria.rodriguez@example.com',
  '7025556789',
  '456 Solar Panel Ave',
  'Henderson',
  '89015',
  '1501-2000',
  '151-200',
  'asphalt',
  '11-15',
  'light',
  'Looking for information about financing options.',
  'phone',
  datetime('now', '-1 day'),
  FALSE,
  NULL
);
