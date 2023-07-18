import { reactive } from "vue";

export const store = reactive({
  baseImage: "http://localhost:8000/",

  getImageUrl(image) {
    return image
      ? this.baseImage + "storage/" + image
      : this.baseImage + "storage/default.jpg";
  },
});
