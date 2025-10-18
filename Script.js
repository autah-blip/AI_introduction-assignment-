// Course Data
const courses = [
  {
    id: 1,
    title: "HTML Basics",
    description: "Learn the building blocks of the web using HTML.",
    lessons: ["Intro to HTML", "Tags and Elements", "Forms and Inputs"],
    completed: false
  },
  {
    id: 2,
    title: "CSS Fundamentals",
    description: "Style your webpages with CSS.",
    lessons: ["Selectors and Properties", "Box Model", "Flexbox"],
    completed: false
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    description: "Add interactivity with JavaScript.",
    lessons: ["Variables and Data Types", "Functions", "DOM Manipulation"],
    completed: false
  }
];

const courseList = document.getElementById("courses");
const courseDetails = document.getElementById("course-details");
const courseTitle = document.getElementById("course-title");
const courseDescription = document.getElementById("course-description");
const courseLessons = document.getElementById("course-lessons");
const completeButton = document.getElementById("complete-button");

let currentCourseId = null;

// Render Course List
function renderCourseList() {
  courseList.innerHTML = "";
  courses.forEach(course => {
    const li = document.createElement("li");
    li.textContent = `${course.title} ${course.completed ? "✅" : ""}`;
    li.addEventListener("click", () => showCourseDetails(course.id));
    courseList.appendChild(li);
  });
}

// Show Course Details
function showCourseDetails(id) {
  const course = courses.find(c => c.id === id);
  if (!course) return;

  currentCourseId = id;
  courseDetails.classList.remove("hidden");
  courseTitle.textContent = course.title;
  courseDescription.textContent = course.description;
  courseLessons.innerHTML = "";
  
  course.lessons.forEach(lesson => {
    const li = document.createElement("li");
    li.textContent = lesson;
    courseLessons.appendChild(li);
  });

  completeButton.textContent = course.completed ? "Completed 🎉" : "Mark as Completed";
  completeButton.disabled = course.completed;
}

// Mark Course as Completed
completeButton.addEventListener("click", () => {
  const course = courses.find(c => c.id === currentCourseId);
  if (course) {
    course.completed = true;
    showCourseDetails(course.id);
    renderCourseList();
  }
});

// Initialize
renderCourseList();
