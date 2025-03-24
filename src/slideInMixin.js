// slideInMixin.js
export const slideInMixin = {
  data() {
    return {
        elements: Array.from({ length: 4 }, () => ({
          inView: false
        }))
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.elements.forEach((element, index) => {
        const elementRef = this.$refs['elementToSlideIn' + index];
        if (!elementRef) return;

        const elementPosition = elementRef.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        if (elementPosition.top < viewportHeight && elementPosition.bottom >= 0) {
          element.inView = true;
        } else {
          element.inView = false;
        }
      });
      }
    },
    watch: {
      elements: {
        handler(newVal) {
          newVal.forEach((element, index) => {
            const elementRef = this.$refs['elementToSlideIn' + index];
            if (!elementRef) return;

            if (element.inView) {
              elementRef.style.opacity = 1;
              elementRef.style.transform = 'translateX(0)';
            } else {
              elementRef.style.opacity = 0;
              elementRef.style.transform = 'translateX(-100%)';
            }
          });
        },
        deep: true
      }
    }
};