const CreateBtn = ({ title }) => {
  return (
    <>
      <button
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "0.25rem",
          padding: "0.7rem 2rem",
          fontSize: "18px",
          fontWeight: "bold",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
          marginTop: "22px",
        }}
        className="btn btn-lg"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0px 6px 10px rgba(0, 0, 0, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0px)";
          e.currentTarget.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
        }}
        class="btn btn-lg createBtn"
        type="submit"
      >
        {title}
      </button>
    </>
  );
};

export default CreateBtn;
