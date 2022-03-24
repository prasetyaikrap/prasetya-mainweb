import { formatWithValidation } from "next/dist/shared/lib/utils";
import { addData } from "./api/profile";
function testAPI() {
  async function submitHandler(e) {
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(e.target).entries());
    console.log(formData);
  }

  return (
    <form id="test-form" onSubmit={submitHandler}>
      <label htmlFor="name">Nama</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="profession">Profesi</label>
      <input type="text" id="profession" name="profession" />
      <input type="file" accept="image/*" id="image" name="image" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default testAPI;
