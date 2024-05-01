import "./Settings.css";
import Sidebar from "./Sidebar/Sidebar";
const Settings = () => {
  return (
    <div>
      <div class="card">
        <div class="card-header">Settings</div>
        <div class="card-body">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Settings;
