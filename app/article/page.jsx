import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <div className={'glassmorphism'}>
            <div className={'space-y-3'}>
                <div className={'bg-[url("https://cdn.prod.website-files.com/622b2fcc29fc56492b771cb8/65f98c957daeda28bfcbe86d_Layer_1%20(6).png")] bg-cover glassmorphism min-h-[20vh] space-y-4 flex justify-center items-center flex-col'}>
                    <h1 className={'text-4xl font-semibold text-center bg-white text-black rounded-lg p-1 '}>How to boost your productivity in 2024 🚀🤌🏾</h1>
                    <div className={'flex justify-between gap-5 bg-black text-white rounded-lg p-1'}>
                        <span>19 August 2024</span>
                        <span>10 minutes read</span>
                    </div>
                </div>
                <div className={'glassmorphism space-y-4'}>
                    <div className={'blog-div'}>
                        <h2 className={'blog-title'}>Introduction</h2>
                        <p>
                            If you are struggling to keep your focus/productivity at a high level in this fast-paced world
                            let me tell you that you are not alone 😄. In this guide I will share with you, fellow developers
                            some tools and techniques I am trying to implement in my daily pro/private life, in order to keep everything
                            in place in my mind and body.
                        </p>
                    </div>

                    <hr/>
                    <div className={'blog-div'}>
                        <h2 className={'blog-title'}>1️⃣. Importance of sleep</h2>
                        <p>
                            Personally, I think that the key to productivity  is good sleep.
                            Let me give you some reason on why you should give more attention to your sleep :
                            <ul className={'blog-ul'}>
                                <li>a good mental health</li>
                                <li>to be in a good mood during the day</li>
                                <li>to be MORE PRODUCTIVE.</li>
                            </ul>
                            <br/>

                            Most of the developers I know are late-sleepers (me being the first 😂),
                            But these last days I educated myself a little bit more about how a good night of sleep
                            could improve your day... hm well... let's say YOUR LIFE.
                            I don't need to tell you then, that it is VITAL 🦺 if you want to crush your goals !
                        </p>
                        <br/>
                        Here are some tips to improve the quality of your sleep (you'll see more <Link href={"#resources"} className={'underline font-bold'}>HERE</Link>)
                        <ul className={'blog-ul'}>
                            <li>Go to bed and wake up at the same time daily (this is my main problem🙄)</li>
                            <li>Engage in relaxing activities before bed (for example reading a book).</li>
                            <li>Avoid screens/bright lights an hour before sleeping.(fix a time where you won't touch anything)</li>
                        </ul>

                        <br/>

                        The point is that if you find a good rythm with your sleep, you'll be will
                        more alert and ready to crush your goals all along the day.
                        I experienced it recently, I thought staying up late was a solution but in the long run it can
                        have great consequences on your health.
                    </div>

                    <hr/>


                    <div className={'blog-div'}>
                        <h2 className={'blog-title'}>2️⃣. Focus techniques</h2>

                        <ul className={'blog-ul'}>
                            <li>Pomodoro Technique - Work in 25-minute intervals with 5-minute breaks. After four
                                intervals, take a longer break. This helps maintain focus and prevent burnout.
                            </li>
                            <li>Eat the Frog - Tackle your toughest task first. It’s easier to handle smaller tasks once
                                the most challenging ones are out of the way.
                            </li>
                            <li>Deep Work - Dedicate uninterrupted blocks of time to complex tasks. Eliminate
                                distractions and focus on producing high-quality results.
                            </li>
                            <li>Time Blocking - Schedule specific time slots for tasks to avoid overcommitting and
                                ensure a balanced workflow.
                            </li>
                        </ul>
                    </div>

                    <hr/>
                    <div className={'blog-div'}>
                        <h2 className={'blog-title'}>3️⃣. Organization tools</h2>

                        <ul className={'blog-ul'}>
                            <li>Trello: Manage tasks and projects using boards, lists, and cards. Great for staying
                                organized and tracking progress.
                            </li>
                            <li>Google Calendar: Schedule work sessions, meetings, and personal tasks to maintain a
                                balanced day.
                            </li>
                        </ul>
                    </div>

                    <hr/>
                    <div className={'blog-div'}>
                        <h2 className={'blog-title'}>4️⃣. Focusing tools</h2>

                        <ul className={'blog-ul'}>
                            <li>Opal</li>
                            <li>Flow</li>
                        </ul>
                    </div>
                    <hr/>

                    <div className={'blog-div'} id={'resources'}>
                        <h2 className={'blog-title'}>5️⃣. Resources</h2>

                        <ul className={'list-inside list-disc space-y-2'}>
                            <li>Andrew Huberman</li>
                            <li>Fabien Olicard</li>
                        </ul>
                    </div>
                    <hr/>

                    <div className={'blog-div'}>
                        <h2 className={'blog-title'}>Conclusion</h2>
                        <p>
                            Productivity in 2024 is about smart work, not just hard work. Implement these techniques and
                            tools to boost your focus and manage your time effectively. Experiment with what works best
                            for you and share your discoveries with your team. Here’s to a productive year ahead!
                        </p>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Page;