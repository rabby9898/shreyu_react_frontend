import toast from "react-hot-toast";
import { createUsers } from "../../Api/Contracts";
import { FaUser, FaUserSecret } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CreateBtn from "../../components/Button/CreateBtn";
import { RiLockPasswordFill } from "react-icons/ri";
import "./CreateUsers.css";
const CreateUsers = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const usersData = {
      name,
      email,
      password,
    };
    try {
      const data = await createUsers(usersData);
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
      <div>
        <div class="card">
          <div class="card-header">Users</div>
          <div class="card-body">
            <form className="users-form" onSubmit={handleSubmit}>
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
              </div>

              <div class="flex-container">
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
              </div>

              <div class="flex-container">
                <div class="flex-item">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <RiLockPasswordFill />
                      </div>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Password"
                      name="password"
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
                        <FaUserSecret />
                      </div>
                    </div>
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>

              <CreateBtn title={"Create"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUsers;
