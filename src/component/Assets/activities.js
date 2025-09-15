import techtalk1 from '../Assets/techtalk1.jpg';
import techtalk2 from '../Assets/techtalk2.jpg';
import ieee1 from '../Assets/ieee1.jpg'
import ieee2 from '../Assets/iee2.jpg'
import cover from '../Assets/ieeec.png'
import pitchino from '../Assets/1.jpg'
import pitchino1 from '../Assets/2.jpg'
import cover2 from '../Assets/cover.jpeg'
import covermed from '../Assets/covermedical.jpg'
import medical1 from '../Assets/medical.jpg'
import medical2 from '../Assets/medical2.jpg'
import pitchcover from '../Assets/pitchcover.jpg'
import pi1 from '../Assets/pitch1.jpg'
import pi2 from '../Assets/pithch3.jpg'
import pi3 from '../Assets/pithch4.jpg'
import pi4 from '../Assets/pitch5.jpeg'
import d1 from '../Assets/d1.jpg'
import d2 from '../Assets/d2.jpg'
import cov from '../Assets/cover3d.jpeg'

import med1 from '../Assets/med1.jpg'
import med2 from '../Assets/med2.jpg'
import med3 from '../Assets/med3.jpg'
import med4 from '../Assets/med4.jpg'

const activities = [
    {
    id: 0,
    name: 'Med Roots Summit 25',
    description:
    "Thrilled to have represented The University of Jordan as an Ambassador at the very first Med Roots Summit in Jordan! 🌱✨As part of the Media Team and a 3D Artist, I created visuals to welcome the audience and helped produce videos announcing the event. Such an inspiring experience merging biomedicine, AI, and creativity — and I’m so proud to have been part of it. 🚀💡",
        images: [med1,med2,med3,med4],
  },{
    id: 1,
    name: 'IEEE PITCHINNO 2025',
    description:
    "Out of 100 competing teams, we made it to the top 10 and pushed our limits to achieve this incredible milestone.✨Excited to share that my team, HoloFusion, secured 4th place in the IEEE PITCHINO 2025 ,This journey was full of challenges, innovation, and teamwork, and I couldn't be prouder of what we accomplished together. A huge shoutout to my amazing teammates for their dedication and hard work—this achievement is a testament to our passion and perseverance.",
        images: [pitchcover, pi4, pi1,pi2,pi3],
  },
  {
    id: 2,
    name: 'Tech Talk',
    description:
      "Organized under IEEE CS JU, this was the first event I ever led — from the initial idea to the final applause. I oversaw the entire process, coordinated logistics, and made sure everything ran smoothly on the ground. Seeing the audience fully engaged reminded me: this is what I’m meant to do.",
    images: [techtalk1, techtalk2],
  },
 {
    id:3,
    name: 'IEEE Cup',
    description:
      "Repping the squad behind the mind-blowing 3D Holofusion displays for the IEEE Cup — bringing the competition to life by showcasing each challenger’s team in epic detail. Proud to fuse tech and creativity to elevate the game and hype the showdown with Holofusion team",
    images: [cover,ieee1, ieee2],
    link: 'https://drive.google.com/file/d/1m7x2ZvjDwdMEEahhsaAGByMRjKefsNLt/view?usp=sharing'

  },
{
    id: 4,
    name: 'IEEE PITCHINNO 2024',
    description:"Proud to have been part of the volunteer team at IEEE Pitchino, where I helped organize the participating teams and coordinate with sponsoring companies to showcase their work. A day full of innovation, collaboration, and unforgettable energy!",    
    images: [cover2,pitchino,pitchino1, ],
},
{
    id:5,
    name:'MEDTECH',
    description:"At MedTech Day with the Holofusion crew — bringing 3D modeling to life! I had the chance to introduce people to how immersive 3D visuals can transform social media, product launches, and digital storytelling. Loved sharing the magic of merging tech with creativity!",
    url:"https://drive.google.com/file/d/1aajvvrFIya0MTIHL-9_aHOmG0e0Z9Nch/view?usp=sharing",
    images:[covermed,medical1,medical2]
},
{
    id:6,
    name:"Blender 3D Training ",
    description:"✨ Proud Moment! ✨ Over the course of 3 weeks, I had the incredible opportunity to lead a hands-on 3D Blender training alongside my amazing team at HoloFusion. Watching our trainees grow, challenge themselves, and bring their creative visions to life was truly inspiring. So proud of what we accomplished together!",
    url:"https://drive.google.com/file/d/1JDNamU6MiV-mNdrV_UDBXtJb5jECMHNL/view?usp=sharing",
    images:[cov,d1,d2]
},
];

export default activities;