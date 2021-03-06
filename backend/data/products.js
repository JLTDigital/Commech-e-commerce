const products = [
  {
    name: 'Airpods Pro',
    image: '/images/airpods.jpg',
    description:
      'AirPods Pro are the only in-ear headphones with Active Noise Cancellation that continuously adapts to the geometry of your ear and the fit of the ear tips blocking out the world so you can focus on what you’re listening to',
    brand: 'Apple',
    category: 'latest',
    price: 219.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'SONY a7 III Mirrorless Camera with 28-70 mm f/3.5-5.6',
    image: '/images/camera.jpg',
    description:
      'The Sony a7 III Mirrorless Camera offers photographers the best of both worlds. You get a full-frame sensor and professional specs, packed into a compact, travel-friendly body – it is the perfect choice for field work. At first glance, the a7 III looks very similar to the previous generation alpha 7 from Sony. Look closely, and you wicamerall find an all new chip, expanded ISO range, improved fps shooting, and an enlarged handgrip.',
    brand: 'Sony',
    category: 'latest',
    price: 1899.00,
    countInStock: 8,
    rating: 4.0,
    numReviews: 9,
  },
  {
    name: 'iPhone 12 Pro Max 256GB Memory',
    image: '/images/iphone12promax.jpg',
    description:
      '5G goes Pro. A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.',
    brand: 'Apple',
    category: 'smartphones',
    price: 999.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Xbox Series X',
    image: '/images/xbox.jpg',
    description:
      'Experience 12 teraflops of raw graphic processing power and 4K gaming at up to 120 FPS with Xbox Series X. Enjoy next-gen speed and performance at an accessible price point with the all-digital Xbox Series S',
    brand: 'Microsoft',
    category: 'latest',
    price: 399.99,
    countInStock: 5,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'Sony Playstation 5',
    image: '/images/ps5.jpg',
    description:
      'Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio,* and an all-new generation of incredible PlayStation® games',
    brand: 'Sony',
    category: 'latest',
    price: 445.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'Samsung Galaxy Tab S7+',
    image: '/images/samsungtab.jpg',
    description:
      'Meet Galaxy Tab S7+. Work and play on the ultra smooth 120Hz display powered by our most powerful chipset. Get a PC-like experience with the snap of a keyboard, or use the ultra low latency S Pen to write like never before. An immersive tablet experience changing the way you work and play',
    brand: 'Samsung',
    category: 'latest',
    price: 799.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Amazon Echo Dot Smart Speaker with Alexa',
    image: '/images/echo.jpg',
    description:
      'Amazons most popular Echo is now even better. With a new speaker and design, Echo Dot is a voice-controlled smart speaker with Alexa that is perfect for any room. Just ask for music, news, information and more.',
    brand: 'Amazon',
    category: 'latest',
    price: 53.00,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'Apple MacBook Pro 13.3" (2020) - M1, 256 GB SSD, Space Grey',
    image: '/images/macbookpro.jpg',
    description:
      'Get more done with the Apple M1 chip. Everything you love about the MacBook Pro. But with more power. From video-editing to gaming, the Apple M1 chip lets you take on the biggest tasks and creative projects without draining your battery. Dont waste time waiting for things to load. The MacBook Pro is responsive and wakes instantly. Plus, with speedy SSD storage, youll be able to save files, load programs and access huge video and image files in a moment.',
    brand: 'Apple',
    category: 'computers/laptops',
    price: 1192.00,
    countInStock: 7,
    rating: 5,
    numReviews: 15,
  },
  {
    name: 'Lenovo IdeaPad Flex 5 14" 2 in 1 Laptop',
    image: '/images/lenovoideapad.jpg',
    description:
      'The Lenovo IdeaPad Flex 5 14" AMD Ryzen 5 Laptop is perfect for working and browsing on the go. With a slim design, it fits easily into your bag. And at 1.5 kg, it wont weigh you down either. The battery lasts for up to 12 hours – more than enough to handle that big project all day.',
    brand: 'Lenovo',
    category: 'computers/laptops',
    price: 599.99,
    countInStock: 3,
    rating: 4,
    numReviews: 9,
  },
  {
    name: 'Microsoft Surface 12.3" Pro 7',
    image: '/images/microsoftsurface.jpg',
    description:
      'Say hello to the ultimate laptop. Whether you are taking it to the office or using it at home, the Surface Pro 7 is your perfect computing companion. It is powerful enough to handle all your tasks, and it is light enough to carry around wherever you go. And with a battery that lasts all day, you wont need to be tied to a plug socket.',
    brand: 'Microsoft',
    category: 'computers/laptops',
    price: 899.00,
    countInStock: 10,
    rating: 4.5,
    numReviews: 11,
  },
  {
    name: 'HP Pavilion 24-k0003na 23.8" All-in-One PC',
    image: '/images/hppavilion.jpg',
    description:
      'Looking for some power? Desktops in our Achieve range have impressive specs, so you can work on creative projects and finalise serious business documents.',
    brand: 'HP',
    category: 'computers/laptops',
    price: 799.00,
    countInStock: 2,
    rating: 4.5,
    numReviews: 17,
  },
  {
    name: 'Apple iMac 5K 27" (2020) - Intel® Core™ i5, 256 GB SSD',
    image: '/images/imac.jpg',
    description:
      'The beautiful iMac design that you know. But bigger and better. The Apple iMac 5K has been upgraded to give you all the power you need to tackle serious projects (as well as everything else you do each day). You have got a fast processor, impressive AMD graphics and a beautiful Retina Display.',
    brand: 'Apple',
    category: 'computers/laptops',
    price: 1649.00,
    countInStock: 15,
    rating: 5,
    numReviews: 25,
  },
  {
    name: 'MSI MEG Aegis Ti5 Gaming PC - Intel® Core™ i9, RTX 3080, 3 TB HDD & 2 TB SSD',
    image: '/images/msi.jpg',
    description:
      'Crank up the settings to the max on the biggest games with the MSI MEG Aegis Ti5 Gaming PC. Powered by an unlocked Intel® Core™ i9 processor, you can run any game or software no matter how big, no matter how intense the match, without ever being slowed down. There is crushing 128 GB of RAM. Want to render 3D models and play newest titles at the same time?',
    brand: 'MSI',
    category: 'computers/laptops',
    price: 4299.00,
    countInStock: 15,
    rating: 4.5,
    numReviews: 30,
  },
  {
    name: 'Samsung Galaxy S21 Ultra - 256 GB, Phantom Black',
    image: '/images/samsungs21.jpg',
    description:
      'Whether you are scrolling through Facebook or binging the latest Netflix series on the bus, get lost in the Samsung Galaxy S21 Ultras dazzling Infinity-O display. You will see everything in stunning QHD+ definition on the large 6.8” screen',
    brand: 'Samsung',
    category: 'smartphones',
    price: 1199.00,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    name: 'Apple iPhone 12 - 64 GB',
    image: '/images/iphone12.jpg',
    description:
      'Your photos and video to look more true to life than ever with the 6.1” Super Retina XDR display. Experience brighter brights and darker blacks with OLED and HDR, while the higher resolution provides vivid detail for your photos and videos.',
    brand: 'Apple',
    category: 'smartphones',
    price: 799.00,
    countInStock: 13,
    rating: 5,
    numReviews: 9,
  },
  {
    name: 'Google Pixel 5 - 128 GB',
    image: '/images/googlepixel.jpg',
    description:
      'Now with a larger screen, beefier battery and upgraded dual camera, the new and improved Google Pixel 5 is here. Plus, with 5G, you can get connected faster than ever. Goodbye endless loading screens',
    brand: 'Google',
    category: 'smartphones',
    price: 599.00,
    countInStock: 16,
    rating: 4,
    numReviews: 16,
  },
  {
    name: 'OnePlus 8 Pro 5G',
    image: '/images/oneplus.jpg',
    description:
      'The OnePlus 8 Pro is equipped with a 2K+ 120Hz screen which received an A+ from the world’s leading authority on screen quality and performance. The OnePlus 8 Pros Fluid Engine ensures that the content flows seamlessly on the brilliant QHD+ display with 3168 x 1440 pixels and 513ppi. The OP8 Pro comes with an aspect ratio of 19.8:9 and the cover glass is 3D Corning Gorilla Glass for the best possible protection. Additional features of the display include Adaptive Display, Vibrant Color Effect Pro, Motion Graphics Smoothing. The brand new OnePlus 8 Pro comes with dual 5G support and is powered by a Qualcomm Snapdragon 865 including a X55 modem, DDR5 RAM and UFS3.0 internal storage standard.',
    brand: 'Oneplus',
    category: 'smartphones',
    price: 799.00,
    countInStock: 8,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: 'Oculus Quest 2 VR Gaming Headset - 64 GB',
    image: '/images/oculus.jpg',
    description:
      'VR gaming just got an upgrade. The Oculus Quest 2 features a super-powerful processor and graphics, so you can explore virtual worlds and play games in great quality without the need for a PC or console.',
    brand: 'Oculus',
    category: 'VR',
    price: 299.00,
    countInStock: 3,
    rating: 4.5,
    numReviews: 35,
  },
  {
    name: 'Playstation VR',
    image: '/images/ps_vr.jpg',
    description:
      'Watch as a living, breathing game world comes alive all around you, with a seamless field of view wherever you turn. Experience new realities with a custom OLED screen and smooth 120fps visuals to create complete immersion in your games.',
    brand: 'Sony',
    category: 'VR',
    price: 259.00,
    countInStock: 6,
    rating: 4.5,
    numReviews: 20,
  },
  {
    name: 'Nintendo 64',
    image: '/images/n64.jpg',
    description:
      'With the 64-bit power of the Nintendo 64, players can explore breathtaking 3D worlds that explode with colour, dance with real-time lighting effects, and light up your ears with CD-quality sound. The Nintendo 64 was designed as a party machine, with four controller ports just begging to be filled. Get together with three friends and experience how astounding games like Mario Kart 64, Mario Party, and Donkey Kong 64 can blossom into laugh-a-minute multiplayer gameplay marathons.',
    brand: 'Nintendo',
    category: 'retro',
    price: 75.00,
    countInStock: 5,
    rating: 5,
    numReviews: 10,
  },
  {
    name: 'Sega Mega Drive',
    image: '/images/sega.jpg',
    description:
      'The Sega Mega Drive – known in North America as the Sega Genesis – was released in Europe in November 1990. The 16-bit successor to the Master System, the Mega Drive treated gamers to bold graphics, fast gameplay, and synthesised stereo sound. Supported by top games such as the Sonic the Hedgehog series and a wide range of third-party titles, the Mega Drive sold over 40 million units worldwide, making it one of the most successful video game consoles of all time.',
    brand: 'Sega',
    category: 'retro',
    price: 33.99,
    countInStock: 1,
    rating: 3.5,
    numReviews: 7,
  },
  {
    name: 'Atari 2600',
    image: '/images/atari.jpg',
    description:
      'Launched in Europe in 1978, the original Atari was one of the most popular home video game consoles of its time. Originally known simply as the Atari VCS (Video Computer System), the console became known as the 2600 after the release of its successor, the Atari 5200. Having sold around 30 million units worldwide, the 2600 brought the thrills of arcade gaming into the living room, and was one of the first – and best – machines to do so.',
    brand: 'Atari',
    category: 'retro',
    price: 200,
    countInStock: 1,
    rating: 4,
    numReviews: 5,
  },
  {
    name: 'Original Gameboy Console',
    image: '/images/gameboy.jpg',
    description:
      'Classic handheld Nintendo gameboy that was launched in Japan in 1989 selling over 100 million units, giving gamers all over the world the freedom to play their favorite games including Tetris, Super Mario and many more',
    brand: 'Nintendo',
    category: 'retro',
    price: 200,
    countInStock: 1,
    rating: 5,
    numReviews: 10,
  },
  {
    name: 'Sony Playstation',
    image: '/images/ps1.jpg',
    description:
      'Home console developed by Sony and released in Europe in September 1995. The first games console to sell over 100 million units (102.5 million worldwide). Launched key franchises such as Gran Turismo, Tekken, and Grand Theft Auto. Also featured functionality for playing audio CDs, including shuffle and repeat',
    brand: 'Sony',
    category: 'retro',
    price: 44.95,
    countInStock: 3,
    rating: 5,
    numReviews: 8,
  },
  {
    name: 'Super Nintendo Entertainment System (SNES)',
    image: '/images/snes.jpg',
    description:
      'First brought to Europe in 1992, the Super Nintendo Entertainment System (SNES) blew gamers away with visuals and gameplay that dragged video games into a spectacular new era. The Super Nintendo features true stereo sound, multiple scrolling backgrounds, and twice the built-in memory of the older NES. Giant-sized Game Paks allow the system to recreate sprawling worlds that take weeks to explore.',
    brand: 'Nintendo',
    category: 'retro',
    price: 289.95,
    countInStock: 1,
    rating: 3.5,
    numReviews: 2,
  },
]

export default products
