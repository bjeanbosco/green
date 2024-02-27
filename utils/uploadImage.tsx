import axios from "axios";
import exp from "constants";

async function uploadImage(file: any) {
  const url = "https://api.cloudinary.com/v1_1/djxhcwoww/image/upload";
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "dcac1vvf");
  const res = await axios.post(url, formData);
  const data = res.data;
  const secureUrl: string = data.secure_url;
  return secureUrl;
}

export default uploadImage;