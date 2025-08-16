#!/bin/bash

echo "🚀 Starting Satyam's Portfolio Website..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Function to cleanup background processes on exit
cleanup() {
    echo ""
    print_status "Shutting down servers..."
    kill $FRONTEND_PID $BACKEND_PID 2>/dev/null
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Start backend server
print_status "Starting Django backend server..."
cd backend

# Activate virtual environment
if [ -d "venv" ]; then
    source venv/bin/activate
else
    print_warning "Virtual environment not found. Please run setup.sh first."
    exit 1
fi

# Start Django server in background
python manage.py runserver 0.0.0.0:8000 &
BACKEND_PID=$!

cd ..

# Wait a moment for backend to start
sleep 3

# Start frontend server
print_status "Starting React frontend server..."
npm start &
FRONTEND_PID=$!

# Wait for both processes
print_success "Both servers are starting..."
echo ""
echo "🌐 Your portfolio website will be available at:"
echo "   Frontend: http://localhost:3000"
echo "   Backend API: http://localhost:8000"
echo "   Django Admin: http://localhost:8000/admin"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for background processes
wait
