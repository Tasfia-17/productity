#!/bin/bash

# Build script for Temple of Productivi-Tea

echo "🏛️ Building Temple of Productivi-Tea..."

cd build-template/src/frontend

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building application..."
npm run build:skip-bindings

echo "✅ Build complete! Output is in build-template/src/frontend/dist/"
