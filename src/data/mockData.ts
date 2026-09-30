export interface Category {
  id: string;
  name: string;
  slug: string;
  type: 'discipline' | 'position' | 'sub_position' | 'technique_type';
  parentId?: string;
  icon?: string;
  order: number;
}

export interface Technique {
  id: string;
  name: string;
  slug: string;
  description: string;
  steps: string[];
  difficulty: 1 | 2 | 3 | 4 | 5;
  beltLevels: string[];
  disciplineId: string;
  positionId: string;
  typeId: string;
  tags: string[];
  mediaUrl: string;
  mediaType: 'video' | 'gif';
  thumbnailUrl: string;
  tips: string[];
  commonMistakes: string[];
  relatedTechniques: string[];
  status: 'draft' | 'published';
  createdAt: string;
  views: number;
  bookmarks: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'content_admin' | 'coach' | 'student';
  avatar?: string;
  beltLevel?: string;
  isActive: boolean;
  createdAt: string;
  lastLogin: string;
}

export const categories: Category[] = [
  // Disciplines
  { id: 'bjj', name: 'Brazilian Jiu-Jitsu', slug: 'bjj', type: 'discipline', icon: '🥋', order: 1 },
  { id: 'muay-thai', name: 'Muay Thai', slug: 'muay-thai', type: 'discipline', icon: '🥊', order: 2 },
  { id: 'wrestling', name: 'Wrestling', slug: 'wrestling', type: 'discipline', icon: '🤼', order: 3 },
  { id: 'judo', name: 'Judo', slug: 'judo', type: 'discipline', icon: '🥋', order: 4 },
  { id: 'mma', name: 'MMA', slug: 'mma', type: 'discipline', icon: '🥊', order: 5 },
  
  // BJJ Positions
  { id: 'mount', name: 'Mount', slug: 'mount', type: 'position', parentId: 'bjj', order: 1 },
  { id: 'guard', name: 'Guard', slug: 'guard', type: 'position', parentId: 'bjj', order: 2 },
  { id: 'side-control', name: 'Side Control', slug: 'side-control', type: 'position', parentId: 'bjj', order: 3 },
  { id: 'back-control', name: 'Back Control', slug: 'back-control', type: 'position', parentId: 'bjj', order: 4 },
  { id: 'standing-bjj', name: 'Standing', slug: 'standing-bjj', type: 'position', parentId: 'bjj', order: 5 },
  
  // BJJ Sub-positions
  { id: 'closed-guard', name: 'Closed Guard', slug: 'closed-guard', type: 'sub_position', parentId: 'guard', order: 1 },
  { id: 'open-guard', name: 'Open Guard', slug: 'open-guard', type: 'sub_position', parentId: 'guard', order: 2 },
  { id: 'half-guard', name: 'Half Guard', slug: 'half-guard', type: 'sub_position', parentId: 'guard', order: 3 },
  
  // Muay Thai Positions
  { id: 'striking', name: 'Striking', slug: 'striking', type: 'position', parentId: 'muay-thai', order: 1 },
  { id: 'clinch', name: 'Clinch', slug: 'clinch', type: 'position', parentId: 'muay-thai', order: 2 },
  { id: 'defense-mt', name: 'Defense', slug: 'defense-mt', type: 'position', parentId: 'muay-thai', order: 3 },
  
  // Wrestling Positions
  { id: 'takedowns', name: 'Takedowns', slug: 'takedowns', type: 'position', parentId: 'wrestling', order: 1 },
  { id: 'takedown-defense', name: 'Takedown Defense', slug: 'takedown-defense', type: 'position', parentId: 'wrestling', order: 2 },
  { id: 'pins', name: 'Pins', slug: 'pins', type: 'position', parentId: 'wrestling', order: 3 },
  
  // Technique Types
  { id: 'submission', name: 'Submission', slug: 'submission', type: 'technique_type', order: 1 },
  { id: 'escape', name: 'Escape', slug: 'escape', type: 'technique_type', order: 2 },
  { id: 'sweep', name: 'Sweep', slug: 'sweep', type: 'technique_type', order: 3 },
  { id: 'takedown-type', name: 'Takedown', slug: 'takedown', type: 'technique_type', order: 4 },
  { id: 'transition', name: 'Transition', slug: 'transition', type: 'technique_type', order: 5 },
  { id: 'strike', name: 'Strike', slug: 'strike', type: 'technique_type', order: 6 },
  { id: 'defense', name: 'Defense', slug: 'defense', type: 'technique_type', order: 7 },
];

export const techniques: Technique[] = [
  {
    id: '1',
    name: 'Upa (Bridge) Escape from Mount',
    slug: 'upa-escape-mount',
    description: 'The Upa escape, also known as the bridge escape, is one of the most fundamental escapes from the mount position in Brazilian Jiu-Jitsu. It uses hip movement and leverage to unbalance your opponent and create space to recover guard.',
    steps: [
      'Trap one of your opponent\'s arms by wrapping it with your same-side arm',
      'Trap their same-side leg by placing your foot on their hip and hooking their leg',
      'Bridge your hips up explosively toward the trapped side',
      'As your opponent falls to the trapped side, shrimp your hips out to the side',
      'Recover your guard by bringing your legs between you and your opponent'
    ],
    difficulty: 1,
    beltLevels: ['white', 'blue'],
    disciplineId: 'bjj',
    positionId: 'mount',
    typeId: 'escape',
    tags: ['fundamental', 'gi', 'no-gi', 'beginner'],
    mediaUrl: 'https://example.com/videos/upa-escape.mp4',
    mediaType: 'video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400&h=300&fit=crop',
    tips: [
      'Make sure to trap both the arm AND the leg on the same side',
      'Bridge toward the trapped side, not straight up',
      'Use your feet to push off the mat for maximum power'
    ],
    commonMistakes: [
      'Bridging straight up instead of to the side',
      'Not trapping the opponent\'s arm and leg properly',
      'Using too much arm strength instead of hip movement'
    ],
    relatedTechniques: ['2', '3'],
    status: 'published',
    createdAt: '2024-01-15',
    views: 15420,
    bookmarks: 892
  },
  {
    id: '2',
    name: 'Elbow Knee Escape (Uja)',
    slug: 'elbow-knee-escape-mount',
    description: 'The elbow-knee escape, also called the Uja escape, is another fundamental mount escape that creates space by framing with your arms and then using your knees to recover guard.',
    steps: [
      'Frame with your forearms against your opponent\'s hips',
      'Create a small space by pushing with your frames',
      'Insert your knee into the space you created',
      'Slide your other knee through to recover half guard',
      'Continue to recover full guard or stand up'
    ],
    difficulty: 2,
    beltLevels: ['white', 'blue'],
    disciplineId: 'bjj',
    positionId: 'mount',
    typeId: 'escape',
    tags: ['fundamental', 'gi', 'no-gi', 'beginner'],
    mediaUrl: 'https://example.com/videos/elbow-knee-escape.mp4',
    mediaType: 'video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=300&fit=crop',
    tips: [
      'Keep your frames tight and close to your body',
      'Time your escape when your opponent is adjusting their position',
      'Use your legs to push, not just your arms'
    ],
    commonMistakes: [
      'Framing too far away from your body',
      'Trying to escape when your opponent has good base',
      'Not creating enough space before inserting the knee'
    ],
    relatedTechniques: ['1', '4'],
    status: 'published',
    createdAt: '2024-01-20',
    views: 12340,
    bookmarks: 756
  },
  {
    id: '3',
    name: 'Armbar from Mount',
    slug: 'armbar-mount',
    description: 'The armbar from mount is a high-percentage submission that attacks the elbow joint. It\'s one of the most common submissions attempted from the mount position.',
    steps: [
      'Secure mount position with good base',
      'Isolate one of your opponent\'s arms',
      'Swing your leg over their head while maintaining control of the arm',
      'Fall back while keeping the arm trapped',
      'Squeeze your knees together and extend your hips to finish the submission'
    ],
    difficulty: 2,
    beltLevels: ['white', 'blue', 'purple'],
    disciplineId: 'bjj',
    positionId: 'mount',
    typeId: 'submission',
    tags: ['submission', 'gi', 'no-gi', 'fundamental'],
    mediaUrl: 'https://example.com/videos/armbar-mount.mp4',
    mediaType: 'video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=300&fit=crop',
    tips: [
      'Keep your knees tight around their arm',
      'Control their wrist with both hands',
      'Point their thumb away from you for maximum leverage'
    ],
    commonMistakes: [
      'Not controlling the arm before swinging over',
      'Leaving space between your knees',
      'Not finishing with hip extension'
    ],
    relatedTechniques: ['1', '5'],
    status: 'published',
    createdAt: '2024-02-01',
    views: 18920,
    bookmarks: 1234
  },
  {
    id: '4',
    name: 'Scarf Hold (Kesa Gatame)',
    slug: 'scarf-hold',
    description: 'Scarf hold, known as Kesa Gatame in Judo, is a dominant pinning position that controls your opponent from the side. It\'s excellent for maintaining control and setting up submissions.',
    steps: [
      'Position yourself beside your opponent\'s head',
      'Wrap your arm around their neck/shoulder',
      'Control their near arm with your other hand',
      'Spread your legs wide for base',
      'Apply pressure by dropping your weight across their chest'
    ],
    difficulty: 2,
    beltLevels: ['white', 'blue'],
    disciplineId: 'bjj',
    positionId: 'side-control',
    typeId: 'transition',
    tags: ['pin', 'control', 'gi', 'no-gi'],
    mediaUrl: 'https://example.com/videos/scarf-hold.mp4',
    mediaType: 'video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=400&h=300&fit=crop',
    tips: [
      'Keep your head low and pressure heavy',
      'Control their near arm to prevent escapes',
      'Use your legs to maintain balance'
    ],
    commonMistakes: [
      'Being too upright, making it easy to roll',
      'Not controlling the near arm',
      'Leaving space between your body and theirs'
    ],
    relatedTechniques: ['5', '6'],
    status: 'published',
    createdAt: '2024-02-10',
    views: 8750,
    bookmarks: 445
  },
  {
    id: '5',
    name: 'Rear Naked Choke',
    slug: 'rear-naked-choke',
    description: 'The rear naked choke is one of the most effective and common submissions in grappling. Attacked from back control, it targets the carotid arteries to force a tap.',
    steps: [
      'Secure back control with hooks in',
      'Slide one arm under their chin to their neck',
      'Grab your own bicep with your other hand',
      'Place your other hand behind their head',
      'Squeeze by bringing your elbows together and expanding your chest'
    ],
    difficulty: 2,
    beltLevels: ['white', 'blue', 'purple'],
    disciplineId: 'bjj',
    positionId: 'back-control',
    typeId: 'submission',
    tags: ['submission', 'choke', 'gi', 'no-gi', 'fundamental'],
    mediaUrl: 'https://example.com/videos/rnc.mp4',
    mediaType: 'video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&h=300&fit=crop',
    tips: [
      'Get deep chin control before locking in the choke',
      'Use your seatbelt grip to prevent hand fights',
      'Squeeze with your whole body, not just your arms'
    ],
    commonMistakes: [
      'Not getting deep enough under the chin',
      'Losing back control before setting up the choke',
      'Using only arm strength instead of body mechanics'
    ],
    relatedTechniques: ['4', '6'],
    status: 'published',
    createdAt: '2024-02-15',
    views: 22100,
    bookmarks: 1567
  },
  {
    id: '6',
    name: 'Roundhouse Kick',
    slug: 'roundhouse-kick',
    description: 'The roundhouse kick is one of the most powerful strikes in Muay Thai. It generates tremendous force through hip rotation and is effective at all ranges.',
    steps: [
      'Start in your fighting stance',
      'Step your lead foot slightly forward and to the side',
      'Rotate your hips and pivot on your back foot',
      'Strike with your shin, not your foot',
      'Return to your stance immediately after impact'
    ],
    difficulty: 2,
    beltLevels: ['white', 'blue'],
    disciplineId: 'muay-thai',
    positionId: 'striking',
    typeId: 'strike',
    tags: ['striking', 'kick', 'fundamental'],
    mediaUrl: 'https://example.com/videos/roundhouse.mp4',
    mediaType: 'video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=400&h=300&fit=crop',
    tips: [
      'Rotate your hips fully for maximum power',
      'Strike through the target, not at it',
      'Keep your hands up for defense'
    ],
    commonMistakes: [
      'Kicking with the foot instead of the shin',
      'Not rotating the hips enough',
      'Dropping your hands when kicking'
    ],
    relatedTechniques: ['7', '8'],
    status: 'published',
    createdAt: '2024-03-01',
    views: 14560,
    bookmarks: 823
  },
  {
    id: '7',
    name: 'Teep (Push Kick)',
    slug: 'teep-push-kick',
    description: 'The teep, or push kick, is a fundamental Muay Thai technique used to control distance, disrupt your opponent\'s rhythm, and set up other attacks.',
    steps: [
      'Chamber your knee up to your chest',
      'Extend your leg forward, pushing through your heel',
      'Target the opponent\'s midsection or thigh',
      'Retract your leg quickly back to stance',
      'Maintain balance throughout the movement'
    ],
    difficulty: 1,
    beltLevels: ['white'],
    disciplineId: 'muay-thai',
    positionId: 'striking',
    typeId: 'strike',
    tags: ['striking', 'kick', 'fundamental', 'distance-control'],
    mediaUrl: 'https://example.com/videos/teep.mp4',
    mediaType: 'video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=300&fit=crop',
    tips: [
      'Use it to maintain distance and control the fight',
      'Aim for the solar plexus for maximum effect',
      'Keep your hands up while kicking'
    ],
    commonMistakes: [
      'Not chambering the knee high enough',
      'Leaning back too far when kicking',
      'Being slow to return to stance'
    ],
    relatedTechniques: ['6', '8'],
    status: 'published',
    createdAt: '2024-03-05',
    views: 11230,
    bookmarks: 654
  },
  {
    id: '8',
    name: 'Double Leg Takedown',
    slug: 'double-leg-takedown',
    description: 'The double leg takedown is a fundamental wrestling technique that attacks both legs simultaneously to bring your opponent to the mat. It\'s widely used in both wrestling and MMA.',
    steps: [
      'Change levels by bending your knees and dropping your hips',
      'Shoot in with your lead leg, getting deep between their legs',
      'Wrap both arms around the back of their knees/thighs',
      'Drive forward with your legs and lift',
      'Finish by taking them to the mat and securing top position'
    ],
    difficulty: 2,
    beltLevels: ['white', 'blue'],
    disciplineId: 'wrestling',
    positionId: 'takedowns',
    typeId: 'takedown-type',
    tags: ['takedown', 'fundamental', 'wrestling', 'mma'],
    mediaUrl: 'https://example.com/videos/double-leg.mp4',
    mediaType: 'video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400&h=300&fit=crop',
    tips: [
      'Keep your head up and back straight when shooting',
      'Drive with your legs, don\'t just pull with your arms',
      'Finish by taking their back or securing side control'
    ],
    commonMistakes: [
      'Shooting too far away from the opponent',
      'Not changing levels enough before shooting',
      'Standing up too early instead of driving through'
    ],
    relatedTechniques: ['9', '10'],
    status: 'published',
    createdAt: '2024-03-10',
    views: 16780,
    bookmarks: 987
  },
  {
    id: '9',
    name: 'Single Leg Takedown',
    slug: 'single-leg-takedown',
    description: 'The single leg takedown attacks one leg at a time, offering more control and setup options than the double leg. It\'s versatile and can be finished multiple ways.',
    steps: [
      'Change levels and shoot to one side of your opponent',
      'Grab one of their legs, controlling at the knee and ankle',
      'Lift their leg and drive forward',
      'Use head position to control their balance',
      'Finish by taking them down and securing top position'
    ],
    difficulty: 2,
    beltLevels: ['white', 'blue', 'purple'],
    disciplineId: 'wrestling',
    positionId: 'takedowns',
    typeId: 'takedown-type',
    tags: ['takedown', 'versatile', 'wrestling', 'mma'],
    mediaUrl: 'https://example.com/videos/single-leg.mp4',
    mediaType: 'video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=300&fit=crop',
    tips: [
      'Control the leg high (at the knee) for better control',
      'Use your head to push into their hip or ribs',
      'Have multiple finishes ready (ankle pick, trip, etc.)'
    ],
    commonMistakes: [
      'Not controlling the leg tightly enough',
      'Standing too upright, making it easy to sprawl',
      'Not having a clear finish in mind'
    ],
    relatedTechniques: ['8', '10'],
    status: 'published',
    createdAt: '2024-03-15',
    views: 13450,
    bookmarks: 765
  },
  {
    id: '10',
    name: 'Takedown Defense - Sprawl',
    slug: 'sprawl-takedown-defense',
    description: 'The sprawl is the fundamental takedown defense in wrestling and MMA. It involves dropping your hips back and down to prevent your opponent from getting deep on your legs.',
    steps: [
      'As your opponent shoots, immediately drop your hips back and down',
      'Post your hands on their shoulders or head to control distance',
      'Spread your legs wide to make it harder for them to finish',
      'Apply downward pressure with your hips and chest',
      'Look to counter with strikes or take the back'
    ],
    difficulty: 1,
    beltLevels: ['white', 'blue'],
    disciplineId: 'wrestling',
    positionId: 'takedown-defense',
    typeId: 'defense',
    tags: ['defense', 'takedown-defense', 'fundamental', 'wrestling', 'mma'],
    mediaUrl: 'https://example.com/videos/sprawl.mp4',
    mediaType: 'video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=400&h=300&fit=crop',
    tips: [
      'React quickly - the earlier you sprawl, the better',
      'Get your hips lower than their head',
      'Use underhooks to control and counter'
    ],
    commonMistakes: [
      'Sprawling too late after they\'ve already gotten deep',
      'Not getting hips low enough',
      'Forgetting to post with your hands'
    ],
    relatedTechniques: ['8', '9'],
    status: 'published',
    createdAt: '2024-03-20',
    views: 19230,
    bookmarks: 1123
  },
];

export const users: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@champsquad.com',
    role: 'super_admin',
    isActive: true,
    createdAt: '2024-01-01',
    lastLogin: '2024-03-20'
  },
  {
    id: '2',
    name: 'Coach Silva',
    email: 'coach@champsquad.com',
    role: 'coach',
    beltLevel: 'black',
    isActive: true,
    createdAt: '2024-01-15',
    lastLogin: '2024-03-19'
  },
  {
    id: '3',
    name: 'John Student',
    email: 'student@champsquad.com',
    role: 'student',
    beltLevel: 'blue',
    isActive: true,
    createdAt: '2024-02-01',
    lastLogin: '2024-03-18'
  }
];
