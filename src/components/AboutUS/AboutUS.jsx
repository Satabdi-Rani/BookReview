
const AboutUS = () => {
    return (
        <div className="hero min-h-screen bg-[#94d788] mt-6">
            <div className="hero-content flex-col">
                <div className="text-center pt-8">
                    <h1 className="text-5xl font-bold">About Us</h1>
                    <p className="py-6">Here you can know about us!</p>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl p-8">
                    <figure><img className="w-full h-[300px]" src="https://i.ibb.co/wLfjrPm/stack-black-notebooks.jpg" alt="Album" /></figure>
                    <div className="card-body sm:w-1/2">
                        <h2 className="card-title">About Us</h2>
                        <p>While newer journals and magazines are usually online, many older issues are still only available in paper. In addition, many of our online subscriptions explicitly include the latest material, specifically to encourage sales of print subscriptions. Older newspapers are usually transferred to microfilm.</p>
                        {/* <br /> */}
                        <p>While newer journals and magazines are usually online, many older issues are still only available in paper. In addition, many of our online subscriptions explicitly  include the latest material, specifically to encourage sales of print subscriptions. Older newspapers are usually transferred to microfilm.</p>
                        {/* <br /> */}
                        <p>While newer journals and magazines are usually online, many older issues are still only available in paper. In addition, many of our online subscriptions explicitly  include the latest material, specifically to encourage sales of print subscriptions. Older newspapers are usually transferred to microfilm.</p>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUS;