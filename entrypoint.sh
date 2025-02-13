#!/bin/sh

# Run tests
echo "Running tests..."
if ! python -m pytest tests/; then
    echo "Tests failed. Exiting..."
    exit 1
fi

# Start the Flask app
echo "Tests passed. Starting Flask app..."
exec flask run --host=0.0.0.0
