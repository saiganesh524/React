const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      {/* <p className="p-4 m-4">Feel free to reach out to us for any questions or inquiries.</p> */}
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Name"
        />
        <input
          type="email"
          className="border border-black p-2 m-2"
          placeholder="Email"
        />
        {/* <textarea className="border border-black p-2 m-2" placeholder="Message" rows="4" /> */}
        <button
          className="border border-black p-2 m-2 bg-gray-100 rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
