  export const ScrollAnimationMixin = {
    data() {
      return {
        animationElements: Array.from({ length: 5 }, () => ({
          ref: null,
          inView: false
        }))
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
      this.handleScroll(); // Call handleScroll on initial mount
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        this.animationElements.forEach(element => {
          const elementRef = element.ref;
          if (!elementRef) return;

          const elementPosition = elementRef.getBoundingClientRect();

          if (elementPosition.top < viewportHeight && elementPosition.bottom >= 0) {
            element.inView = true;
          } else {
            element.inView = false;
          }
        });
      },
    },
    watch: {
      animationElements: {
        handler(newVal) {
          newVal.forEach(element => {
            const elementRef = element.ref;
            if (!elementRef) return;

            if (element.inView) {
              elementRef.classList.remove('hidden');
              elementRef.classList.add('animate__animated');
            } else {
              elementRef.classList.add('hidden');
              elementRef.classList.remove('animate__animated');

            }
          });
        },
        deep: true
      }
    }
  };