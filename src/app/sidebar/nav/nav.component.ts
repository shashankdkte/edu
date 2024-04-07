import { Component, Input } from '@angular/core';

export interface MenuItem {
  link: string;
  icon: string;
  text: string;
  badge?: string;
  badgeClass?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @Input() menus: MenuItem[] = [
    {
      link: "#",
      icon: "fas fa-tachometer-alt",
      text: "Dashboard",
      children: [
        {link: "./index.html", icon: "far fa-circle nav-icon", text: "Dashboard v1"},
        {link: "./index2.html", icon: "far fa-circle nav-icon", text: "Dashboard v2"},
        {link: "./index3.html", icon: "far fa-circle nav-icon", text: "Dashboard v3"},
      ]
    },
    {
      link: "pages/widgets.html",
      icon: "fas fa-th",
      text: "Notifications",
      badge: "New",
      badgeClass: "badge-danger",
      children: []
    },
    {
      link: "#",
      icon: "fas fa-copy",
      text: "Class Management",
      badge: "6",
      badgeClass: "badge-info",
      children: [
        { link: "class/dashboard", icon: "fas fa-school nav-icon", text: "Class Dashboard" },
  { link: "class/schedule", icon: "fas fa-calendar-alt nav-icon", text: "Class Schedule" },
  { link: "class/students", icon: "fas fa-users nav-icon", text: "Students" },
  { link: "class/assignments", icon: "fas fa-tasks nav-icon", text: "Assignments" },
  { link: "class/grades", icon: "fas fa-clipboard-list nav-icon", text: "Grades" },
  { link: "class/resources", icon: "fas fa-book-open nav-icon", text: "Resources" },
        { link: "class/attendance", icon: "fas fa-user-check nav-icon", text: "Attendance" },
        { link: "vocational/workshops", icon: "fas fa-hammer nav-icon", text: "Workshops" },
        { link: "vocational/certifications", icon: "fas fa-certificate nav-icon", text: "Certifications" },
        { link: "vocational/skills-assessment", icon: "fas fa-tasks nav-icon", text: "Skills Assessment" },
        { link: "vocational/career-services", icon: "fas fa-user-tie nav-icon", text: "Career Services" },
        { link: "vocational/support", icon: "fas fa-life-ring nav-icon", text: "Student Support" },
  { link: "class/reports", icon: "fas fa-chart-line nav-icon", text: "Reports" }
        // Additional nested items would follow the same structure...
      ]
    },
    // Additional top-level menu items would follow the same structure...
  ];
  
}
