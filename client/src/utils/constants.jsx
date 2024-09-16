import { FaBook, FaPlay, FaRandom } from "react-icons/fa";
import { FaFacebook, FaFacebookMessenger, FaReddit, FaX } from "react-icons/fa6";

export const menu = [
  { name: 'Watch2gether', icon: <FaPlay size={18} />, linkTo: "/watch2gether"},
  { name: 'Random', icon: <FaRandom size={18} />, linkTo: "/random"},
  { name: 'Read Manga', icon: <FaBook size={18} />, linkTo: "https://mangafire.to"},
];

export const aToZList = [
  "All", "0-9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
]

export const footerMenu = {
  "first": ["Help", "FAQ", "Contact", "Request"],
  "second": ["Friends", "read manga online", "aniwave"]
}

export const animeGenres = [
  "Action",
  "Adventure",
  "Cars",
  "Comedy",
  "Dementia",
  "Demons",
  "Drama",
  "Ecchi",
  "Fantasy",
  "Game",
  "Harem",
  "Historical",
  "Horror",
  "Isekai",
  "Josei",
  "Kids",
  "Magic",
  "Martial Arts",
  "Mecha",
  "Military",
  "Music",
  "Mystery",
  "Parody",
  "Police",
  "Psychological",
  "Romance",
  "Samurai",
  "School",
  "Sci-Fi",
  "Seinen",
  "Shoujo",
  "Shoujo Ai",
  "Shounen",
  "Shounen Ai",
  "Slice of Life",
  "Space",
  "Sports",
  "Super Power",
  "Supernatural",
  "Thriller",
  "Vampire"
]

export const trendingAnimes = [
  {
      "id": "the-strongest-magician-in-the-demon-lords-army-was-a-human-19238",
      "name": "The Strongest Magician in the Demon Lord's Army Was a Human",
      "rank": 1,
      "img": "https://img.flawlessfiles.com/_r/1366x768/100/1d/12/1d12830ba58fe5e45677b800ff71afe5/1d12830ba58fe5e45677b800ff71afe5.jpg",
      "episodes": {
          "sub": 11
      },
      "duration": "24m",
      "quality": "HD",
      "category": "TV",
      "releasedDay": "Jul 3, 2024",
      "description": "\"Maou Army’s strongest magician\" I'm called. Ike, a demon capable of capturing a fort alone. Clearing away enemies with immense magic, he is without a doubt a monster awed by friend and foe. However he has a secret he can’t tell other demons. \"I, actually I'm human you know.\" Using modern knowledge to keep his secret, he became treated as a great commander and the driving force of the Maou's army."
  },
  {
      "id": "no-longer-allowed-in-another-world-19247",
      "name": "No Longer Allowed In Another World",
      "rank": 2,
      "img": "https://img.flawlessfiles.com/_r/1366x768/100/1a/37/1a37292bd09836d9fc282e6a79080979/1a37292bd09836d9fc282e6a79080979.jpg",
      "episodes": {
          "eps": 12,
          "sub": 9,
          "dub": 6
      },
      "duration": "23m",
      "quality": "HD",
      "category": "TV",
      "releasedDay": "Jul 9, 2024",
      "description": "An adventure in another world with cute girls by your side and video game-like powers—sounds like an anime fan's dream, right? Not so for melancholic author Osamu Dazai, who would quite literally prefer to drop dead. Video games haven't even been invented yet when he gets yanked into another world in 1948. Really, all the fantastical adventure he keeps running into is just getting in the way of his poetic dream of finding the perfect place to die. But no matter how much he risks his hide, everything seems to keep turning out okay. Follow a miserable hero like no other in this cheerfully bleak isekai comedy!"
  },
  {
      "id": "one-piece-100",
      "name": "One Piece",
      "rank": 3,
      "img": "https://img.flawlessfiles.com/_r/1366x768/100/db/86/db8603d2f4fa78e1c42f6cf829030a18/db8603d2f4fa78e1c42f6cf829030a18.jpg",
      "episodes": {
          "sub": 1117,
          "dub": 1096
      },
      "duration": "24m",
      "quality": "HD",
      "category": "TV",
      "releasedDay": "Oct 20, 1999",
      "description": "Gold Roger was known as the \"Pirate King,\" the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.\n\nEnter Monkey Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy's reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece."
  },
  {
      "id": "the-elusive-samurai-19233",
      "name": "The Elusive Samurai",
      "rank": 4,
      "img": "https://img.flawlessfiles.com/_r/1366x768/100/6b/1b/6b1b090ae52f90441f0e7ed720e86291/6b1b090ae52f90441f0e7ed720e86291.jpg",
      "episodes": {
          "eps": 12,
          "sub": 9,
          "dub": 5
      },
      "duration": "23m",
      "quality": "HD",
      "category": "TV",
      "releasedDay": "Jul 6, 2024",
      "description": "Eight-year-old Tokiyuki Houjou, the next successor of the Kamakura shogunate, is a young boy lacking talent in everything besides hide-and-seek. One day, his carefree life is abruptly turned upside down when Takauji Ashikaga brutally seizes power from the Kamakuras, ending their reign. Rescued by a self-proclaimed prophetic priest, Tokiyuki manages to escape with his life. Now he must evade those trying to kill him while recruiting comrades who can help him restore the Kamakura Shogunate to its former glory.  Set during the Nanboku-chou period of Japanese history, is a tale of redemption, documenting the life of the forgotten hero that altered Japan's destiny by running away."
  },
  {
      "id": "why-does-nobody-remember-me-in-this-world-19240",
      "name": "Why Does Nobody Remember Me in This World?",
      "rank": 5,
      "img": "https://img.flawlessfiles.com/_r/1366x768/100/d0/57/d057bc74b98214c7fd9ca6192aa3ce50/d057bc74b98214c7fd9ca6192aa3ce50.jpg",
      "episodes": {
          "sub": 8,
          "dub": 6
      },
      "duration": "24m",
      "quality": "HD",
      "category": "TV",
      "releasedDay": "Jul 13, 2024",
      "description": "In a time when the great war between five rival races for supremacy on Earth ended with humanity's victory led by the hero Sid, the world suddenly gets \"overwritten\" right before the eyes of a boy named Kai. In this rewritten world, Kai witnesses humanity's defeat in the war as a result of Sid's absence—where dragons and demons now rule the land, and Kai himself has become a forgotten existence to all humans. However, after encountering the mysterious girl Rinne, Kai resolves to break free from this rewritten fate. In a world without a hero, he inherits the sword and martial skills of the hero (Sid) and challenges the powerful enemy races that dominate the land."
  },
  {
      "id": "pseudo-harem-19246",
      "name": "Pseudo Harem",
      "rank": 6,
      "img": "https://img.flawlessfiles.com/_r/1366x768/100/83/16/8316ad233cd5b69d864064c84f8ca9f5/8316ad233cd5b69d864064c84f8ca9f5.jpg",
      "episodes": {
          "sub": 9,
          "dub": 12
      },
      "duration": "24m",
      "quality": "HD",
      "category": "TV",
      "releasedDay": "Jul 5, 2024",
      "description": "Eiji Kitahama, a second year high school student, just wants to be popular. To help him realize this dream, Rin Nanakura, his junior in the drama club, uses her acting skills to create a harem of loving girls for him. Though the various \"girls\" all show fondness toward Eiji, the affection of the actress behind them is very real. Rin's colorful acting continuously delights Eiji, but will the starlet herself ever make her way into his heart?"
  },
  {
      "id": "demon-slayer-kimetsu-no-yaiba-hashira-training-arc-19107",
      "name": "Demon Slayer: Kimetsu no Yaiba Hashira Training Arc",
      "rank": 7,
      "img": "https://img.flawlessfiles.com/_r/1366x768/100/46/d8/46d8e6d3fcd4a016ff5e90f0281eae76/46d8e6d3fcd4a016ff5e90f0281eae76.jpg",
      "episodes": {
          "eps": 8,
          "sub": 8,
          "dub": 8
      },
      "duration": "24m",
      "quality": "HD",
      "category": "TV",
      "releasedDay": "May 12, 2024",
      "description": "Adaptation of the Hashira Training Arc.\n\nThe Hashira, the Demon Slayer Corps' highest ranking swordsmen and members. The Hashira Training has begun in order to face the forthcoming battle against Muzan Kibutsuji. Each with their own thoughts and hopes held in their hearts, a new story for Tanjiro and the Hashira begins."
  },
  {
      "id": "wind-breaker-19136",
      "name": "Wind Breaker",
      "rank": 8,
      "img": "https://img.flawlessfiles.com/_r/1366x768/100/b8/b1/b8b1bbc386d81a95c40e236089e11312/b8b1bbc386d81a95c40e236089e11312.jpg",
      "episodes": {
          "eps": 13,
          "sub": 13,
          "dub": 13
      },
      "duration": "23m",
      "quality": "HD",
      "category": "TV",
      "releasedDay": "Apr 5, 2024",
      "description": "From an early age, Haruka Sakura was made an outcast due to his unconventional appearance and lack of social skills. However, the rough treatment turned him into a proficient fighter, which is now the only thing he prides himself on. Starting at Furin High School, where it is rumored that strength is valued over academics, Sakura has only one goal—taking the top spot.\n\nInvolved in a street brawl the day before his enrollment, Sakura happens to meet a group of his future schoolmates. Instead of the usual rejection, they fight alongside him, demonstrating that what the school actually cares about is protecting the town of Makochi from any harm—hence why the students call themselves \"Bofurin.\" Surprised by the support and appreciation of the townspeople, Sakura has a hard time accepting their goodwill.\n\nThough unfamiliar with kindness being shown to him, Sakura must learn to push past his discomfort when Bofurin is pitted against formidable enemies. After experiencing the feeling of acceptance, he finds himself fighting for the sake of others for the first time."
  },
  {
      "id": "bleach-806",
      "name": "Bleach",
      "rank": 9,
      "img": "https://img.flawlessfiles.com/_r/1366x768/100/58/d0/58d0b99666b285d2c484fec5dfaa23f0/58d0b99666b285d2c484fec5dfaa23f0.jpg",
      "episodes": {
          "eps": 366,
          "sub": 366,
          "dub": 366
      },
      "duration": "24m",
      "quality": "HD",
      "category": "TV",
      "releasedDay": "Oct 5, 2004",
      "description": "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant. To save his family, Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper as a result.\n\nHowever, as Rukia is unable to regain her powers, Ichigo is given the daunting task of hunting down the Hollows that plague their town. However, he is not alone in his fight, as he is later joined by his friends—classmates Orihime Inoue, Yasutora Sado, and Uryuu Ishida—who each have their own unique abilities. As Ichigo and his comrades get used to their new duties and support each other on and off the battlefield, the young Soul Reaper soon learns that the Hollows are not the only real threat to the human world."
  }
]

export const recentlyUpdatedAnimes = [
  {
      "id": "delicos-nursery-19228",
      "name": "Delico's Nursery",
      "img": "https://img.flawlessfiles.com/_r/300x400/100/50/c6/50c6c30a9483d34f95102462976fa596/50c6c30a9483d34f95102462976fa596.jpg",
      "episodes": {
          "eps": 13,
          "sub": 5,
          "dub": 2
      },
      "duration": "24m",
      "rated": false
  },
  {
      "id": "true-beauty-19274",
      "name": "True Beauty",
      "img": "https://img.flawlessfiles.com/_r/300x400/100/71/da/71da0959ef9afc3320684a7348131220/71da0959ef9afc3320684a7348131220.jpg",
      "episodes": {
          "eps": null,
          "sub": 5,
          "dub": 2
      },
      "duration": "20m",
      "rated": false
  },
  {
      "id": "love-is-indivisible-by-twins-19234",
      "name": "Love Is Indivisible by Twins",
      "img": "https://img.flawlessfiles.com/_r/300x400/100/2b/fc/2bfca8e6f8477c826ed2ed5f2377aea9/2bfca8e6f8477c826ed2ed5f2377aea9.jpg",
      "episodes": {
          "eps": 12,
          "sub": 9,
          "dub": null
      },
      "duration": "24m",
      "rated": false
  },
  {
      "id": "sengoku-youko-19216",
      "name": "Sengoku Youko",
      "img": "https://img.flawlessfiles.com/_r/300x400/100/fb/bd/fbbd027ad853c9fe49c10ad1b992bef9/fbbd027ad853c9fe49c10ad1b992bef9.jpg",
      "episodes": {
          "eps": 22,
          "sub": 8,
          "dub": null
      },
      "duration": "24m",
      "rated": false
  },
  {
      "id": "alya-sometimes-hides-her-feelings-in-russian-19254",
      "name": "Alya Sometimes Hides Her Feelings in Russian",
      "img": "https://img.flawlessfiles.com/_r/300x400/100/b2/10/b210daff9a85c7b6e42d82d578ee90b2/b210daff9a85c7b6e42d82d578ee90b2.jpg",
      "episodes": {
          "eps": 12,
          "sub": 10,
          "dub": 7
      },
      "duration": "24m",
      "rated": false
  },
  {
      "id": "my-deer-friend-nokotan-19249",
      "name": "My Deer Friend Nokotan",
      "img": "https://img.flawlessfiles.com/_r/300x400/100/e5/43/e5439875b4262583ec34720afd5e5f10/e5439875b4262583ec34720afd5e5f10.jpg",
      "episodes": {
          "eps": null,
          "sub": 10,
          "dub": 9
      },
      "duration": "24m",
      "rated": false
  },
  {
      "id": "the-strongest-magician-in-the-demon-lords-army-was-a-human-19238",
      "name": "The Strongest Magician in the Demon Lord's Army Was a Human",
      "img": "https://img.flawlessfiles.com/_r/300x400/100/07/7b/077bf2dc18980271dbff7ead6694ecbc/077bf2dc18980271dbff7ead6694ecbc.jpg",
      "episodes": {
          "eps": null,
          "sub": 11,
          "dub": null
      },
      "duration": "24m",
      "rated": false
  },
  {
      "id": "murai-in-love-19314",
      "name": "Murai in Love",
      "img": "https://img.flawlessfiles.com/_r/300x400/100/8f/b9/8fb9359fcc5247ad916f47c6762ff187/8fb9359fcc5247ad916f47c6762ff187.jpg",
      "episodes": {
          "eps": null,
          "sub": 1,
          "dub": null
      },
      "duration": "m",
      "rated": false
  },
  {
      "id": "whimsical-wish-19271",
      "name": "Whimsical Wish",
      "img": "https://img.flawlessfiles.com/_r/300x400/100/70/bc/70bc1f021f29de9f760bbf7021969d67/70bc1f021f29de9f760bbf7021969d67.jpg",
      "episodes": {
          "eps": 8,
          "sub": 6,
          "dub": null
      },
      "duration": "12m",
      "rated": false
  },
  {
      "id": "the-white-whale-of-mu-6620",
      "name": "The White Whale of Mu",
      "img": "https://img.flawlessfiles.com/_r/300x400/100/85/d5/85d56547adc9d63710a77d1aebd9280d/85d56547adc9d63710a77d1aebd9280d.jpg",
      "episodes": {
          "eps": 26,
          "sub": 5,
          "dub": null
      },
      "duration": "25m",
      "rated": false
  },
  {
      "id": "tasuketsu-fate-of-the-majority-19211",
      "name": "Tasuketsu -Fate of the Majority-",
      "img": "https://img.flawlessfiles.com/_r/300x400/100/24/55/2455f210a0091e001c691a01c88b250a/2455f210a0091e001c691a01c88b250a.jpg",
      "episodes": {
          "eps": null,
          "sub": 8,
          "dub": null
      },
      "duration": "22m",
      "rated": false
  },
  {
      "id": "no-longer-allowed-in-another-world-19247",
      "name": "No Longer Allowed In Another World",
      "img": "https://img.flawlessfiles.com/_r/300x400/100/8b/97/8b97e75f9de748632c4458eefb3ec8d8/8b97e75f9de748632c4458eefb3ec8d8.jpg",
      "episodes": {
          "eps": 12,
          "sub": 9,
          "dub": 6
      },
      "duration": "23m",
      "rated": false
  }
]