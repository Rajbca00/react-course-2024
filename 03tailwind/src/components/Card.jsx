import React from 'react'

function Card({username='Rajesh', designation='Not Assigned', location='Not Assigned', img_src='https://images.pexels.com/photos/783941/pexels-photo-783941.jpeg?auto=compress&cs=tinysrgb&w=600'}) {
    return (
        <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={img_src} alt="" width="384" height="512"></img>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {username}
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            {designation + ", " + location}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default Card