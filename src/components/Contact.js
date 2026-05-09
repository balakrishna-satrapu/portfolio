const Contact = () => {
    return (
        <div
            id="contact"
            className="flex flex-col justify-center items-center py-15 scroll-mt-16"
        >
            <div className="text-4xl font-medium mb-10">
                Let's Connect
            </div>

            <div className="text-[18px] text-gray-600 mb-1 text-center">
                I'm always interested in hearing about new projects and opportunities.
            </div>

            <div className="text-[18px] text-gray-600 mb-10 text-center">
                Whether you have a question or just want to say hi, feel free to reach out!
            </div>

            {/* Email */}
            <a
                href="mailto:balakrishnasatrapu@gmail.com"
                className="bg-black text-white px-5 py-2 rounded-xl mb-10 hover:scale-105 transition duration-200"
            >
                Email Me
            </a>

            {/* Social Links */}
            <div className="flex gap-6">
                
                <a
                    href="https://www.linkedin.com/in/balakrishna-satrapu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 transition duration-200"
                >
                    LinkedIn
                </a>

                <a
                    href="https://github.com/balakrishna-satrapu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 transition duration-200"
                >
                    GitHub
                </a>

                <a
                    href="https://leetcode.com/u/Balakrishna_Satrapu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 transition duration-200"
                >
                    LeetCode
                </a>

            </div>
        </div>
    );
};

export default Contact;