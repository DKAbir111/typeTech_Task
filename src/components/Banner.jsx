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
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                        In deleniti eaque aut repudiandae et a id nisi.
                    </p>

                </div>
            </div>
        </div>
    );
}
