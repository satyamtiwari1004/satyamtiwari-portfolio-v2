#!/bin/bash

echo "🛑 Stopping Satyam's Portfolio Website servers..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
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

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if a process is running
is_process_running() {
    pgrep -f "$1" > /dev/null 2>&1
}

# Stop React frontend server
print_status "Stopping React frontend server..."
if is_process_running "react-scripts"; then
    pkill -f "react-scripts"
    if [ $? -eq 0 ]; then
        print_success "React frontend server stopped"
    else
        print_error "Failed to stop React frontend server"
    fi
else
    print_warning "React frontend server is not running"
fi

# Stop Django backend server
print_status "Stopping Django backend server..."
if is_process_running "manage.py runserver"; then
    pkill -f "manage.py runserver"
    if [ $? -eq 0 ]; then
        print_success "Django backend server stopped"
    else
        print_error "Failed to stop Django backend server"
    fi
else
    print_warning "Django backend server is not running"
fi

# Additional cleanup - stop any Node.js processes related to the project
print_status "Cleaning up Node.js processes..."
if is_process_running "node.*portfolio"; then
    pkill -f "node.*portfolio"
    print_success "Cleaned up Node.js processes"
fi

# Additional cleanup - stop any Python processes related to the project
print_status "Cleaning up Python processes..."
if is_process_running "python.*manage.py"; then
    pkill -f "python.*manage.py"
    print_success "Cleaned up Python processes"
fi

# Wait a moment for processes to fully terminate
sleep 2

# Final check
print_status "Checking if any servers are still running..."
react_running=$(pgrep -f "react-scripts" | wc -l)
django_running=$(pgrep -f "manage.py runserver" | wc -l)

if [ $react_running -eq 0 ] && [ $django_running -eq 0 ]; then
    print_success "🎉 All servers stopped successfully!"
    echo ""
    echo "✅ React frontend (port 3000): Stopped"
    echo "✅ Django backend (port 8000): Stopped"
    echo ""
    echo "To start the servers again, run:"
    echo "  ./start.sh"
else
    print_warning "Some processes might still be running:"
    if [ $react_running -gt 0 ]; then
        echo "  - React frontend: $react_running process(es)"
    fi
    if [ $django_running -gt 0 ]; then
        echo "  - Django backend: $django_running process(es)"
    fi
    echo ""
    print_warning "You may need to manually kill these processes:"
    echo "  pkill -f 'react-scripts'"
    echo "  pkill -f 'manage.py runserver'"
fi
