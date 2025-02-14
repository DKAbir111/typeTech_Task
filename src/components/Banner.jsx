export default function Banner() {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url('/banner_image.jpeg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            <div className="hero-content text-white text-center">
                <div className="max-w-4xl">
                    <h1 className="mb-5 text-7xl font-extrabold">Miami Real Estate
                        Specialists</h1>
                    <p className="mb-5">
                        your specialists in residential and commercial properties. From dream homes to prime business spaces, trust our unique expertise to guide you in Miami/South Florida's dynamic market.
                    </p>

                </div>
            </div>
        </div>
    );
}
