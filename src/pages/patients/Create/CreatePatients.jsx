import "./CreatePatients.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsGenderAmbiguous } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import toast from "react-hot-toast";
import { createPatient } from "../../../Api/Contracts";
import CreateBtn from "../../../components/Button/CreateBtn";

const CreatePatients = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const address = form.address.value;
    const gender = form.gender.value;

    const patientData = {
      name,
      email,
      number,
      address,
      gender,
    };
    try {
      const data = await createPatient(patientData);
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
            </div>

            <CreateBtn title={"Create"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePatients;
