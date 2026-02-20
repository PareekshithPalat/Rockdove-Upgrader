-- Database Schema for Rockdove Aviation Forms

CREATE DATABASE IF NOT EXISTS rockdove_db;
USE rockdove_db;

-- 1. Contact Us Form Table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. RFQ Form Table
CREATE TABLE IF NOT EXISTS rfq_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    part_number VARCHAR(255) NOT NULL,
    condition_code VARCHAR(50), -- NE, OH, SV, etc.
    description TEXT NOT NULL,
    certificate VARCHAR(100),
    quantity INT NOT NULL,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Careers / HR Form Table
CREATE TABLE IF NOT EXISTS career_applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    job_type VARCHAR(50) NOT NULL, -- Internship, Full Time
    job_role VARCHAR(100) NOT NULL, -- Sales, Finance, etc.
    position VARCHAR(100) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    education TEXT NOT NULL,
    address TEXT NOT NULL,
    resume_filename VARCHAR(255),
    resume_data LONGBLOB, -- Storing file content directly (Max 4GB)
    resume_mimetype VARCHAR(100),
    photo_filename VARCHAR(255),
    photo_data LONGBLOB, -- Storing file content directly
    photo_mimetype VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
