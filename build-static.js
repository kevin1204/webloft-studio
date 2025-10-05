#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting static site build process...');

try {
  // Step 1: Check if we already have static files
  if (fs.existsSync('out') && fs.existsSync('out/index.html')) {
    console.log('✅ Static site already exists, skipping build...');
    console.log('📁 Using existing output directory: out/');
    return;
  }
  
  // Step 2: Restore Next.js files temporarily
  console.log('📝 Restoring Next.js files for build...');
  
  // Restore package.json
  if (fs.existsSync('package.json.backup')) {
    fs.renameSync('package.json', 'package.json.static');
    fs.renameSync('package.json.backup', 'package.json');
  }
  
  // Restore next.config.mjs
  if (fs.existsSync('next.config.mjs.backup')) {
    fs.renameSync('next.config.mjs.backup', 'next.config.mjs');
  }
  
  // Step 3: Install dependencies and build
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('🔨 Building Next.js static site...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Step 4: Verify output
  if (!fs.existsSync('out')) {
    throw new Error('Build output directory "out" not found');
  }
  
  // Step 5: Copy additional files
  console.log('📋 Copying additional static files...');
  if (fs.existsSync('public/_redirects')) {
    fs.copyFileSync('public/_redirects', 'out/_redirects');
  }
  if (fs.existsSync('public/_headers')) {
    fs.copyFileSync('public/_headers', 'out/_headers');
  }
  
  // Step 6: Hide Next.js files again
  console.log('🔒 Hiding Next.js files...');
  if (fs.existsSync('next.config.mjs')) {
    fs.renameSync('next.config.mjs', 'next.config.mjs.backup');
  }
  if (fs.existsSync('package.json.static')) {
    fs.renameSync('package.json', 'package.json.backup');
    fs.renameSync('package.json.static', 'package.json');
  }
  
  console.log('✅ Static site build completed successfully!');
  console.log('📁 Output directory: out/');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}