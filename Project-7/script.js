const users = [
  {
    imag:'https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    fullName: "Alice Johnson",
    age: 29,
    designation: "Software Engineer",
    companyName: "TechNova Inc.",
    skills: ["JavaScript", "React", "Node.js", "Git", "Docker"]
  },
  {
     imag:'https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    fullName: "Brian Smith",
    age: 34,
    designation: "Data Scientist",
    companyName: "Insight Analytics",
    skills: ["Python", "R", "TensorFlow", "SQL", "Pandas"]
  },
  {
     imag:'https://images.unsplash.com/photo-1622396636133-ba43f812bc35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    fullName: "Carla Mendes",
    age: 27,
    designation: "UX Designer",
    companyName: "Creative Minds",
    skills: ["Figma", "Sketch", "Adobe XD", "User Research", "Wireframing"]
  },
  {
     imag:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    fullName: "David Zhang",
    age: 42,
    designation: "DevOps Engineer",
    companyName: "CloudCore Solutions",
    skills: ["AWS", "Terraform", "Jenkins", "Bash", "Kubernetes"]
  },
  {
     imag:'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzfGVufDB8fDB8fHww',
    fullName: "Eva Thompson",
    age: 31,
    designation: "Product Manager",
    companyName: "BrightApps",
    skills: ["Agile", "Scrum", "JIRA", "Roadmapping", "Stakeholder Management"]
  },
  {
     imag:'https://images.unsplash.com/photo-1514654306380-538bac0ed82c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    fullName: "Farhan Ali",
    age: 26,
    designation: "Frontend Developer",
    companyName: "PixelForge",
    skills: ["HTML", "CSS", "Vue.js", "Tailwind", "JavaScript"]
  },
  {
     imag:'https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWxzfGVufDB8fDB8fHww',
    fullName: "Grace Kim",
    age: 36,
    designation: "Backend Developer",
    companyName: "CodeNest",
    skills: ["Java", "Spring Boot", "MySQL", "REST APIs", "Hibernate"]
  },
  {
     imag:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullName: "Henry O'Neal",
    age: 40,
    designation: "QA Engineer",
    companyName: "QualityFirst Ltd.",
    skills: ["Selenium", "Postman", "TestRail", "JMeter", "Automation Testing"]
  },
  {
     imag:'https://images.unsplash.com/photo-1498746607408-1e56960e3bdd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzfGVufDB8fDB8fHww',
    fullName: "Isabel Garcia",
    age: 24,
    designation: "Junior Developer",
    companyName: "StartupHub",
    skills: ["Python", "Django", "Git", "JavaScript"]
  },
  {
     imag:'https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzfGVufDB8fDB8fHww',
    fullName: "Jason Lee",
    age: 38,
    designation: "IT Project Manager",
    companyName: "SysTech",
    skills: ["Project Planning", "Risk Management", "Agile", "Budgeting", "Team Leadership"]
  }
];

let sum = '';
users.forEach(function(e){
  sum += `<div class="card">
        <img src="${e.imag}" alt="" width="200">
        <h1>${e.fullName}</h1>
        <h3>Age: ${e.age}</h3>
        <h3>Company: ${e.companyName}</h3>
        <h4>Designation: ${e.designation}</h4>
        <h3>Skills: ${e.skills.join(', ')}</h3>
    </div>`;
});

const body = document.querySelector('body');
body.innerHTML = sum;