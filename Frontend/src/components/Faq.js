import React from 'react'

export default function Faq() {
  return (
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What is the Adaptive Learning Hub?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>The Adaptive Learning Hub</strong> is a personalized learning platform that provides tailored educational resources based on each user’s progress and learning needs.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              How does the Study Progress Tracker work?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              The Study Progress Tracker monitors each user’s learning journey, identifying strengths and weaknesses to tailor the learning path to each user's needs.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              How does the Resource Recommendation Engine suggest materials?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              The Resource Recommendation Engine uses algorithms to suggest study materials based on each user’s progress and preferences, recommending articles, videos, and quizzes.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              What is the purpose of the Leaderboard feature?
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              The Leaderboard fosters motivation by allowing users to compare progress with peers, encouraging a sense of competition and achievement.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              How is data security managed in the Adaptive Learning Hub?
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              The platform incorporates user authentication and secure database management with MongoDB to ensure data privacy and integrity.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Can educators use the platform to track student performance?
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Yes, the Hub allows educators to monitor student progress, identify areas needing support, and offer targeted interventions.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              What types of resources does the platform recommend?
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              The platform recommends articles, videos, quizzes, and other materials based on each learner’s current progress and areas of improvement.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Is the Adaptive Learning Hub suitable for different educational levels?
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Yes, the platform is adaptable to various educational contexts, making it suitable for a wide range of learners and institutions.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              How are student progress and performance tracked?
            </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Progress and performance are tracked using data-driven algorithms that analyze each learner’s activity and provide insights into strengths and weaknesses.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
              What is the role of TensorFlow.js in the platform?
            </button>
          </h2>
          <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              TensorFlow.js is used to build and deploy the recommendation model, enhancing personalized resource suggestions through machine learning.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
              What technology stack is used for the frontend?
            </button>
          </h2>
          <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              The frontend is developed with React.js, using components like Navbar, Home, FAQ, and Resource, with `react-router-dom` for routing.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
              What is the backend architecture for the Adaptive Learning Hub?
            </button>
          </h2>
          <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              The backend is built with Express and Node.js, handling data storage with MongoDB and processing personalized learning recommendations.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
              How is user authentication managed?
            </button>
          </h2>
          <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              The platform uses secure user authentication mechanisms to ensure that each user has access only to their data and learning progress.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
              Can users customize their learning experience?
            </button>
          </h2>
          <div id="collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Yes, the system personalizes the learning experience based on each user’s progress, enabling a tailored approach to knowledge gaps and strengths.
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
