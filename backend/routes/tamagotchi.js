const router = require('express').Router();
const auth = require('../middleware/auth');
const Tamagotchi = require('../models/Tamagotchi');

// Update Tamagotchi status
router.post('/action', auth, async (req, res) => {
  try {
    const { action } = req.body;
    const tamagotchi = await Tamagotchi.findOne({ user: req.user.id });

    // Update based on action
    switch(action) {
      case 'feed':
        tamagotchi.hunger = Math.min(100, tamagotchi.hunger + 15);
        break;
      case 'play':
        tamagotchi.happiness = Math.min(100, tamagotchi.happiness + 20);
        break;
      case 'sleep':
        tamagotchi.isSleeping = !tamagotchi.isSleeping;
        break;
    }

    await tamagotchi.save();
    res.json(tamagotchi);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});