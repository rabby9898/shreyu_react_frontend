import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsGenderAmbiguous } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import toast from "react-hot-toast";
import { createVisitors } from "../../../Api/Contracts";
import CreateBtn from "../../../components/Button/CreateBtn";

const VisitorsCreate = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const address = form.address.value;
    const gender = form.gender.value;

    const visitorsData = {
      name,
      email,
      number,
      address,
      gender,
    };
    try {
      const data = await createVisitors(visitorsData);
      console.log(data);
      toast.success("Successfully Created!");
      form.reset();
    } catch (err) {
      console.log(err);
      toast.error("Created Failure!");
    }
  };
  return (
    <div>
      <div class="card">
        <div class="card-header">Patients</div>
        <div class="card-body">
          <form className="patients-form" onSubmit={handleSubmit}>
            <div class="flex-container">
              <div class="flex-item">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <FaUser />
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Client Name"
                    name="name"
                    required
                  />
                </div>
              </div>
              <div class="flex-item">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <MdEmail />
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email Address"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div class="flex-item">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <FaPhoneAlt />
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Phone Number"
                    name="number"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="flex-container">
              <div class="flex-item">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <FaLocationDot />
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Address"
                    name="address"
                    required
                  />
                </div>
              </div>
              <div class="flex-item">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <BsGenderAmbiguous />
                    </div>
                  </div>
                  <select
                    class="form-control"
                    id="inlineFormCustomSelect"
                    placeholder="Select Gender"
                    name="gender"
                    required
                  >
                    <option selected>Select Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </select>
                </div>
              </div>
              <div class="flex-item">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <SlCalender />
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Date Pick"
                    disabled
                  />
                </div>
              </div>
              <div class="flex-item">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <SlCalender />
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Visit Date"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div class="row w-500">
              <div class="col-lg-12 my-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d-77.47713270775661!3d25.0326996781907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20Bahamy!5e0!3m2!1spl!2spl!4v1624445118063!5m2!1spl!2spl"
                  class="w-100"
                  height="400"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">
                Attachment Image (optional)
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>

            <CreateBtn title={"Create"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default VisitorsCreate;
