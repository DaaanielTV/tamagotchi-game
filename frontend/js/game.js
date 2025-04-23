class TamagotchiGame {
    constructor() {
      this.initEventListeners();
      this.loadTamagotchi();
      setInterval(() => this.updateStatus(), 60000); // Update every minute
    }
  
    async loadTamagotchi() {
      const response = await fetch('/api/tamagotchi');
      const data = await response.json();
      this.updateUI(data);
    }
  
    updateUI(tamagotchi) {
      document.getElementById('avatar').src = `/images/avatars/${tamagotchi.avatar}`;
      document.getElementById('hunger').style.width = `${tamagotchi.hunger}%`;
      document.getElementById('happiness').style.width = `${tamagotchi.happiness}%`;
      document.getElementById('health').style.width = `${tamagotchi.health}%`;
    }
  }