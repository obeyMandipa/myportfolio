<template>
    
    <main>

      <section class="home">
        <header class="border-b-2 h-[80px] bg-[#ffffff]">
          <div class="flex justify-center items-center gap-28"> <!-- Center the div -->
            <p class="text-[50px] text-orange-600 font-bold mt-[-30px]">R<span class="text-black">ufaro</span> </p>
            <ul class="flex gap-8 ml-8"> <!-- Add space between list items -->
              <li class="text-[19px] h-[60px] border-b-2 hover:text-orange-600 hover:border-orange-600 cursor-pointer">Home</li>
              <li @click="scrollToSection('skills')" class="text-[19px] h-[60px] border-b-2 hover:text-orange-600 hover:border-orange-600 cursor-pointer">Skills</li>
              <li @click="scrollToSection('projects')" class="text-[19px] h-[60px] border-b-2 hover:text-orange-600 hover:border-orange-600 cursor-pointer">Projects</li>
              
              <li onclick="my_modal_4.showModal()" class="text-[19px] h-[60px] border-b-2 hover:text-orange-600 hover:border-orange-600 cursor-pointer ">Resume</li>
              <Resume />

            </ul>
          </div>
        </header>

        <div class="flex justify-center mt-[60px] ">
          <div class="w-[700px] mt-[60px]">
            <p class="absolute mt-[-50px]"><span class="text-orange-600 text-[60px] mt-[20px] pt-[-60px]">*</span>Web developer</p>
            <p class="text-[80px] font-bold ">Hello! I am Rufaro Mandipa</p>
            <p class="w-[550px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores fugit sequi iure ipsam sed temporibus! Odio magnam accusamus eos quia, facere soluta expedita laudantium dolorem, pariatur voluptates quod iste aspernatur!</p>

            <div class=" flex">
              <button onclick="my_modal_6.showModal()" class="h-[50px] w-[120px] bg-orange-600 text-white font-bold hover:animate-pop">Lets talk</button>
              <Contact/>
              <button onclick="my_modal_5.showModal()" class="h-[50px] w-[120px] bg-orange-600 text-white font-bold hover:animate-pop">View projects</button>
              <Projects/>

            </div>

            <div class="flex items-center">
              <p>Check out my socials _____</p>
              <a href="https://github.com/obeyMandipa" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/128/6424/6424084.png" alt="github" class="h-[35px] w-[35px] hover:animate-pop rounded-full"></a> 
              <a href="https://www.linkedin.com/in/rufaro-mandipa-9b4259242?" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/128/6422/6422202.png" alt="linkedIn" class="h-[37px] w-[37px] hover:animate-pop mt-[10px]"></a> 
            </div>
          </div>

          <div class="w-[700px] h-[600px] ">
          
              <!-- <img class="w-[700px] h-[600px] border-2 border-white" src="../src/assets/images/propic.png" alt=""> -->
          </div>
        </div>

      </section>

      <section id="skills" class="skills p-[20px]">
        <div class="ml-[270px] ">
          <p class=""><span class="text-orange-600  text-[60px] pt-[-60px]">*</span>Skills</p>
          <p class="text-[60px] font-bold ">What i can do for you!</p>
          <p class="w-[550px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, nihil. Quos non maiores, nostrum est molestias amet quaerat ducimus natus praesentium tempore ex dolores asperiores dolorum dicta molestiae a quod.</p>
        </div>

        <div class=" flex justify-center mt-[60px] space-x-[80px] text-white">

          <div ref="element1"  class="animate-zoom-in  w-[400px] h-[500px]  rounded-[5px] shadow-2xl bg-orange-600">
            <h1 class="text-[25px] font-bold ">UI/UX design</h1>

            <p class="mt-[40px]">
              <span class="drop-cap ">O</span>ur UI/UX design services focus on creating seamless and intuitive digital experiences that captivate users and drive engagement. 
              We combine creativity with usability to craft visually stunning interfaces that elevate your brand and enhance user satisfaction.
            </p>
            <h3 class="text-[20px] font-bold mt-[40px] ">Key features</h3>
            <ul>
              <li><span class="text-white">●</span>User-Centered Design</li>
              <li><span class="text-white">●</span>Visual Design</li>
              <li><span class="text-white">●</span>Responsive Design</li>
            </ul>
          </div>

          <div ref="element2" class="animate-fade-in-right w-[400px] h-[500px] rounded-[5px] shadow-2xl bg-orange-600">
            <h1 class="text-[25px] font-bold ">Search Engine Optimisation</h1>
            <p class="mt-[40px]">
              <span class="drop-cap ">O</span>ur SEO services are designed to improve your website's visibility in search engine results and drive organic traffic to your online platform. 
              We employ proven strategies and best practices to enhance your website's search engine ranking and boost your online presence.
            </p>
            <h3 class="mt-[40px] text-[20px] font-bold">Key features</h3>
            <ul>
              <li><span class="text-white">●</span>Keyword Research</li>
              <li><span class="text-white">●</span>On-Page Optimization</li>
              <li><span class="text-white">●</span>Technical SEO</li>
            </ul>

          </div>

          <div ref="element3" class="animate-zoom-in w-[400px] h-[500px]  rounded-[5px] shadow-2xl bg-orange-600">
            <h1 class="text-[25px] font-bold ">Web hosting and maintance</h1>
            <p class="mt-[40px]">
              <span class="drop-cap ">O</span>ur web hosting and maintenance services offer a comprehensive solution to ensure your website remains secure, up-to-date, and accessible to your audience at all times.
               We take care of the technical aspects of hosting and maintenance so you can focus on growing your online presence.
            </p>
            <h3 class="text-[25px] font-bold mt-[40px]">Key features </h3>
            <ul>
              <li><span class="text-white">●</span>Reliable Hosting</li>
              <li><span class="text-white">●</span>Secuity monitoring</li>
              <li><span class="text-white">●</span>Technical Support</li>
            </ul>

          </div>
        </div>
      </section>

      <section id="projects" class="projects p-[20px]">

        <div class="relative ml-[270px]">
          <div class=""><span class="text-orange-600  text-[60px]  pt-[-60px]">*</span>Projects</div>
          <div class="text-[60px] font-bold ">What i have done!</div>
          <p class="w-[550px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, nihil. Quos non maiores, nostrum est molestias amet quaerat ducimus natus praesentium tempore ex dolores asperiores dolorum dicta molestiae a quod.</p>
        </div>
        
        <div class="flex justify-center space-x-[80px] mt-[60px]">
          <div class="animate-zoom-in w-[400px] h-[500px] rounded-[5px] shadow-2xl "
          ref="element4"></div>
          <div class="animate-zoom-in w-[400px] h-[500px] rounded-[5px] shadow-2xl"
          ref="element5"></div>
          <div class="animate-zoom-in w-[400px] h-[500px] rounded-[5px] shadow-2xl "
          ref="element6"></div>
        </div>
      </section>

      <section>
      </section>
    </main>

    <footer></footer>
</template>

<script >
import Resume from './components/Resume.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
// import { slideInMixin } from './slideInMixin.js';
import { ScrollAnimationMixin } from './ScrollAnimationMixin.js';

    export default {

      data() {
        return {
          animationElements: [
            { ref: null, inView: false },
            { ref: null, inView: false },
            { ref: null, inView: false },
            { ref: null, inView: false },
            { ref: null, inView: false },
            { ref: null, inView: false }
            
          ]
        };
      },
      mounted() {
        this.animationElements.forEach((element, index) => {
          element.ref = this.$refs['element' + (index + 1)];
        });
      },

      mixins: [ScrollAnimationMixin],

      // mounted() {
      //   window.addEventListener('scroll', this.handleScroll);
      // },
      // destroyed() {
      //   window.removeEventListener('scroll', this.handleScroll);
      // },

      methods: {
        scrollToSection(sectionId) {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        },

        // handleScroll() {
        //   const element = this.$refs.elementToSlideIn;
        //   const elementPosition = element.getBoundingClientRect();
        //   const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
          
        //   // Check if the element is in the viewport
        //   if (elementPosition.top < viewportHeight && elementPosition.bottom >= 0) {
        //     this.inView = true;
        //   } else {
        //     this.inView = false;
        //   }
        // }
      },

    //   watch: {
    //     inView(newVal) {
    //       if (newVal) {
    //         this.$refs.elementToSlideIn.style.opacity = 1;
    //         this.$refs.elementToSlideIn.style.transform = 'translateX(0)';
    //       } else {
    //         this.$refs.elementToSlideIn.style.opacity = 0;
    //         this.$refs.elementToSlideIn.style.transform = 'translateX(-100%)';
    //       }
    //     },
    // },

    components: {
        Resume,
        Projects,
        Contact
      },

    };

  </script>

  <style scoped>
  *{
    margin: 10px;
  }

  .home {
    height: 100vh;
    background-color: #ffffff;
  }

  .skills {
    height: 100vh;
    background-color: #fffaf3;
  }

  .projects {
    height: 100vh;
    background-color: #ffffff;
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

.drop-cap {
    float: left;
    font-size: 4.5rem; /* Adjust size as needed */
    line-height: 0.8; /* Adjust line height to align properly */
    margin-right: 0.5rem; /* Space between the drop cap and the rest of the text */
    font-weight: bold; /* Optional: Make the drop cap bold */
  }

  
  </style>
