//create your resume data in JSON
let myResume = {
  basics: {
    name: "LOGESHWARAN.B",
    email: "logeshbaskar007@gamil.com",
    phone: 9597671762,
    degree: "B.Sc(CS)",
    location: {
      address: "26A/9 Sekkadi street, Rasipuram",
      postalCode: 637408,
      city: "Namakkal",
      state: "Tamilnadu",
      country: "India",
    },
    profiles: [
      {
        LinkedIN: "https://www.linkedin.com/in/logeshwaran-b-1582b5219/",
        github: "https://github.com/logeshbaskarlb",
      },
    ],
  },
  education: [
    {
      institution: "Rathinam college o Arts and Science",
      department: "Computer Science",
      studyType: "fulltime",
      "batch start year": 2020,
      "batch end year": 2023,
      gpa: 7.9,
    },
  ],
  skills: [
    {
      name: "javascript",
      level: "beginer",
      project: ["automatic attendance maintaing system using python language"],
    },
  ],
  languages: [
    {
      language: "Tamil,Enlish",
    },
  ],
  interests: [
    {
      name: "script writter,youtuber,",
    },
  ],
};
console.log(myResume);
