# Tamagotchi Game

A browser-based virtual pet adventure featuring backend storage and real-time status tracking.

## Setup Instructions

1. Update your system and install dependencies:
    ```bash
    sudo apt update
    sudo apt install -y nodejs npm mongodb
    ```

2. Clone the repository and install backend packages:
    ```bash
    git clone https://github.com/yourusername/tamagotchi-game.git
    cd tamagotchi-game/backend
    npm install
    ```

3. Configure your environment:
    ```bash
    cp ../.env.example .env
    nano .env  # Set your custom values
    ```

4. Start the MongoDB service:
    ```bash
    sudo systemctl start mongodb
    ```

5. Launch the server:
    ```bash
    npm start
    ```

## Custom Avatars

- Place images in the `frontend/public/images/avatars/` folder.
- Supported image formats: PNG, JPG, and SVG.
- Use CSS/HTML to integrate avatars:
    ```css
    background-image: url('/images/avatars/your-image.png');
    ```

## Features

- Integrated MongoDB database
- User authentication via JWT
- Dynamic virtual pet status decay
- RESTful API for game actions
- Responsive user interface
- Placeholder images and avatar support
- Environment-driven configuration
- Automated status updates

## Future Enhancements

- Implement age progression and evolution stages
- Add mini-games and an achievement system
- Introduce social interactions and mobile responsiveness
- Expand feature set with community-driven improvements