export interface Contributor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  github: string;
  contributions: number;
}

export const contributors: Contributor[] = [
  {
    id: 'your-username',
    name: 'Your Name',
    role: 'Your Role',
    avatar: 'https://images.pexels.com/photos/your-image.jpg',
    github: 'your-username',
    contributions: 1
  }
];