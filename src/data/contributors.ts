export interface Contributor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  github: string;
  contributions: number;
}

// Import the JSON data directly
import contributorsData from '../../data.json';

export const contributors: Contributor[] = contributorsData as Contributor[];