import React, { useRef, useState } from 'react'
import { MdHomeFilled } from 'react-icons/md'

const LoremIpsum = () => {

    const [paraValue, setParaValue] = useState(1);
    const [words, setWords] = useState(10);
    const [includeHTML, setIncludeHTML] = useState("no");
    const [tag, setTag] = useState('p');
    const [output, setOutput] = useState([]);
    const [isCopied, setIsCopied] = useState(false);
    const outputRef = useRef(null);

    const loremIpsumText =
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora iste non repellendus blanditiis doloremque voluptates velit eius, corrupti saepe, consequatur dolorem! Sunt ea dolores itaque quidem mollitia rem labore tenetur, nostrum cupiditate expedita amet sit ad saepe quibusdam in facere. Quae alias libero rerum laborum, vel quod debitis quisquam deleniti odit illum ex dolor provident quam blanditiis non voluptatem quia eius consectetur omnis cum veniam! Modi nulla placeat nisi. Voluptatem nobis voluptas expedita deserunt corporis id iusto perspiciatis recusandae voluptate similique, atque pariatur repudiandae? Illo, et consectetur vero, facere in officiis nostrum nobis quisquam consequatur minima, fugit optio beatae est?';

    const handleSubmit = (e) => {
        e.preventDefault();
        const newOutput = [];

        for (let i = 0; i < paraValue; i++) {
            newOutput.push(generateWords());
        }

        setOutput(newOutput);
    };

    const generateWords = () => {
        const wordArray = loremIpsumText.split(' ');
        const count = Math.min(words, wordArray.length);
        return wordArray.slice(0, count).join(' ');
    };
    const copyText = () => {
        let textToCopy;
        if (includeHTML === 'yes') {
            textToCopy = outputRef?.current?.innerHTML;
            window.navigator.clipboard.writeText(textToCopy);
        } else {
            textToCopy = output.join("\n\n");
            window.navigator.clipboard.writeText(textToCopy)
        }
        setIsCopied(true);

        setTimeout(() => setIsCopied(false), 2000);
    };


    return (
        <section className="min-h-screen w-full  bg-gray-50 text-gray-800">
            <header className="flex justify-center gap-3 p-5">
                <a href="/" aria-label="Home">
                    <MdHomeFilled size={28} className="text-indigo-600 hover:text-indigo-800 transition" />
                </a>
                <h1 className="text-2xl font-bold">Lorem Ipsum</h1>
            </header>
            <hr className='' />



            <div className="w-full flex items-center justify-center my-5">
                <div className="max-w-3xl w-[500px]">
                    <form action="" onSubmit={handleSubmit} className='m-2 shadow rounded-2xl bg-white flex flex-col space-y-5  p-5'>
                        <div className="flex flex-col gap-y-2 w-full">
                            <label htmlFor="paragraph">Paragraph</label>
                            <input type="range" onChange={(e) => setParaValue(parseInt(e.target.value))} value={paraValue} name="paragraph" id="paragraph" className='text-blue-500 appearance-auto   accent-blue-500' min={1} max={50} />
                            <p className='paragraphValue  rounded-full shadow-black-400 shadow-2xl flex items-center justify-center -mt-1.5 bg-black text-white w-8  h-8' >{paraValue}</p>
                        </div>
                        <div className="flex flex-col gap-y-2 w-full">
                            <label htmlFor="words">Words Per Paragraph</label>
                            <input type="range" onChange={(e) => setWords(parseInt(e.target.value))} value={words} name="words" id="words" className='text-blue-500 appearance-auto   accent-blue-500' min={1} max={100} />
                            <p className='wordsValue  rounded-full shadow-black-400 shadow-2xl flex items-center justify-center -mt-1.5 bg-black text-white w-8  h-8'>{words}</p>
                        </div>
                        <div className="flex flex-col gap-y-2 w-full">
                            <label htmlFor="tag">Tag</label>
                            <select name="tag" id="tag" className='border p-3 rounded-lg' onChange={(e) => setTag(e.target.value)} value={tag}>
                                <option value="">--Select--</option>
                                <option value="p">&lt;p&gt;</option>
                                <option value="span">&lt;span&gt;</option>
                                <option value="h1">&lt;h1&gt;</option>
                                <option value="h2">&lt;h2&gt;</option>
                                <option value="h3">&lt;h3&gt;</option>
                                <option value="h4">&lt;h4&gt;</option>
                                <option value="h5">&lt;h5&gt;</option>
                                <option value="h6">&lt;h6&gt;</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-y-2 w-full">
                            <label htmlFor="includeHTML">Include HTML</label>
                            <select name="tag" id="includeHTML" className='border p-3 rounded-lg' onChange={(e) => setIncludeHTML(e.target.value)} value={includeHTML}>
                                <option value="">--Select--</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>


                        <button type="submit" className='p-2.5 text-lg bg-blue-400 hover:bg-blue-500 text-white w-full rounded-lg cursor-pointer'>Generate</button>
                    </form>

                    <div className="relative output shadow bg-white   w-full p-5 m-2 rounded-2xl">
                        <div className='overflow-y-auto h-52 w-full' ref={outputRef}>
                            {output?.map((p, index) => {

                                const Tag = tag || 'p'; // fallback to <p> if tag is empty
                                return <Tag key={index} className="mb-2">{p}</Tag>;
                            })}
                        </div>
                        <button
                            type="button"
                            title="Copy text"
                            onClick={copyText}
                            className="absolute right-2 bottom-2 p-1.5 active:scale-[0.9] cursor-pointer rounded bg-amber-500 text-white"
                        >
                            {isCopied && (
                                <span className="absolute -top-8 right-0 text-xs bg-red-500 text-white rounded p-1 shadow">
                                    Copied!
                                </span>
                            )}
                            Copy
                        </button>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default LoremIpsum
