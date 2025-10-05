#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting custom static build process...');

try {
  // Step 1: Restore the Next.js config temporarily
  console.log('📝 Restoring Next.js config...');
  if (fs.existsSync('next.config.mjs.backup')) {
    fs.renameSync('next.config.mjs.backup', 'next.config.mjs');
  }
  
  // Step 2: Restore original package.json temporarily
  console.log('📦 Restoring Next.js package.json...');
  if (fs.existsSync('package.json.backup')) {
    fs.renameSync('package.json', 'package.json.temp');
    fs.renameSync('package.json.backup', 'package.json');
  }
  
  // Step 3: Run Next.js build
  console.log('🔨 Running Next.js build...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Step 4: Verify output directory exists
  if (!fs.existsSync('out')) {
    throw new Error('Build output directory "out" not found');
  }
  
  // Step 5: Copy additional static files if needed
  console.log('📋 Copying additional static files...');
  
  // Ensure _redirects and _headers are in the output
  if (fs.existsSync('public/_redirects')) {
    fs.copyFileSync('public/_redirects', 'out/_redirects');
  }
  if (fs.existsSync('public/_headers')) {
    fs.copyFileSync('public/_headers', 'out/_headers');
  }
  
  // Step 6: Hide Next.js files again to prevent plugin detection
  console.log('🔒 Hiding Next.js files to prevent plugin detection...');
  if (fs.existsSync('next.config.mjs')) {
    fs.renameSync('next.config.mjs', 'next.config.mjs.backup');
  }
  
  // Restore our custom package.json
  if (fs.existsSync('package.json.temp')) {
    fs.renameSync('package.json', 'package.json.backup');
    fs.renameSync('package.json.temp', 'package.json');
  }
  
  console.log('✅ Static build completed successfully!');
  console.log('📁 Output directory: out/');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}