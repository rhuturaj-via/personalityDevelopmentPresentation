import {
  Brain,
  HeartHandshake,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Target,
  TimerReset,
  Users,
} from 'lucide-react';

export const slides = [
  { id: 'intro', label: 'Intro' },
  { id: 'meaning', label: 'Meaning' },
  { id: 'pillars', label: 'Pillars' },
  { id: 'habits', label: 'Habits' },
  { id: 'challenge', label: 'Challenge' },
];

export const highlights = [
  'Personality is not just how you look. It is how you think, speak, behave, and respond.',
  'Small daily habits shape confidence more than rare big efforts.',
  'Grade 10 is the right time to build character before bigger academic and career choices.',
];

export const pillars = [
  {
    title: 'Self-awareness',
    description: 'Know your strengths, your weak spots, and the situations that affect your behavior.',
    icon: Brain,
    tone: 'bg-brand-50 text-brand-700',
  },
  {
    title: 'Positive attitude',
    description: 'A constructive mindset helps you face setbacks without giving up or blaming others.',
    icon: Sparkles,
    tone: 'bg-sun/30 text-ink-900',
  },
  {
    title: 'Communication',
    description: 'Clear speaking, active listening, and respectful words improve friendships and teamwork.',
    icon: MessageSquareText,
    tone: 'bg-accent-50 text-accent-700',
  },
  {
    title: 'Confidence',
    description: 'Confidence grows when you prepare well, practice often, and keep promises to yourself.',
    icon: ShieldCheck,
    tone: 'bg-ink-100 text-ink-800',
  },
  {
    title: 'Empathy',
    description: 'Understanding another person’s feelings makes you kinder, calmer, and easier to trust.',
    icon: HeartHandshake,
    tone: 'bg-brand-100 text-brand-700',
  },
  {
    title: 'Discipline',
    description: 'Good routines create a strong personality because actions matter more than intentions.',
    icon: Target,
    tone: 'bg-accent-100 text-accent-700',
  },
];

export const habits = [
  {
    title: 'Start with self-checks',
    text: 'Ask: What did I do well today? What should I improve tomorrow?',
  },
  {
    title: 'Practice confident body language',
    text: 'Stand straight, keep eye contact, and speak slowly enough to be understood.',
  },
  {
    title: 'Use respectful communication',
    text: 'Listen fully, avoid interrupting, and disagree without insulting anyone.',
  },
  {
    title: 'Control digital behavior',
    text: 'Your online tone, comments, and sharing habits are part of your personality too.',
  },
  {
    title: 'Build a routine',
    text: 'Sleep on time, plan study hours, and finish simple tasks without excuses.',
  },
];

export const dos = [
  'Be punctual and prepared.',
  'Accept feedback without anger.',
  'Choose friends who push you forward.',
  'Speak truthfully and politely.',
];

export const donts = [
  'Do not compare yourself with everyone.',
  'Do not let mood control your words.',
  'Do not mock mistakes, including your own.',
  'Do not confuse popularity with character.',
];

export const challengeSteps = [
  {
    title: 'Week 1: Observe yourself',
    text: 'Notice your tone, confidence, and reactions in class, at home, and online.',
    icon: Users,
  },
  {
    title: 'Week 2: Improve one habit',
    text: 'Pick one goal such as better speaking, time discipline, or staying calm during stress.',
    icon: TimerReset,
  },
  {
    title: 'Week 3: Ask for feedback',
    text: 'Request honest input from a teacher, parent, or friend about the change they notice.',
    icon: MessageSquareText,
  },
  {
    title: 'Week 4: Repeat and reflect',
    text: 'Track what worked, what failed, and what you will keep doing after 30 days.',
    icon: Target,
  },
];
