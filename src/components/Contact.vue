
<template>
  <div>
    <dialog id="my_modal_6" class="modal">
      <div class="modal-box w-[1000px] max-w-5xl h-[900px]">
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button, it will close the modal -->
            <button class="btn btn-sm btn-circle btn-ghost bg-orange-600 text-white hover:text-orange-600 hover:bg-gray-50 font-bolder text-[18px] absolute right-2 top-2">✕</button>
           
            <p class="text-[60px] font-bold">Contact Us</p>

            <div class="flex  space-x-[20px]">  
              <div class=" w-[500px] space-y-[20px]">
                <input type="text" placeholder="Name" class="input w-[500px] h-[60px]" />

                <label class="input validator w-[500px] h-[60px]">
                  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                  <input type="email" placeholder="Email address" />
                </label>
                <div class="validator-hint hidden">Enter valid email address</div>

                <input type="text" placeholder="Subject" class="input w-[500px] h-[60px]" />

                <textarea class="textarea w-[500px] h-[400px]" placeholder="Email"></textarea>

                <button class="h-[50px] w-[120px] bg-orange-600 text-white font-bold hover:animate-pop">Send</button>              </div>

              <div class=" w-[400px] pl-[20px] space-y-[20px]">
                <div class="flex space-x-4">
                  <div class=" w-[40px] h-[40px] mt-[10px]"><img src="../assets/icons/call.png" alt=""></div>
                  <div class="">
                    <p class="font-bold text-[19px]">Call us</p>
                    <p>O772 631 954</p>
                  </div>
                </div>
                <div class="flex space-x-4">
                  <div class=" w-[40px] h-[40px] mt-[10px]"><img src="../assets/icons/email.png" alt="" class=""></div>
                  <div class="">
                    <p class="font-bold text-[19px]">Email</p>
                    <i class="fi fi-rr-phone-call"></i>
                    <p>mandipaobey@gmail.com</p>
                  </div>
                </div>
                <div class="flex space-x-4">
                  <div class=" w-[40px] h-[40px] mt-[10px]"><img src="../assets/icons/address.png" alt=""></div>
                  <div class="">
                    <p class="font-bold text-[19px]">Address</p>
                    <p>1528 Mainwya Meadows Waterfalls Harare</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   
  },
  methods: {
   
  },
}
</script>

<style lang="scss" scoped>


</style>

