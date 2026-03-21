const Contact = () => {
    return (
        <div id="contact" className="flex flex-col justify-center items-center py-15 scroll-mt-16">
            <div className="text-4xl font-medium mb-10">Let's Connect</div>
            <div className="text-[18px] text-gray-600 mb-1">I'm always interested in hearing about new projects and opportunities.</div>
            <div className="text-[18px] text-gray-600 mb-10">Whether you have a question or just want to say hi, feel free to reach out!</div>
            <button className="bg-black text-white px-4 py-2 rounded-xl mb-10">Email Me</button>
            <div className="flex gap-8">
                <button className="px-4 py-2 bg-gray-200 rounded-xl">Linked in</button>
                <button className="px-4 py-2 bg-gray-200 rounded-xl">Github</button>
                <button className="px-4 py-2 bg-gray-200 rounded-xl">Leetcode</button>
            </div>
        </div>
    )
}

export default Contact;