# This script is used to start the server on the EC2 instance

# Pull the latest code from the repo
git pull
# Build project
npm run build
# Kill the server if it is running
kill -9 $(lsof -t -i:3000)
# Start the server
nohup npm run start &
