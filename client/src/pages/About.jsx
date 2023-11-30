const About = () => {
  return (
    <div className="row my-5 pt-5 z-depth-1">
      <section>
        <div className="row col-sm-8 col-md-12">
          <div
            className="view overlay rounded z-depth-2 mt-3 mb-5 clo-sm-8 col-md-12 
            d-flex justify-content-center align-items-center"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "500px",
              overflow: "hidden",
              objectFit: "cover",
            }}
          >
            <img
              src="https://neuro.se/media/13372/computer-4795762_1280.jpg?center=0.57062146892655363,0.44736842105263158&mode=crop&width=830&height=440&rnd=132816084000000000"
              className="img-fluid "
              alt="Sample project image"
            />
          </div>
        </div>
        <div className="row col-sm-8 col-md-12">
          <div
            className="col-sm-8 col-md-12  d-flex flex-column justify-content-center align-items-center"
            style={{
              color: "#fff",
              textAlign: "center",
            }}
          >
            <h3 className="mt-4 mb-4">
              Welcome to DevBnB: Where Developers Feels Like Home
            </h3>
            <p
              className="mx-5"
              style={{ color: "#ebe3e385", padding: "0 9rem" }}
            >
              Are you a developer looking for a comfortable and inspiring space
              to code, collaborate, and connect with like-minded individuals?
              Look no further than DevBnb - your ultimate Airbnb for developers!
            </p>
            <p
              className="mx-5"
              style={{ color: "#ebe3e385", padding: "0 9rem" }}
            >
              Are you a developer looking for a comfortable and inspiring space
              to code, collaborate, and connect with like-minded individuals?
              Look no further than DevBnb - your ultimate Airbnb for developers!
            </p>
            <p
              className="mx-5"
              style={{ color: "#ebe3e385", padding: "0 9rem" }}
            >
              At DevBnb, we understand the unique needs of developers. Whether
              you are a seasoned pro or just starting your coding journey, our
              platform offers a curated selection of developer-friendly
              accommodation around the world.
            </p>
            <p
              className="mx-5"
              style={{ color: "#ebe3e385", padding: "0 9rem" }}
            >
              From cozy coding corners to fully-equipped tech havens, each
              listing is vetted to ensure it meets the standards of the coding
              community.
            </p>
            <h3 className="mt-4 mb-4">Why DevBnB?</h3>
            <p
              className="mx-5"
              style={{ color: "#ebe3e385", padding: "0 9rem" }}
            >
              Developer-Focused Amenities: Enjoy high-speed internet, ergonomic
              workstation, and coding-friendly environment tailored to boost
              your productivity.
            </p>
            <p
              className="mx-5"
              style={{ color: "#ebe3e385", padding: "0 9rem" }}
            >
              Community Networking: Connect with fellow developers, attend
              coding meetups, and collaborate on exciting projects, all within
              the comfort of your DevBnb space.
            </p>
            <p
              className="mx-5"
              style={{ color: "#ebe3e385", padding: "0 9rem" }}
            >
              Global Reach: Explore coding-friendly accommodations in tech hubs
              worldwide, allowing you to work and travel seamlessly.
            </p>
            <p
              className="mx-5"
              style={{ color: "#ebe3e385", padding: "0 9rem" }}
            >
              Secure and Trusted: Rest easy knowing that your stay is secure,
              with reliable hosts and verified listings designed specifically
              for developers.
            </p>
            <p
              className="mx-5"
              style={{ color: "#ebe3e385", padding: "0 9rem" }}
            >
              Make DevBnb your home away from home and elevate your coding
              experience. Book your stay today and unlock a world of
              opportunities for learning, collaboration, and innovation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
