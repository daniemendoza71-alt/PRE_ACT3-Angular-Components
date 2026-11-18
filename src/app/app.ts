import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';
import { Header } from './header/header';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

@Component({
  selector: 'app-root',
  imports: [ProfileCard, Header, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Daniella Faith Cortez';
  location = 'Angeles City, Pampanga';
  email = 'daniemendoza71@gmail.com';
  phone = '0915-798-9490';

  profile = 'I am a student major in web development. I enjoy learning something new that helps me utilize my skills that i can use for my future job.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Java',
    'MySQL',
    'Python'
  ];
   proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  message = 'Welcome to my profile!';
  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}

