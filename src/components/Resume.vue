
<template>
  <div>
    <dialog id="my_modal_4" class="modal">
      <div class="modal-box w-[1000px] max-w-5xl h-[900px]">
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button, it will close the modal -->
            <button class="btn btn-sm btn-circle btn-ghost bg-orange-600 text-white hover:text-orange-600 hover:bg-gray-50 font-bolder text-[18px] absolute right-2 top-2">✕</button>
            <div>
              <h3 class="font-bold text-[25px]">Rufaro Mandipa Obey</h3>
              <p>1528 Mainway Meadows Waterfalls Harare – 0772 631 954 – mandipaobey@gmail.com</p>
              <br>

              <h1 class="font-bold text-[35px] text-orange-600">Professional summary</h1>
              <p>I am a 24 year old male, motivated and dedicated, seeking opportunities to apply my skills and
                  knowledge in a professional setting. Thrives on working in busy and deadline driven settings.
                  Passionate about web development, networking, cloud computing, operating system
                  Cybersecurity and problem-solving. Highly motivated and detail-oriented professional with
                  excellent presentation skills, proven ability to maintain confidentiality with discretion,
                  committed to professionalism and consistently well-groomed
              </p>

              <br>
              <p class="border-b-2 border-orange-600"> </p>
              <br>

              <h1 class="font-bold text-[35px] text-orange-600">Professional experience</h1>
              <h3 class="font-bold text-[23px]">Lake Harvest Distribution 09/2022 – 06/2023</h3>
              <h4>Information Technology intern</h4>
              <br>
              <ul>
                <li>● Dealt with network and server management and cloud administrating</li>
                <li>● Collaborated with the IT team to troubleshoot hardware and software issues. Provided
                  technical support to employees and administered an ERP system.</li>
                <li>●  Conducted hardware and software installations, upgrades, and maintenance while
                  assisting with user account management.</li>
              </ul>
              <br>
              <h3 class="font-bold text-[23px]">SAT Southern Africa AIDS TRUST</h3>
              <h4>Data entry</h4>
              <br>
              <ul>
                <li>● Ensured the accurate and efficient entry of data into the organisation's systems.</li>
                <li>● Entry and maintenance of essential information related to the NGO's operations,
                  programs, beneficiaries.</li>
              </ul>

              <br>
              <p class="border-b-2 border-orange-600"> </p>
              <br>

              <h1 class="font-bold text-[35px] text-orange-600">Education</h1>
              <br>
              <h2 class="font-bold text-[22px]">CISCO Networking Academy</h2>
              <p>Certificate In Network Addressing and Basic TroubleShooting</p>
              <br>
              <h2 class="font-bold text-[22px]">Kaggle</h2>
              <p>Intro to machine learning Certification of Completion</p>
              <br>
              <h2 class="font-bold text-[22px]">Harare Institute of Technology</h2>
              <p>Bachelor of Technology (Honors) Degree in Information Technology</p>
              <p>Degree class 2.1</p>
              
              <br>
              <p class="border-b-2 border-orange-600"> </p>
              <br>

              <h1 class="font-bold text-[35px] text-orange-600">Technical skills</h1>
              <ul class="ml-[20px]">
                <li>● Windows server management</li>
                <li>● Linux operating system</li>
                <li>● System administration</li>
                <li>● Intermediate understanding or virtualized environments (virtual box)</li>
                <li>● Proficient in Vue.js for front-end web development</li>
                <li>● Linux and windows environments</li>
                <li>● Proficient in Vue.js for front-end web development</li>
                <li>● React js</li>
                <li>● Intermediate react native</li>
                <li>● Strong grasp of HTML, CSS, and JavaScript</li>
                <li>● Familiarity with front-end frameworks such as Tailwind CSS</li>
                <li>● Knowledge of version control systems (Git) and project management tools (GitHub)</li>
              </ul>

            </div>
            <br>
            <div @click="download" class="btn bg-white text-orange-600 hover:bg-orange-600 hover:text-white">Download Resume</div>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script>
import pdfFile from '../assets/resume/cv for Rufaro mandipa.pdf';

export default {
  name: 'Resume',
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   
  },
  methods: {
    download() {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = pdfFile;
      link.download = 'Rufaro_Mandipa_Resume.pdf'; // Specify the default filename
      document.body.appendChild(link);

      // Trigger the download
      link.click();

      // Clean up
      document.body.removeChild(link);
    },
   
  },
}
</script>

<style lang="scss" scoped>

</style>

