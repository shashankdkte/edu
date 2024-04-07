export interface Class {
  id: string;
  title: string;
  instructor: string;
  schedule: string;
  duration: number; // In minutes
  capacity: number;
  enrollmentCount: number;
  fee: number;
  thumbnailUrl: string;
  status: 'ongoing' | 'completed' | 'upcoming';
  type: 'virtual' | 'in-person';
  location?: string; 
  tasks: string[];  // Initialize tasks as an empty array
}
