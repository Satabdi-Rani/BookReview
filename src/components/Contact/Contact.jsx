
const Contact = () => {
    return (
        <div className="hero min-h-screen bg-[#94d788] mt-6">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Contact Us</h1>
                    <p className="py-6">Let us know if you have any queries!</p>
                </div>
                <div className="card shrink-0 w-[400px] sm:w-[500px]  shadow-2xl bg-base-200">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter your message here</span>
                            </label>
                            <textarea className="rounded pt-2 pl-2" name="textarea" id="" placeholder="Enter your message here"></textarea>
                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;