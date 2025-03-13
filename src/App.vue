<template>
    
    <main>

      <section class="home">
        <header class="border-b-2 h-[80px] bg-[#f8f0e2]">
          <div class="flex justify-center items-center gap-28"> <!-- Center the div -->
            <p class="text-[50px] text-orange-600 font-bold mt-[-30px]">R<span class="text-black">ufaro</span> </p>
            <ul class="flex gap-8 ml-8"> <!-- Add space between list items -->
              <li class="text-[19px] h-[60px] border-b-2 hover:text-orange-600 hover:border-orange-600 cursor-pointer">Home</li>
              <li @click="scrollToSection('skills')" class="text-[19px] h-[60px] border-b-2 hover:text-orange-600 hover:border-orange-600 cursor-pointer">Skills</li>
              <li @click="scrollToSection('projects')" class="text-[19px] h-[60px] border-b-2 hover:text-orange-600 hover:border-orange-600 cursor-pointer">Projects</li>
              
              <li onclick="my_modal_4.showModal()" class="text-[19px] h-[60px] border-b-2 hover:text-orange-600 hover:border-orange-600 cursor-pointer ">Resume</li>
              <Resume/>

              <li class="text-[19px] h-[60px] border-b-2 hover:text-orange-600 hover:border-orange-600 cursor-pointer">Contact</li>
            </ul>
          </div>
        </header>

        <div class="flex justify-center mt-[60px] ">
          <div class="w-[700px] mt-[60px]">
            <p class="absolute mt-[5px]"><span class="text-orange-600  pt-[-60px]">*</span>Web developer</p>
            <p class="text-[80px] font-bold ">Hello! I am Rufaro Mandipa</p>
            <p class="w-[550px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores fugit sequi iure ipsam sed temporibus! Odio magnam accusamus eos quia, facere soluta expedita laudantium dolorem, pariatur voluptates quod iste aspernatur!</p>

            <div class="">
              <button class="h-[50px] w-[120px] bg-orange-600">Lets talk</button>
              <button class="h-[50px] w-[120px] bg-orange-600">View projects</button>

            </div>

            <div class="flex">
              <p>Check out my __________</p>
            <img src="" alt="soc1">
            <img src="" alt="soc1">
            <img src="" alt="soc1">
            </div>
          </div>

          <div class="w-[700px] h-[600px] ">
            <img class="w-[700px] h-[600px] border-2 border-black" src="" alt="">
          </div>
        </div>

      </section>

      <section id="skills" class="skills p-[20px]">
        <div class="ml-[270px] ">
          <p class=""><span class="text-orange-600  pt-[-60px]">*</span>Skills</p>
          <p class="text-[60px] font-bold ">What i can do for you!</p>
          <p class="w-[550px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, nihil. Quos non maiores, nostrum est molestias amet quaerat ducimus natus praesentium tempore ex dolores asperiores dolorum dicta molestiae a quod.</p>
        </div>

        <div class="flex justify-center mt-[60px] space-x-[80px]">
          <div class="w-[400px] h-[500px] border-orange-600  border-l-[2px] border-t-[2px] rounded-[10px] shadow-2xl">
            <h1 class="text-[25px] font-bold ">UI/UX design</h1>

            <p class="">
              <span class=" text-[40px] font-bold text-orange-600 mt-[100px]">O</span>ur UI/UX design services focus on creating seamless and intuitive digital experiences that captivate users and drive engagement. 
              We combine creativity with usability to craft visually stunning interfaces that elevate your brand and enhance user satisfaction.
            </p>
            <h3 class="text-[20px] font-bold ">Key features</h3>
            <ul>
              <li>User-Centered Design</li>
              <li>Visual Design</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div class="w-[400px] h-[500px] border-orange-600  border-l-[2px] border-b-[2px] rounded-[10px] shadow-2xl">
            <h1>Search Engine Optimisation</h1>
            <p>
              Our SEO services are designed to improve your website's visibility in search engine results and drive organic traffic to your online platform. 
              We employ proven strategies and best practices to enhance your website's search engine ranking and boost your online presence.
            </p>
            <h3>Key features</h3>
            <ul>
              <li>Keyword Research</li>
              <li>On-Page Optimization</li>
              <li>Technical SEO</li>
            </ul>

          </div>
          <div class="w-[400px] h-[500px] border-orange-600  border-l-[2px] border-t-[2px] rounded-[10px] shadow-2xl">
            <h1>Web hosting and maintance</h1>
            <p>
              Our web hosting and maintenance services offer a comprehensive solution to ensure your website remains secure, up-to-date, and accessible to your audience at all times.
               We take care of the technical aspects of hosting and maintenance so you can focus on growing your online presence.
            </p>
            <h3>Key features </h3>
            <ul>
              <li>Reliable Hosting</li>
              <li>Secuity monitoring</li>
              <li>Technical Support</li>
            </ul>

          </div>
        </div>
      </section>

      <section id="projects" class="projects p-[20px]">

        <div class="relative ml-[270px]">
          <div class=""><span class="text-orange-600  pt-[-60px]">*</span>Projects</div>
          <div class="text-[60px] font-bold ">What i have done!</div>
          <p class="w-[550px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, nihil. Quos non maiores, nostrum est molestias amet quaerat ducimus natus praesentium tempore ex dolores asperiores dolorum dicta molestiae a quod.</p>
        </div>
        
        <div class=" flex justify-center space-x-[80px] mt-[60px]">
          <div class="animate__animated animate__bounce w-[400px] h-[500px] rounded-[10px] shadow-2xl"></div>
          <div class="w-[400px] h-[500px] rounded-[10px] shadow-2xl"></div>
          <div class="w-[400px] h-[500px] rounded-[10px] shadow-2xl"></div>
        </div>
      </section>

      <section>
      </section>
    </main>

    <footer></footer>
</template>

<script >
import Resume from './components/Resume.vue';


    export default {
      methods: {
        scrollToSection(sectionId) {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        },
      },

      components: {
        Resume
      },

      mounted() {
        setTimeout(() => {
          const fadeInElements = document.querySelectorAll('.fade-in');

          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target); // Stop observing after animation
                }
              });
            },
            {
              threshold: 0.1, // Trigger when 10% of the element is visible
            }
          );

          fadeInElements.forEach((element) => {
            observer.observe(element);
          });
        }, 100); // Delay of 100ms
      },
    };

  </script>

  <style scoped>
  *{
    margin: 10px;
  }

  .home {
    height: 100vh;
    background-color: #f8f0e2;
  }

  .skills {
    height: 100vh;
    background-color: #ffffff;
  }

  .projects {
    height: 100vh;
    background-color: #f8f0e2;
  }

  .fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out; /* Reduced duration for testing */
}

.fade-in.visible {
  opacity: 1; /* Corrected opacity */
  transform: translateY(0);
}

  
  </style>
