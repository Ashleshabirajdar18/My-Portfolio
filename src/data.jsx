import React from 'react';

export const aboutSkills = [
  { name: "Java & Backend Development", percentage: "85%" },
  { name: "React & Frontend Development", percentage: "78%" },
  { name: "SQL & Databases", percentage: "80%" }
];

export const softSkills = ["Problem Solver", "Quick Learner", "Team Player", "Detail Oriented"];

export const skillCategories = [
  {
    title: "Languages",
    
    icon: () => (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: [
      { name: "Java", level: "85%" },
      { name: "C", level: "75%" }
    ]
  },
  {
    title: "Frontend",
    icon: () => (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4z" />
      </svg>
    ),
    skills: [
      { name: "HTML", level: "90%" },
      { name: "CSS", level: "85%" },
      { name: "JavaScript", level: "80%" },
      { name: "React.js", level: "78%" }
    ]
  },
  {
    title: "Backend",
    icon: () => (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v4a2 2 0 00-2-2" />
      </svg>
    ),
    skills: [
      { name: "JDBC", level: "80%" },
      { name: "REST APIs", level: "78%" }
    ]
  },
  {
    title: "Databases",
    icon: () => (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: [
      { name: "SQL", level: "85%" },
      { name: "MongoDB", level: "75%" }
    ]
  }
];

export const toolsAndIDEs = ["VS Code", "Eclipse", "IntelliJ IDEA", "Git", "GitHub"];

export const projectsData = [
  {
    id: 1,
    title: "Task Management App", 
    description: "A full-stack task management application built with React.js, Node.js, Express.js, HTML, and CSS. It enables users to create, organize, prioritize, and track tasks efficiently through a responsive and user-friendly interface.",
    tags: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com",
    isFeatured: true,
    iconType: "database"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with React and Tailwind CSS to showcase skills, projects, and education with modern UI animations.",
    tags: ["React", "Tailwind CSS", "HTML", "JavaScript"],
    githubUrl: "https://github.com",
    isFeatured: false,
    hasTopBorder: true,
    iconType: "layout"
  },
  {
    id: 3,
    title: "Travel Management System",
    description: "A Travel Management System built with Java, JDBC, and MySQL for managing travel bookings, customer information, and tour packages. It streamlines travel agency operations through efficient database management.",
    tags: ["Java", "JDBC", "MySQL", "OOP"],
    githubUrl: "https://github.com",
    isFeatured: false,
    iconType: "database"
  }
];