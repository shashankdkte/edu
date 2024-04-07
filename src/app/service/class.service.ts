import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Class } from '../models/class';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private apiUrl = 'https://yourapi.com/classes'; // Adjust this to your API endpoint

  // constructor(private http: HttpClient) {}
  private classes:Class[] = [
    {
      id: "c1",
      title: "Introduction to Programming",
      instructor: "Jane Doe",
      schedule: "Mondays, 10:00 AM - 12:00 PM",
      duration: 120,
      capacity: 30,
      enrollmentCount: 25,
      fee: 100,
      thumbnailUrl: "https://picsum.photos/25/25",
      status: 'ongoing',
      type: 'virtual',
      tasks: []
    },
    {
      id: "c3",
      title: "Web Development: From Zero to Hero",
      instructor: "Alan Turing",
      schedule: "Tuesdays & Thursdays, 2:00 PM - 4:00 PM",
      duration: 120,
      capacity: 25,
      enrollmentCount: 20,
      fee: 150,
      thumbnailUrl: "https://example.com/images/webdev.jpg",
      status: 'ongoing',
      type: 'virtual',
      tasks: []
    },
    {
      id: "c5",
      title: "Digital Photography",
      instructor: "Ansel Adams",
      schedule: "Fridays, 5:00 PM - 7:00 PM",
      duration: 120,
      capacity: 15,
      enrollmentCount: 10,
      fee: 120,
      thumbnailUrl: "https://example.com/images/photography.jpg",
      status: 'ongoing',
      type: 'virtual',
      tasks: []
    },
    {
      id: "c2",
      title: "Advanced Yoga Training",
      instructor: "John Smith",
      schedule: "Wednesdays, 6:00 PM - 7:30 PM",
      duration: 90,
      capacity: 20,
      enrollmentCount: 18,
      fee: 80,
      thumbnailUrl: "https://example.com/images/yoga.jpg",
      status: 'completed',
      type: 'in-person',
      location: 'Yoga Studio',
      tasks: []
    },
    {
      id: "c4",
      title: "Mastering the Art of Cooking",
      instructor: "Gordon Ramsay",
      schedule: "Saturdays, 3:00 PM - 5:00 PM",
      duration: 120,
      capacity: 20,
      enrollmentCount: 20,
      fee: 200,
      thumbnailUrl: "https://example.com/images/cooking.jpg",
      status: 'completed',
      type: 'in-person',
      location: 'Cooking School',
      tasks: []
    },
    {
      id: "c6",
      title: "Creative Writing Workshop",
      instructor: "J.K. Rowling",
      schedule: "Mondays, 1:00 PM - 3:00 PM",
      duration: 120,
      capacity: 15,
      enrollmentCount: 15,
      fee: 85,
      thumbnailUrl: "https://example.com/images/writing.jpg",
      status: 'completed',
      type: 'in-person',
      location: 'Library',
      tasks: []
    },
    {
      id: "c7",
      title: "Basics of Gardening",
      instructor: "Claude Monet",
      schedule: "Sundays, 9:00 AM - 11:00 AM",
      duration: 120,
      capacity: 20,
      enrollmentCount: 0,
      fee: 50,
      thumbnailUrl: "https://example.com/images/gardening.jpg",
      status: 'upcoming',
      type: 'virtual',
      tasks: []
    },
    {
      id: "c8",
      title: "Learn to Play Guitar",
      instructor: "Jimi Hendrix",
      schedule: "Thursdays, 6:00 PM - 8:00 PM",
      duration: 120,
      capacity: 10,
      enrollmentCount: 0,
      fee: 100,
      thumbnailUrl: "https://example.com/images/guitar.jpg",
      status: 'upcoming',
      type: 'virtual',
      tasks: []
    },
    {
      id: "c9",
      title: "Introduction to Calligraphy",
      instructor: "Leonardo da Vinci",
      schedule: "Wednesdays, 10:00 AM - 12:00 PM",
      duration: 120,
      capacity: 12,
      enrollmentCount: 0,
      fee: 75,
      thumbnailUrl: "https://example.com/images/calligraphy.jpg",
      status: 'upcoming',
      type: 'virtual',
      tasks: []
    },
    {
      id: "c10",
      title: "Fitness Boot Camp",
      instructor: "Arnold Schwarzenegger",
      schedule: "Mondays & Fridays, 7:00 AM - 8:00 AM",
      duration: 60,
      capacity: 25,
      enrollmentCount: 0,
      fee: 40,
      thumbnailUrl: "https://example.com/images/fitness.jpg",
      status: 'upcoming',
      type: 'virtual',
      tasks: []
    }
  ];

  // Read: Get all classes
  getClasses(): Observable<Class[]> {
    return of(this.classes);
  }

  // Create: Add a new class
  addClass(newClass: Class): Observable<Class> {
    this.classes.push({ ...newClass, id: this.generateId() });
    return of(newClass);
  }

  // Update: Update a class by id
  updateClass(updatedClass: Class): Observable<Class> {
    const index = this.classes.findIndex(c => c.id === updatedClass.id);
    if (index > -1) {
      this.classes[index] = updatedClass;
    }
    return of(updatedClass);
  }

  // Delete: Delete a class by id
  deleteClass(classId: string): Observable<any> {
    this.classes = this.classes.filter(c => c.id !== classId);
    return of({ id: classId });
  }

  // Utility method to generate unique IDs - for demonstration purposes
  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}
